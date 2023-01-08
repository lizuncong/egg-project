## get请求
get请求支持两种传参方式
- 动态路由
  + router.get('/user/detail2/:id', controller.user.detail2);
- 查询参数
  + router.get('/user/detail', controller.user.detail);
