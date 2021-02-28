const btn = document.querySelector('.button')
// const top = document.getElementsByClassName('.devmtn')

btn.addEventListener('click', function(){
    const top = document.querySelectorAll('.devmtn')
    for(i = 0; i <= 6; i++){
        top[i].classList.add('new-devmtn')
        top[i].classList.remove('devmtn')

    }
})