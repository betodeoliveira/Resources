// For all custom triggers
$("[mh-trigger-custom]").each(function () {
    // Get targets IDs
    let targetID = $(this).attr("mh-trigger-custom");
    // With the IDs get the elements
    let target = $("[mh-target-custom='" + targetID + "']");
    // Configurates the hover
    configurateHover(this, target);
});

// For all children triggers
$("[mh-trigger-children]").each(function () {
    // Get the targets inside
    let target = $(this).find("[mh-target-children]");
    // Configurates the hover
    configurateHover(this, target);
});

function configurateHover(trigger, target) {
    // When the trigger gets hovered
    $(trigger).on("mouseenter", function() {
        // Adds the hovered class to the trigger
        if($(trigger).attr("mh-get-hovered")) {
            $(trigger).addClass("hovered");
        }
        // Adds the hovered class to the target
        $(target).addClass("hovered");
    });

    // When the trigger gets hovered out
    $(trigger).on("mouseleave", function() {
        // Removes the hovered class to the trigger
        if($(trigger).attr("mh-get-hovered")) {
            $(trigger).removeClass("hovered");
        }
        // Removes the hovered class from the target
        $(target).removeClass("hovered");
    });
}