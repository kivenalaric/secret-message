const inputBox = document.querySelector('#message')
const display1 = document.querySelector('#normalizedtext')
const display2 = document.querySelector('#chunkmsgs')
const display3 = document.querySelector('#secondrectangle')
const encodeBtn = document.querySelector('#encoder')
// let message = inputBox.value

encodeBtn.addEventListener('click', function () {
  secretMessage()
})

function secretMessage () {
  const string = inputBox.value
  const normalizedText = string.replace(/[^\w]/g, '').toLowerCase()
  const stringLength = normalizedText.length
  const cols = Math.ceil(Math.sqrt(stringLength))
  console.log(` hey ${cols}`)

  let encodeMessage = ''
  let encode = ''
  if (string === '') {
    console.log('Please you must input characters')
  } else {
    if (stringLength < 50) {
      console.log('Must input at least 50 characters')
    } else {
      for (let i = 0; i < cols; i++) {
        for (let j = i; j < stringLength; j += cols) {
          encodeMessage += normalizedText[j]
          encode = encodeMessage
        }
        encodeMessage += '\n'
      }

      display1.innerHTML = `${normalizedText}`
      display1.style.background = 'blue'
      display1.style.padding = '5px'
      display1.style.margin = '5px auto'
      display2.style.margin = '5px auto'
      display3.style.margin = '5px auto'
      display2.style.padding = '5px'
      display3.style.padding = '5px'
      display2.style.background = 'red'
      display3.style.background = 'green'

      display2.innerHTML = `${encodeMessage} `
      display3.innerHTML = `${encode}`
    }
  }
}

// let string = 'If man was meant to stay on the ground, god would have given us roots.'
// console.log(secretMessage(string))
