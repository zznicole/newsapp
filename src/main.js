

const app =  new Vue ({
  el: '#vue-app',
  data: {
    searchValue: 'apple',
    articles: []
  },

  methods: {

    filteredArticles() {
      return this.articles.filter((article) => {
        return article == this.searchValue;
      });
    }
  },

  mounted: function() {
    
    var url = 'http://newsapi.org/v2/everything?' +
          'q='+this.searchValue+'&' +
          'from=2020-06-01&' +
          'sortBy=relevancy&' +
          'apiKey=14c0ac661fc44e2a9ee0f9c0c9af7ac4';

    var req = new Request(url);

    fetch(req) 
    .then(response => response.json())
    .then(articlesResponse => {
      this.articles = articlesResponse.articles;
    })
      
  },

  // computed:{
    // filteredArticles: function() {
    //   return this.articles.filter((article) => {
    //     return article == this.searchValue;
        // let lowerArticle = article.toLowerCase();
        // let lowerSearchValue = this.searchValue.toLowerCase();
        // return lowerArticle.includes(lowerSearchValue);
    //   });
    // }
  // }

  watch: {
    searchValue() {
      this.filteredArticles();
    }
  }
})


 

