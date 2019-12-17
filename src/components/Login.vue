<template>
  <el-container>
    <el-main>
      <div class="login">
        <p><input type="text" placeholder="输入用户名" v-model="username" /></p>
        <p><input type="text" placeholder="输入密码" v-model="password" /></p>
        <p><input type="button" value="登录" @click="login" /></p>
        <p><input type="button" value="退出登录" @click="logout" /></p>
      </div>
      <el-input v-model="username" placeholder="输入用户名" clearable maxlength="10" show-word-limit></el-input>
      <div style="margin: 20px 0;"></div>
      <el-input v-model="password" placeholder="输入密码" clearable show-password></el-input>
      <div style="margin: 20px 0;"></div>
      <el-button type="primary" round @click="login">登录</el-button>
      <el-button type="success" round @click="logout">退出登录</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    login() {
      console.log("登录了")
      if(this.username != '' && this.password != ''){
        Bmob.User.login(this.username,this.password).then(res => {
          alert('登录成功：', res.username, res.sex)
          console.log(res, res.objectId)
          // 和push的区别，push有记录一个history，replace没有
          // this.$router.push({name: "/detail", params: {id: e}})
          // this.$router.push({path: "/detail", query: {id: e}})
          // id = this.$route.query.id
          this.$router.replace({name: 'NoteList', params: {id: res.objectId}})
          //参数获取，params和query区别，query参数在地址栏显示，params的参数不在地址栏显示
          //id = this.$route.params.id
        }).catch(err => {
          console.log(err)
        });
      } else {
        alert('请输入用户名或者密码')
      }
    },
    logout(){
      Bmob.User.logout()
      console.log("退出登录")
    }
  }
}
</script>

<style>
  
</style>