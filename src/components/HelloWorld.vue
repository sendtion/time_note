<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到时光笔记',
      count: 0,
      time_count: 3
    }
  },
  mounted () {
    if (!this.timer){
      this.count = this.time_count;
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= this.time_count){
          this.count --;
        } else {
          clearInterval(this.timer);
          this.timer = null;
          // push 存在于history，replace没有history
          this.$router.replace({name: 'Login'});
        }
      }, 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
