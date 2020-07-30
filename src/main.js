const apiKey = '14c0ac661fc44e2a9ee0f9c0c9af7ac4';

const app = new Vue({
  el: "#vue-app",
  data: {
    apiUrl: '',
    currentPage: 1,
    searchWord: '',
    maxPerPage: 20,
    category: ['gen', 'technology', 'science', 'fashion', 'business', 'politics'],
    languages: [],
    countries: [],
    articles: [],
    worldNews: [],
    scienceNews: [],
    techNews: [],
  },

  methods: {
    onInput(event) {
      console.log(event.target);
    },

    resetData() {
      this.currentPage = 1;
      this.articles = [];
    },

//input search
    fetchSearchNews() {
      if (this.searchWord !== '') {
        this.apiUrl =
          "http://newsapi.org/v2/everything?q=" +
          this.searchWord +
          "&pageSize=" +
          this.maxPerPage +
          "&apiKey=" +
          apiKey;

        this.resetData();
        this.fetchData();
      } else {
        this.fetchTopNews();
      }
    },

//tech news

    // fetchTechNews() {
    //   this.apiUrl =
    //     "http://newsapi.org/v2/everything?q=" +
    //     "technology" +
    //     "&apiKey=" +
    //     apiKey;
    //   this.techNews = '';

    //   this.resetData();
    //   this.fetchData();
    //   console.log(this.techNews);
    // },const NewsAPI = require('newsapi');

    fetchTechNews() {
      
        this.apiUrl =
        "http://newsapi.org/v2/sources?" +
        "category=technology" +
        "&pageSize=" +
        this.maxPerPage +
        "&apiKey=" +
        apiKey;

      this.resetData();
      this.fetchData();
      alert(fetchTechNews());
    },
    
//top news
    fetchTopNews() {
      alert("click ok for TOP News or Type keywords to read what you'd like to read.");
      //sources, q, language, country, category
      this.apiUrl =
        "http://newsapi.org/v2/top-headlines?" +
        "language=en" +
        "&pageSize=" + this.maxPerPage +
        "&apiKey=" + apiKey;
      this.searchWord = '';

      this.resetData();
      this.fetchData();
    },

    fetchData() {
      let req = new Request(this.apiUrl + "&page=" + this.currentPage);
      fetch(req)
        .then((response) => response.json())
        .then((articlesResponse) => {
          this.articles = articlesResponse.articles;
        })
        .catch((error) => {
          // console.log(error);
        })
    },

    fetchLanugage(){
        let reqLang = new Request(this.apiUrl + "&page=" + this.currentPage);
        fetch(reqLang)
          .then((response) => response.json())
          .then((articlesResponse) => {
            this.languages = articlesResponse.language;
          })
          .catch((error) => {
            console.log(error);
          })
    },
  // },
  // mounted() {
  //   this.fetchtTopNews();
  }
});
