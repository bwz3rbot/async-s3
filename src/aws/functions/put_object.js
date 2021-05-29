/* Put Object */
module.exports =
    async ({
        filename,
        filepath,
        bucketName
    }) => {
        const file = await require('fs/promises').readFile(filepath);
        return new Promise((resolve, reject) => {
            require('../client')
                .putObject({
                    Bucket: bucketName,
                    Key: filename,
                    Body: file,
                    ContentType: mime.getType(filepath)
                }, (err, data) => {
                    err ? reject(err) : resolve(data);
                });
        });
    }