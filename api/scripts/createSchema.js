const { postRequest } = require("./postRequest");
const { createIssuerSchemaClaimUrl } = require("../constants/apiUrls");
const { token } = require("../constants/token");
const { schemaStructure } = require("../constants/schemaStructure");
const { parseOrgIdFromToken } = require("../constants/parseJwt");


const orgId = parseOrgIdFromToken(token);
const url = createIssuerSchemaClaimUrl(orgId, "createSchema");
postRequest(url, schemaStructure, { Authorization: `bearer ${token}` });