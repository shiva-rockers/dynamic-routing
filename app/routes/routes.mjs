import { Router } from "express";
import { routConst } from "../constants/routes.mjs";
import { dynamicRouteController } from "./dynamic-route-handler/controllers.mjs";

const router = Router();

router.post(routConst.ROUTE, dynamicRouteController);

export default router;