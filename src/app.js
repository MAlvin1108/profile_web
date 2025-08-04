import contactPage from "./scripts/page/contact-page.js"
import projectPage from "./scripts/page/project-page.js"



const routes = {
    "/": home,
    "/contact": contactPage,
    "/project" : projectPage,
}

const render = () => {
    const path = window.location.pathname;
    const page = routes[path] || home; // Default to home if path not found
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content
    content.appendChild(page());
};

render(); // Render the initial page

