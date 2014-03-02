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
function fillProperties(JSONdata) {
    // Parse JSON data into array
    var objProperties = $.parseJSON(JSONdata);

    // Catching content for each properties
    $.each(objProperties, function(idProperties, tableProperties) {

        // List all configuration
        var returnProperties = "";
        $.each(tableProperties["body"], function(idTable, tableTable) {
            returnProperties += '<p>'
                    + '<label class="control-label" for="' + tableTable["enter_in"] + '">'
                    + tableTable["name"] + ' : '
                    + '</label>';
            returnProperties += '<select class="form-control input-sm"'
                    + ' name="' + tableTable["enter_in"] + '"'
                    + ' id="' + tableTable["enter_in"] + '">';

            $.each(tableTable["legal_value"], function(idLegalValue, valeurLegalValue) {
                if (valeurLegalValue === tableTable["value"]) {
                    returnProperties += '<option data-idproperties="' + idProperties + '"'
                            + ' data-idtable="' + idTable + '"'
                            + ' value="' + valeurLegalValue + '" selected="selected">'
                            + valeurLegalValue + '</option>';
                } else {
                    returnProperties += '<option data-idproperties="' + idProperties + '"'
                            + ' data-idtable="' + idTable + '"'
                            + ' value="' + valeurLegalValue + '">'
                            + valeurLegalValue + '</option>';
                }
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
}

/*
 * Function to show the settings panel
 * @arg int id
 */
function showSettings(element) {
    // Placing the content
    fillProperties(element.data("properties"));

    // Filling the content
    $("#settings-title").html("Paramètres de " + element.data("translation_fr"));

    // Setting the buttons
    $("button#save-object").data("target", element.attr("id"));
    $("button#remove-object").data("target", element.attr("id"));

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
    // Catch the target object
    var id = element.data("target");
    var element2save = $("#" + id);

    // Get the properties array
    var arrayProperties = $.parseJSON(element2save.data("properties"));

    $("select option:selected").each(function() {
        // Catch the array of this select
        var arraySelect = arrayProperties[$(this).data('idproperties')]['body'][$(this).data('idtable')];

        // Catch the selected value
        var valueSelect = $(this).attr('value');

        // Put the value in the array
        arraySelect['value'] = valueSelect;

        // Save the array into the main array
        arrayProperties[$(this).data('idproperties')]['body'][$(this).data('idtable')] = arraySelect;
    });

    // Save the main array into the object
    element2save.data("properties", $.toJSON(arrayProperties));

    // Alert the user
    msg("Votre block (" + element2save.data('translation_fr') + ") a bien été sauvegard&eacute;. ", "success");
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