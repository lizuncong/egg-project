module.exports = options => {
    const { exclude } = options;
    return async (ctx, next) => {
        const url = ctx.request.url;
        console.log('egg-auth plugin url..', url);
        const user = ctx.session.user;
        await next();

        // if (!user && !exclude.includes(url.split('?')[0])) {
        //     ctx.body = {
        //         status: 1001,
        //         errMsg: '用户未登录',
        //     };
        // } else {
        //     await next();
        // }
    };

};
