/*
 * Object settings panel
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

/*
 * Fonction to list properties from a JSON file
 * @arg string JSONfile
 */
function listJSONProperties(file) {
    $.getJSON(file, function(data) {

        // List all propreties
        var properties = data["properties"];
        $.each(properties, function(idProperties, tableProperties) {

            // List all configuration
            var returnProperties = "";
            $.each(tableProperties["body"], function(idTable, tableTable) {
                returnProperties += '<p>'
                        + '<label class="control-label" for="' + tableTable["enter_in"] + '">'
                        + tableTable["name"] + ' : '
                        + '</label>'
                        + '<select class="form-control input-sm"'
                        + ' name="' + tableTable["enter_in"] + '"'
                        + ' id="' + tableTable["enter_in"] + '">';

                $.each(tableTable["legal_value"], function(idLegalValue, valeurLegalValue) {
                    returnProperties += '<option value="' + valeurLegalValue + '">' + valeurLegalValue + '</option>';
                });

                returnProperties += '</select></p>';
            });

            // Then display them
            $("#settings-body").append('<div class="panel panel-primary">'
                    + '<div class="panel-heading"><h3 class="panel-title">' + tableProperties["name"] + '</h3></div>'
                    + '<div class="panel-body">' + returnProperties + '</div>'
                    + '</div>');
        });
    });
}

/*
 * Fonction to show the settings panel
 * @arg int id
 */
function showSettings(id, element) {
    // Cleaning
    $("#settings-title").html('');
    $("#settings-body").html('');

    // Catching the content
    listJSONProperties("assets/objects/main." + element.attr("name") + ".json");

    // Filling the content
    $("#settings-title").html("Paramètres de " + element.html());

    // Setting the buttons
    $("button#save-object").attr("object-target", id);
    $("button#remove-object").attr("object-target", id);

    // Show the settings panel
    $("#settings").css("visibility", "visible");
}

/*
 * Function to save an object
 */
function saveObject(element) {
    msg("Votre block (" + element.attr("object-target") + ") a bien été sauvegard&eacute;. ", "success", "Sauvegarde effectu&eacute;e !");
}

/*
 * Function to remove an object
 */
function removeObject(element) {
    // Catch the ID
    var id = element.attr("object-target");

    // Remove the real object
    $("#" + id).remove();

    // Remove the settings panel
    $("#settings").css("visibility", "hidden");
    isActive = "";

    // Remove the element to the grid by a refresh
    $("#sortable").sortable("refresh");

    msg("Votre block (" + element.attr("object-target") + ") a bien été supprim&eacute;. ", "danger", "Suppression effectu&eacute;e !");
}

/*
 * DOM : Settings panel loading
 */
$(function() {

    // Settings panel loading
    $("#settings").load("app/content/settings.content.html", function(response, status, xhr) {
        if (status === "error")
            log("Something goes wrong : " + xhr.status + " " + xhr.statusText, "error");

        // Function to close this panel
        $("#settings-close").click(function() {
            // Hiding settings
            $("#settings").css("visibility", "hidden");

            // and disabling the active element
            $("#" + isActive).removeClass("active");
            isActive = "";
        });

        /*
         * Save the object on click
         */
        $("button#save-object").click(function() {
            saveObject($(this));
        });

    });

});