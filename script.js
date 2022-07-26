// drawing the chess board 
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
        square.setAttribute("draggable", "true");
        //every two rows the squares repeat themselfes
        if (r == 16) {
            r = 0;
        }
    }
}

// putting the positions of the squares ex: a4, c5 etc..
function squares_id(){
    let my_board = document.getElementsByClassName('square');

    let id_chars = 'abcdefgh';
    let id_nums = 8;
    let r = 0;
    for (let x = 0; x < 64; x++) {
        r += 1;
        
        my_board[x].id = id_chars[r-1] + id_nums;

        if (r == 8) {
            r = 0;
            id_nums--;
        }

    }
}

// putting the pieces in its default positions.
function set_pieces() {
    let ele = document.getElementsByClassName("square");
    for (let x = 0; x < 64; x++) {

        let img_ele = document.createElement('img');
        ele[x].appendChild(img_ele);

        //placing dark pawns
        if (ele[x].id.includes('7')) {
            img_ele.src = './pieces/Chess_pdt60.png';
        }
        //placing light pawns
        else if (ele[x].id.includes('2')) {
            img_ele.src = './pieces/Chess_plt60.png';
        }
        //placing other dark pieces
        else if (ele[x].id == 'a8' || ele[x].id =='h8') {
            img_ele.src = './pieces/Chess_rdt60.png';
        }
        else if (ele[x].id == 'b8' || ele[x].id == 'g8') {
            img_ele.src = './pieces/Chess_ndt60.png';
        }
        else if (ele[x].id == 'c8' || ele[x].id == 'f8') {
            img_ele.src = './pieces/Chess_bdt60.png';
        }
        else if (ele[x].id == 'd8') {
            img_ele.src = './pieces/Chess_qdt60.png';
        }
        else if (ele[x].id == 'e8') {
            img_ele.src = './pieces/Chess_kdt60.png';
        }

        //placing other light pieces
        else if (ele[x].id == 'a1' || ele[x].id =='h1') {
            img_ele.src = './pieces/Chess_rlt60.png';
        }
        else if (ele[x].id == 'b1' || ele[x].id == 'g1') {
            img_ele.src = './pieces/Chess_nlt60.png';
        }
        else if (ele[x].id == 'c1' || ele[x].id == 'f1') {
            img_ele.src = './pieces/Chess_blt60.png';
        }
        else if (ele[x].id == 'd1') {
            img_ele.src = './pieces/Chess_qlt60.png';
        }
        else if (ele[x].id == 'e1') {
            img_ele.src = './pieces/Chess_klt60.png';
        }
        else {
            img_ele.remove();
        }
    }
}

// to move the pieces from their current pos to the new one.
function moving_pieces() {

    let pieces = document.querySelectorAll('img');
    let squares = document.querySelectorAll('.square');

    squares.forEach(sqr => {
        sqr.addEventListener("dragover", e => {
            e.preventDefault();
        });
    });

    squares.forEach(sqr => {
        sqr.addEventListener("drop", e => {
            let sqr_id = e.dataTransfer.getData("sqr_id");
            let targetedSqr = document.getElementById(sqr_id);

            if(targetedSqr !== sqr && targetedSqr){

                if(sqr.firstElementChild){
                    sqr.removeChild(sqr.firstElementChild);
                }    

                sqr.append(targetedSqr.firstElementChild);
            }
        });
    });

    pieces.forEach(piece => {
        piece.addEventListener("dragstart", e => {
            e.dataTransfer.setData("sqr_id", piece.parentNode.id);
        });
    }); 
    
}

//Driver Code.
draw_board();
squares_id();
set_pieces();
moving_pieces();