new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0
  },
  watch: {
    km() {
      this.m = this.km ? this.km * 1000 : 0;
    },
    m() {
      this.km = this.m ? this.m / 1000 : 0;
    }
  }
});
