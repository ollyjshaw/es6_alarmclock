const sum = require('../src/sum')
const AlarmClock = require('../src/alarm_clock')

test('test 1+2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('clock fails with undefined', () => {
  const clock = new AlarmClock()
  expect( () => {clock.readTime(undefined)}).toThrow('No time provided in json')
})

test('clock ticks when every second', () => {
  const clock = new AlarmClock()
  const noise = clock.readTime('02:22')
  expect(noise).toBe('tick')
})

test('clock beeps when every hour', () => {
  const clock = new AlarmClock()
  const noise = clock.readTime('02:00')
  expect(noise).toBe('beep')
})

test('clock wakes us up at 7', () => {
  const clock = new AlarmClock()
  const noise = clock.readTime('07:00')
  expect(noise).toBe('wake up!')
})