const parentlist = document.querySelector('.expandable-list')
parentlist.addEventListener ('click', function(e){
    console.log(e.target)
    const sublist = e.target.querySelector('.sub-list')
    if (e.target.tagName === 'DIV'){
        sublist.classList.toggle('hidden')
    }
})