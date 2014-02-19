/*
 * Ce code fait partie du projet Graf2Ard
 * Il a été créé par erdnaxe.
 * Il est sous license GPL.
 */

/*
 * Déclaration des variables
 */
var debug = true;

var isActive = "";
var lastElementId = 0;

/*
 * Fonction DEBUG INFO
 * @param string text
 * @param string type
 */
function log(text, type) {
    var text_type = "";

    if (type === "error")
        text_type = "red";
    if (type === "warning")
        text_type = "yellow";
    if (type === "notice")
        text_type = "grey";

    if (debug)
        $("p#debug").append(" > <span style='background-color:" + text_type + ";'>" + text + "</span><br />");
}

/*
 * Afficher un message d'un type (success, info, warning, danger)
 * @param string type
 * @param string text
 * @param string title
 */
function msg(type, text, title) {
    $("#alert-location").append('<div class="alert alert-' + type + ' fade in">'
            + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'
            + '<h4>' + title + '</h4>'
            + '<p>' + text + '</p></div>');
}

/*
 * Fonction pour afficher les bons paramètres
 * @arg int id
 */
function showSettings(id) {
    $("#settings").css("visibility", "visible");
    $("#settings-title").html("L'objet n°" + id + " est sélectionné !");
    $("#settings-body").html('<div class="panel panel-primary">'
            + '<div class="panel-heading"><h3 class="panel-title">Le titre</h3></div>'
            + '<div class="panel-body">Une propriété</div>'
            + '</div>');
}

/*
 * Chargement des contents dans la page
 */
$(function() {
    // Chargements des fenêtres contextuelles
    $("#modal-content").load("app/content/modal.content.html", function(response, status, xhr) {
        if (status === "error")
            log("Une erreur s'est produite : " + xhr.status + " " + xhr.statusText, "error");
    });

    // Chargements de la barre de navigation
    $("#navbar-content").load("app/content/navbar.content.html", function(response, status, xhr) {
        if (status === "error")
            log("Une erreur s'est produite : " + xhr.status + " " + xhr.statusText, "error");
    });

    // Chargements de la barre de navigation
    $("#settings").load("app/content/settings.content.html", function(response, status, xhr) {
        if (status === "error")
            log("Une erreur s'est produite : " + xhr.status + " " + xhr.statusText, "error");

        //Fermer le menu de paramètres grâce à la croix
        $("#settings-close").click(function() {
            // On cache les paramètres
            $("#settings").css("visibility", "hidden");

            // Désactivation de tous les éléments
            $("#" + isActive).removeClass("active");
            isActive = "";
        });
    });

    // Fenêtre de log pour le DEBUG
    if (debug) {
        $("#debug").load("app/content/debug.content.html", function(response, status, xhr) {
            if (status === "error")
                alert("Une erreur s'est produite : " + xhr.status + " " + xhr.statusText, "error");
        });
    }
});

/*
 * Fonctionnalité d'édition
 * (annuler / refaire)
 * (copier / couper / coller / dupliquer)
 */
function undoObject() {

}

function redoObject() {

}

function copyObject() {

}

function cutObject() {

}

function pasteObject() {

}

function duplicateObject() {

}
