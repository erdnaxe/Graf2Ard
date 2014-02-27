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
                tmp += '<li>';
                tmp += '<a href="#" id="objects-list" name="' + blockData['name'] + '"'
                        + ' title="' + blockData['translation_fr'] + '" '
                        + ' color="' + blockData['color'] + '">';
                tmp += '<span class="glyphicon glyphicon-stop ' + blockData['color'] + '"> </span> '
                        + blockData['translation_fr'];
                tmp += '</a>';
                tmp += '</li>';
            });

            tmp += '</ul></div>';

            $("#objects-choice").append(tmp);
        });

        /*
         * Function to add an object with a dropdown menu
         */
        $("a#objects-list").click(function() {
            newObject($(this).attr("title"), $(this).attr("name"), $(this).attr("color"));
        });

    });
});