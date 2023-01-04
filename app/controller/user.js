'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user index';
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

  async detail() {
    const { ctx } = this;
    ctx.body = ctx.query;// /user/detail?id=123&name=john
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
