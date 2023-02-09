const apiUrls = {
    base: "https://api-staging.polygonid.com/v1",
    orgs: {
        base: "/orgs",
        create: "/account-management",
        signin: "/sign-in",
        activate: "/account-management/activate",
        signout: "/sign-out",
        refresh: "/account-management/refresh-token"
    },

    issuer: {
        base: "/issuers", //create
        createSchema: "/schemas", //issuerID is required :https://api-staging.polygonid.com/v1/issuers/{issuerID}/schemas
        offers: "/offers", //schemaID is required : https://api-staging.polygonid.com/v1/issuers/{issuerID}/schemas
        offerQr: "/offers-qrcode" //offerID is required : https://api-staging.polygonid.com/v1/offers-qrcode/{offerID}
    }
}

const createUrl = (key, apiName) => {
    return `${apiUrls.base}${apiUrls[key].base}${apiName ? apiUrls[key][apiName] : ""}`;
}

const createIssuerSchemaClaimUrl = (orgId, apiName, schemaToCreateClaim) => {
    const claimApiSuffix = schemaToCreateClaim
        ? `/${schemaToCreateClaim}${apiUrls.issuer.offers}`
        : "";
    return `${apiUrls.base}${apiUrls.issuer.base}/${orgId}${apiUrls.issuer[apiName]}${claimApiSuffix}`;
};

module.exports = {
    apiUrls,
    createUrl,
    createIssuerSchemaClaimUrl
}