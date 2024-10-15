let element = document.getElementById('imagen');
element.addEventListener("mousedown", function() {
    this.setAttribute('src', 'img/2.png');
});

element.addEventListener('mouseup', function() {
    this.setAttribute("src", "img/1.png");
});
