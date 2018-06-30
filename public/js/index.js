var socket = io();

socket.on('newConversion', function (message) {
    // var formattedTime = moment(message.createdAt).format('h:mm a'); 
      
    //   var template = jQuery('#message-template').html();
    //   var html = Mustache.render(template, {
    //       text: message.text,
    //       from: message.from,
    //       createdAt: formattedTime
    //   });
    //   jQuery('#messages').append(html);
  });


jQuery('#currency-form').on('submit', function (e) {
    console.log('gets in jQuery');
    e.preventDefault();
    var convertFrom = $(".convert-from option:selected").val();
    var convertTo= $(".convert-to option:selected").val();
    var amountToConvert = jQuery('[name=amount-to-convert]')
    console.log(`converting ${convertFrom} to ${convertTo} for ${amountToConvert}`)
  });