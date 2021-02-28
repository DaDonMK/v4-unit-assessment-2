const btn = document.querySelector('.button')
// const top = document.getElementsByClassName('.devmtn')

btn.addEventListener('click', function(){
    
    if(btn.innerText === 'View Larger'){

    btn.innerText = 'View Smaller'

    const top = document.querySelectorAll('.devmtn')
    for(i = 0; i <= 6; i++){
        top[i].classList.add('new-devmtn')
        top[i].classList.remove('devmtn')

        }
    }else{
        btn.innerText = 'View Larger'

        const top = document.querySelectorAll('.new-devmtn')
        for(i = 0; i <= 6; i++){

        top[i].classList.add('devmtn')
        top[i].classList.remove('new-devmtn')

        }
    }
})