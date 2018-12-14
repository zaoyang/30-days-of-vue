new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
    user: 'Hassan Djirdeh',
    city: 'Toronto',
    cityImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tdot.jpg'
  },
  methods: {
    changeCity() {
      if (this.city === 'Toronto') {
        this.city = 'Lagos';
        this.cityImage
          = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/lagos.jpg';
      } else {
      	this.city = 'Toronto';
        this.cityImage
          = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tdot.jpg';
      }
    }
  }
});
