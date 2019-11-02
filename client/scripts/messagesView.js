var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // render the messages that we received elsewhere
    // but don't
  },

  render: function(data) {
    // debugger;
    // input: message object (with body, username, etc) from messageView template
    // output: render the screen, adding the message to the screen
    // use MessageView.render for individual messages
    data.results.forEach(function(message) {
      if (message.username && message.text) {
        this.$chats.append(MessageView.render(message));
      }
    }.bind(MessagesView));
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }


};