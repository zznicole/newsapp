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
    category: "",
    language: "",

  },

  methods: {
    onInput(event) {
      console.log(event.target);
    },

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
      
          this.isBusy = false;
          this.showloader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  Mounted() {
    this.fetchtTopNews();
  },

});
