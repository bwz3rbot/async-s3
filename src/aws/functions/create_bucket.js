/* Create Bucket */
module.exports =
    async (bucketName) => {
        return new Promise((resolve, reject) => {
            require('../client')
                .createBucket({
                    Bucket: bucketName
                }, (err, data) => {
                    err ? reject(err) : resolve(data);
                });
        });
    }