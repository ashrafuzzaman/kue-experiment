var kue = require('kue');
var express = require('express');
var ui = require('kue-ui');
var app = express();

var q = kue.createQueue({
  prefix: 'q',
  redis: {
    port: 6379,
    host: 'redis',
    db: 3, // if provided select a non-default redis db
    options: {
      // see https://github.com/mranney/node_redis#rediscreateclient
    }
  }
});

ui.setup({
    apiURL: '/api', // IMPORTANT: specify the api url 
    baseURL: '/kue', // IMPORTANT: specify the base url 
    updateInterval: 5000 // Optional: Fetches new data every 5000 ms 
});

// Mount kue JSON api 
app.use('/api', kue.app);
// Mount UI 
app.use('/kue', ui.app);

app.listen(3000);
