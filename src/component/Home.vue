<template>
  <div>
    <div class="horiNav">
      <b-button class="loginOut" variant="warning" @click="loginout">退出</b-button>
    </div>
    <b-nav vertical>
      <b-nav-item>1</b-nav-item>
      <b-nav-item>2</b-nav-item>
      <b-nav-item>3</b-nav-item>
      <b-nav-item>4</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    loginout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.horiNav {
  background-color: skyblue;
  width: 100vw;
  height: 60px;
}
.loginOut {
  float: right;
  margin: 10px;
}

</style>
