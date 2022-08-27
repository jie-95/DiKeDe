<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <img src="../../assets/imgs/logo.png" alt="">
      </div>

      <el-form-item prop="loginName">
        <span class="svg-container">
          <i class="el-icon-mobile-phone" />
        </span>
        <el-input
          v-model="loginForm.loginName"
          placeholder="Username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="Password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="code">
        <span class="keyImg">
          <span class="svg-container">
            <i class="el-icon-picture-outline" />
          </span>
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            tabindex="2"
            auto-complete="on"
          />
          <img
            :src="`/api/user-service/user/imageCode/${loginForm.clientToken}`"
            alt=""
            @click="loginForm.clientToken = Math.random()"
          >
        </span>
      </el-form-item>
      <!-- 验证码 -->

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
      >登录</el-button>

      <div class="tips">
        <span style="margin-right: 20px">username: admin</span>
        <span> password: any</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { getCode } from '@/api/user'
export default {
  name: 'Login',
  data() {
    // const validateUsername = (rules, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rules, value, callback) => {
    //   if (value.length < 5) {
    //     callback(new Error('The password can not be less than 5 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: Math.random(),
        loginType: 0
      },
      loginRules: {
        loginName: [
          { required: true, trigger: 'blur', message: '用户名格式错误' },
          { min: 5, max: 16, trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '密码格式错误' }
        ],
        code: [
          { required: true, trigger: 'blur', message: '验证码格式错误' },
          { min: 4, max: 4, trigger: 'blur' }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      codeImgUrl: ''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted() {
    // this.getCodes()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async handleLogin() {
      try {
        await this.$refs.loginForm.validate()
        await this.$store.dispatch('user/login', this.loginForm)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
      // this.loading = true
      // console.log(this.$store.dispatch('user/login', this.loginForm))
      // this.$store.dispatch('user/login', this.loginForm)
      //   .then(() => {
      //     console.log(132132)
      //     this.$router.push({ path: this.redirect || '/' })
      //     this.loading = false
      //   })
      //   .catch(() => {
      //     this.loading = false
      //   })
    },
    async getCodes() {
      const res = await getCode(this.clientToken)
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $cursor;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #fff;
    border-radius: 5px;
    color: #454545;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background: url('../../assets/imgs/background-login.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    width: 520px;
    max-width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 76px 35px 0;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
  }
  // 验证码
  .keyImg {
    display: flex;
  }
  // 验证码

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    img {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -120px;
      left: 50%;
      margin-left: -48px;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
