/* Get Pre-Signed URL */
module.exports =
    async ({
        bucketName,
        objectKey,
        expiresIn
    }) => {
        return new Promise((resolve, reject) => {
            require('../client').getSignedUrl('getObject', {
                Bucket: bucketName,
                Key: objectKey,
                Expires: expiresIn || 60 * 10
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }