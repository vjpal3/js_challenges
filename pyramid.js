let row = "";   
function buildPyramid(height) {
    let gap = 2;
    for (let i = 1; i <= height; i++) 
    {
        row = "";
        //print the spaces to the left for that row
        print_spaces(height, i);
        //print the "#" for the row
        print_hashes(i);
        //Leave a gap in the middle of the row
        print_spaces(gap, 0);
        //print the "#" after the gap for that row
        print_hashes(i);
        console.log(row);
    }
}  

//prints the spaces for a row
function print_spaces(height, row_number) {
    for (let k = height; k > row_number; k--) {
        row += " "; 
    }
}

//prints the hashes for a row
function print_hashes(row_number) {
    for (let j = 1; j <= row_number; j++) {    
         row += "#";         
    } 
}

buildPyramid(10);
