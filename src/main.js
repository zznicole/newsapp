

const app =  new Vue ({
  el: '#vue-app',
  data: {
    articles: []
  },

  methods: {
    changeName() {
      this.name = "Nicole"
    },

    onInput(event) {
      console.log(event.target.value);
      this.name = event.target.value;
    },

    showInfo(articles) {
      console.log(articles);
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
    .then(articlesResponse => {
      this.articles = articlesResponse.articles;
    })

console.log(fetch(""));
      
  }
})


 

