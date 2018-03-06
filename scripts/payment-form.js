(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment=\"form\"]";
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    console.log("from payment-form.js: " + data);
  });
  console.log(formHandler);
})(window);
