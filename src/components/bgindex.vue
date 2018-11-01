<template>
  <el-container style="height:100%" direction='vertical'>
    <el-header class="header">
      <el-row>
        <el-col :span="22">
          <div class="title">后台管理界面</div>
        </el-col>

        <el-col :span="2">
          <div class="logout_box" @click="logout()">退出</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo">

          <template v-for="item in router[0].children">
            <router-link :key="item.path" :to='item.path'>
              <el-menu-item :index="item.path">{{item.name}}</el-menu-item>
            </router-link>
          </template>

        </el-menu>

      </el-aside>
      <el-main>
        <router-view class="view"></router-view>
      </el-main>
    </el-container>
    <el-footer>页脚</el-footer>
  </el-container>
</template>
    

 

<script>
import { mapGetters } from "vuex";
export default {
  name: "bgindex",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["router"])
  },
  methods: {
    logout() {
      this.$store
        .dispatch("Logouts")
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch(err => {
          this.$message.error(err);
        });
    }
  }
};
</script>

<style scoped>
footer.el-footer {
  background: #545c64;
  color: white;
  height: auto !important;
  padding: 8px;
  font-size: 12px;
}
.header {
  padding: 0px;
  height: 45px;
}
.nav_box {
  border-bottom: 0px;
}
.logout_box,
.title {
  background-color: #545c64;
  line-height: 45px;
  width: 100%;
  color: #fff;
}
.logout_box:hover {
  background: #ff8862;
  cursor: pointer;
}
li.el-menu-item {
  border-bottom: 1px solid #e6e6e6;
}
</style>