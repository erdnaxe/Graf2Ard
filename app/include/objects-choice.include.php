<?php
if (!isset($main_loaded)) {
    header('Location: /');
    exit;
}

/*
 * Selecteur d'objets
 * --------------------------
 * Ce code fait partie du projet Graf2Ard
 * Il a été créé par erdnaxe.
 * Il est sous license GPL.
 */

// Création des tableaux de stockage 
$list_file = array();
$menu = array();

$objects_directory_open = opendir($objects_dir) or die('Erreur');
while ($Entry = \readdir($objects_directory_open)) {
    if ($Entry != '.' && $Entry != '..' && strstr($Entry, '.json')) {
        $list_file[] = $Entry;
    }
}
closedir($objects_directory_open);

// Exploration du fichier
$obj = array();
foreach ($list_file as $id => $file) {
    // Décodage du fichier --> $obj
    $obj = json_decode(file_get_contents($objects_dir . $file), true);
    if ($obj == null) {
        echo "!!! Le fichier " . $file . " est corrompu !";
        return;
    }

    // DEBUG : Affichage des infos du fichier
    //~ Nom de l'élément : $obj["name"]
    //~ Nom de l'élément en français : ".$obj["translation_fr"]
    //~ Position dans le menu : ".$obj["menu"]
    //~ Librairies nécessaires : ".$obj["needing_librairies"]
    //~ Couleur : ".$obj["color"]
    //~ ---- Propriétés :
    //~ foreach($obj["properties"] as $id_properties => $content_properties){
    //~ echo "<ul>";
    //~ echo "<li>Nom : ".$content_properties["name"]."</li>";
    //~ foreach($content_properties["body"] as $id_body => $content_body){
    //~ echo "<ul>";
    //~ echo "<li>Nom : ".$content_body["name"]."</li>";
    //~ echo "<li>Entre dans : ".$content_body["enter_in"]."</li>";
    //~ echo "<li>Valeures autorisées : <ul>";
    //~ foreach($content_body["legal_value"] as $id_legal_value => $value_legal_value){
    //~ echo "<li>".$value_legal_value."</li>";
    //~ }
    //~ echo "</ul></li>";
    //~ echo "</ul></br>";
    //~ }
    //~ echo "</ul>";
    //~ }
    //~ ---- Code :
    //~ foreach($obj["code"] as $id_code => $content_code){
    //~ echo "<ul>";
    //~ echo "<li>Fonction : ".$content_code["function"]."</li>";
    //~ echo "<li>Code : ".$content_code["code"]."</li>";
    //~ echo "</ul></br>";
    //~ }
    //~ echo "</br>";

    if (!isset($obj["color"])) {
        $obj["color"] = "";
    }

    if (!isset($obj["translation_fr"])) {
        $obj["translation_fr"] = $obj["name"];
    }

    // Remplissage d'un tableau pour trier les objets par menus
    $menu[$obj["menu"]][] = array("text" => $obj["translation_fr"], "color" => $obj["color"]);
}

//Dessinage des menus
foreach ($menu as $name => $object) {
    ?>
    <div class="btn-group">
        <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
            <?php echo $name; ?> <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <?php
            foreach ($object as $array_data) {
                echo '<li><a href="#" id="objects-list" name="' . $array_data["text"] . '" color="' . $array_data["color"] . '">';
                echo '<span class="glyphicon glyphicon-stop ' . $array_data["color"] . '"> </span> ' . $array_data["text"];
                echo '</a></li>';
            }
            ?>    
        </ul>
    </div>
    <?php
}    