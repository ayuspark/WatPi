$(function () {
    console.log("$ ready from rover.js!");

    $('#rover').on('mousedown', function (e) {
        let direction = e.target.id,
            data_to_django = JSON.stringify({ 'direction': direction });
        console.log(e.target);
        console.log($("#" + direction).find('a').attr('href'));
        $.ajax({
            url: $("#" + direction).find('a').attr('href'),
            method: 'get',
            data: data_to_django,
            success: function (response) {
                console.log('response:', JSON.parse(response))
            }
        });
    })

    $('#rover').on('mouseup', function (e) {
        console.log('mouseup, stop')
        $.ajax({
            url: "/dashboard/rover/stop",
            method: 'get',
        })
    })
    

});