<template>
  <div class="container">
    <div class="lang">
      <Lang />
    </div>
    <div class="content">
      <div class="top">
        <div class="header">
          <a href="/">
            <img alt="logo" class="logo" src="~asset/logo.png" />
            <span class="title">Ant Design</span>
          </a>
        </div>
        <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import Lang from 'component/lang/index'
import LoginForm from './login-form'
export default {
  components: {
    Lang,
    LoginForm
  }
}
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: @layout-body-background;
  }

  .lang {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    padding: 0 24px;
  }

  .content {
    flex: 1;
    padding: 32px 0;
  }

  @media (min-width: @screen-md-min) {
    .container {
      background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
      background-repeat: no-repeat;
      background-position: center 110px;
      background-size: 100%;
    }

    .content {
      padding: 32px 0 24px;
    }
  }

  .top {
    text-align: center;
  }

  .header {
    height: 44px;
    line-height: 44px;
    a {
      text-decoration: none;
    }
  }

  .logo {
    height: 44px;
    margin-right: 16px;
    vertical-align: top;
  }

  .title {
    position: relative;
    top: 2px;
    color: @heading-color;
    font-weight: 600;
    font-size: 33px;
    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }

  .desc {
    margin-top: 12px;
    margin-bottom: 40px;
    color: @text-color-secondary;
    font-size: @font-size-base;
  }
</style>
