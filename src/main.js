var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-06-01&' +
          'sortBy=popularity&' +
          'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

var req = new Request(url);

const app =  new Vue ({
  el: '#vue-app',
  data: {
    name: "Tomas",
  },

  methods: {
    changeName() {
      this.name = "Nicole"
    },

    onInput(event) {
      console.log(event)
    }
  },

  mounted: function() {
    fetch('http://newsapi.org/v2/everything?')
      .then(response => response.json())
      .then(articalesResponse => {
        this.articles = articalesResponse.articles
        console.log(response);
      })
      
  },
})



// // mounted: function() {
// //   fetch('http://newsapi.org/v2/everything?')
// //     .then(response => response.json())
// //     .then(articalesResponse => {
// //       this.articles = articalesResponse.articles
// //     })
// // }
 

// var url = 'http://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2020-06-01&' +
//           'sortBy=popularity&' +
//           'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

// var req = new Request(url);

// fetch(req, {mode: "no-cors"}) 
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//       console.log(response);
//     })

// fetch("");