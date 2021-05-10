const fake_sponsor_data = [
    {
        name: "Google",
        description: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
        job_openings: "Sofware Engineer, Backend Enginner new Grad",
        icon: "google.jpg",
        events: ["4/10 4pm - 6pm tech talk", "4/20 5pm - 6pm group coding sess"],
    },
    {
        name: "Appian",
        description: "Appian Corporation is a cloud computing and enterprise software company headquartered in McLean, Virginia, part of the Dulles Technology Corridor. The company sells a platform as a service for building enterprise software applications.",
        job_openings: "sofware Engineer, Backend Enginner new Grad",
        icon: "Appian.jpg",
        events: ["Today 5pm - 6pm Tech Talk"],
    },
    {
        name: "Capital One",
        description: " Capital One Financial Corporation is an American bank holding company specializing in credit cards, auto loans, banking, and savings accounts, headquartered in McLean, Virginia with operations primarily in the United States",
        job_openings: "Nothing yet",
        icon: "co.jpg",
        events: ["Today 5pm - 6pm Tech Talk", "Tomorrow 5pm - 6pm On Site Interview"],
    },
    
    
];


function onSearchBarChange(e) {
    const query = e.target.value.toLowerCase();
    const search_results = fake_sponsor_data.filter(x => x.name.toLowerCase().includes(query))
    let formedHtml = ""
    search_results.forEach((element, index) => {
        const icon_src = "../imgs/sponsor_icons/" + element.icon;
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

const stopP = (e) => {
    e.stopPropagation();
}

window.addEventListener("DOMContentLoaded", function () {
    let formedHtml = "";
    fake_sponsor_data.forEach((element, index) => {
        const icon_src = "../imgs/sponsor_icons/" + element.icon;
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

