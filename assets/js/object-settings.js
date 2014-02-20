/*
 * Object settings panel
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

/*
 * Fonction to show the settings panel
 * @arg int id
 */
function showSettings(id, element) {
    // Catching the content
    /*'<div class="panel panel-primary">'
     + '<div class="panel-heading"><h3 class="panel-title">Le titre</h3></div>'
     + '<div class="panel-body">Une propriété</div>'
     + '</div>');*/

    // Filling the content
    $("#settings-title").html("Paramètres de " + element.html());
    $("#settings-body").html('Paramètres de ' + element.attr("name"));

    // Setting the buttons
    $("button#save-object").attr("object-target", id);
    $("button#remove-object").attr("object-target", id);

    // Show the settings panel (to put at the end --> DEBUG)
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