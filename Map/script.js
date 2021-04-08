let img = document.querySelector('img')
let b_g = document.querySelector('#bg')
let b_1 = document.querySelector('#b1')
let b_u = document.querySelector('#bu')


b_g.addEventListener('click', () => {
    img.src = 'g.png';
})

b_1.addEventListener('click', () => {
    img.src = '1.png';
})

b_u.addEventListener('click', () => {
    img.src = 'u.png';
})