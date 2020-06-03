

const app =  new Vue ({
  el: '#vue-app',
  data: {
    searchWord: "hello",
    articles: [],
    link: 'https//www.#',
  },

  methods: {
    filteredArticles() {
      console.log(hello);
      return this.articles.filter((article) => {
        return article == this.searchWord;
        
      });
    },

    onInput(event) {
      console.log(event.target);
    },

    // updateInfo(searchWord) {
    //   (console.log(searchWord));
    // }
  },

  mounted: function() {
     var url = 'http://newsapi.org/v2/everything?' +
          'q='+this.searchWord+'&' +
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
    searchWord() {
      this.filteredArticles();
    }
  }
})


 

