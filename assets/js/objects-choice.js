/* 
 * Objects choice (dropdown list)
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */
console.log('Loading object choice JS file...');

/*
 * Function to scan and add objects
 */
$(function() {
    $.getJSON("assets/objects/objects-list.json", function(data) {

        /*
         * Add objects to groups then show menu
         */
        $.each(data, function(menuName, arrayBlocks) {
            var tmp = '<div class="btn-group">';

            // Make a beautiful button
            tmp += '<button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">'
                    + menuName + ' <span class="caret"></span>'
                    + '</button>';
            tmp += '<ul class="dropdown-menu">';


            // Show the objects list
            $.each(arrayBlocks, function(blockFile, blockData) {
                // Filling cache for object
                tmp += '<li><a href="#" id="objects-list"'
                        + ' data-name="' + blockData['name'] + '"'
                        + ' data-translation_fr="' + blockData['translation_fr'] + '"'
                        + ' data-color="' + blockData['color'] + '"'
                        + '>';
                tmp += '<span class="glyphicon glyphicon-stop ' + blockData['color'] + '"> </span> '
                        + blockData['translation_fr'];
                tmp += '</a></li>';
            });

            $("#objects-choice").append(tmp + '</ul></div>');
        });

        /*
         * Function to add an object with a dropdown menu
         */
        $("a#objects-list").click(function() {
            newObject($(this).data("name"),
                    $(this).data("translation_fr"),
                    $(this).data("color"));
        });

    });
});