module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '71de8a8528d1b2e275d0735859f946e9'),
  },
});
