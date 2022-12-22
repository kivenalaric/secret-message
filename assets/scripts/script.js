const inputBox = document.querySelector('#message')
const display1 = document.querySelector('#normalizedtext')
const display2 = document.querySelector('#chunkmsgs')
const display3 = document.querySelector('#secondrectangle')
const encodeBtn = document.querySelector('#encoder')
let message = inputBox.value

function secretMsg(){
    let normalizedInput = message.replace(/[^\w]/g, '').toLowerCase()
    let stringLength = normalizedInput.length
    let columns = Math.ceil(Math.sqrt(stringLength))
    //let normalizedText = message.replace(/[^\w]/g, '').toLowerCase()

    let encodedMsg = ''
    let encode = ''
    if (message === '') {
        alert(`please input a message`)
    } else{
  if (stringLength < 50) {
    alert('Must input at least 50 characters')
  } else {
    for (let i = 0; i < columns; i++) {
      for (let j = i; j < stringLength; j += columns) {
        encodedMsg += normalizedInput[j]
        encode += normalizedInput[j]
      }
      encodedMsg += '\n'
    }
    display1.innerHTML = `${normalizedInput}`
    display2.innerHTML = `${encodedMsg}`
    display3.innerHTML = `${encode}`
}
} 
}

encodeBtn.addEventListener('click', function () {
    secretMsg()
})