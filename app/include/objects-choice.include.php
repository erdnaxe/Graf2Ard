<?php
if (!isset($main_loaded)) {
    header('Location: /');
    exit;
}

/*
 * Objects selector
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

// Creating the main arrays
$list_file = array();
$menu = array();

// Listing all JSON files in assets/objects/
$objects_directory_open = opendir($objects_dir) or die('Erreur');
while ($Entry = \readdir($objects_directory_open)) {
    if (strstr($Entry, '.json')) {
        $list_file[] = $Entry;
    }
}
closedir($objects_directory_open);

// Decoding the JSON file then filling an array
$obj = array();
foreach ($list_file as $id => $file) {
    // Décodage du fichier --> $obj
    $obj = json_decode(file_get_contents($objects_dir . $file), true);
    if ($obj == null) {
        echo "!!! Le fichier " . $file . " est corrompu !";
        return;
    }

    if (!isset($obj["color"])) {
        $obj["color"] = "";
    }

    if (!isset($obj["translation_fr"])) {
        $obj["translation_fr"] = $obj["name"];
    }

    // Filling an array with data (name, name in french and color)
    $menu[$obj["menu"]][] = array("text" => $obj["name"], 
        "text-fr" => $obj["translation_fr"], 
        "color" => $obj["color"]);
}

// Now it's time to draw dropdowns
foreach ($menu as $name => $object) {
    ?>
    <div class="btn-group">
        <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown">
            <?php echo $name; ?> <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
            <?php
            foreach ($object as $array_data) {
                echo '<li>';
                echo '<a href="#" id="objects-list" name="' . $array_data["text"] 
                        . '" title="' . $array_data["text-fr"] 
                        . '" color="' . $array_data["color"] . '">';
                echo '<span class="glyphicon glyphicon-stop ' . $array_data["color"] 
                        . '"> </span> ' . $array_data["text-fr"];
                echo '</a>';
                echo '</li>';
            }
            ?>
        </ul>
    </div>
    <?php
}