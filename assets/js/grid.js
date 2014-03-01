/*
 * Grid creator
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */
console.log('Loading grid creator JS file...');

/*
 * Variable declaration
 */
var isActive = 0;
var lastElementId = 0;

/*
 * Function to make an object active
 * @param class element
 */
function becomeActive(element) {
    if (isActive !== element.attr("id")) {
        // Remove the settings panel
        hideSettings();

        // Making this element active
        element.css("box-shadow", "1px 1px 1px rgba(0, 0, 0, 0.075) inset, 1px 1px 8px rgba(102, 175, 233, 1)");

        // Setting the new element to be active
        isActive = element.attr("id");

        // Openning the settings panel
        showSettings(element);
    }
}

/*
 * Function to get object properties
 * @param string objectName
 * @returns array properties
 */
function getObjectproperties(objectName, element) {
    $.getJSON("assets/objects/" + objectName + ".json", function(data) {
        element.data("properties", $.toJSON(data["properties"]));
    });
}

/*
 * Function to create a new object
 * @param name
 * @param translation_fr
 * @param color
 */
function newObject(name, translation_fr, color) {
    var id = lastElementId;

    // Single ID per element
    lastElementId++;

    // Add the object to the grid "div"
    $("#sortable").append('<div id="' + id + '"></div>');

    // Selecting the element in newElement
    var newElement = $("#" + id);

    // Here we want an object with a color and a name
    newElement.addClass("object");
    newElement.addClass(color);
    newElement.html(translation_fr);

    // Adding datas to the new element
    newElement.data("translation_fr", translation_fr);
    newElement.data("name", name);
    newElement.data("color", color);
    getObjectproperties(name, newElement);

    // Add the element to the grid by a refresh
    $("#sortable").sortable("refresh");

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
    hideSettings();

    // DESTROY all elements
    $("#sortable").html('');

    // Refresh the grid
    $("#sortable").sortable("refresh");
    lastElementId = 0;
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

        ArrayOutput[i] = new Array();
        ArrayOutput[i]["name"] = $("#" + realId).data("name");
        ArrayOutput[i]["translation_fr"] = $("#" + realId).data("translation_fr");
        ArrayOutput[i]["color"] = $("#" + realId).data("color");
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