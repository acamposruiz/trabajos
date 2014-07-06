$.ajax({
    //url: 'http://www.gipom.com/apimovil/tag/incidents',
    url: 'http://www.reddit.com/.json',
    type: 'GET',
    data: {},
    dataType: 'JSON',
    //data: {param1: 'value1'},
})
    .done(function(data) {
        console.log("success");
        console.dir(data);
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });


// //--------------------------------------------------------

$.getJSON('http://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    format: 'json'
}, function(json, textStatus) {
    console.log('hj');
    console.dir(json);
});
