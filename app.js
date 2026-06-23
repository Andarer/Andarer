async function loadMetaData() {

    try {

        const response = await fetch("./meta_info.json");

        const data = await response.json();

        renderProjects(data.projects);

    } catch(error) {

        console.error("Ошибка загрузки meta_info.json:", error);

    }

}

function renderProjects(projects) {

    const grid = document.getElementById("projects-grid");

    grid.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <h3>${project.icon || "🚀"} ${project.title}</h3>

            <p>${project.description}</p>

            <div class="card-details">

                <p><strong>Статус:</strong> ${project.status}</p>

                <div class="buttons">

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub
                    </a>

                    <a
                        href="${project.website}"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </a>

                </div>

            </div>

        `;

        card.addEventListener("click", (e) => {

            if(e.target.tagName === "A") {
                return;
            }

            card.classList.toggle("expanded");

        });

        grid.appendChild(card);

    });

}

loadMetaData();