(async () => {
    require('dotenv').config();
    const data = await require('../aws/lib').getObject({
        bucketName: 'test-bucket-1622508445268',
        objectKey: 'test.json'
    });

    await require('fs/promises').writeFile('test.json', data.Body);

})();