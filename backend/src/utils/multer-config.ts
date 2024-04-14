import multer from "multer";
import path from "path";

export const storageImg = multer.diskStorage({
  destination: (req, file, callback) => {
    return callback(null, path.resolve('public/img'));
  },
  filename: (req, file, callback) => {
    const time = new Date().getTime();
    const filename = `${time}_${file.originalname.replace(' ', '-')}`;
    return callback(null, filename);
  }
});