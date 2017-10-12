function getBase64Image(img) {
    // Code from Matthew Crumley, as shown in:
    // https://stackoverflow.com/questions/934012/
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

$(document).ready(function() {
  var socket = new WebSocket("ws://" + window.location.host + "/dashboard/");
  $('#left-side').click(function(event) {
    event.preventDefault();
    var img = getBase64Image($('#store')[0]);
    var sendIt = JSON.stringify({
      "text": {
        "image": img,
      }
    });
    socket.send(sendIt);
  });
  socket.onmessage = function(event) {
    var text = JSON.parse(event.data).text;
    if(text){
      var img = $('<img />').attr('src', 'data:image/png;base64,' + text.image);
      console.log(text);
    }
    $('#emit').html(img);
  }
})