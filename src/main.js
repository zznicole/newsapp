// var url = 'http://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2020-06-01&' +
//           'sortBy=popularity&' +
//           'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

// var req = new Request(url);

const app =  new Vue ({
  el: '#vue-app',
  data: {
    name: "Tomas",
    articles:  [
      {
        title: 'tech',
        date: '31.05.2020',
        author: 'andrew patton'
      },
      {
        title: 'world',
        date: '20.05.2020',
        author: 'andrew patton'
      },
      {
        title: 'weather',
        date: '28.04.2020',
        author: 'andrew patton'
      }

    ]
  },

  methods: {
    changeName() {
      this.name = "Nicole"
    },

    onInput(event) {
      console.log(event.target.value);
      this.name = event.target.value;
    },

    showInfo(name) {
      console.log(name);
    }
  },

  mounted: function() {
    var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-06-01&' +
          'sortBy=popularity&' +
          'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

    var req = new Request(url);

    fetch(req) 
      .then(response => response.json())
      .then(json => console.log(json))
    

fetch("");
    // var url = 'http://newsapi.org/v2/everything?' +
    //       'q=Apple&' +
    //       'from=2020-06-01&' +
    //       'sortBy=popularity&' +
    //       'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

    // var req = new Request(url);
    // fetch(req)
    //   .then(response => response.json())
    //   .then(json => console.log(json))
//       .then(articlesResponse => {
//         this.articles = articlesResponse.articles
//         console.log(response);
//       })
      
  },
})


 

// var url = 'http://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2020-06-01&' +
//           'sortBy=popularity&' +
//           'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

// var req = new Request(url);

// fetch(req) 
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//       console.log(response);
//     })

// fetch("");


// mounted: function() {
//   fetch('the api url')
//       .then(response => response.json())
//       .then(articlesResponse => {
//           this.articles = articlesResponse.articles
//       })