<template>
  <div class="login">
    <a-form
    :key="$store.state.lang"
      :form="form"
      @submit="handleSubmit"
    >
      <a-tabs
        v-model="loginType"
        :animated="false"
      >
        <a-tab-pane key="account" :tab="$t('user-login.login.tab-login-credentials')">
          <a-alert v-if="isShowLoginError" type="error" showIcon style="margin-bottom: 24px;" :message="$t('user-login.login.message-invalid-credentials')" />
          <a-form-item>
            <a-input
              size="large"
              type="text"
              :placeholder="`${$t('user-login.login.userName')}: admin or user`"
              v-decorator="decorator.username"
            >
              <a-icon slot="prefix" type="user" class="prefixIcon"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="password"
              autocomplete="false"
              :placeholder="`${$t('user-login.login.password')}: ant.design`"
              v-decorator="decorator.password"
            >
              <a-icon slot="prefix" type="lock" class="prefixIcon"/>
            </a-input>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane key="mobile" :tab="$t('user-login.login.tab-login-mobile')">
          <a-form-item>
            <a-input size="large" type="text" :placeholder="$t('user-login.phone-number.placeholder')"
                     v-decorator="decorator.mobile">
              <a-icon slot="prefix" type="mobile" class="prefixIcon"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-row :gutter="8">
              <a-col :span="16">
                  <a-input size="large" type="text" :placeholder="$t('user-login.verification-code.placeholder')" v-decorator="decorator.captcha">
                    <a-icon slot="prefix" type="mail" class="prefixIcon"/>
                  </a-input>
              </a-col>
              <a-col :span="8">
                <a-button
                  size="large"
                  class="getCaptcha"
                >{{ $t('user-login.register.get-verification-code') }}</a-button>
              </a-col>
            </a-row>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
      <div>
        <a-checkbox
          :checked="autoLogin"
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        >{{ $t('user-login.login.remember-me') }}</a-checkbox>
        <a style="float: right">{{ $t('user-login.login.forgot-password') }}</a>
      </div>

      <a-form-item>
        <a-button class="submit" size="large" type="primary" html-type="submit">
          {{ $t('user-login.login.login') }}
        </a-button>
      </a-form-item>
      <div class="other">
        <span>{{ $t('user-login.login.sign-in-with') }}</span>
        <a-icon type="alipay-circle" class="icon" theme="outlined" />
        <a-icon type="taobao-circle" class="icon" theme="outlined" />
        <a-icon type="weibo-circle" class="icon" theme="outlined" />
        <a class='register'>{{ $t('user-login.login.signup') }}</a>
      </div>
    </a-form>
  </div>
</template>

<script>
import bus, { BUS_EVENTS } from 'lib/bus'

export default {
  data () {
    return {
      form: this.$form.createForm(this),
      loginType: 'account',
      autoLogin: true
    }
  },
  computed: {
    isShowLoginError () {
      return false
    },
    decorator () {
      return {
        username: [
          'username',
          { rules: [{ required: true, message: this.$t('user-login.userName.required') }] }
        ],
        password: [
          'password',
          { rules: [{ required: true, message: this.$t('user-login.password.required') }] }
        ],
        mobile: ['mobile', {
          rules: [
            {
              required: true,
              message: this.$t('user-login.phone-number.required')
            },
            {
              pattern: /^1\d{10}$/,
              message: this.$t('user-login.phone-number.wrong-format')
            }
          ]
        }],
        captcha: ['captcha', {
          rules: [
            { required: true, message: this.$t('user-login.verification-code.required') }
          ]
        }]
      }
    }
  },
  mounted () {
    bus.$on(BUS_EVENTS.CHANGE_LANG, () => {
      this.$forceUpdate()
    })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields(err => {
        if (!err) {
          console.info('success')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .login {
    width: 368px;
    margin: 0 auto;
    @media screen and (max-width: @screen-sm) {
      width: 95%;
    }
    ::v-deep .ant-tabs-bar {
      margin-bottom: 24px;
      text-align: center;
      border-bottom: 0;
    }

    ::v-deep .ant-form-item {
      margin: 0 2px 24px;
    }

    .getCaptcha {
      display: block;
      width: 100%;
    }

    .icon {
      margin-left: 16px;
      color: rgba(0, 0, 0, 0.2);
      font-size: 24px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @primary-color;
      }
    }

    .other {
      margin-top: 24px;
      line-height: 22px;
      text-align: left;

      .register {
        float: right;
      }
    }

    .prefixIcon {
      color: @disabled-color;
      font-size: @font-size-base;
    }

    .submit {
      width: 100%;
      margin-top: 24px;
    }
  }
</style>
