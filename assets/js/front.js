//$(document).ready(function() {


  window.mySwipe = new Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 400,
    auto: 0,
    draggable: true,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function(index, elem, dir) {},
    transitionEnd: function(index, elem) {}
  });

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
