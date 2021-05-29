/* Put Object */
module.exports =
    async ({
        bucketName,
        objectKey,
        sourceFilepath
    }) => {
        const file = await require('fs/promises').readFile(sourceFilepath);
        return new Promise((resolve, reject) => {
            require('../client')
                .putObject({
                    Bucket: bucketName,
                    Key: objectKey,
                    Body: file,
                    ContentType: mime.getType(sourceFilepath)
                }, (err, data) => {
                    err ? reject(err) : resolve(data);
                });
        });
    }