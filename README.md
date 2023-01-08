## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


### Egg.js中的插件
- 中间件更适合处理请求，插件可以处理业务逻辑
- Egg.js中的插件相当于一个微型应用
- 插件不包括router.js和controller控制器
- Egg.js中插件一般都是放在lib目录下

### Egg.js定时任务
- 定时上报应用状态，便于系统监控
- 定时从远程接口更新数据
- 定时处理文件，清除过期日志文件

### 操作mysql数据库
使用egg-mysql操作mysql数据库


### sequelize
orm框架
- yarn add egg-sequelize mysql2
- 配置
    - config/plugin.js
    - config/config.default.js