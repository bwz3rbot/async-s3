/* Put Object */
module.exports =
    async ({
        bucketName,
        objectKey
    }) => {
        return new Promise((resolve, reject) => {
            require('../client')
                .deleteObject({
                    Bucket: bucketName,
                    Key: objectKey
                }, (err, data) => {
                    err ? reject(err) : resolve(data);
                });
        });
    }