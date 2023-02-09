const orgInfo = require("../constants/orgInfo");

const { createUrl } = require("../constants/apiUrls");
const { postRequest } = require("./postRequest");

const url = createUrl("orgs", "create")
console.log(url)

postRequest(url, orgInfo)