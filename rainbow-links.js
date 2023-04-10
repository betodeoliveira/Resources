// Gets the items for Text Links
let textLinkColors = $(".rainbow-links_text-links-list").children().length;
// Gets the items for Link Blocks
let linkBlockColors = $(".rainbow-links_link-blocks-list").children().length;

// Configurates the Text Links
$("[rainbow-text-link]").each(function (index) {
    // Saves the original color
    let originalColor = $(this).css("color");
    // Sets what happen on mouse hover
    $(this).mouseenter(function() {
        // Randoms a number between available options
        let randomNum = Math.floor(Math.random() * textLinkColors);
        // Gets the color from the random item
        let selectedColor = $(".raindow-links_text-link-item").eq(randomNum).css("color");
        // Sets the color of the link
        $(this).css("color", selectedColor);
    });
    // Sets what happen on mouse hover out
    $(this).mouseleave(function() {
        // Sets the color of the link to the original color
        $(this).css("color", originalColor);
    });
});

// Configurates the Link Blcks
$("[rainbow-link-block]").each(function (index) {
    // Saves the original color
    let originalColor = $(this).css("color");
    // Saves the background color
    let originalBackgroundColor = $(this).css("background-color");
    // Sets what happen on mouse hover
    $(this).mouseenter(function() {
        // Randoms a number between available options
        let randomNum = Math.floor(Math.random() * linkBlockColors);
        // Gets the color from the random item
        let selectedColor = $(".rainbow-links_link-block-item").eq(randomNum).css("color");
        // Gets the background color from the random item
        let selectedBackgroundColor = $(".rainbow-links_link-block-item").eq(randomNum).css("background-color");
        // Sets the color of the link
        $(this).css("color", selectedColor);
        // Sets the background color of the link
        $(this).css("background-color", selectedBackgroundColor);
    });

    $(this).mouseleave(function() {
        // Sets the color of the link to the original color
        $(this).css("color", originalColor);
        // Sets the background color of the link to the original color
        $(this).css("background-color", originalBackgroundColor);
    });
});