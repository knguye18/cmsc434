let img = document.querySelector('img')
let b_g = document.querySelector('#bg')
let b_1 = document.querySelector('#b1')
let b_u = document.querySelector('#bu')
let search = document.querySelector("#cover")
let input = search.querySelector("input")
let suggestions = document.querySelector("#autobox")
let icon = search.querySelector('#s-cover')

let vals = [
    "IRB2240, Clyde Kruskal",
    "IRB2210, Nelson Padua-Perez",
    "IRB1210, Evan Golub",
    "IRB5456, Andrew Childs",
    "IRB1156",
    "IRB1207",
    "IRB2152",
];
b_g.addEventListener('click', () => {
    img.src = '../imgs/floor_images/g.png';
})

b_1.addEventListener('click', () => {
    img.src = '../imgs/floor_images/1.png';
})

b_u.addEventListener('click', () => {
    img.src = '../imgs/floor_images/u.png';
})

input.oninputg = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    
    console.log(search.classList, userData, input, suggestions)

    if(userData){
        
        emptyArray = vals.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        suggestions.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggestions.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    else{
        suggestions.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    input.value = selectData;
    icon.onclick = ()=>{
        find_room()
    }
    suggestions.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = input.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggestions.innerHTML = listData;
}

function find_room() {
    let input = document.getElementById("search-bar").value;
    // if input contains "golub":
    // change image to golubs office img
    input = input.toLocaleLowerCase();
    if (input.includes('1156')) {
        img.src = '../imgs/floor_images/1156.png';
    }
    else if (input.includes('1207')) {
        img.src = '../imgs/floor_images/1207.png';
    }
    else if (input.includes('2152')) {
        img.src = '../imgs/floor_images/2152.png';
    }
    else if (input.includes('0324')) {
        img.src = '../imgs/floor_images/antonov.png';
    }
    else if (input.includes('kruskal') || input.includes('2240')) {
        img.src = '../imgs/floor_images/kruskal_2240.png';
    }
    else if (input.includes('childs') || input.includes('5456')) {
        img.src = '../imgs/floor_images/childs_5456.png';
    }
    else if (input.includes('nelson') || input.includes('2210')) {
        img.src = '../imgs/floor_images/nelson_2210.png';
    }
    else if (input.includes('golub') || input.includes('1210')) {
        img.src = '../imgs/floor_images/golub_1210.png'
    }
    
}