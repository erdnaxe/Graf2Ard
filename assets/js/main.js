/*
 * Main javascript
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

/*
 * Variable declaration
 */
var debug = false;

var isActive = "";
var lastElementId = 0;

/*
 * Fonction for debug information
 * @param string text
 * @param string type
 */
function log(text, type) {
    var text_type = "";

    if (type === "error")
        text_type = "red";
    if (type === "warning")
        text_type = "yellow";
    if (type === "notice")
        text_type = "grey";

    if (debug)
        $("p#debug").append(" > <span style='background-color:" + text_type + ";'>"
                + text + "</span><br />");
}

/*
 * Show a message of one type: success, info, warning or danger
 * @param string type
 * @param string text
 * @param string title
 */
function msg(text, type, title) {
    $("#alert-location").append('<div class="alert alert-' + type + ' fade in">'
            + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
            + '<h4>' + title + '</h4>'
            + '<p>' + text + '</p></div>');
}

/*
 * Content loading
 */
$(function() {
    // Contextual windows loading
    $("#modal-content").load("app/content/modal.content.html", function(response, status, xhr) {
        if (status === "error")
            log("Something goes wrong : " + xhr.status + " " + xhr.statusText, "error");

        /*
         * Remove the object on click
         */
        $("button#remove-object").click(function() {
            removeObject($(this));
        });

        /*
         * Make a new project on click
         */
        $('button#newFileButton').click(function() {
            newGrid();
        });

        /*
         * Upload a file
         */
        $('#fileToUpload').change(function() {
            var file = $('#fileToUpload').get(0).files[0];
            var read = new FileReader();
            read.readAsBinaryString(file);
            read.onloadend = function() {
                openGrid(read.result);
            };
            $('#open').modal('hide')
        });
    });

    // NavBar loading
    $("#navbar-content").load("app/content/navbar.content.html", function(response, status, xhr) {
        if (status === "error")
            log("Something goes wrong : " + xhr.status + " " + xhr.statusText, "error");

        /*
         * Save object on click
         */
        $('a#saveGrid').click(function() {
            saveGrid();
        });
    });

    // LOG windows loading
    if (debug) {
        $("#debug").load("app/content/debug.content.html", function(response, status, xhr) {
            if (status === "error")
                log("Something goes wrong : " + xhr.status + " " + xhr.statusText, "error");
        });
    }
});

/*
 * Editing function
 * (undo / redo)
 * (copy / cut / paste / duplicate)
 */
function undoObject() {
    msg("Function (undoObject) not available !", "danger", "Error !");
}

function redoObject() {
    msg("Function (redoObject) not available !", "danger", "Error !");
}

function copyObject() {
    msg("Function (copyObject) not available !", "danger", "Error !");
}

function cutObject() {
    msg("Function (cutObject) not available !", "danger", "Error !");
}

function pasteObject() {
    msg("Function (pasteObject) not available !", "danger", "Error !");
}

function duplicateObject() {
    msg("Function (duplicateObject) not available !", "danger", "Error !");
}
