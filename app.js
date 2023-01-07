module.exports = app => {
    const store = {};
    app.sessionStore = {
        async get(key) {
            console.log('store=========', store);
            return store[key];
        },
        async set(key, value, maxAge) {
            store[key] = value;
        },
        async destroy(key) {
            store[key] = null;
        },
    };
    // 将egg-auth插件添加进数组
    app.config.coreMiddleware.push('auth');
};
