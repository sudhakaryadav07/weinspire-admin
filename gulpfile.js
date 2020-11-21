const { watch } = require('gulp')
const del = require('delete')

function clean(cb) {
  del(['dist/*.js'], cb)
}

module.exports.default = watch('*.js', clean)

