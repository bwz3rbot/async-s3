(async () => {
    require('dotenv').config();
    const data = await require('./aws/functions/get_object')({
        bucketName: 'bucket-00',
        objectKey: 'test.mp4'
    });

    await require('fs/promises').writeFile('output.mp4', data.Body);

})();