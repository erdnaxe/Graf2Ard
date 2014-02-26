/*
 * Grid creator
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

/*
 * Function to make an object active
 * @param class element
 */
function becomeActive(element) {
    if (isActive !== element.attr("id")) {
        // Removing class to other elements
        $("*.object").removeClass("active");

        // Making this element active
        element.addClass("active");
        isActive = element.attr("id");

        // Openning the settings panel
        showSettings(isActive, element);
    }
}

/*
 * Function to create a new object
 */
function newObject(name, translation_fr, color) {
    var id = lastElementId;

    // Single ID per element
    lastElementId++;

    // Add the object to the grid "div"
    $("#sortable").append('<div class="object" id="' + id + '"></div>');

    // Selecting the element in newElement
    var newElement = $("#" + id);

    // Adding attributs to the new element
    newElement.addClass(color); // COLOR
    newElement.attr("name", translation_fr); // TRANSLATION
    newElement.html(name); // NAME

    // Add the element to the grid by a refresh
    $("#sortable").sortable("refresh");

    // Make the element active
    becomeActive(newElement);

    // On click, the element become active
    newElement.click(function() {
        becomeActive($(this));
    });
}


/*
 * Function to make a new grid
 */
function newGrid() {
    // Remove the settings panel
    $("#settings").css("visibility", "hidden");
    isActive = "";

    // DESTROY all elements
    $("#sortable").html('');

    // Refresh the grid
    $("#sortable").sortable("refresh");
}

/*
 * Function to open the grid as JSON
 */
function openGrid(fileContent) {
    // Remove the old grid
    newGrid();

    alert(fileContent);

    // Sort objects
    /*var ArrayOutput = new Array();
     for (i = 0; i < sorted.length; i++) {
     var realId = sorted[i];
     ArrayOutput[i] = $("#" + realId).attr("name");
     }*/
}

/*
 * Function to save the grid into JSON
 */
function saveGrid() {
    // Catch all elements on the grid
    $("#sortable").sortable("refreshPositions");
    var sorted = $("#sortable").sortable("toArray");

    // Sort objects
    var ArrayOutput = new Array();
    for (i = 0; i < sorted.length; i++) {
        var realId = sorted[i];
        ArrayOutput[i] = $("#" + realId).attr("name");
    }

    // Open a download box to save the file
    var blob = new Blob([JSON.stringify(ArrayOutput)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "NewProject.json");

    // Show the message
    msg("Fichier enregistré !", "success");
}

/*
 * Creating the grid
 */
$(function() {
    $("#sortable").sortable({
        axis: false,
        cursor: "move",
        forceHelperSize: true,
        /* grid: [24, 24], */
        scroll: false,
        revert: true
    });
});