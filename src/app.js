const fs = require('fs/promises');
const mime = require('mime');
(async () => {

    require('dotenv').config();

    const client = require('./aws/client');

    client.getSignedUrl('getObject', {
        Bucket: 'bucket-00',
        Key: 'test.mp4',
        Expires: 60
    }, (err, data) => {
        console.log(err || data);
    });
})();