'use strict'

async function start(kick, snare) {
  const access = await navigator.requestMIDIAccess()
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values()
  const outputs = access.outputs.values()
  let kickOn = false
  let snareOn = false

  ;[...inputs].forEach((i) => {
    console.log('input ' + i.name)
    i.onmidimessage = (m) => {
      if (m.data[1] === 36) {
        console.log(i.name + ' kick ' + m.data.join('-'))
        if (m.data[0] !== 128 && !kickOn) {
          kick.innerHTML = 'KICK - ' + m.data.join('-')
          kickOn = true
          setTimeout(() => {
            kick.innerHTML = 'KICK - OFF'
            kickOn = false
          }, 150)
        }
      }
      if (m.data[1] === 38) {
        console.log(i.name + ' snare ' + m.data.join('-'))
        if (m.data[0] !== 128 && !snareOn) {
          snare.innerHTML = 'SNARE - ' + m.data.join('-')
          snareOn = true
          setTimeout(() => {
            snare.innerHTML = 'SNARE - OFF'
            snareOn = false
          }, 150)
        }
      }
    }
  })
  ;[...outputs].forEach((o) => {
    console.log('output ' + o.name)
  })

  access.onstatechange = function (e) {
    // Print information about the (dis)connected MIDI controller
    console.log(e.port.name, e.port.manufacturer, e.port.state)
  }
}

module.exports.start = start
