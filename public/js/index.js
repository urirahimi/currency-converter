
function convert () {
    jQuery('#currency-form').on('submit', function (e) {
        e.preventDefault();
        $.post('/getRates', {
            convertFrom: $(".convert-from option:selected").val(),
            convertTo: $(".convert-to option:selected").val(),
            amountToConvert: jQuery('[name=amount-to-convert]').val()
        }).done(function (data){
            //alert(data);
            document.getElementById('result-label').innerHTML = data;
        })
      });
    }


