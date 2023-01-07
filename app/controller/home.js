'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    console.log(app.mysql);
    ctx.body = 'hi, egg d';
  }

  // 演示application扩展用法
  async newApplication() {
    const { ctx, app } = this;
    ctx.body = {
      test: app.package('scripts'),
      allPack: app.AllPackage,
    };
  }
  // 演示context扩展用法
  async newContext() {
    const { ctx } = this;
    ctx.body = ctx.params();
  }
  // 演示request扩展用法
  async newRequest() {
    const { ctx } = this;
    // 扩展了request里面的token属性
    ctx.body = 'newRequest' + ctx.request.token;
  }
  // 演示response扩展用法
  async newResponse() {
    const { ctx } = this;
    // 扩展了response里面的token属性
    ctx.response.token = 'abc1234';
    console.log('helper', ctx.helper.base64Encode('newResponse'));
    ctx.body = 'newResponse';
  }
}

module.exports = HomeController;
