
const handleOnMouseMove = e =>{
    for (const card of document.getElementsByClassName('card')) {

        
    

    const rect = card.getBoundingClientRect(),
    x= e.clientX- rect.left
    y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x',`${x}px`)
    card.style.setProperty('--mouse-y',`${y}px`)
}
}
const handleScrollAction = ()=>{
    const rect = cards.getBoundingClientRect().top,
    inHieght = window.innerHeight,
    clientH = document.documentElement.clientHeight,
    cardsList = document.querySelectorAll('.card');
    if (rect <= (inHieght||clientH)){
        let i = 0;
        for (const ele of cardsList) {
            
            ele.classList.add('scrolled')
            ele.style.setProperty("--delay-time",`${0.2 *i }s`)
            i++
        }
    } else {
        for (const ele of cardsList) {
            ele.classList.remove('scrolled')
            
        }
    }
    
}

let cards = document.querySelector('.cards')
cards.onmousemove = e => handleOnMouseMove(e);

window.addEventListener('scroll', () => {
    handleScrollAction();
})