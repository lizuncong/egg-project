'use strict';

const { Controller } = require('egg');

class CurlController extends Controller {
    async curlGet() {
        const { ctx } = this;
        const res = await ctx.curl('http://localhost:7001/', {
            dataType: 'text',
        });
        ctx.body = res;
    }
    async curlPost() {
        const { ctx } = this;
        const res = await ctx.curl('http://localhost:7001/logout', {
            method: 'post',
            contentType: 'text',
            data: { name: 'lzc' },
            // dataType: 'json',
        });
        // console.log('post...', res);
        ctx.body = res;
    }
}

module.exports = CurlController;
