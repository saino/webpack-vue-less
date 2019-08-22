import Vue from 'vue';
import mianXpp from './app';
var app = new Vue({
  el: '#vue-app',
  data: {
    message: 'Hello Vue!'
  },
  components: {
    mianXpp
  }
})
console.log(process.env.NODE_ENV,"kkkkkkkkkxx",process);
export default app;