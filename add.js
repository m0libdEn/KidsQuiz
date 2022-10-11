const add = document.getElementById("add")
const subtcract = document.getElementById("subtcract")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
//Try to find access for buutons on header,instead of creating multiple pages I decided to just ask for our math sign
const modes = [add, subtcract, multiply, divide]
function chageMode() {
  for (const mode of modes) {
    mode.classList.remove("current")
  }
}
add.addEventListener('click', function() {
  chageMode()
  add.classList.add("current")
  document.getElementById("action").innerHTML = '+'
  generateQuation()
})
subtcract.addEventListener('click', function() {
  chageMode()
  subtcract.classList.add("current")
  document.getElementById("action").innerHTML = '-'
  generateQuation()
})
multiply.addEventListener('click', function() {
  chageMode()
  multiply.classList.add("current")
  document.getElementById("action").innerHTML = '*'
  generateQuation()
})
divide.addEventListener('click', function() {
  chageMode()
  divide.classList.add("current")
  document.getElementById("action").innerHTML = ':'
  generateQuation()
})


const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const audio = document.getElementById("audio")
const action = document.getElementById("action")
let answer = 0

//I'm trying to get to our variables in the page, but also to the answer options, the audio that will be played when the answer is incorrect, as well as the sign


function generateQuation() {
    let num1 = Math.floor(Math.random() * 5)
    let num2 = Math.floor(Math.random() * 5)
    let calc = action.textContent 
    //I create two random-domain variables, and also add our sign
    document.getElementById('num1').innerHTML = num1
    document.getElementById('num2').innerHTML = num2 
    switch (calc) {
      case '+': answer = eval(num1 + num2); break
      case '-': answer = eval(num1 - num2); console.log(num1); console.log(num2); break
      case ':': answer = eval(num1 / num2);break
      case '*': answer = eval(num1 * num2);break
    }
    
    if (answer < 0 || answer%1!=0) {
        generateQuation()
    }

    //I perform a mathematical operation, after which they check for negative numbers (for subtraction and division, it is calculated that fractions and negative numbers are extremely difficult for children)

    let notCorrectAnswer1 = Math.floor(Math.random()* 20)
    let notCorrectAnswer2 = Math.floor(Math.random()* 20)
    //I create two wrong answers
    let allAnswers = [answer, notCorrectAnswer1, notCorrectAnswer2]
    allAnswers.sort(function() {
        Math.random() - 0.5
    })
    //I put all the answers in an array, after which I do a shuffle (shuffle in random order)

    option1.innerHTML = allAnswers[0]
    option2.innerHTML = allAnswers[1]
    option3.innerHTML = allAnswers[2]

    option1.addEventListener('click', function() {
        if(option1.innerHTML == answer){
          generateQuation()
        }else{
            audio.play()
        }
      })

      option2.addEventListener('click', function() {
          if(option2.innerHTML == answer){
            generateQuation()
          }else{
            audio.play()
          }
        })

        option3.addEventListener('click', function() {
          if(option3.innerHTML == answer){
            generateQuation()
          }else{
            audio.play()
          }
        })
    

  //Normal response check If the answer is correct, the following example is formed, if it is not correct, a sound is emitted
}

generateQuation()

