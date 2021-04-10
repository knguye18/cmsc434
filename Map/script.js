let img = document.querySelector('img')
let b_g = document.querySelector('#bg')
let b_1 = document.querySelector('#b1')
let b_u = document.querySelector('#bu')

b_g.addEventListener('click', () => {
    img.src = '../imgs/floor_images/g.png';
})

b_1.addEventListener('click', () => {
    img.src = '../imgs/floor_images/1.png';
})

b_u.addEventListener('click', () => {
    img.src = '../imgs/floor_images/u.png';
})

function find_room() {
    let input = document.getElementById("search-bar").value
    if (input == 'IRB1156') {
        img.src = '../imgs/floor_images/1156.png'
    }
    else if (input == 'IRB1207') {
        img.src = '../imgs/floor_images/1207.png'
    }
    else if (input == 'IRB2152') {
        img.src = '../imgs/floor_images/2152.png'
    }
    else if (input == 'IRB0324') {
        img.src = '../imgs/floor_images/antonov.png'
    }
    
    console.log(input)
    console.log("heeeeereree")

}