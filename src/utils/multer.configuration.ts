import * as path from 'path';
import multer = require('multer');

const editFileName = (req, file, callback) => {
  const split = file.originalname.split('.');
  const ext = split[split.length - 1];
  const name = Date.now() + Math.round(Math.random() * (100 - 999 + 1) - 100);
  callback(null, `${name}.${ext}`);
};

const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const multerConfiguration = {
  storage: multer.diskStorage({
    destination: path.join('.', 'storage'),
    filename: editFileName,
  }),
  fileFilter: imageFileFilter,
};