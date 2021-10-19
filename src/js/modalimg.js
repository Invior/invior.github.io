/*$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});*/

$('.carousel-inner').magnificPopup({
  delegate: 'img', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});