const { postRequest } = require("./postRequest");
const { createUrl } = require("../constants/apiUrls");
const { issuerInfo } = require("../constants/issuerInfo");
const { token } = require("../constants/token")



const url = createUrl("issuer");
postRequest(
    url,
    issuerInfo,
    { Authorization: `bearer ${token}` },
);