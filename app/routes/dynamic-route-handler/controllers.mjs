import { featureConst } from "../../constants/features.mjs";
import { logger } from "../../utils/logger.mjs";

import dynamicRouteService from "../../services/route-service.mjs";
import { routeActionConst } from "../../constants/routes.mjs";
import { responseConst } from "../../constants/responses.mjs";
import RouteHandler from "./handler.mjs";

const { error } = logger(featureConst.DYNAMIC_ROUTE_CONTROLLER);

/**
 * 
 * @param req.body { 
 *      action: register-route | unregister-route | re_register-route | list-registered-routes | null, 
 *      type: download-file | create-user | append-params | null
 * }
 * @param res.params { routeName: string }
 */
export const dynamicRouteController = async (req, res) => {
    try {
        if ([routeActionConst.REGISTER_ROUTE, routeActionConst.RE_REGISTER_ROUTE].includes(req.body.action)) {
            const routeHandler = new RouteHandler(req.params.routeName, req.body.action, req.body.type);
            dynamicRouteService.registerRouteHandler(req.params.routeName, routeHandler);
            return res.reply(responseConst.ROUTE_REGISTERED);
        }

        if (routeActionConst.UNREGISTER_ROUTE === req.body.action) {
            dynamicRouteService.deleteRouteHandler(req.params.routeName);
            return res.reply(responseConst.ROUTE_UNREGISTERED);
        }

        if (routeActionConst.LIST_REGISTER_ROUTE === req.body.action) {
            const routes = dynamicRouteService.listRegisteredRoutes(req.params.routeName);
            return res.reply(responseConst.SUCCESS, routes);
        }

        if (!dynamicRouteService.isRouteExist) {
            return res.reply(responseConst.INVALID_ROUTE_ACTION);
        }

        const routeHandler = dynamicRouteService.getRouteHandler(req.params.routeName);
        if (!routeHandler) return res.reply(responseConst.ROUTE_NOT_FOUND);

        /** execute controller of RouteHandler */
        await routeHandler.controller(req, res);
        
    } catch (err) {
        error(err);
        return res.reply(responseConst.SERVER_ERROR);
    }
};