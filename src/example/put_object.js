(async () => {
    require('dotenv').config();
    await require('../aws/functions/put_object')({
        bucketName: 'my-bucket-007',
        objectKey: 'test.mp4',
        sourceFilepath: 'test.mp4'
    });
})();