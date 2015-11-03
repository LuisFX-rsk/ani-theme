import NProgress from 'nProgress';

module.exports = {
  path: '/reports',
  getComponent(location, cb) {
  	NProgress.start();
    require.ensure([], (require) => {
			require('nProgress').done();
      cb(null, require('./Reports'));
    });
  }
}