/* Explanations at junerockwell.com */
var canvas, context;
var rectangle_img = new Image();
var isDraggable = false;

var currentX = 0;
var currentY = 0;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  currentX = canvas.width/2;
  currentY = canvas.height/2;

  rectangle_img.onload = function() {
    _Go();
  };
  rectangle_img.src="./img/circle.png"
};

function _Go() {
  _MouseEvents();

  setInterval(function() {
    _ResetCanvas();
    _DrawImage();
  }, 1000/30);
}
function _ResetCanvas() {
  context.fillStyle = '#fff';
  context.fillRect(0,0, canvas.width, canvas.height);
}
function _MouseEvents() {
  canvas.onmousedown = function(e) {

    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;


    if (mouseX >= (currentX - rectangle_img.width/2) &&
        mouseX <= (currentX + rectangle_img.width/2) &&
        mouseY >= (currentY - rectangle_img.height/2) &&
        mouseY <= (currentY + rectangle_img.height/2)) {
      isDraggable = true;
      //currentX = mouseX;
      //currentY = mouseY;
    }
  };
  canvas.onmousemove = function(e) {

    if (isDraggable) {
      currentX = e.pageX - this.offsetLeft;
      currentY = e.pageY - this.offsetTop;
    }
  };
  canvas.onmouseup = function(e) {
    isDraggable = false;
  };
  canvas.onmouseout = function(e) {
    isDraggable = false;
  };
}
function _DrawImage() {
  context.drawImage(rectangle_img, currentX-(rectangle_img.width/2), currentY-(rectangle_img.height/2));
}