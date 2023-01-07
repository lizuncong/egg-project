const Service = require('egg').Service;

class UserService extends Service {
  async lists() {
    try {
      const { app } = this;
      const res = await app.mysql.select('user');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async detail(id) {
    return {
      id,
      name: 'john',
      age: 19,
    };
  }

  async getUserById(id) {
    try {
      const { app } = this;
      const res = await app.mysql.get('user', { id });
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserService;
