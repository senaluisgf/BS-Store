import multer from "multer";
import { storageImg } from "../utils/multer-config";

export const uploadImg = multer({ storage: storageImg });