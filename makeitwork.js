// setting up the document for use with JQuery.
var counter = 0;

$(document).ready(function () {
    $("#board td").click(clickedCell);
});

function clickedCell() {
    var cell = this;
    markCell(cell);
    changeField();

    counter++;
}

function markCell(cell) {
    if (counter % 2 === 0) {
        $(cell).html('X');
    } else {
        $(cell).html('O');
        $(cell).css('color', '#544673');
    }
}

function changeField() {
    if (counter % 2 === 0) {
        $("#green-player .header").css("backgroundColor", "#96CA2D");
        $("#purple-player .header").css("backgroundColor", "transparent");
    } else {
        $("#purple-player .header").css("backgroundColor", "#544673");
        $("#green-player .header").css("backgroundColor", "transparent");
    }
}