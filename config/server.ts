export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: ['awhQ9qll/QBSqqtw0B6F7w==', 'VPGSRVgAbuiRfh2PTpyZgg==', '2V7TFLcLlMcdGkGoQkYbtg==', 'YzRnbY2fOW+gnM8z6sdp1w=='],
  },
});
