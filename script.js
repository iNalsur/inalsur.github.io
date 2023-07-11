function showAbout() {
    document.getElementById("about").style.display = "block"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
}

document.getElementById("aboutButton").onclick = function() {showAbout()};

function showProjects() {
    document.getElementById("about").style.display = "none"
    document.getElementById("projects").style.display = "block"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "none"
}

document.getElementById("projectsButton").onclick = function() {showProjects()};

function showBlog() {
    document.getElementById("about").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "block"
    document.getElementById("contact").style.display = "none"
}

document.getElementById("blogButton").onclick = function() {showBlog()};

function showContact() {
    document.getElementById("about").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("blog").style.display = "none"
    document.getElementById("contact").style.display = "block"
}

document.getElementById("contactButton").onclick = function() {showContact()};