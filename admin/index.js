const AdminJS = require("adminjs");
const { User, Industry, Technologies, Client } = require("../models");
const sidebarGroups = {
  user: {
    name: "User Management",
    icon: "User",
  },
  masterdata:{
    name: "Master Data",
    icon: "DataBase"
  }
};
const adminJS = new AdminJS({
  rootPath: "/admin",
  loginPath: "/admin/login",
  resources: [
    {
      resource: User,
      options: {
        parent: sidebarGroups.user,
      },
    },
    {
      resource: Industry,
      options: {
        parent: sidebarGroups.masterdata,
      },
    },
    {
      resource: Technologies,
      options: {
        parent: sidebarGroups.masterdata,
      },
    },
    {
      resource: Client,
      options: {
        parent: sidebarGroups.masterdata,
      },
    },
  ],
  branding: {
    companyName: "Oneture",
    softwareBrothers: false,
  },
});
module.exports = adminJS;
