function collectThumbnailList(job, api) {
  var itemId = job.getData("ITEM-VX-346");
  var thumbs = getThumbnailURIs(api, itemId);
  var response = http.uri("https://editmate-dev.myvidispine.com/APInoauth/stitch?geometry=150x100+0+0&" + thumbs).header('accept', 'image/png').dataType('image/png').rich().get();
  var file = api.path("storage").path("STORAGE-VX-1").path("file/data").input(response.responseBytes, 'application/octet-stream').post();
  var shapeId = api.path("item/" + itemId).path("shape/placeholder").input({}, 'json').dataType('text').queryParam("tag", "em_thumbnail").queryParam("container", "0").queryParam("video", "1").post();
  var component = api.path("item/" + itemId).path("shape/" + shapeId).path("component/placeholder").queryParam("type", "video").post();
  api.path("item/" + itemId).path("shape/" + shapeId).path("component/" + component.id).path("file/" + file.id).put();
}

function getThumbnailURIs(api, itemId) {
  var thumbs = api.path("item").path(itemId).queryParam("content", "thumbnail").queryParam("methodType", "AUTO").queryParam("noauth-url", "true").rich().get();
  var stitch = '?tile=1x1&'
  var uris = thumbs.output['thumbnails']['uri'];
  var array = [];
  if (uris.length > 20) {
    for (var i = 0; i < uris.length; i += Math.ceil(uris.length / 20)) {
      array.push("&uri=" + uris[i]);
    }
  } else {
    for (var i = 0; i < uris.length; i += 1) {
      array.push("&uri=" + uris[i]);
    }
  }
  var tile = "&tile=" + array.length + "x1";
  return tile + array.join('');
}

collectThumbnailList(job, api);