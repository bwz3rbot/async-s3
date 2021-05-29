/* Create Bucket */
const client = require('../client');
module.exports =
    async ({
        bucketName
    }) => {
        return new Promise((resolve, reject) => {
            client.createBucket({
                Bucket: bucketName
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }