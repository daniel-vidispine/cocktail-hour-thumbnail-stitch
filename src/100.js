function collectThumbnailList(job, api) {
    // ...get thumbnails for item
    var jobId = job.getData("itemId");

    // var thumbs = api.path("item").path(jobId).queryParam("content", "thumbnail").queryParam("methodType", "AUTO").queryParam("noauth-url", "true").rich().get();
  	var thumbs = getThumbnailURIs(jobId)
    // for(var uri in thumbs.output['thumbnails']['uri'])
	// logger.log("Thumbnail" + thumbs.output['thumbnails']['uri'][uri]);

    var response = http.uri("http://localhost:8080/APInoauth/stitch?format=jpeg&tile=10x4&" + thumbs).header('accept', 'image/jpeg').rich().get();

	api.path("storage").path("VX-1").path("file/data").input(response.response, 'application/octet-stream').post();
    // job.fail('Job not implemented... ');
}collectThumbnailList(job, api);

function getThumbnailURIs(itemId) {
  var thumbs = api.path("item").path(itemId).queryParam("content", "thumbnail").queryParam("methodType", "AUTO").queryParam("noauth-url", "true").rich().get();

  var uris = thumbs.output['thumbnails']['uri'];

  var array = [];

  for (var i = 0; i < 1000; i += 25) {
      array.push('uri=' + uris[i]);
  };

  return array.join('&')
}