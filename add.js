const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const audio = document.getElementById("audio")

let answer = 0

function generateQuation() {
    let num1 = Math.floor(Math.random() * 20)
    let num2 = Math.floor(Math.random() * 20)
    
    let notCorrectAnswer1 = Math.floor(Math.random()* 20)
    let notCorrectAnswer2 = Math.floor(Math.random() * 20)
    answer = eval(num1 + num2)
    console.log(answer);

    let allAnswers = [answer, notCorrectAnswer1, notCorrectAnswer2]

    allAnswers.sort(function() {
        Math.random() - 0.5
    })


    document.getElementById('num1').innerHTML = num1
    document.getElementById('num2').innerHTML = num2

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

}

generateQuation()

