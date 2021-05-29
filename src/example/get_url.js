(async () => {
    require('dotenv').config();
    const url = await require('../aws/functions/get_presigned_url')({
        bucketName: 'bucket-00',
        objectKey: 'test.mp4'
    });
    console.log(url);
})();