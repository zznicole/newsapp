const app =  new Vue ({
  el: '#vue-app',
});

var url = 'http://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2020-05-30&' +
          'sortBy=popularity&' +
          'apiKey= 14c0ac661fc44e2a9ee0f9c0c9af7ac4';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

fetch();

    // newsapi.v2.everything({
    //   q: 'bitcoin',
    //   sources: 'bbc-news,the-verge',
    //   domains: 'bbc.co.uk, techcrunch.com',
    //   from: '2017-12-01',
    //   to: '2017-12-12',
    //   language: 'en',
    //   sortBy: 'relevancy',
    //   page: 2
    // }).then(response => {
    //   console.log(response);