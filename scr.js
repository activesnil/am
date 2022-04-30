

$(function(){
  $("#se").get(0).play();
  
 $(window).on('popstate', function(e)) 
  
});









//カウントダウン
var time = 200;
setInterval(function(){
  time--;$('#timer').text(time);
}, 1000);
