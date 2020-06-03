let apiKey = "14c0ac661fc44e2a9ee0f9c0c9af7ac4";

const app = new Vue({
  el: "#vue-app",
  data: {
    apiUrl: "",
    isBusy: false,
    showloader: false,
    currentPage: 1,
    searchWord: "",
    maxPerPage: 20,
    articles: [],
  },

  methods: {
    // onInput(event) {
    //   console.log(event.target);
    // },

    // toRequest() {
    //   this.resetData();
    //   this.fetchData();
    // },

    resetData() {
      this.currentPage = 1;
      this.articles = [];
    },

    fetchSearchNews() {
      if (this.searchWord !== "") {
        this.apiUrl =
          "http://newsapi.org/v2/everything?q=" +
          this.searchWord +
          "&pageSize=" +
          this.maxPerPage +
          "&apiKey=" +
          apiKey;
        this.isBusy = true;

        this.resetData();
        this.fetchData();
      } else {
        this.fetchTopNews();
      }
    },

    fetchTopNews() {
      this.apiUrl =
        "http://newsapi.org/v2/top-headlines?" +
        "&pageSize=" +
        this.maxPerPage +
        "&apiKey=" +
        apiKey;
      this.isBusy = true;
      this.searchWord = "";

      this.resetData();
      this.fetchData();
    },

    fetchData() {
      let req = new Request(this.apiUrl + "&page=" + this.currentPage);
      fetch(req)
        .then((response) => response.json())
        .then((articlesResponse) => {
          this.articles = articlesResponse.articles;
          //   });
    
          // this.totalResults = articlesResponse.totalResults;
          // articlesResponse.articles.forEach((element) => {
          //   this.articles.push(element);
          // });
          this.isBusy = false;
          this.showloader = false;
        })
        .catch((error) => {
          console.log(error);
        });

      // let req = new Request(url);

      // fetch(url)
      //   .then((response) => response.json())
      //   .then((articlesResponse) => {
      //     this.articles = articlesResponse.articles;
      //   })

      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },

  c() {
    this.fetchtTopNews();
  },
  // computed:{
  // filteredArticles: function() {
  //   return this.articles.filter((article) => {
  //     return article == this.searchValue;
  // let lowerArticle = article.toLowerCase();
  // let lowerSearchValue = this.searchValue.toLowerCase();
  // return lowerArticle.includes(lowerSearchValue);
  //   });
  //
});
