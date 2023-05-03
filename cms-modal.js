// Get all triggers
$("[cms-modal-trigger]").each(function () {
    // Get the ID of the trigger
    let itemID = $(this).attr("cms-modal-trigger");
    // Select the target that has the same ID
    let target = $("[cms-modal-target='" + itemID + "']");
    // Configurates the click event 
    configurateClick(this, target);
});

function configurateClick(trigger, target) {
        // When the trigger gets cleked
        $(trigger).on("click", function() {
            // Hide all items
            $("[cms-modal-target]").css("display", "none");
            // Show just the item that has the same ID from the trigger
            $(target).css("display", "block");
        });
}