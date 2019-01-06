new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Hassan Djirdeh',
    city: 'Toronto',
    cityImage: 'https://bit.ly/2SKJPqJ'
  },
  methods: {
    changeCity() {
      if (this.city === 'Toronto') {
        this.city = 'Lagos';
        this.cityImage = 'https://bit.ly/2Rd4gQ3';
      } else {
      	this.city = 'Toronto';
        this.cityImage = 'https://bit.ly/2SKJPqJ';
      }
    }
  }
});
