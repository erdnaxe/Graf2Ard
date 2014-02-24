<?php
/*
 * Main file (index)
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

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

        <a href="https://github.com/erdnaxe/Graf2Ard" target="about:blank">
            <img class="fork-banner"
                 src="https://github-camo.global.ssl.fastly.net/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" 
                 alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png">
        </a>
        
        <div class="jumbotron">
            <div class="container">

                <!-- Menu dropdown for objects -->
                <?php require("app/include/objects-choice.include.php"); ?>

            </div>
        </div>

        <div class="container-fluid">
            <div class="row alert-container">

                <!-- Javascript alert location -->
                <div class="col-xs-12" id="alert-location"></div>

            </div>
            <div class="row">
                <div class="col-xs-9">

                    <!-- Main grid -->
                    <div class="grid"><div id="sortable"></div></div>

                </div>

                <!-- Settings panel -->
                <div class="col-xs-3" id="settings" style="visibility: hidden"></div>
            </div>
        </div>

        <!-- JQuery / UI -->
        <script type="text/javascript" src="vendor/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="vendor/jquery-ui/jquery-ui-1.10.4.custom.min.js"></script>
        <script type="text/javascript" src="vendor/jquery-ui/jquery.ui.touch-punch.min.js"></script>

        <!-- Bootstrap -->
        <script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>

        <!-- Librairy to open download box -->
        <script type="text/javascript" src="vendor/filesaver/FileSaver.js"></script>

        <!-- My javascript -->
        <script type="text/javascript" src="assets/js/main.js"></script>
        <script type="text/javascript" src="assets/js/object-settings.js"></script>
        <script type="text/javascript" src="assets/js/grid.js"></script>

        <!-- Keyboard support -->
        <script type="text/javascript" src="vendor/mousetrap/mousetrap.min.js"></script>
        <script type="text/javascript" src="assets/js/keyboard-shortcut.js"></script>
    </body>
</html>