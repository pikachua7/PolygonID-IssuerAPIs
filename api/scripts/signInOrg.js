const orgInfo = require("../constants/orgInfo");
const { postRequest } = require("./postRequest");
const { createUrl } = require("../constants/apiUrls");


const url = createUrl("orgs", "signin");
postRequest(url, orgInfo, {});