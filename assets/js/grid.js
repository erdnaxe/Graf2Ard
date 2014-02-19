/*
 * Ce code fait partie du projet Graf2Ard
 * Il a été créé par erdnaxe.
 * Il est sous license GPL.
 */

/*
 * Fonctions qui édite le document (DOM) pour la grille
 */
$(function() {

    /*
     * Ajouter un objet à partir d'un menu de sélection
     * @Attr name
     * @Attr color
     */
    $("a#objects-list").click(function() {
        // Génération d'un identifiant unique
        var id = lastElementId;
        lastElementId++;

        //DEBUG
        log("New element with id '" + id + "'.", "warning");

        // Ajout de l'objet à la grille
        $(".grid").append('<div class="object ' + $(this).attr("color")
                + '" id="' + id + '">' + $(this).attr("name") + '</div>');

        // Sélection de l'élément créé pour le modifier
        var newElement = $("#" + id);

        // Ajout de l'attribut "draggable" à l'objet
        newElement.draggable({
            containment: '.grid',
            grid: [24, 24]
        });

        // Permet à l'objet de s'activer
        newElement.click(function() {
            if (isActive !== $(this).attr("id")) {
                // Désactivation des autres éléments
                $("*.object").removeClass("active");

                // Changement de son état
                $(this).addClass("active");

                // Mémorisation de l'objet actif
                isActive = $(this).attr("id");

                // Montrer les paramètres du bloc
                showSettings(isActive);

                log("Element (" + newElement.attr("id") + ") now active; disabling other elements.", "notice");
            } else
                log("This element (" + newElement.attr("id") + ") is already active !", "warning");
        });
    });

});