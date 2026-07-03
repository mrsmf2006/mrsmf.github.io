// --- Core Engine & Hash Router ---

const appRoot = document.getElementById('app-root');

// Simple Markdown to HTML Parser
function parseMarkdown(text) {
    if (!text) return '';
    let html = text.trim();
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold, Links, Quotes
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>');
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Lists
    html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^\- (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/^[0-9]\. (.*$)/gim, '<ul><li>$1</li></ul>');
    html = html.replace(/<\/ul>\n<ul>/gim, '\n'); // Clean adjacent lists
    
    // Paragraphs (Lines that don't start with a tag)
    html = html.replace(/^(?!<[a-z])(.*$)/gim, '<p>$1</p>');
    
    return html;
}

// Update Active Nav Link
function updateNav(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        // Match exact route for styling
        if (link.getAttribute('href') === `#/${path.split('/')[0]}`) {
            link.classList.add('active');
        }
    });
}

// --- Page Renderers ---

function renderLanding() {
    let html = `
        <section class="hero">
            <h1>${DB.hero.title}</h1>
            <p>${DB.hero.intro}</p>
        </section>

        <section>
            <h2 class="section-title">Things I'm Building</h2>
            <div class="grid-3">
                ${DB.about.map(col => `
                    <div class="list-col">
                        <h3>${col.title}</h3>
                        <ul>${col.items.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">Timeline</h2>
            <div>
                ${DB.timeline.map(item => `
                    <div class="timeline-item">
                        <div class="year">${item.year}</div>
                        <div class="event">${item.event}</div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">Selected Projects</h2>
            <div class="grid-2">
                ${DB.projects.slice(0, 2).map(p => `
                    <a href="${p.link}" class="card">
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </a>
                `).join('')}
            </div>
        </section>

        <section>
            <h2 class="section-title">Recent Writing</h2>
            <div>
                ${DB.articles.slice(0, 3).map(a => `
                    <a href="#/blog/${a.id}" class="article-link">
                        <span class="title">${a.title}</span>
                        <span class="meta">${a.date}</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

function renderProjects() {
    let html = `
        <section>
            <h2 class="section-title">All Projects</h2>
            <div class="grid-2">
                ${DB.projects.map(p => `
                    <a href="${p.link}" class="card">
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

function renderBlogList() {
    let html = `
        <section>
            <h2 class="section-title">Writing</h2>
            <div>
                ${DB.articles.map(a => `
                    <a href="#/blog/${a.id}" class="article-link">
                        <span class="title">${a.title}</span>
                        <span class="meta">${a.date} &nbsp;·&nbsp; ${a.readingTime} read</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

function renderArticle(id) {
    const article = DB.articles.find(a => a.id === id);
    if (!article) {
        appRoot.innerHTML = `<section><h1>Post not found.</h1></section>`;
        return;
    }
    
    let html = `
        <article>
            <div class="article-header">
                <h1>${article.title}</h1>
                <div class="meta">
                    <span>${article.date}</span>
                    <span>${article.readingTime} read</span>
                    <span>${article.tags.join(', ')}</span>
                </div>
            </div>
            <div class="markdown-body">
                ${parseMarkdown(article.content)}
            </div>
        </article>
    `;
    appRoot.innerHTML = html;
}

function renderNow() {
    let html = `
        <section>
            <h2 class="section-title">Current Focus</h2>
            <div class="list-col">
                <ul>
                    ${DB.now.currently.map(c => `<li><strong>${c.label}:</strong> ${c.value}</li>`).join('')}
                </ul>
            </div>
        </section>

        <section>
            <h2 class="section-title">Books That Shaped Me</h2>
            <div>
                ${DB.now.books.map(b => `
                    <div class="list-item">
                        <div style="font-size: 14px; color: var(--text-primary); margin-right: 8px;">${b.title}</div>
                        <div style="font-size: 14px; color: var(--text-secondary);">by ${b.author}</div>
                    </div>
                `).join('')}
            </div>
        </section>
        
        <section>
            <h2 class="section-title">Quotes</h2>
            <div class="list-col">
                <ul>
                    ${DB.now.quotes.map(q => `<li style="font-style: italic;">"${q}"</li>`).join('')}
                </ul>
            </div>
        </section>
    `;
    appRoot.innerHTML = html;
}

// --- Router Logic ---

function router() {
    // Get path from URL hash (remove '#' and leading '/')
    let path = window.location.hash.replace(/^#\/?/, '');
    
    updateNav(path);
    window.scrollTo(0, 0);

    if (path === '' || path === '/') {
        renderLanding();
    } else if (path === 'projects') {
        renderProjects();
    } else if (path === 'blog') {
        renderBlogList();
    } else if (path.startsWith('blog/')) {
        const slug = path.split('/')[1];
        renderArticle(slug);
    } else if (path === 'now') {
        renderNow();
    } else {
        renderLanding(); // Fallback
    }
}

// Initialize application
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
