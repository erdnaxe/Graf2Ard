/*
 * Main javascript
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */
console.log('Loading main JS file...');

/*
 * Variable declaration
 */
var isActive = 0;
var lastElementId = 0;
var projectName = "Nouveau fichier";

/*
 * Show a message of one type: success, info, warning or danger
 * @param string type
 * @param string text
 * @param string title
 */
function msg(text, type) {
    $("#alert-location").append('<div class="alert alert-' + type + ' fade in">'
            + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
            + '<p>' + text + '</p></div>');
}

/*
 * Content loading
 */
$(function() {
    // Contextual windows loading
    $("#modal-content").load("app/content/modal.content.html", function(response, status, xhr) {
        if (status === "error")
            msg("Un problème a été rencontré : " + xhr.status + " " + xhr.statusText, "danger");

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
            // Get the file
            var file = $('#fileToUpload').get(0).files[0];
            var read = new FileReader();

            // Read the file and sand it to the function
            read.readAsBinaryString(file);
            read.onloadend = function() {
                openGrid(read.result, file.name);
            };

            // Hide the dialog
            $('#open').modal('hide');
        });
    });

    // NavBar loading
    $("#navbar-content").load("app/content/navbar.content.html", function(response, status, xhr) {
        if (status === "error")
            msg("Un problème a été rencontré : " + xhr.status + " " + xhr.statusText, "danger");

        /*
         * Save object on click
         */
        $('a#saveGrid').click(function() {
            saveGrid();
        });
    });

});

/*
 * Change the project name
 */
function changeProjectName(newName) {
    // Save the name into a global variable 
    projectName = newName;

    $("title").html(newName + " - Graf2Ard");
}

/*
 * Editing function
 * (undo / redo)
 * (copy / cut / paste / duplicate)
 */
function copyObject() {
    msg("L'action (copyObject) n'est pas disponible !", "danger");
}

function cutObject() {
    msg("L'action (cutObject) n'est pas disponible !", "danger");
}

function pasteObject() {
    msg("L'action (pasteObject) n'est pas disponible !", "danger");
}

function duplicateObject() {
    msg("L'action (duplicateObject) n'est pas disponible !", "danger");
}
