<template>
  <div>
    <h1>添加分类</h1>
    <input type="text" placeholder="输入分类名称" v-model="group_name">
    <input type="button" value="提交" @click="submit">
  </div>
</template>

<script>
export default {
  name: "AddGroup",
  data() {
    return {
      group_name: ''
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    submit(){
      let user = Bmob.User.current();
      //console.log(user);
      const pointer = Bmob.Pointer('_User');
      const pId = pointer.set(user.objectId);
      const query = Bmob.Query('Group');
      query.set("user",pId)
      query.set("groupName",this.group_name)
      query.save().then(res => {
        this.back();
        //console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>