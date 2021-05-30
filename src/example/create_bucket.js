(async () => {
    require('dotenv').config();
    await require('../aws/functions/create_bucket')({
        bucketName:'my-bucket-007'
    });
})();