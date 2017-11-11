class AlarmClock {

  readTime(timeIn) {

    const {hours: hours, mins: mins} = destruct(timeIn)
    if (hours === 7 && mins === 0) {
      return 'wake up!'
    } else if (mins === 0) {
      return 'beep'
    } else {
      return 'tick'
    }

    function destruct(timeIn) {
      const mins = parseInt(timeIn.substring(3, 5))
      const hours = parseInt(timeIn.substring(0, 2))
      return {hours: hours, mins: mins}
    }
  }
}

module.exports = AlarmClock