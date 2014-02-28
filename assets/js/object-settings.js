/*
 * Object settings panel
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */
console.log('Loading settings panel JS file...');

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
                    returnProperties += '<option value="' + valeurLegalValue + '">' 
                            + valeurLegalValue + '</option>';
                });

                returnProperties += '</select></p>';
            });

            // Then display them
            $("#settings-body").append('<div class="panel panel-primary">'
                    + '<div class="panel-heading"><h3 class="panel-title">' 
                    + tableProperties["name"] + '</h3></div>'
                    + '<div class="panel-body">' + returnProperties + '</div>'
                    + '</div>');
        });
    });
}

/*
 * Function to show the settings panel
 * @arg int id
 */
function showSettings(id, element) {
    // Catching the content
    listJSONProperties("assets/objects/" + element.data("name") + ".json");

    // Filling the content
    $("#settings-title").html("Paramètres de " + element.data("translation_fr"));

    // Setting the buttons
    $("button#save-object").data("target", id);
    $("button#remove-object").data("target", id);

    // Show the settings panel
    $("#settings").css("visibility", "visible");
}

/*
 * Function to hide the settings panel
 */
function hideSettings() {
    // Hiding settings
    $("#settings").css("visibility", "hidden");

    // and disabling the active element
    $("#" + isActive).css("box-shadow", "0");
    isActive = "";
    
    // Then a little cleaning...
    $("#settings-title").html('');
    $("#settings-body").html('');
}

/*
 * Function to save an object
 */
function saveObject(element) {
    // Catch the target ID
    var id = element.data("target");
    
    msg("Votre block (" + id + ") a bien été sauvegard&eacute;. ", "success");
}

/*
 * Function to remove an object
 */
function removeObject(element) {
    // Catch the target ID
    var id = element.data("target");

    // Remove the settings panel
    hideSettings();

    // Remove the real object
    $("#" + id).remove();

    // Remove the element to the grid by a refresh
    $("#sortable").sortable("refresh");

    // Alert the user
    msg("Votre block (" + id + ") a bien été supprim&eacute;. ", "info");
}

/*
 * Settings panel loading
 */
$(function() {
    $("#settings").load("app/content/settings.content.html", function(response, status, xhr) {
        if (status === "error")
            msg("Un problème a été rencontré : " + xhr.status + " " + xhr.statusText, "danger");

        // Close the panel on click
        $("#settings-close").click(function() {
            hideSettings();
        });

        // Save the object on click
        $("button#save-object").click(function() {
            saveObject($(this));
        });
    });
});