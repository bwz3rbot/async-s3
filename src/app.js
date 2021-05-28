const fs = require('fs/promises');
const mime = require('mime');
(async () => {

    require('dotenv').config();

    const data = await require('./aws/functions/get_object')({
        bucketName: 'bucket-00',
        objectKey: 'test.mp4'
    });
    await fs.writeFile('output.mp4',data.Body);

    // client.putBucketAcl({
    //     Bucket: 'bucket-00',
    //     GrantFullControl: 'id=abc123'
    // }, (err, data) => {
    //     if (err) return console.log;
    //     console.log(data);
    // });

    // client.getBucketAcl({
    //     Bucket: 'bucket-00',
    //     ExpectedBucketOwner: 'abc123'
    // }, (err, data) => {
    //     if (err) console.log;
    //     console.log(data.Grants[0]);
    // });


    // const data = await require('./aws/functions/create_bucket')('bucket-00');


    // const data = await require('./aws/functions/list_buckets')();

    // console.log(data);


})();