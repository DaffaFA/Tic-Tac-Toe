class Game {
    constructor() {
        this.isX = false;
        this.boxs = document.querySelectorAll('.box');
        this.boxClicked = [];
        this.oClick = [];
        this.xClick = [];
        this.disabled = false;
    }


    run() {
        this.clicked();
    }

    isClicked() {
        this.boxs.forEach(box => {
            if (box.classList.contains('unclicked')) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        })
    }

    displayPlayer(user) {

        if (user == undefined) {
            user = 'O';
        }

        var dimana = document.getElementById('user');
        dimana.innerHTML = `Next : ${user}`;
    }

    // 0, 1, 2 ||
    // 3, 4, 5 ||
    // 6, 7, 8 ||
    // 0, 5, 8 ||
    // 2, 4, 6 ||
    // 0, 3, 6 ||
    // 1, 4, 7 ||
    // 2, 5, 8

    clicked() {
        this.boxs.forEach((box, i) => {
            box.addEventListener('click', () => {
                let user = this.isX ? 'X' : 'O';
                let next = this.isX ? 'O' : 'X';
                let text = document.createTextNode(user);

                if (!this.disabled) {
                    box.appendChild(text);
                    box.classList.remove('unclicked');;
                    box.classList.add('clicked');
                    this.isX = !this.isX;
                    this.displayPlayer(next);


                    if (user == 'O') {
                        this.boxClicked.push(i);
                        this.oClick.push(i);
                        this.determineWinner(user);
                    } else if (user == 'X') {
                        this.boxClicked.push(i);
                        this.xClick.push(i)
                        this.determineWinner(!user);
                    }
                    

                    console.log(this.boxClicked);
                }
            })
        });
    }


    determineWinner(player) {
        let arrayQ = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 4, 8]
        ];

        var dimana = document.getElementById('user');

        arrayQ.forEach((array) => {
            let winnerX = array.every(val => this.xClick.includes(val));
            let winnerO = array.every(value => this.oClick.includes(value));

            var footer = document.getElementById('game-nav');
            var box = document.getElementById('game');
            if (winnerX) {
                dimana.innerHTML = `X Win`;
                box.classList.add('game-done');
                this.renderButton();
                this.resetGame(player);
            } else if (winnerO) {
                dimana.innerHTML = `O Win`;
                box.classList.add('game-done');
                this.renderButton();
                this.resetGame(player);
            } else if (this.boxClicked.length == 9 && winnerX == false && winnerO == false) {
                dimana.innerHTML = 'TIE';
                box.classList.add('game-done');
                footer.innerHTML = "<a class=\"btn-reset\" href=\"#\">RESET</a>"
                this.resetGame(player);
            }
            
            console.log(winnerX);
            console.log(winnerO);


        });
    }

    renderButton() {
        var render = document.getElementById('game-nav');
        var btn = document.createElement('a');
        var text = document.createTextNode('RESET');

        btn.classList.add('btn-reset');
        btn.appendChild(text)
        render.appendChild(btn);
        
    }


    resetGame(player) {
        var btn = document.querySelector('.btn-reset');
        var game = document.getElementById('game');
        var footer = document.getElementById('game-nav');
        var dimana = document.getElementById('user');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            this.isX = false;
            
            // this.boxs = document.querySelectorAll('.box');
            this.boxClicked = [];
            this.oClick = [];
            this.xClick = [];
            this.disabled = false;
    
            this.boxs.forEach(box => {
                box.innerHTML = '';
                box.classList.remove('clicked');
                box.classList.add('unclicked');
            });

            game.classList.remove('game-done');
            footer.removeChild(btn);
            dimana.innerHTML = `Next : ${player == false ? 'O' : 'X'}`  
        })
    }

}