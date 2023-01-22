const AdminJS = require("adminjs");
const {
    // Your sidebar modules
} = require("../models");
const adminJS = new AdminJS({
    rootPath: "/admin",
    resources: [
        // Your sidebar modules
    ],
    branding: {
        companyName: "XYZ",
        softwareBrothers: "false",
    },
});
module.exports = adminJS;