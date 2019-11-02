var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //Parse.create
    var text = new Messages(App.username, $('#message').val(), 'roomname');
    console.log('click!');
    Parse.create(text); // sends message to server for storage and so other users can see it
    console.log(text);
    // App.startSpinner();
    // App.fetch(App.stopSpinner);
    App.initialize();


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};