<template>
  <div class="bodyBox">
    <div class="btnBox">
      <b-button class="btn" variant="light" @click="loginout">退出</b-button>
    </div>
    <div class="sectionBox">
      <div class="asideBox">
        <b-nav vertical>
          <b-nav-item>1</b-nav-item>
          <b-nav-item>2</b-nav-item>
          <b-nav-item>3</b-nav-item>
          <b-nav-item>4</b-nav-item>
        </b-nav>
      </div>
      <div class="mainBox">
        <b-breadcrumb>
          <b-breadcrumb-item :to="{ path: '/home' }">Home</b-breadcrumb-item>
          <b-breadcrumb-item active disabled>Factory</b-breadcrumb-item>
        </b-breadcrumb>
        <b-img class="img1" src="../assets/just1.jpg" @click="entFac1"></b-img>
        <b-img class="img2" src="../assets/just2.webp" @click="entFac2"></b-img>
        <b-img class="img3" src="../assets/just3.webp" @click="entFac3"></b-img>
        <b-img class="img4" src="../assets/just4.webp" @click="entFac4"></b-img>
      </div>
    </div>
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
    },
    entFac1() {
      this.$router.push('/factory1')
    },
    entFac2() {
      this.$router.push('/factory2')
    },
    entFac3() {
      this.$router.push('/factory3')
    },
    entFac4() {
      this.$router.push('/factory4')
    }
  }
}
</script>

<style lang="less" scoped>
.bodyBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.btnBox {
  order: 1;
  width: 100%;
  height: 60px;
  background-color: #036db7;
}
.btn {
  float: right;
  margin: 8px 20px 8px 0;
}
.sectionBox {
  display: flex;
  order: 2;
  width: 100%;
  height: 100%;
}
.asideBox {
  width: 200px;
  height: 100%;
  background-color: #2da4e1;
}
.mainBox {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
}
img {
  width: 30%;
  height: 30%;
}
.img1 {
  position: absolute;
  top: 10%;
  left: 10%;
}
.img2 {
  position: absolute;
  top: 10%;
  left: 60%;
}
.img3 {
  position: absolute;
  top: 60%;
  left: 10%;
}
.img4 {
  position: absolute;
  top: 60%;
  left: 60%;
}
.nav-item {
  height: 70px;
  text-align: center;
}
.nav-link {
  color: #fff;
}
.breadcrumb {
  margin: 20px 20px 15px 20px;
}
.breadcrumb-item{
  text-decoration: none;
}
</style>
