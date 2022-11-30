addEventListener('DOMContentLoaded', function (){

    let display = document.querySelector('h4')
    let clearButton = document.querySelector('button')
    clearButton.style.display = 'none'
    display.style.display = 'none'
    document.querySelector('#submitButton').disabled = true;
    document.querySelector('#chosenNumber').focus()

    document.querySelector('#chosenNumber').onkeyup=()=>{
        if (document.querySelector('#chosenNumber').value.length>=1){
            document.querySelector('#submitButton').disabled = false;
        }else{document.querySelector('#submitButton').disabled = true}
    }
    document.querySelector('form').onsubmit = ()=>{
        document.querySelector('ul').innerHTML=' '
        document.querySelector('h3').innerHTML=' '
        display.style.display = 'none'

        let chosenNumber = parseInt(document.querySelector('#chosenNumber').value)

        if (chosenNumber < 0){
            document.querySelector('h3').innerHTML = 'Plese, Enter a positive Integer!!'

        }else if (chosenNumber>20){ 
            document.querySelector('h3').innerHTML = 'Plese, Enter a number inferior or equal to 20'
             
        }else{
            document.querySelector('h4').style.color = '#ff7200'
            display.style.display = 'block'
            clearButton.style.display = 'block'

            for (let i=1; i<=chosenNumber ; i ++){
                const li = document.createElement('li')
                li.innerHTML = `${i}  x  ${chosenNumber}  =  ${i*chosenNumber}\n`
                document.querySelector('ul').append(li)
            }
            clearButton.addEventListener('click', ()=>{
                document.querySelector('ul').innerHTML=' '
                clearButton.style.display = 'none'
                document.querySelector('h4').innerHTML = ''
                document.querySelector('#chosenNumber').focus()    
            })
        }    
        document.querySelector('#submitButton').disabled = true
        document.querySelector('#chosenNumber').value = ''
        return false
    }   
})