const expect = require('chai').expect;
const getUserFollowers = require('../index').getUserFollowers;

describe('GET GitHub Followers', () => {
  it('returns a user followers username only', function(done) {
    this.timeout(5000);

    const username = 'lucaslago';

    getUserFollowers(username)
      .then(response => {
        const followers = response.body;
        expect(followers).to.be.instanceof(Array);
        expect(followers).to.have.length.above(1);
        //followers.forEach(f => expect(f).to.be.a('string'));
        done();
      })
      .catch(err => done(err));

  });
});
