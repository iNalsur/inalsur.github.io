const buttonList = document.querySelectorAll("a");

function showAbout() {
    document.getElementById("about").style.display = "block"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
    buttonList[0].style.cssText = `
        background-color: darkred;
        color: white;
        `;
    buttonList[1].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[2].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[3].style.cssText = `
        background-color: default;
        color: default;
        `;
}

document.getElementById("aboutButton").onclick = function() {showAbout()};

function showProjects() {
    document.getElementById("about").style.display = "none"
    document.getElementById("projects").style.display = "block"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
    buttonList[0].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[1].style.cssText = `
        background-color: darkred;
        color: white;
        `;
    buttonList[2].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[3].style.cssText = `
        background-color: default;
        color: default;
        `;
}

document.getElementById("projectsButton").onclick = function() {showProjects()};

function showBlog() {
    document.getElementById("about").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "block"
    document.getElementById("contact").style.display = "none"
    buttonList[0].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[1].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[2].style.cssText = `
        background-color: darkred;
        color: white;
        `;
    buttonList[3].style.cssText = `
        background-color: default;
        color: default;
        `;
}

document.getElementById("blogButton").onclick = function() {showBlog()};

function showContact() {
    document.getElementById("about").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "block"
    buttonList[0].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[1].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[2].style.cssText = `
        background-color: default;
        color: default;
        `;
    buttonList[3].style.cssText = `
        background-color: darkred;
        color: white;
        `;
}

document.getElementById("contactButton").onclick = function() {showContact()};