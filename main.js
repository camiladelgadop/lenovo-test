(function() {
    document
        .getElementById('menu-hamburger')
        .addEventListener('click', function() {
            var menuPrimary = document.getElementById('menu-primary')
            
            if (menuPrimary.classList.contains('open')) {
                menuPrimary.classList.remove('open')
            } else {
                menuPrimary.classList.add('open');
            }
        });

    document.getElementById('filters-expand').addEventListener('click', function() {
        var filtersList = document.getElementById('filters-list')
        var button = document.getElementById('filters-expand');    

        if (filtersList.classList.contains('open')) {
            filtersList.classList.remove('open');
            button.classList.add('down');
        } else {
            filtersList.classList.add('open');
            button.classList.remove('down');
        }
    });
})()