function makeBold(el) {
    el.style.fontWeight = 'bold';
}

var paragraphs = document.getElementsByTagName('p');

for (var i = 0, len = paragraphs.length; i<len; i++){
    paragraphs[i].onclick = function(){
        makeBold(this);
    };
}

var span = document.createElement('span');
span.innerHTML = 'createElement.className - My Bold Text';
span.className = 'bold';
document.getElementsByTagName('body')[0].appendChild(span);





$(document).ready(function(e) {
  $(".column").click(function() {
    modal({
      type: 'column',
      title: 'view details',
      text: 'Are you sure you want to delete your brain?',
      callback: function(result) {
        alert(result);
      }
    });
  });
