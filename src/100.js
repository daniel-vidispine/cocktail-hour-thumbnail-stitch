function collectThumbnailList(job, api) {
    // ...get thumbnails for item
    var jobId = job.getData("itemId");

    var thumbs = api.path("item").path(jobId).queryParam("content", "thumbnail").queryParam("methodType", "AUTO").queryParam("noauth-url", "true").rich().get();
    for(var uri in thumbs.output['thumbnails']['uri'])
	logger.log("Thumbnail" + thumbs.output['thumbnails']['uri'][uri]);

    job.fail('Job not implemented... ');
}collectThumbnailList(job, api);