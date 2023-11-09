const container = document.querySelector('.container')

async function fetchData(){
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    const characters = data.results

    console.log(characters)
    //display
    characters.forEach(function(person){
        //create a div class 
        const box = document.createElement('div')
        box.classList.add('box')
        box.innerHTML = `
        <p>${person.name}</p>
        <p>${person.gender}</p>
        <img src="${person.image}">
        `
        container.appendChild(box)
    })
}
fetchData()