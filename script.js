const buttonList = document.querySelectorAll("a");

function showAbout() {
    document.getElementById("about").style.display = "block"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
    buttonList[0].style.cssText = `
        background-color: #722F37;
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
        background-color: #722F37;
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
        background-color: #722F37;
        color: white;
        `;
    buttonList[3].style.cssText = `
        background-color: default;
        color: default;
        `;
}

document.getElementById("blogButton").onclick = function() {showBlog()};
document.getElementById("tjhLink").onclick = function() {showBlog()};
document.getElementById("inalsurLink").onclick = function() {showBlog()};

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
        background-color: #722F37;
        color: white;
        `;
}

document.getElementById("contactButton").onclick = function() {showContact()};

function tjhChangeLogos() {
    document.getElementById("tjhImage").style.cssText = `
        display: none;
        `  
    document.getElementById("tjhImageReversed").style.cssText = `
        display: flex;
        margin: auto;
        border: 2px solid #FF6600;
        `  
}

function tjhReturnLogos() {
    document.getElementById("tjhImage").style.cssText = `
        display: flex;
        margin: auto;
        `    
    document.getElementById("tjhImageReversed").style.cssText = `
        display: none;
        `  
}

document.getElementById("tjhImage").onmouseover = function() {tjhChangeLogos()}
document.getElementById("tjhImageReversed").onmouseout = function() {tjhReturnLogos()}


function inalsurChangeLogos() {
    document.getElementById("inalsurImage").style.cssText = `
        display: none;
        `  
    document.getElementById("inalsurImageReversed").style.cssText = `
        display: flex;
        margin: auto;
        border: 2px solid #722F37;
        `  
}

function inalsurReturnLogos() {
    document.getElementById("inalsurImage").style.cssText = `
        display: flex;
        margin: auto;
        `    
    document.getElementById("inalsurImageReversed").style.cssText = `
        display: none;
        `  
}

document.getElementById("inalsurImage").onmouseover = function() {inalsurChangeLogos()}
document.getElementById("inalsurImageReversed").onmouseout = function() {inalsurReturnLogos()}