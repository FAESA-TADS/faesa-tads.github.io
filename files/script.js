$('.carousel').carousel({
  interval: 0
});

$('.btn-next').click(function(){
  $('.carousel').carousel('next');
  FitContentText();
});

$('.btn-prev').click(function(){
  $('.carousel').carousel('prev');
  FitContentText();
});

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        $('.carousel').carousel('prev');
    }
    else if (e.keyCode == '40') {
        // down arrow
        $('.carousel').carousel('next');
    }
    else if (e.keyCode == '37') {
       // left arrow
       $('.carousel').carousel('prev');
    }
    else if (e.keyCode == '39') {
       // right arrow
       $('.carousel').carousel('next');
    }

    FitContentText();
}