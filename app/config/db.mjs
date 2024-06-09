import mongoose from 'mongoose';
import { logger } from '../utils/logger.mjs';

const mongodbEndpoint = process.env.MONGODB_ENDPOINT;
const { log, error } = logger("db config");

export const connectMongo = async () => {
    try {
        await mongoose.connect(mongodbEndpoint);
        log(`Connected to database`);
    } catch(err) {
        error(err);
    }
};