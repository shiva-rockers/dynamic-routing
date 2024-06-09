export const responseConst = {
    /**Success */
    SUCCESS: { code: 200, message: 'Success' },
    ROUTE_REGISTERED: { code: 200, message: 'Route registered successfully' },
    ROUTE_UNREGISTERED: { code: 200, message: 'Route unregistered successfully' },
    /**Errors */
    SERVER_ERROR: { code: 500, message: 'Something went wrong' },
    INVALID_ROUTE_ACTION: { code: 500, message: 'Invalid rout action' },
    ROUTE_NOT_FOUND: { code: 500, message: 'Route not found' },
    NAME_REQUIRED: { code: 500, message: 'Invalid payload, name is required' },
    EMAIL_REQUIRED: { code: 500, message: 'Invalid payload, email is required' },

    CUSTOM_SUCCESS_MESSAGE: (message) => ({ code: 200, message }),
};