var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  handleSelect: function (event) {

    // console.log(event);
    console.log($('#rooms select option:selected').text());
    var roomSelected = $('#rooms select option:selected').text(); // get text from dropdown selection
    //reset toggle                                                                                                                                                                                                                                                    
    $('.chat').show();
    $('.chat').not(`.lobby`).hide();

  },

  render: function(data) {
    // input: string
    // output: append HTML
    //use _uniq to get unique roomnames and populate our list
    $('option').remove(); // remove old rooms to prevent duplicates
    var roomList = _.uniq(data.results, function(item) {
      return item.roomname;
    });

    roomList.forEach(function(obj) {
      var room = obj.roomname;
      this.$select.append(`<option>${room}</option>`);
    }.bind(RoomsView));

  },

  renderRoom: function(roomname) {
    this.$select.append(`<option>${roomname}</option>`);
  }

};
