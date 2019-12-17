<template>
  <div class="note-list">
    <el-container>
      <el-main>
        <h2>时光笔记</h2>
        <div style="margin: 50px 0;"></div>
        <el-input v-model="username" placeholder="输入用户名" clearable maxlength="10" show-word-limit></el-input>
        <div style="margin: 30px 0;"></div>
        <el-input v-model="password" placeholder="输入密码" clearable show-password></el-input>
        <div style="margin: 50px 0;"></div>
        <el-button type="primary" round @click="login">登录</el-button>
        <el-button type="success" round @click="logout">退出登录</el-button>
      </el-main>
      <!-- 对话框提示 -->
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" center="true" show-close="false">
        <span>请输入用户名或者密码</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username:'',
      password:'',
      dialogVisible: false
    }
  },
  methods: {
    login() {
      if(this.username != '' && this.password != ''){
        Bmob.User.login(this.username,this.password).then(res => {
          //alert('登录成功：', res.username, res.sex)
          console.log(res, res.objectId)
          // 和push的区别，push有记录一个history，replace没有
          // this.$router.push({name: "/detail", params: {id: e}})
          // this.$router.push({path: "/detail", query: {id: e}})
          // 参数获取，params和query区别，query参数在地址栏显示，params的参数不在地址栏显示
          // id = this.$route.params.id
          // id = this.$route.query.id
          this.$router.replace({path: '/note_list'})
        }).catch(err => {
          console.log(err)
        });
      } else {
        //alert('请输入用户名或者密码')
        this.dialogVisible = true;
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
  .el-input {
    width: 30%;
  }
</style>