
function draw_board(){

    let my_board = document.getElementById('board');
    let r = 0;
    for (let i = 1; i <= 64; i++) {
        r++;
        let divtag = document.createElement('div');
        let square = my_board.appendChild(divtag);

        //adjusting the colors of the squares 
        if (r <= 8) {
            if (i % 2 == 0) {
                square.className = 'dark_square square';
            }else {
                square.className = 'light_square square';
            }
        }
        if (r > 8) {
            if (i % 2 == 1) {
                square.className = 'dark_square square';
            }else {
                square.className = 'light_square square';
            }
        }
        
        if (r == 16) {
            r = 0;
        }
    }
}

function squares_id(){
    let my_board = document.getElementsByClassName('square');

    let id_chars = 'abcdefgh';
    let id_nums = 8;
    var r = 0;
    for (let x = 0; x < 64; x++) {
        r += 1;
        
        my_board[x].id = id_chars[r-1] + id_nums;

        if (r == 8) {
            r = 0;
            id_nums--;
        }
        console.log();
    }
}

function spotted_pieces() {
    let ele = document.getElementsByClassName("square");
    for (let x = 0; x < 64; x++) {

        let img_ele = document.createElement('img');
        let = ele[x].appendChild(img_ele);

        //placing dark pawns
        if (ele[x].id.includes('7')) {
            img_ele.src = '/pieces/Chess_pdt60.png';
        }
        //placing light pawns
        if (ele[x].id.includes('2')) {
            img_ele.src = '/pieces/Chess_plt60.png';
        }
        //placing other dark pieces
        if (ele[x].id == 'a8' || ele[x].id =='h8') {
            img_ele.src = '/pieces/Chess_rdt60.png';
        }
        if (ele[x].id == 'b8' || ele[x].id == 'g8') {
            img_ele.src = '/pieces/Chess_bdt60.png';
        }
        if (ele[x].id == 'c8' || ele[x].id == 'f8') {
            img_ele.src = '/pieces/Chess_ndt60.png';
        }
        if (ele[x].id == 'd8') {
            img_ele.src = '/pieces/Chess_qdt60.png';
        }
        if (ele[x].id == 'e8') {
            img_ele.src = '/pieces/Chess_kdt60.png';
        }

        //placing other light pieces
        if (ele[x].id == 'a1' || ele[x].id =='h1') {
            img_ele.src = '/pieces/Chess_rlt60.png';
        }
        if (ele[x].id == 'b1' || ele[x].id == 'g1') {
            img_ele.src = '/pieces/Chess_blt60.png';
        }
        if (ele[x].id == 'c1' || ele[x].id == 'f1') {
            img_ele.src = '/pieces/Chess_nlt60.png';
        }
        if (ele[x].id == 'd1') {
            img_ele.src = '/pieces/Chess_qlt60.png';
        }
        if (ele[x].id == 'e1') {
            img_ele.src = '/pieces/Chess_klt60.png';
        }

        if (!img_ele.src) {
            img_ele.remove();
        }
    }
}

function moving_pieces() {
    //getting pieces ids
    let images = document.querySelectorAll('img');
    let target_piece = null;
    images.forEach(img => {
        img.addEventListener('click', function handle_move () {
            target_piece = img;
            console.log(img) //for debugging
        });
    });

    //getting squares ids
    let squares = document.querySelectorAll('.square');
    let target_square = null;
    squares.forEach(square => {
        square.addEventListener('click', function handle_id() {
            if (!square.firstChild) {
                target_square = square;
                console.log(square) //for debugging
            }
        });
    });
    target_square.appendChild(target_piece);
}

// function moving_pieces() {

//     //getting pieces ids
//     let images = document.querySelectorAll('img');
//     let target_piece = null;
//     images.forEach(img => {
//         img.addEventListener('click', function handle_move () {
//             target_piece = img;
//             console.log(img.parentElement) //for debugging
//         });
//     });

//     //getting squares ids
//     let squares = document.querySelectorAll('.square');
//     let target_square = null;
//     squares.forEach(square => {
//         square.addEventListener('click', function handle_id() {
//             if (!square.firstChild) {
//                 target_square = square;
//                 console.log(square) //for debugging
//             }
//         });
//     });
//     target_square.appendChild(target_piece);
// }

//Driver Code.
draw_board();
squares_id();
spotted_pieces();
moving_pieces();