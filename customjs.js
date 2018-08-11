function burgerClick() {
  var b = document.querySelector('.navbar-burger');
  var nav = document.querySelector('#'+b.dataset.target);
 
 b.addEventListener('click', function burgerClick(){
    b.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });
}();

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}