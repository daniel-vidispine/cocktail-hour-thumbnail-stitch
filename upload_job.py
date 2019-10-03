import requests
from requests.exceptions import HTTPError
from requests.auth import HTTPBasicAuth

"""
A script that uploads the stitch job. 
"""
API_URL = 'http://10.130.182.156:8080/API/task-definition/jobtype/THUMBNAIL_STITCH/step/100/script'
API_USER = 'admin'
API_PASS = 'cocktail'
try:
    js_file = open("./src/100.js")
    status = requests.put(url=API_URL, auth=HTTPBasicAuth(API_USER, API_PASS),
                          headers={"Content-Type": "application/javascript"}, verify=False, data=js_file)
    print("Status: ", status.status_code)

except HTTPError as e:
    print(e)


