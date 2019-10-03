# cocktail-hour-thumbnail-stitch

###Cocktail-hour for a collaborative attempt at building a thumbnail stitcher in VS!

Background: In one of our project it might be needed to have thumbnails stored as so called 'sprite sheets' so that they can be shown faster than when fetched individually.

In Vidispine server there is a existing endpoint that can be used to stitch images together, however it is quite limited (as we might come to find out).
The plan is to do a collaborative effort in trying to overcome these limitations by creating a custom jobs which makes use of this existing endpoint to 
create spritesheets and metadata that somewhat conforms to the webvtt standard (metadata which describes where in the spritesheet the images can be found, possibly with timecodes). 

More about the existing stitch endpoint in VS: http://apidoc.vidispine.com/latest/ref/misc/stitching.html?highlight=stitch
Webvtt: https://en.wikipedia.org/wiki/WebVTT

Example webvtt file and spritesheet created with another application can be found in /examples/

A test instance can be found at http://10.130.182.156:8080  with credentials: user = 'admin', pass = 'cocktail'
A custom job called ` THUMBNAIL_STITCH ` has been created on the VS instance which is empty except for a example function which prints out links to the item thumbnails.
It has a step 100 in which the logic can be placed in form of a javascript.

A script 'upload_job.py' will upload the javascript that is in the /src directory to the job step.

An exampe item, VX-1 that has about 1000 thumbnails is provided.

Run the job with /API/job?type=THUMBNAIL_STITCH&jobmetadata=itemId%3DVX-1



