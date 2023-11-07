const showButton = document.getElementById('interactive-button')
showButton.addEventListener('click',function(){
    console.log("i've been clicked?")
})
const paragraph = document.querySelector('.paragraph')
showButton.addEventListener('click', function(){
    if (showButton.innerText === 'Show greetings!'){
        paragraph.style.display = 'block'
        showButton.innerText = 'hide greetings'
    } else{
        paragraph.style.display = 'none'
        showButton.innerText = 'Show greetings!'
    }
})



