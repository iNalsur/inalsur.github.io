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
    document.getElementById("navigationButton").style.cssText = `
    display: block;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("aboutButton").onclick = function() {showAbout()};
document.getElementById("aboutMobile").onclick = function() {showAbout()};

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
    document.getElementById("navigationButton").style.cssText = `
    display: block;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("projectsButton").onclick = function() {showProjects()};
document.getElementById("projectsMobile").onclick = function() {showProjects()};
document.getElementById("toProjects").onclick = function() {showProjects()};

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
    document.getElementById("inalsurProjectShort").style.cssText = `
        display: block;
        `    
    document.getElementById("tjhProjectShort").style.cssText = `
        display: block;
        `    
    document.getElementById("tjhProjectLong").style.cssText = `
        display: none
        `
    document.getElementById("backButton").style.cssText = `
        display: none
        `
    document.getElementById("navigationButton").style.cssText = `
    display: block;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("blogButton").onclick = function() {showBlog()};
document.getElementById("blogMobile").onclick = function() {showBlog()};
document.getElementById("tjhLink").onclick = function() {showBlog()};
document.getElementById("inalsurLink").onclick = function() {showBlog()};
document.getElementById("toBlog").onclick = function() {showBlog()};
document.getElementById("backButton").onclick = function() {showBlog()};

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
    document.getElementById("navigationButton").style.cssText = `
    display: block;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("contactButton").onclick = function() {showContact()};
document.getElementById("contactMobile").onclick = function() {showContact()};
document.getElementById("toContact").onclick = function() {showContact()};

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

function showTjhLong() {
    document.getElementById("inalsurProjectShort").style.cssText = `
        display: none
        `
    document.getElementById("tjhProjectShort").style.cssText = `
        display: none
        `
    document.getElementById("tjhProjectLong").style.cssText = `
        display: block;
        `    
    document.getElementById("backButton").style.cssText = `
        display: block;
        `    
}

document.getElementById("tjhProjectShort").onclick = function() {showTjhLong()}

function openMenu() {
    document.getElementById("navigationButton").style.cssText = `
    display: none;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: block;
    `
    document.getElementById("navList").style.cssText = `
    display: inline-block;
    `
}

document.getElementById("navigationButton").onclick = function() {openMenu()}

function closeMenu() {
    document.getElementById("navigationButton").style.cssText = `
    display: block;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("navigationClose").onclick = function() {closeMenu()}