// add scripts

$(document).on('ready', function() {
  getPlayers();
});



$('form').on('submit', function (event) {
  event.preventDefault();

  //create payload to send via ajax
  var payload = {
    name: $('#name').val(),
    position: $('#position').val(),
  };

  //ajax request
  $.post('/players', payload, function (data){
    console.log(data);
    $('#message').html('Added');
    getPlayers();
  })


});



//helper function
function getPlayers() {
  $('#all').html('');
  $.get('/players', function (data) {
    for (var i = 0; i < data.length; i++) {
      $('#all').append('<li> Player Name: '+data[i].name+ " Player Position: " + data[i].position + '</li>');
    };
  });
}
