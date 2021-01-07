$(document).ready(function(){
  // aggiungo la classe mostro in html per far si che il click sia fattibile solo sull'hamburger e non su tutta la colonna
  $('.mostro').click(function(){
    $('.hamburger-menu').addClass('active');
  });
  $('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
  });
});
