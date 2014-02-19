/*
 * Keyboard shortcut
 * --------------------------
 * This code is a part of the Graf2Ard project.
 * He has been created by erdnaxe.
 * This project is under GPLv2 license.
 */

// new / open / save
Mousetrap.bind('mod+n', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + n) invoqued !", "notice");
    $('#new').modal();
});
Mousetrap.bind('mod+o', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + o) invoqued !", "notice");
    $('#open').modal();
});
Mousetrap.bind('mod+s', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + s) invoqued !", "notice");
    $('#save').modal();
});

// arduino export
Mousetrap.bind('mod+e', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + e) invoqued !", "notice");
    $('#export').modal();
});

// undo / redo
Mousetrap.bind('mod+z', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + z) invoqued !", "notice");
    undoObject();
});
Mousetrap.bind('mod+y', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + y) invoqued !", "notice");
    redoObject();
});

// copy / cut / paste / duplicate
Mousetrap.bind('mod+c', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + c) invoqued !", "notice");
    copyObject();
});
Mousetrap.bind('mod+x', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + x) invoqued !", "notice");
    cutObject();
});
Mousetrap.bind('mod+v', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + v) invoqued !", "notice");
    pasteObject();
});
Mousetrap.bind('mod+d', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    log("Keyboard shortcut (mod + d) invoqued !", "notice");
    duplicateObject();
});