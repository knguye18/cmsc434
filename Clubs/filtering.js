const fake_club_data = [
    {
        name: "Technica",
        description: "owen's favorite club <3",
        join_info: "JOINOJOINJIOJ!!! I lVOE CODING !!! HAHAHAH!!!",
        icon: "technica.jpg",
        events: ["4/10 4pm - 6pm o yerr", "4/20 5pm - 6pm group coding sess"],
    },
    {
        name: "UMD Robotics",
        description: "we make robots!",
        join_info: "Love coding? Love Engineering? Join us by emailing xx@umd.edu !!",
        icon: "robo.png",
        events: ["4/10 4pm - 6pm introduction", "4/20 5pm - 6pm group coding sess"],
    },
    {
        name: "Club1",
        description: "Description1",
        join_info: "just apply mannn",
        icon: "umd.png",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        join_info: "noooo shot",
        icon: "umd.png",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        join_info: "noooo shot",
        icon: "umd.png",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        join_info: "noooo shot",
        icon: "umd.png",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        join_info: "noooo shot",
        icon: "umd.png",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        join_info: "noooo shot",
        icon: "umd.png",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        join_info: "noooo shot",
        icon: "umd.png",
        events: [],
    },
];


function onSearchBarChange(e) {
    const query = e.target.value.toLowerCase();
    const search_results = fake_club_data.filter(x => x.name.toLowerCase().includes(query))
    let formedHtml = ""
    search_results.forEach((element, index) => {
        const icon_src = "../imgs/clubs_icons/" + element.icon;
        const card = `
            <button class="card" onclick="onClickCard(event, ${index});">
                <img class="icon" src=${icon_src} />
                <h5>${element.name}</h5>
            </button>
        `;

        formedHtml += card;
    })

    document.getElementById("clubs-container").innerHTML = formedHtml;
}

function onClickCard(e, key) {
    console.log(key);
    const obj = fake_club_data[key]

    document.getElementById("club-name").innerHTML = obj.name;
    document.getElementById("club-description").innerHTML = obj.description;
    document.getElementById("club-join").innerHTML = obj.join_info;

    let upcoming_events = "";

    obj.events.forEach((element) => {
        upcoming_events += `
            <li>${element}</li>
        `
    })
    
    document.getElementById("modal").classList.toggle("hidden");
    document.getElementById("events").innerHTML = upcoming_events;
}

const hideModal = (e) => {
    document.getElementById("modal").classList.toggle("hidden");
}

function hideKeyboard() {
    console.log('fff')
    document.querySelectorAll(".keyboard").forEach(e => {
        console.log(e)
        e.classList.add("keyboard--hidden");
    })
}

const stopP = (e) => {
    e.stopPropagation();
}

window.addEventListener("DOMContentLoaded", function () {
    let formedHtml = "";
    fake_club_data.forEach((element, index) => {
        const icon_src = "../imgs/clubs_icons/" + element.icon;
        const card = `
            <button class="card" onclick="onClickCard(event, ${index});">
                <img class="icon" src=${icon_src} />
                <h5>${element.name}</h5>
            </button>
        `;

        formedHtml += card;
    })

    document.getElementById("clubs-container").innerHTML = formedHtml;

    document.getElementById("search-bar").addEventListener("input", onSearchBarChange);
});

