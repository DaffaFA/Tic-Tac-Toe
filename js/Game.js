class Game {
    constructor() {
        this.isX = false;
        this.boxs = document.querySelectorAll('.box');
        this.boxClicked = [];
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


    // determineWinner() {

    //     let winner = containsAll([0, 1, 2], this.boxClicked)
    //     console.log(this.determineWinner());
    // }
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
                    }

                    let arrayQ = [
                        [0, 1, 2],
                        [3, 4, 4],
                        [6, 7, 8],
                        [0, 4, 8],
                        [2, 4, 6],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 4, 8]
                    ];

                    var dimana = document.getElementById('user');


                    arrayQ.forEach((array) => {
                        let success = array.every((val) => game.boxClicked.includes(val))
                        if (success) {
                            dimana.innerHTML = `${user} win`;                            
                        }
                    });


                    // console.log(this.boxClicked);
                }
            })
        });
    }

}