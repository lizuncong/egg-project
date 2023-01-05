'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
  router.get('/user/list', controller.user.list);
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail2/:id', controller.user.detail2);
  router.get('/user/getse', controller.user.getSession);

  router.post('/logout', controller.user.logout);
  router.get('/login', controller.user.login);
  router.post('/user/add', controller.user.add);
  router.put('/user/edit', controller.user.edit);
  router.del('/user/del', controller.user.del);
  router.get('/curl/get', controller.curl.curlGet);
  router.get('/curl/post', controller.curl.curlPost);

};
