(async () => {
    require('dotenv').config();
    const object = await require('../aws/functions/get_object')({
        bucketName: 'test-bucket-1622508445268',
        objectKey: 'test.json'
    });
    console.log(Buffer.from(object.Body));
})();