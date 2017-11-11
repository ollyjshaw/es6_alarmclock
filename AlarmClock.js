class AlarmClock {
  constructor() {
  }

  readTime(timeIn) {

    function destruct(timeIn) {
      const mins = parseInt(timeIn.substring(0, 2))
      const hours = parseInt(timeIn.substring(3, 5))
      return {hours: hours, mins: mins}
    }

    const {hours: hours, mins: mins} = destruct(timeIn);
    if (hours === 0) {
      return 'beep'
    } else {
      return 'tick'
    }
  }
}

module.exports = AlarmClock;