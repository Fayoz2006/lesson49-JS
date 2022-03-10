let hearts = document.body.children

setTimeout(() => {
    hearts[0].style.left = "50%"
    hearts[0].classList.add('active')
    setTimeout(() => {
        hearts[1].style.left = "44%"
        hearts[1].classList.add('active')


        setTimeout(() => {
            hearts[2].style.left = "38%"
            hearts[2].classList.add('active')
        }, 200);
    }, 300);
}, 400);