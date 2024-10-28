// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

function chessboard() {
    const rows = 8; // display 8 * 8 rows of # rows
    for (let pipe = 0; pipe < rows; pipe++) {
        let row = '';
        for (let space = 0; space < rows; space++) {
            if ((pipe + space) % 2 === 0) {
                row += '#';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}    
chessboard()