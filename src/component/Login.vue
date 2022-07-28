<template>
  <div id="login">
    <b-img src="../assets/justBG.webp" id="img1"></b-img>
    <b-img src="../assets/justXH.png" id="img2"></b-img>
    <b-form id="loginBox" class="col-lg-4">
      <b-form-group id="fieldset-1" label="Enter email:" :invalid-feedback="usernameInvalidFeedback">
        <b-form-input id="input-1" v-model="loginForm.username" :state="usernameState" trim></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-2" label="Enter password:" :invalid-feedback="passwordInvalidFeedback">
        <b-form-input id="input-2" v-model="loginForm.password" :state="passwordState" trim></b-form-input>
      </b-form-group>
      <b-form-group id="fieldset-btn">
        <b-button id="btn1" pill size="sm" type="submit" variant="outline-primary" @click="onSubmit">登录</b-button>
        <b-button id="btn2" pill size="sm" type="reset" variant="outline-secondary">注册</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.usernameState === true && this.passwordState === true) {
        this.$router.push('/home')
      }
    }
  },
  computed: {
    usernameState() {
      return this.loginForm.username.length >= 3 && this.loginForm.username.length <= 10
    },
    passwordState() {
      return this.loginForm.password.length >= 6 && this.loginForm.password.length <= 15
    },
    usernameInvalidFeedback() {
      if (this.loginForm.username.length === 0) {
        return '请输入用户名'
      } else if (this.loginForm.username.length < 3 || this.loginForm.username.length > 10) {
        return '长度在 3 到 10 个字符'
      } else {
        return ''
      }
    },
    passwordInvalidFeedback() {
      if (this.loginForm.password.length === 0) {
        return '请输入密码'
      } else if (this.loginForm.password.length < 6 || this.loginForm.password.length > 15) {
        return '长度在 6 到 15 个字符'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  position: relative;
}
#img1 {
  width: 100%;
  height: 100%;
}
#img2 {
  position: absolute;
  left: 50%;
  width: 150px;
  height: 150px;
  transform: translate(-75px, 120px);
  border-radius: 50%;
  border: 1px solid gray;
  box-shadow: 0 0 30px #ddd;
  z-index: 2;
}
#login {
  width: 100vw;
  height: 100vh;
  position: relative;
}
#loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-237px, -111px);
  padding: 60px 30px 30px 30px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 1;
}
#fieldset-btn {
  margin-top: 10px;
  padding-left: 300px;
}
#btn1,
#btn2 {
  margin-right: 10px;
}
</style>
