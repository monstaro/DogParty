var newName = document.querySelector('#newName');

var button = document.querySelector('#button');


function showInput () {
  document.getElementById('newName').innerHTML = document.getElementById('enterName').value;
}





function hideText1() {
  var text = document.getElementById('paragraphid1');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}



function hideText2() {
  var text = document.getElementById('paragraphid2');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function hideText3() {
  var text = document.getElementById('paragraphid3');
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}
