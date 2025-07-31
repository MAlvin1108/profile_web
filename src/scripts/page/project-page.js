const projectPage = () => {
    const element = document.createElement('section');
    element.classList.add('project-page');
    element.innerHTML = `
        <h2>Projects</h2>
        <ul>
            <li><a href="/project1">Project 1</a></li>
            <li><a href="/project2">Project 2</a></li>
            <li><a href="/project3">Project 3</a></li>
        </ul>
    `;
    return element;
};

export default projectPage;


