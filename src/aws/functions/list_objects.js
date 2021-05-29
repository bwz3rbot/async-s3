/* List Objects */
module.exports =
    async ({
        bucketName
    }) => {
        return new Promise((resolve, reject) => {
            require('../client').listObjects({
                Bucket: bucketName
            }, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    }