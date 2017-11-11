const sum = require('./sum')
const AlarmClock = require('./AlarmClock')

test('test 1+2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('clock ticks when every second', () => {
  const clock = new AlarmClock()
  const noise = clock.readTime("02:22")
  expect(noise).toBe('tick')
})

test('clock beeps when every hour', () => {
  const clock = new AlarmClock()
  const noise = clock.readTime("02:00")
  expect(noise).toBe('beep')
})