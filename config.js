const DB = {
    hero: {
        title: "I enjoy understanding complex systems,<br>building useful things,<br>and documenting what I learn.",
        intro: "I study technology, systems thinking, product development, and the psychology of learning. This website is my public notebook."
    },
    
    about: [
        { title: "I'm interested in", items: ["Systems Architecture", "Product Design", "Learning Psychology", "Automation"] },
        { title: "Currently learning", items: ["Linux & Networking", "Python (Advanced)", "Logic & Math", "Marketing Analytics"] },
        { title: "Principles", items: ["Think slowly.", "Build consistently.", "Learn publicly.", "Seek truth.", "Stay curious."] }
    ],

    timeline: [
        { year: "2026", event: "Infrastructure, Kubernetes & Systems Architecture" },
        { year: "2025", event: "Python Automation & Systems Thinking" },
        { year: "2024", event: "Digital Marketing & Content Strategy (Jamshidbar)" },
        { year: "2023", event: "UI/UX Design & Visual Arts Fundamentals" }
    ],

    projects: [
        {
            title: "Omline",
            desc: "A digital legal-tech and content infrastructure platform for real estate transactions.",
            tags: ["Product Strategy", "UI/UX", "Management"],
            link: "#"
        },
        {
            title: "Task Space",
            desc: "An offline modular task management app written in Python with integrated Pomodoro techniques.",
            tags: ["Python", "Systems Thinking", "App"],
            link: "#"
        }
    ],

    now: {
        currently: [
            { label: "Building", value: "Omline content infrastructure (V2.1)" },
            { label: "Learning", value: "Mathematical logic to improve cognitive analysis" },
            { label: "Writing", value: "Personal notes on system architecture" }
        ],
        books: [
            { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
            { title: "The Pragmatic Programmer", author: "David Thomas" }
        ],
        quotes: [
            "We suffer more in imagination than in reality. — Seneca",
            "You do not rise to the level of your goals. You fall to the level of your systems. — James Clear"
        ]
    },

    // Blog Engine: Write content using standard Markdown syntax
    articles: [
        {
            id: "systems-thinking",
            title: "Thinking about systems and cognitive biases",
            date: "Oct 2025",
            readingTime: "4 min",
            tags: ["Systems", "Psychology"],
            content: `
My journey into mathematical logic and systems thinking started when I realized the flaws in human decision-making. 

## The Core Concept
A system is not just a collection of parts, but the **relationships** between them. When analyzing a failure, we often look at the isolated event, rather than the structure that generated it.

* Focus on the structure, not the symptom.
* Identify feedback loops.
* Recognize cognitive biases like the framing effect.

> "A bad system will beat a good person every time." — W. Edwards Deming

I will write more about utilizing tools like the Ishikawa diagram for marketing analytics in the future.
            `
        },
        {
            id: "learning-networking",
            title: "Transitioning from Marketing to Infrastructure",
            date: "April 2026",
            readingTime: "6 min",
            tags: ["Career", "Technology"],
            content: `
Building digital products requires an understanding of how data actually moves. My focus shifted from just *how it looks* (UI) and *how we sell it* (Marketing) to *how it runs* (Infrastructure).

## The Stack
I recently started diving deep into:
1. Linux server management
2. Kubernetes Cluster setup
3. Ansible for automation
4. SIEM and Splunk

This shift isn't about abandoning design; it's about seeing the complete picture of a product.
            `
        }
    ]
};
