import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Choose your desired destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname) // Choose your desired filename format
  }
});

const upload = multer({ storage: storage }).array('images');


const fileUploadMiddleware = (req, res, next) => {
    upload(req, res, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send(JSON.stringify({
          status: 'error',
          message: 'An error occurred when uploading files!'
        }));
      }
  
      next();
    });
};

export default fileUploadMiddleware