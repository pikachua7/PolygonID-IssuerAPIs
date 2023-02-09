const { postRequest } = require("./postRequest");
const { createUrl } = require("../constants/apiUrls");
const { token } = require("../constants/token")

const url = createUrl("orgs", "activate");
postRequest(url, {}, { Authorization: `bearer ${token}` });
