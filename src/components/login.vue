<template>
  <div class="login_box">
     <el-form label-position="right" label-width="60px" :model="loginfrom">
      <el-form-item label="用户名">
        <el-input v-model="loginfrom.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  v-model="loginfrom.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(loginfrom)">登录</el-button>
      </el-form-item>
    </el-form>  

      
  </div>
  
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     loginfrom:{
      username:'',
      password:'123456'
     }
    }
  },
  methods:{
     login(data){
        
          this.$router.push({ path: '/bg' });
       
     }
  }
}
</script>

<style scoped>
.login_box{
    width: 280px;
    position: fixed;
    left: 39%;
    top: 200px;
    border: 1px solid skyblue;
    border-radius: 15px;
    padding: 38px 60px 5px 25px;
    text-align: center;
}
</style>
