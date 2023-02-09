const jwt_decode = require("jwt-decode");

const parseOrgIdFromToken = (token) => {
    const {
        account: { organization },
    } = jwt_decode(token);
    return organization;
};

module.exports = {
    parseOrgIdFromToken,
};