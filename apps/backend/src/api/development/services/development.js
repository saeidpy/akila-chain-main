'use strict';

/**
 * development service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::development.development');
