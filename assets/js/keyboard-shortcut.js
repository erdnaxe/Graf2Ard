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
    
    $('#new').modal();
});
Mousetrap.bind('mod+o', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    $('#open').modal();
});
Mousetrap.bind('mod+s', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    saveGrid();
});

// arduino export
Mousetrap.bind('mod+e', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    $('#export').modal();
});

// undo / redo
Mousetrap.bind('mod+z', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    //$.undone("undo");
});
Mousetrap.bind('mod+y', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    //$.undone("redo");
});

// copy / cut / paste / duplicate
Mousetrap.bind('mod+c', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    copyObject();
});
Mousetrap.bind('mod+x', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    cutObject();
});
Mousetrap.bind('mod+v', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    pasteObject();
});
Mousetrap.bind('mod+d', function(e) {
    if (e.preventDefault)
        e.preventDefault();
    else
        e.returnValue = false; // internet explorer
    
    duplicateObject();
});