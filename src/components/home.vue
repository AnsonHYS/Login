<template>
   
        <el-container  style="height: 900px;">
        <el-header>
            <div class="header">
                <div class="menubar">
                    <div class="leftD">
                        <span class="logo">花瓣</span>
                        <span class="nav">首頁</span>
                        <span class="nav">發現</span>
                         
                    </div>
                    <div class="rightD">
                        <span class="btn on" @click="toLogin">登錄</span>
                        <span class="btn">注冊</span>
                    </div>
                </div>
                <div class="banner"></div>
            </div>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>
            <div class="footer">
                <p>© Anson Huang &nbsp;&nbsp;<span class="divider">|</span>&nbsp;&nbsp;粤公网安备 33010602001878号</p>
             </div>
        </el-footer>
        </el-container>
    
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
      toLogin(){
           this.$router.push('/login');
      }
  }
};
</script>
<style>
.banner {
    background: url(../assets/banner.jpg) no-repeat center 90%;
    background-size: 100% auto;
    display: block;
    height: 350px;
}

.logo {
  background: url(../assets/logo.png)  no-repeat 26px 1px;
    background-size: 54% auto;
    width: 100px;
    height: 55px;
    display: inline-block;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.menubar {
    position: fixed;
    width: 100%;
    background: #25252575;
}
.leftD {
    display: inline-block;
    float: left;
    padding: 0;
}
.rightD{
    display: inline-block;
    float: right;
    padding: 0;
}
.nav {
    display: inline-block;
    width: 100px;
    font-size: 20px;
    color: white;
    line-height: 50px;
    box-sizing: border-box;
    height: 55px;
}
 header.el-header {
    margin: 0;
    padding: 0;
}
.btn {
    border: 1px solid white;
    padding: 5px;
    color: white;
    border-radius: 3px;
    margin: 10px 5px;
    display: inline-block;
    width: 80px;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
}
.on {
    background: #f77f7f;
    border: 1px solid #d77d7d;
}
footer.el-footer {
    background: #777777;
    color: white;
}
</style>
