

$(function(){
  $("#se").get(0).play();




});









//カウントダウン
var time = 200;
setInterval(function(){
  time--;$('#timer').text(time);
}, 1000);
