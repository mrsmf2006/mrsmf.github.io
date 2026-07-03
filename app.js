/**
 * --- DATA STATE (The Central System Configuration) ---
 * Update this single object to completely change the content of your website.
 */
const DATA_STATE = {
    hero: {
        title: "I enjoy understanding<br>complex systems,<br>building useful things,<br>and documenting what I learn.",
        intro: "I study technology, systems thinking, product development and the psychology of learning. This website is my public notebook."
    },
    about: [
        {
            category: "I'm interested in",
            items: ["Systems", "Software", "Product", "Learning", "Psychology", "Design"]
        },
        {
            category: "Currently learning",
            items: ["Linux", "Networking", "Python", "Marketing", "Writing"]
        },
        {
            category: "Principles",
            items: ["Think slowly.", "Build consistently.", "Learn publicly.", "Seek truth.", "Stay curious."]
        }
    ]
};

/**
 * --- CORE ARCHITECTURE / RENDERING ENGINE ---
 */
document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
});

// 1. Render Hero Content
function renderHero() {
    const titleEl = document.getElementById("hero-title");
    const introEl = document.getElementById("hero-intro");

    if (titleEl && introEl) {
        titleEl.innerHTML = DATA_STATE.hero.title;
        introEl.textContent = DATA_STATE.hero.intro;
    }
}

// 2. Render About 3-Column Content
function renderAbout() {
    const container = document.getElementById("about-content");
    if (!container) return;

    let columnsHtml = "";

    DATA_STATE.about.forEach(col => {
        let itemsHtml = "";
        col.items.forEach(item => {
            itemsHtml += `<li>${item}</li>`;
        });

        columnsHtml += `
            <div class="about-col">
                <h3>${col.category}</h3>
                <ul>${itemsHtml}</ul>
            </div>
        `;
    });

    container.innerHTML = columnsHtml;
}
