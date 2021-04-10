let img = document.querySelector('img')
let b_g = document.querySelector('#bg')
let b_1 = document.querySelector('#b1')
let b_u = document.querySelector('#bu')
let search = document.querySelector("#cover")
let input = search.querySelector("input")
let suggestions = document.querySelector("#autobox")

let vals = [
    "Golub",
    "Nelson",
    "Kruskal",
    "What does CSS stands for?",
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

input.onkeyup = (e)=>{
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
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
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
    let input = document.getElementById("search-bar").value
    // if input contains "golub":
    // change image to golubs office img
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
    
}