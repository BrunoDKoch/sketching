var main = document.querySelector('#main-div');
var _loop_1 = function (i) {
    var square = document.createElement('div');
    square.className = 'square';
    main.appendChild(square);
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = 'blue';
    });
};
for (var i = 0; i < 256; i++) {
    _loop_1(i);
}
