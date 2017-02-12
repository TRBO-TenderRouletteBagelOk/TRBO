//$(document).ready(function() {

$('#match-button').click(function () {

     $.ajax({
         url: '/do-match',
         type: 'POST',
         cache: false,
         data: { field1: 1, field2: 2 },
         success: function(data){
            console.log('Success!');
         }
         , error: function(jqXHR, textStatus, err){
             console.log('err '+err);
         }
      });

});



//});
