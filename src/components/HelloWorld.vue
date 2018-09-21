<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <button @click="testApi">测试Api接口</button>
      </li>
    </ul>

    <div>
      <ueditor v-model="form.content" id="editor" ref="editor" style="width:100%"></ueditor>
      <button @click="check">获取内容</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        content: 'test'
      }
    }
  },
  methods:{
    testApi(){
      console.log("test app is active");
      const url = "/api/actuator/health";
      this.$axios.get(url)
         .then(function(response) {
              console.log(response);
          })
          .catch(function(error) {
              console.log(error);
          });
    },
    check(){
      alert(this.form.content)
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
