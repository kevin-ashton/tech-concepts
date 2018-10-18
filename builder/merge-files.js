const concat = require('concat');

(async function build() {
  const files = [
    './dist/builder/runtime.js',
    './dist/builder/polyfills.js',
    './dist/builder/scripts.js',
  ];

  await concat(files, 'dist/shared.min.js');

})();
