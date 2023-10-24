// area = (width * length)
// perimeter = ((width + length) * 2)
function rectanglearea (width , length) {
    return length * width
}
function rectangleperimeter (width , length) {
    return ((length + width) * 2)
}
// prompt user
var length = prompt ("Enter the length of the rectangle : ")
var width = prompt ("Enter the width of the rectangle")

//parse input string to number
length = parseFloat (length)
width = parseFloat (width)

//check if the input is a valid number
if (!isNaN(length) && !isNaN(width)) {
    // Calculate the area
    var area = rectanglearea(length, width);
    var perimeter = rectangleperimeter(length, width);


    // Print the result
    console.log("The area of the rectangle is: " + area);
    console.log("The perimeter of the rectangle is: " + perimeter);

} else {
    console.log("Invalid input. Please enter valid numbers for length and width.");
}