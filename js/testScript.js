(function(){

  var num = 0;
  var bodyRightHeader = document.getElementById('bodyRightHeader');

  btn1.addEventListener('click', function(){
    num++;
    bodyRightHeader.textContent = num;

    checkValue(num);
  })

  btn2.addEventListener('click', function(){
    num--;
    bodyRightHeader.textContent = num;

    checkValue(num);
  })

  function checkValue(n) {
    if (n===0) {
      bodyRightHeader.textContent = "It is empty!";
    }
  }

})();
