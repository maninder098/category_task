const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

module.exports = class uploadUtils {

    constructor() {
        this.storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public/userImages');
            },
            filename: function (req, file, cb) {

                // cb(null, Date.now() + path.extname(filextname.originalname));
             cb(null, Date.now() + '-' + file.originalname);

            }
        });
    }


    uploadFile(type = /jpg|jpeg|png/, fileSize = 20000000) {
        try {
            return multer({
                storage: this.storage,
                limits: { fileSize: fileSize },   // This limits file size to 2 million bytes(2mb)
                fileFilter: (req, file, cb) => {

                    const validFileTypes = type // Create regex to match jpg and png

                    // Do the regex match to check if file extenxion match
                    const extname = validFileTypes.test(path.extname(file.originalname).toLowerCase())
                    console.log("extname========",extname);
                    if (extname === true) {
                        // Return true and file is saved
                        return cb(null, true)
                    } else {
                        // Return error message if file extension does not match
                        return cb("Error: Images Only!")
                    }
                }
            });
        }
        catch (error) {
            console.log("Error get all :", err);
            Error.payload = err.errors ? err.errors : err.message;
            throw new Error();
        }
    }
}




// app.post('/upload', upload.single('image'), (req, res) => {
//   // 'image' is the name attribute in the form that contains the file input

//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   // File information is available in req.file
//   const fileInfo = {
//     filename: req.file.filename,
//     originalname: req.file.originalname,
//     size: req.file.size
//   };

//   res.status(200).json({
//     success: true,
//     message: 'File uploaded successfully',
//     file: fileInfo
//   });
// })
