import { model, Schema, Document } from "mongoose";

function sizeLimit(val: String) {
    return val.length <= 2048;
}

interface IURL extends Document {
    originalUrl: string,
    shortUrl: string,
    isValid: boolean,
    dateOfCreation:Date,
    urlCode: string
}

const URLSchema = new Schema ({
    originalUrl: {
        type:String,
        unique: true,
        validate: [sizeLimit, "Original link exceeds the size limit of 2048 bytes"]
    },
    shortUrl: {
        type:String,
        unique:true,
    },
    urlCode: {
        type: String,
        unique:true,
    },
    isValid: {
        type:Boolean,
        default: true,
    },
    dateOfCreation:{
        type:Date,
        default: new Date().getDate(),
        expires: 86400000, //using ms
    },
});

const URLModel = model<IURL>("Url", URLSchema)
export {URLModel, IURL}