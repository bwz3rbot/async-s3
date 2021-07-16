(async () => {
    require('dotenv').config();
    await require('../aws/functions/put_object')({
        bucketName: 'test-bucket-1622508445268',
        objectKey: 'test.json',
        contentType:'json',
        object:JSON.stringify({
            key:'value'
        })
    });
})();