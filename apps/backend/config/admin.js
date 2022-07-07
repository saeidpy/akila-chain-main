module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"), //Enter your own secret
  },
    apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
