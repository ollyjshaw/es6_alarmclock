const AlarmClock = require('./AlarmClock')

exports.myHandler = function(event, context, callback) {

  console.log('I got called')
  console.log('value1 =', event.time)
  const clock = new AlarmClock()
  const noise = clock.readTime(event.time)
  callback(null, noise)
}