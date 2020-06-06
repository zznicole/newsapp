let apiKey = '14c0ac661fc44e2a9ee0f9c0c9af7ac4';

const app = new Vue({
  el: "#vue-app",
  data: {
    apiUrl: '',
    currentPage: 1,
    searchWord: '',
    maxPerPage: 20,
    articles: [],
    categories: [],
    languages: [],
    countries: [],
    worldNews: [],
    techNews: [],
    scienceNews: [],
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
//dropdown selected news

//tech news

    fetchTechNews() {
      this.apiUrl =
        "http://newsapi.org/v2/everything?q=" +
        "technology" +
        "&apiKey=" +
        apiKey;
      this.techNews = '';

      this.resetData();
      this.fetchData();
      console.log(this.techNews);
    },
  
    
//top news
    fetchTopNews() {
      this.apiUrl =
        "http://newsapi.org/v2/top-headlines?" +
        "&pageSize=" +
        this.maxPerPage +
        "&apiKey=" +
        apiKey;
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
          console.log(error);
        });
    },

    fetchLanugage(){
      this.language = articlesResponse.languages;
    }
  },

  mounted() {
    this.fetchtTopNews();
  },


});
