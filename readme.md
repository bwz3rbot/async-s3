# Async S3

Async S3 is an asynchronous API wrapper for the callback based Filebase Storage API - built on Amazon S3.

Using is simple.

Create a .env file:
```javascript
AWS_ACCESS_KEY_ID='*****'
AWS_SECRET_ACCESS_KEY='*****'
```

Call Functions in your code:
```javascript
/* Configure the client with API key and secret using .env file */
require('dotenv').config();

/* Create a bucket */
await require('../aws/functions/create_bucket')({
        bucketName:'my-bucket-007'
    });

/* Put Object (upload) */
await require('../aws/functions/put_object')({
        bucketName: 'my-bucket-007',
        objectKey: 'test.mp4',
        sourceFilepath: 'test.mp4'
    });

/* Get Object (download) */
const data = await require('./aws/functions/get_object')({
        bucketName: 'my-bucket-007',
        objectKey: 'test.mp4'
    });

await require('fs/promises').writeFile('output.mp4', data.Body);
```