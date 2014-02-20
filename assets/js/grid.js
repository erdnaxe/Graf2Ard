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
        showSettings(isActive);

        log("Element (" + element.attr("id") + ") now active; disabling other elements.", "notice");
    } else {
        log("This element (" + element.attr("id") + ") is already active !", "warning");
    }
}

/*
 * DOM function for the grid
 */
$(function() {

    /*
     * Function to add an object with a dropdown menu.
     * @Attr name
     * @Attr color
     */
    $("a#objects-list").click(function() {
        // Single ID per element
        var id = lastElementId;
        lastElementId++;

        // Add the object to the grid "div"
        $(".grid").append('<div class="object" id="' + id + '"></div>');
        log("New element with id '" + id + "'.", "warning");

        // Selecting the element in newElement
        var newElement = $("#" + id);

        // Adding attributs to the new element
        newElement.addClass($(this).attr("color")); // COLOR
        newElement.attr("name", $(this).attr("name")); // NAME
        newElement.html($(this).attr("title")); // TITLE
        newElement.draggable({containment: '.grid', grid: [24, 24]}); // GRID

        // Make the element active
        becomeActive(newElement);
        
        // On click, the element become active
        newElement.click(function() {
            becomeActive($(this));
        });
    });

});