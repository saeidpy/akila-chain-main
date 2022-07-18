"use strict";

/**
 *  development controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::development.development");
