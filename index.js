const got = require('got');

module.exports = {
  getUserFollowers: (username) => {
    const url  = `https://api.github.com/users/${username}/followers`;
    return got(url, { json: true });
  }
};
