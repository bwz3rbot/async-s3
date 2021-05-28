const fs = require('fs/promises');
const mime = require('mime');
(async () => {

    require('dotenv').config();

    const client = require('./aws/client');

    const file = await fs.readFile('test.mp4');
    client.putObject({
        Bucket: 'bucket-00',
        Key: 'test.mp4',
        Body: file,
        ContentType: mime.getType('test.mp4')
    }, (err, data) => {

        console.log(err || data);
    });

    const objects=await require('./aws/functions/list_objects')({
        bucketName:'bucket-00'
    });
    console.log(objects);

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