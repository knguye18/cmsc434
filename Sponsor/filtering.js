const fake_sponsor_data = [
    {
        name: "Google",
        description: "The Google O yerrr",
        job_openings: "Sofware Engineer, Backend Enginner new Grad",
        icon: "google.jpg",
        events: ["4/10 4pm - 6pm o yerr", "4/20 5pm - 6pm group coding sess"],
    },
    {
        name: "UMD Robotics",
        description: "Nerds",
        job_openings: "you have to be blind (worse that +5.0 both eyes) to prove your nerdyness",
        icon: "technica.jpg",
        events: [],
    },
    {
        name: "Club1",
        description: "Description1",
        job_openings: "just apply mannn",
        events: [],
    },
    {
        name: "Club",
        description: "A YER",
        job_openings: "noooo shot",
        events: [],
    },
];


function onSearchBarChange(e) {
    const query = e.target.value.toLowerCase();
    const search_results = fake_sponsor_data.filter(x => x.name.toLowerCase().includes(query))
    let formedHtml = ""
    search_results.forEach((element, index) => {
        const icon_src = "/imgs/sponsor_icons/" + element.icon;
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
    const obj = fake_sponsor_data[key]

    document.getElementById("club-name").innerHTML = obj.name;
    document.getElementById("club-description").innerHTML = obj.description;
    document.getElementById("club-join").innerHTML = obj.job_openings;

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


window.addEventListener("DOMContentLoaded", function () {
    let formedHtml = "";
    fake_sponsor_data.forEach((element, index) => {
        const icon_src = "/imgs/sponsor_icons/" + element.icon;
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

