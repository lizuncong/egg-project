'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  encode(str) {
    return new Buffer(str, 'base64').toString('base64');
  }
  decode(str) {
    return new Buffer(str, 'base64').toString();
  }
  async index() {
    const { ctx } = this;
    const user = ctx.cookies.get('user');
    ctx.body = user || 'cookie没有值';
  }
  async list() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
    ctx.body = [{ id: 123 }];
  }
  async login() {
    const { ctx } = this;
    const body = ctx.query;
    ctx.cookies.set('user', JSON.stringify(body), {
      maxAge: 1000 * 60 * 10,
      // httpOnly: false,
    });
    // 如果设置中文cookie，可以使用encrypt加密
    ctx.cookies.set('zh', '张三', {
      encrypt: true,
    });
    // 获取中文cookie
    const username = ctx.cookies.get('zh', {
      encrypt: true,
    });
    // 设置中文cookie的第二种方式
    ctx.cookies.set('base64', this.encode('中文base64'));
    const base64 = this.decode(ctx.cookies.get('base64'));
    console.log('base64', base64);
    // 保存session
    ctx.session.user = body;
    console.log('body..', body);
    ctx.body = {
      status: 200,
      data: body,
      username,
      base64,
    };
  }
  async getSession() {
    const { ctx } = this;
    ctx.body = {
      user: ctx.session.user,
      test: 'hello',
    };
  }
  async logout() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.body = '退出成功';
  }
  async detail() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.detail(ctx.query.id);// /user/detail?id=123&name=john
  }

  async detail2() {
    const { ctx } = this;
    ctx.body = ctx.params; // '/user/detail2/:id'
  }

  async add() {
    const { ctx } = this;
    const rule = {
      name: { type: 'string' },
      age: { type: 'number' },
    };
    ctx.validate(rule);
    ctx.body = ctx.request.body;
  }

  async edit() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

  async del() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }
}

module.exports = UserController;
