//
//
// VDWWD Bootstrap Datepicker Theme
// For Bootstrap 4 and Datepicker 1.9.0
//
// https://www.vanderwaal.eu
// https://getbootstrap.com
// https://github.com/uxsolutions/bootstrap-datepicker
//
//

$(document).ready(function () {

    //bind the datepicker to the correct textbox class
    $('.bootstrap-datepicker').datepicker({
        autoclose: true,
        todayHighlight: true,
        todayBtn: 'linked',
        language: 'en-US',
        orientation: 'bottom',
        templates: {
            leftArrow: '&laquo;',
            rightArrow: '&raquo;'
        }
    }).on('show', function () {

        //needed to generate space between the day of week row and the prev/next/month name row.
        //there are 3 rows in the tdhead without class names so this is my way to add some spacing between the two.

        if ($('.extraHeaderSpacer').length === 0) {
            $('<tr><td colspan="7" class="extraHeaderSpacer"></td></tr>').insertBefore($('.datepicker-days thead tr:last-of-type'));
        }
    });
});