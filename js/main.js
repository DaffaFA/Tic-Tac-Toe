window.onload = init();

function init() {
    game = new Game();    
    game.run();
    game.displayPlayer();
}

function containsAll(needles, haystack) {
    for (let i = 0; i < game.boxClicked; i++) {
        if (game.boxClicked.inArray(needles[i], haystack) == -1) {
            return false;
        } else {
            return true;
        }
    }
}

var win = [0, 1, 2];



// var boxs = document.querySelectorAll('.box');

// for (let i = 0; i < boxs.length; i++) {
//     boxs[i].addEventListener('click', () => {
//         text = document.createTextNode(i);

//         boxs[i].appendChild(text);
//         console.log('i\'ve clicked ' + i);
//     });
// }

// box.forEach(box => {
    
// }