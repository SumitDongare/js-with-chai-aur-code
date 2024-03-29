const form = document.querySelector('form')
// This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const conclusion = document.querySelector('#conclusion')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if( weight=== '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
       const bmi=  (weight / ((height*height)/10000)).toFixed(2)
       //show the result
       results.innerHTML = `<span>${bmi}</span>`
    }
    const bmi=  (weight / ((height*height)/10000)).toFixed(2)
    if(bmi < 18.6){
        conclusion.innerHTML = `Your are under Weight`
    }else if(bmi>18.6 && bmi < 24.9){
        conclusion.innerHTML = `You are perfectly fit`
    }else if(bmi > 24.9){
        conclusion.innerHTML = `You are Over Weight`
    }
});