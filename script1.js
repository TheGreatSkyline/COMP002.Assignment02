// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #
function triangle() {
    const maxRow = 4; // display 5 rows
    for (let i = 0; i < maxRow; i++) {
        console.log('#'.repeat(i + 1));
    }// Add i is equal to 5 
    for (let i = maxRow - 1; i >= 0; i--) {
        console.log('#'.repeat(i));
    }
}// Display 5 rows of #

triangle()      