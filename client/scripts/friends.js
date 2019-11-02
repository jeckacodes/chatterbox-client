var Friends = {
  status: false,
  friendList: [],

  addFriend: function(username) {
    friendList.push(username);
  },

  toggleStatus: function() { // to pass Mocha test
    console.log('toggle');
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  }

};