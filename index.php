<!DOCTYPE html>
<?php
// Assets directory definition
$assets_dir = "assets/";
$css_dir = $assets_dir . "css/";
$js_dir = $assets_dir . "js/";
$img_dir = $assets_dir . "img/";
$objects_dir = $assets_dir . "objects/";

// Vendor directory definition (all librairies)
$vendor_dir = "vendor/";
$css_vendor_dir = $vendor_dir . "css/";
$js_vendor_dir = $vendor_dir . "js/";

// App directory definition
$app_dir = "app/";
$inc_dir = $app_dir . "include/";

// Internet librairies
$glibs = "https://ajax.googleapis.com/ajax/libs/";
$osslibs = "https://oss.maxcdn.com/libs/";

// Security for includes...
$main_loaded = "yes";
?>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Un générateur de code Arduino à partir de grafcet." />
        <meta name="author" content="erdnaxe" />
        <link href="<?php echo $css_vendor_dir; ?>bootstrap.min.css" rel='stylesheet' type='text/css' />
        <link href="<?php echo $css_dir; ?>main.css" rel='stylesheet' type='text/css' />

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="<?php echo $osslibs; ?>html5shiv/3.7.0/html5shiv.js"></script>
        <script src="<?php echo $osslibs; ?>respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

        <title>Graf2Ard - erdnaxe</title>
    </head>
    <body>
        <!-- Modal (contextual windows) (JavaScript) --> 
        <div id="modal-content"></div>

        <!-- NavBar (JavaScript) --> 
        <div class="navbar navbar-default navbar-static-top" role="navigation" id="navbar-content"></div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">

                    <!-- Menu dropdown for objects -->
                    <?php require($inc_dir . "objects-choice.include.php"); ?>

                </div>
            </div>
            <div class="row" style="margin-top:5px">

                <!-- Javascript alert location -->
                <div class="col-md-12" id="alert-location"></div>

            </div>
            <div class="row" style="margin-top:5px">
                <div class="col-md-9">

                    <!-- Main grid -->
                    <div class="grid"></div>

                </div>

                <!-- Settings panel -->
                <div class="col-md-3" id="settings" style="visibility: hidden"></div>
            </div>
            <div class="row" style="margin-top:5px">

                <!-- To DEBUG -->
                <div class="col-md-8" id="debug"></div>

            </div>
        </div>

        <!-- Javascript inclusion -->
        <script type="text/javascript" src="<?php echo $glibs; ?>jquery/1.11.0/jquery.min.js"></script>
        <script type="text/javascript" src="<?php echo $glibs; ?>jqueryui/1.10.4/jquery-ui.min.js"></script>
        <script type="text/javascript" src="<?php echo $js_vendor_dir; ?>jquery.ui.touch-punch.min.js"></script>
        <script type="text/javascript" src="<?php echo $js_vendor_dir; ?>bootstrap.min.js"></script>
        <script type="text/javascript" src="<?php echo $js_vendor_dir; ?>mousetrap.min.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>main.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>grid.js"></script>
        <script type="text/javascript" src="<?php echo $js_dir; ?>keyboard-shortcut.js"></script>
    </body>
</html>