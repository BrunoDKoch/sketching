const main = document.querySelector('#main-div');
for (let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.className = 'square';
    main.appendChild(square);
    square.addEventListener('mouseover', function(){
        square.style.backgroundColor = 'blue'
    })
}