import express from 'express';
import routeHandler from './routes/routes.mjs';

import { logger } from './utils/logger.mjs';
import { featureConst, messageConst } from './constants/xport.mjs';
import { responderMiddleware } from './middlewares/responder.mjs';
import { connectMongo } from './config/db.mjs';

/** database connection */
connectMongo();

// declarations
const app = express();
const port = process.emit.PORT ?? 8000;
const { log } = logger(featureConst.APP);

// route middlewares
app.use(express.json());
app.use(responderMiddleware);
app.use(routeHandler);

// serving on defined port
app.listen(port, () => log(`${messageConst.SERVER_RUNNING} ${port}`));