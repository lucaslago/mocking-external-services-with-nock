const getUserFollowers = require('./src').getUserFollowers;
const user = process.argv[2] || 'lucaslago';

getUserFollowers(user).then(f => console.log(f));
