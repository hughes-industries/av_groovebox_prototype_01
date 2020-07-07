'use strict'

async function start() {
  const access = await navigator.requestMIDIAccess()
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values()
  const outputs = access.outputs.values()

  ;[...inputs].forEach((i) => {
    console.log('input ' + i.name)
    i.onmidimessage = (m) => {
      console.log(m)
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
