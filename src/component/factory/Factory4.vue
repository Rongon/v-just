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
      <div class="main">
        <b-breadcrumb>
          <b-breadcrumb-item :to="{ path: '/home' }">Home</b-breadcrumb-item>
          <b-breadcrumb-item active disabled>Factory</b-breadcrumb-item>
        </b-breadcrumb>
        <b-card no-body>
          <b-tabs card>
            <b-tab title="Tab 1" active>
              <b-table striped hover :items="items"></b-table>
            </b-tab>
            <b-tab title="Tab 2">
              <b-table striped hover :items="items"></b-table>
            </b-tab>
            <b-tab title="Tab 3">
              <b-table striped hover :items="items"></b-table>
            </b-tab>
          </b-tabs>
        </b-card>
        <b-img src="../../assets/justBG2.jpeg"></b-img>
        <b-img src="../../assets/justBG2.jpeg"></b-img>
        <b-img src="../../assets/justBG2.jpeg"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  methods: {
    loginout() {
      this.$router.push('/login')
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
.main {
  width: 100%;
  padding: 20px;
}
.card {
  height: 345px;
}
img {
  width: 300px;
  height: 150px;
  margin: 10px 0 0 70px;
}
.nav-item {
  height: 70px;
  text-align: center;
}
.nav-link {
  color: #fff;
}
</style>
