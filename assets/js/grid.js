/*
 * Grid creator
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

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

        log("New element with id '" + id + "'.", "warning");

        // Add the object to the grid "div"
        $(".grid").append('<div class="object ' + $(this).attr("color")
                + '" id="' + id + '">' + $(this).attr("name") + '</div>');

        // Selecting the element in newElement
        var newElement = $("#" + id);

        // Adding the element to a virtual grid
        newElement.draggable({
            containment: '.grid',
            grid: [24, 24]
        });

        // On click, the element is active
        newElement.click(function() {
            if (isActive !== $(this).attr("id")) {
                // Removing class to other elements
                $("*.object").removeClass("active");

                // Making this element active
                $(this).addClass("active");
                isActive = $(this).attr("id");

                // Openning the settings panel
                showSettings(isActive);

                log("Element (" + newElement.attr("id") + ") now active; disabling other elements.", "notice");
            } else
                log("This element (" + newElement.attr("id") + ") is already active !", "warning");
        });
    });

});