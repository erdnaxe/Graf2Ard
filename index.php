<?php
/*
 * Main file (index)
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

// Assets directory definition
$assets_dir = "assets/";
$js_dir = $assets_dir . "js/";
$img_dir = $assets_dir . "img/";
$objects_dir = $assets_dir . "objects/";

// App directory definition
$app_dir = "app/";
$inc_dir = $app_dir . "include/";

// Security for includes...
$main_loaded = "yes";
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Un générateur de code Arduino à partir de grafcet." />
        <meta name="author" content="erdnaxe" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel='stylesheet' type='text/css' />
        <link href="assets/css/main.css" rel='stylesheet' type='text/css' />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

        <title>Graf2Ard - Nouveau fichier</title>
    </head>
    <body>
        <!-- Modal (contextual windows) (JavaScript) --> 
        <div id="modal-content"></div>

        <!-- NavBar (JavaScript) --> 
        <div class="navbar navbar-default navbar-static-top" role="navigation" id="navbar-content"></div>
        
        <div class="jumbotron">
            <div class="container">
                
                <!-- Menu dropdown for objects -->
                <?php require($inc_dir . "objects-choice.include.php"); ?>
                
            </div>
        </div>
        
        <div class="container-fluid">
            <div class="row" style="margin-top:5px">

                <!-- Javascript alert location -->
                <div class="col-xs-12" id="alert-location"></div>

            </div>
            <div class="row" style="margin-top:5px">
                <div class="col-xs-9">

                    <!-- Main grid -->
                    <div class="grid"><div id="sortable"></div></div>

                </div>

                <!-- Settings panel -->
                <div class="col-xs-3" id="settings" style="visibility: hidden"></div>
            </div>
            <div class="row" style="margin-top:5px">

                <!-- To DEBUG -->
                <div class="col-md-8" id="debug"></div>

            </div>
        </div>

        <!-- Javascript inclusion -->
        <script type="text/javascript" src="vendor/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="vendor/jquery-ui/jquery-ui-1.10.4.custom.min.js"></script>
        <script type="text/javascript" src="vendor/jquery-ui/jquery.ui.touch-punch.min.js"></script>
        <script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="vendor/mousetrap/mousetrap.min.js"></script>
        <script type="text/javascript" src="vendor/filesaver/FileSaver.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>main.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>object-settings.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>grid.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>keyboard-shortcut.js"></script>
    </body>
</html>