<template>
  <div class="login">
    <a-tabs defaultActiveKey="1" @change="handleSwitchTab" :animated="false">
      <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane tab="Tab 3" key="2">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
    <div>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a style="float: right">忘记密码</a>
    </div>
    <a-button type="primary" html-type="submit">
      Log in
    </a-button>
    <div class="other">
      <span>其他登录方式</span>
      <a-icon type="alipay-circle" class="icon" theme="outlined" />
      <a-icon type="taobao-circle" class="icon" theme="outlined" />
      <a-icon type="weibo-circle" class="icon" theme="outlined" />
      <a class='register'>注册账户</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSwitchTab () {

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
    :global {
      .ant-tabs-bar {
        margin-bottom: 24px;
        text-align: center;
        border-bottom: 0;
      }

      .ant-form-item {
        margin: 0 2px 24px;
      }
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
