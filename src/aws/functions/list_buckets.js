/* List Buckets */
module.exports =
    async () => {
        return new Promise((resolve, reject) => {
            require('../client')
                .listBuckets(
                    (err, data) => {
                        err ? reject(err) :
                            resolve(data);
                    });
        });
    }