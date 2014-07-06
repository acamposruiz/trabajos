// $.get('http://www.rtvval.es/api/videos.json', {
//     lastDays: 3
// }, function(data) {

// });

$.getJSON("http://www.rtvval.es/api/videos.json?lastDays=3&callback=?", function(data) {
    console.log('hecho');
});


// data = '';


// $.each(data.items, function(index, val) {
//     $('body ul.items-container').append('<li><img src="' + val.img + '" alt="">Video:<a href="' + val.videolink + '">' + val.videoname + '</a> Programa:<a href="' + val.programalink + '">' + val.programaname + '</a></li>')
// });

// $.each(data.totalPages, function(index, val) {
//     $('body .paginator').append('<li><a href="">' + index + '</a></li>')
// });
