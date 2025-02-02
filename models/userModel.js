class User {
    static getAll(callback) {
      const query = 'SELECT * FROM users';
      db.query(query, (err, results) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  }

  module.exports = User;
