// Close the Mobile Version of Navbar after clicking a menu item
$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }

    //run instantly and then goes after (setTimeout interval)
});
