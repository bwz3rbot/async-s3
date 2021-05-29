(async () => {
    require('dotenv').config();
    const objectsBeforeDeleted = await require('../aws/functions/list_objects')({
        bucketName: 'bucket-00'
    });

    console.log(objectsBeforeDeleted);
    const deleted = await require('../aws/functions/delete_object')({
        bucketName: 'bucket-00',
        objectKey: 'test.mp4'
    });

    const objectsAfterDeleted = await require('../aws/functions/list_objects')({
        bucketName:'bucket-00'
    });

    console.log(objectsAfterDeleted);



})();