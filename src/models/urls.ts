import { model, Schema, Document } from "mongoose";

interface IURL extends Document {
    originalUrl: string,
    shortUrl: string,
    isValid: boolean,
    dateOfCreation:Date,
}

const URLSchema = new Schema ({
    originalUrl: {
        type:String,
        unique: true
    },
    shortUrl: {
        type:String,
        unique:true,
    },
    isValid: {
        type:Boolean,
        default: true,
    },
    dateOfCreation:{
        type:Date,
        default: new Date().getDate()
    },
});

const URLModel = model<IURL>("Url", URLSchema)
export {URLModel, IURL}