var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  handleClick: function (event) {
    // when you click on the username
    // the username is added to the friend list
    var username = event.target.innerHTML;
    if (!Friends.friendList.includes(username)) {
      Friends.friendList.push(username);
    }
    Friends.toggleStatus();
    console.log(Friends.friendList);
    // all usernames on the friend list alter their CSS
  },

  render: function (data) {
    // debugger;
    // input: message object (with body, username, etc) from messageView template
    // output: render the screen, adding the message to the screen
    // use MessageView.render for individual messages
    $('.chat').remove(); // remove old chats to prevent duplicates
    data.results.forEach(function (message) {
      if (message.username && message.text && message.roomname) {
        console.log(MessageView.render(message));
        this.$chats.append(MessageView.render(message));
      }
    }.bind(MessagesView));

    $('.username').css({ 'color': 'orange', 'text-decoration': 'underline' });

    $('.username').click(this.handleClick);
  },

  renderMessage: function (message) {
    this.$chats.append(MessageView.render(message));
    $('.username').click(this.handleClick);

  }


};