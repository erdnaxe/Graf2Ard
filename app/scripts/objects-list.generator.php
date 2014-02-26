<?php

/*
 * Objects list generator
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

// Assets directory definition
$objects_dir = "../../assets/objects/";

// Creating the main arrays
$list_file = array();
$sort_list = array();

/*
 * Function to write a JSON file list
 */

function writeJSONFile($file, $array) {
    // delete file
    unlink($file);

    // then recreate it
    $fp = fopen($file, 'w');
    fwrite($fp, json_encode($array));
    fclose($fp);
}

// Listing all JSON files in assets/objects/
$objects_directory_open = opendir($objects_dir) or die('Erreur');
while ($Entry = \readdir($objects_directory_open)) {
    if (strstr($Entry, '.json') && !strstr($Entry, 'objects-list')) {
        $list_file[$Entry] = array();
    }
}
closedir($objects_directory_open);

// Decoding the JSON file then filling datas
$obj = array();
foreach ($list_file as $file_name => $array) {
// Décodage du fichier --> $obj
    $obj = json_decode(file_get_contents($objects_dir . $file_name), true);

// If nothing return then alert
    if ($obj == null) {
        echo "!!! Le fichier " . $file . " est corrompu !";
        return;
    }

// No french translation ?
    if (!isset($obj["translation_fr"])) {
        $obj["translation_fr"] = $obj["name"];
    }

    // Filling datas in array
    $sort_list[$obj["menu"]][$file_name]["name"] = $obj["name"];
    $sort_list[$obj["menu"]][$file_name]["translation_fr"] = $obj["translation_fr"];
    $sort_list[$obj["menu"]][$file_name]["color"] = $obj["color"];
}

// Now it's time to write the file
writeJSONFile($objects_dir . 'objects-list.json', $sort_list);
