class RouteService {
    routes = {};

    isRouteExist(routeName) {
        return routeName in this.routes;
    }
    
    getRouteHandler(routeName) {
        return this.routes[routeName];
    }

    registerRouteHandler(route, routeHandler) {
        this.routes[route] = routeHandler;
    }

    listRegisteredRoutes() {
        return Object.values(this.routes).map(route => ({ 
            routeName: route.routeName,
            type: route.type,
        }));
    }

    deleteRouteHandler(routeName) {
        return delete this.routes[routeName];
    }
}

export default new RouteService();