exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./app/features/**/*.e2e.spec.js'],
    capabilities: {
    'browserName': 'chrome'
  },
framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  baseUrl: "http://localhost:8888/"
};