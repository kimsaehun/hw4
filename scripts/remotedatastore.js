(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    var order;
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
      order = serverResponse;
    });
    console.log(order);
    return order;
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    this.getAll((function(serverResponse) {
      var id;
      serverResponse.forEach(function(item) {
        if (item.emailAddress == key) {
          id = item.id;
        }
      });
      $.ajax(this.serverUrl + "/" + id, {
        type: "DELETE"
      });
    }).bind(this));
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
