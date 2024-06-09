import path from 'path';
import { responseConst } from "../../constants/responses.mjs";
import { routeActionTypeConst } from "../../constants/routes.mjs";
import userModel from "../../models/user.mjs";
import { logger } from '../../utils/logger.mjs';

const { error } = logger("route handler");

class RouteHandler {
    routeName;
    action;
    type;

    constructor(routeName, action, type) {
        this.routeName = routeName;
        this.action = action;
        this.type = type;
    }

    async controller(req, res) {
        if (this.type === routeActionTypeConst.CREATE_USER) return this.createUser(req, res);
        if (this.type === routeActionTypeConst.APPEND_PARAMS) return this.appendParams(req, res);
        if (this.type === routeActionTypeConst.DOWNLOAD_FILE) return this.downloadFile(req, res);
        return res.reply(responseConst.INVALID_ROUTE_ACTION);
    }

    async createUser(req, res) {
        /** create user in database */
        if (!req.body?.username) return res.reply(responseConst.NAME_REQUIRED);
        if (!req.body?.email) return res.reply(responseConst.EMAIL_REQUIRED);

        try {
            const payload = {
                username: req.body?.username,
                email: req.body?.email,
            };
            const response = await userModel.create(payload);
            return res.reply(responseConst.SUCCESS, response);
        } catch (err) {
            error(err);
            return res.reply(responseConst.SERVER_ERROR);
        }
    }

    async appendParams(req, res) {
        if (!req.body?.name) return res.reply(responseConst.NAME_REQUIRED);
        return res.reply(responseConst.CUSTOM_SUCCESS_MESSAGE(`${this.routeName} ${req.body?.name}`));
    }

    async downloadFile(req, res) {
        if (!req.body?.fileName) return res.reply(responseConst.NAME_REQUIRED);
        const __dirname = new URL('../../', import.meta.url).pathname;
        const file = path.join(__dirname, '..', `public/assets/${req.body?.fileName}`);
        return res.download(file);
    }
}

export default RouteHandler;