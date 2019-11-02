var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomname) {
    // input: string
    // output: append HTML
    this.$select.append('<option>${roomname}</option>');
  }

};
