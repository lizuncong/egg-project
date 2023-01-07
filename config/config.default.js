/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1672760391403_7209';

  // add your middleware config here
  config.middleware = ['m1', 'm2', 'httpLog'];

  // 传递给中间件的options
  config.httpLog = {
    type: 'all',
  };
  // 先关闭吧，不然post请求会报错
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.static = {
    prefix: '/static/',
  };
  // session本质上也是利用cookie存储，这里的key即是cookie的键
  config.session = {
    key: 'LANG_ADMIN',
    httpOnly: true,
    maxAge: 1000 * 60 * 60, // 1000 * 60 * 60 * 24, // 过期时间：1天
    renew: true, // cookie续期，本来5秒过期，但是只要5秒内继续访问页面，那过期时间就会重新计算
  };
  // 配置egg-auth插件options
  config.auth = {
    exclude: ['/newResponse'],
  };
  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root123456',
      database: 'lang_admin',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
