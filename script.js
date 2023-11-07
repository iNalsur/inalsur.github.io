const buttonList = document.querySelectorAll("a");

function scrollToTop() {
    window.scrollTo(0, 0);
  }

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
    display: flex;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("aboutButton").onclick = function() {showAbout(), scrollToTop()};
document.getElementById("aboutMobile").onclick = function() {showAbout(), scrollToTop()};

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
    display: flex;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("projectsButton").onclick = function() {showProjects(), scrollToTop()};
document.getElementById("projectsMobile").onclick = function() {showProjects(), scrollToTop()};
document.getElementById("toProjects").onclick = function() {showProjects(), scrollToTop()};

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
    document.getElementById("tjhProjectUpdateShort").style.cssText = `
        display: block;
        `    
    document.getElementById("tjhProjectUpdateLong").style.cssText = `
        display: none
        `
    document.getElementById("inalsurProjectShort").style.cssText = `
        display: block;
        `    
    document.getElementById("inalsurProjectLong").style.cssText = `
        display: none;
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
    display: flex;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("blogButton").onclick = function() {showBlog(), scrollToTop()};
document.getElementById("blogMobile").onclick = function() {showBlog(), scrollToTop()};
document.getElementById("tjhLink").onclick = function() {showBlog(), scrollToTop()};
document.getElementById("inalsurLink").onclick = function() {showBlog(), scrollToTop()};
document.getElementById("toBlog").onclick = function() {showBlog(), scrollToTop()};
document.getElementById("backButton").onclick = function() {showBlog(), scrollToTop()};

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
    display: flex;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("contactButton").onclick = function() {showContact(), scrollToTop()};
document.getElementById("contactMobile").onclick = function() {showContact(), scrollToTop()};
document.getElementById("toContact").onclick = function() {showContact(), scrollToTop()};

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
    document.getElementById("tjhProjectUpdateShort").style.cssText = `
    display: none
    `
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

document.getElementById("tjhProjectShort").onclick = function() {showTjhLong(), scrollToTop()}

function showInalsurLong() {
    document.getElementById("tjhProjectUpdateShort").style.cssText = `
    display: none
    `
    document.getElementById("inalsurProjectShort").style.cssText = `
        display: none
        `
    document.getElementById("tjhProjectShort").style.cssText = `
        display: none
        `
    document.getElementById("inalsurProjectLong").style.cssText = `
        display: block;
        `    
    document.getElementById("backButton").style.cssText = `
        display: block;
        `    
}

document.getElementById("inalsurProjectShort").onclick = function() {showInalsurLong(), scrollToTop()}

function showThjUpdateLong() {
    document.getElementById("tjhProjectUpdateShort").style.cssText = `
        display: none
        `
    document.getElementById("inalsurProjectShort").style.cssText = `
        display: none
        `
    document.getElementById("tjhProjectShort").style.cssText = `
        display: none
        `
    document.getElementById("tjhProjectUpdateLong").style.cssText = `
        display: block;
        `    
    document.getElementById("backButton").style.cssText = `
        display: block;
        `    
}

document.getElementById("tjhProjectUpdateShort").onclick = function() {showThjUpdateLong(), scrollToTop()}

function openMenu() {
    document.getElementById("navigationButton").style.cssText = `
    display: flex;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: flex;
    `
    document.getElementById("navList").style.cssText = `
    display: inline-block;
    `
}

document.getElementById("navigationButton").onclick = function() {openMenu()}

function closeMenu() {
    document.getElementById("navigationButton").style.cssText = `
    display: flex;
    `
    document.getElementById("navigationClose").style.cssText = `
    display: none;
    `
    document.getElementById("navList").style.cssText = `
    display: none;
    `
}

document.getElementById("navigationClose").onclick = function() {closeMenu()}

function pressedContact() {
    document.getElementById("mailIcon").style.cssText = `
    background-color: white;
    color: #c71610;
    `
    document.getElementById("linkedInIcon").style.cssText = `
    background-color: white;
    color: #0A66C2;
    `
    document.getElementById("gitHubIcon").style.cssText = `
    background-color: white;
    color: black;
    `
}

document.getElementById("mailIcon").onclick = function() {pressedContact()}
document.getElementById("LinkedInIcon").onclick = function() {pressedContact()}
document.getElementById("gitHubIcon").onclick = function() {pressedContact()}