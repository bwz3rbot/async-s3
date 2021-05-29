/* Put Object */
const client = require('../client');
module.exports =
    async ({
        bucketName,
        objectKey
    }) => {
        return new Promise((resolve, reject) => {
            client.deleteObject({
                Bucket: bucketName,
                Key: objectKey
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }