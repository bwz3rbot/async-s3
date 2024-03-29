/* Put Object */
const client = require('../config/client');
module.exports =
    async ({
        bucketName,
        objectKey,
        object,
        contentType
    }) => {
        return new Promise((resolve, reject) => {
            client.putObject({
                Bucket: bucketName,
                Key: objectKey,
                Body: object,
                ContentType: contentType
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }