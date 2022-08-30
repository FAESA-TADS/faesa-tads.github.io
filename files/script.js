const delay = ms => new Promise(r => setTimeout(r, ms));

$('.carousel').carousel({
  interval: 0
});

$('.btn-next').click(function(){
  NextText();
});

$('.btn-prev').click(function(){
  PreviousText();
});

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        ScaleText(true);
    }
    else if (e.keyCode == '40') {
        // down arrow
        ScaleText(false);
    }
    else if (e.keyCode == '37') {
       // left arrow       
       PreviousText();
    }
    else if (e.keyCode == '39') {
       // right arrow       
       NextText();
    }

    //FitContentText();
}