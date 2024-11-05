export default ({ env }) => ({
  auth: {
    secret: 'pX3YjhRIIaB90ntPKVumMw==',
  },
  apiToken: {
    salt: 'UjSK/wPdw9vqrT31rRYdcQ==',
  },
  transfer: {
    token: {
      salt: '/nXAwNKJ9FAGrs4sg+LAXw==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
