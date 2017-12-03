$(document).ready(function () {
    $('.summary').click(function () {
        console.log('click');
        $(this).parent().find('.description').toggleClass('showDesc');
        $(this).parent().find('.arrow').toggleClass('arrowActive');
    })

    $('.btnSort').click(function() {
        $('.btnSort').removeClass('btnSortActive');
        $(this).addClass('btnSortActive');

        var type = this.id.substr(4, this.id.length -1);

        sort(type);
    })

    $('#filter').keyup(function() {
        var filter = this.value.toUpperCase();
        var holidays = $('#holidays').children('.holiday');

        for (i = 0; i < holidays.length; i++) {
            if (holidays[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                holidays[i].style.display = "";
            } else {
                holidays[i].style.display = "none";
            }
        }
    })

    function sort(type) {
        if (type == "Price") {
            var items = $('#holidays').children('.holiday').sort(function(a,b) {
                var priceA = parseInt($(a).find('.priceValue').text().replace('£', '').replace(/,/g, ''));
                var priceB = parseInt($(b).find('.priceValue').text().replace('£', '').replace(/,/g, ''));
    
                return (priceA < priceB) ? -1 : (priceA > priceB) ? 1 : 0;
            })
        }
        else if (type == "Alpha") {
            var items = $('#holidays').children('.holiday').sort(function(a,b) {
                var letterA = $(a).find('.resortTitle').text();
                var letterB = $(b).find('.resortTitle').text();
    
                return (letterA < letterB) ? -1 : (letterA > letterB) ? 1 : 0;
            })
        }
        else {
            var items = $('#holidays').children('.holiday').sort(function(a,b) {
                var letterA = parseInt($(a).find('.starRating').data('stars'));
                var letterB = parseInt($(b).find('.starRating').data('stars'));
    
                return (letterA < letterB) ? -1 : (letterA > letterB) ? 1 : 0;
            })
        }
        console.log(type);
        console.log("sort");

        $('#holidays').append(items);
    }
});