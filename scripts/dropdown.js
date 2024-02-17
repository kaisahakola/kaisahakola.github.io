const toggleDropdown = () => {
    var dropdownContent = document.getElementById("menuDropdown");
    var buttonIcon = document.getElementById("btn-icon")

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        buttonIcon.className = "fas fa-angle-right"
    } else {
        dropdownContent.style.display = "block";
        buttonIcon.className = "fas fa-angle-down"
    }
}

const toggleProjectDropdown = () => {
    var projectDropDown = document.getElementById("projectDropdown");
    var projectButtonIcon = document.getElementById("project-btn-icon")

    if (projectDropDown.style.display === "block") {
        projectDropDown.style.display = "none";
        projectButtonIcon.className = "fas fa-angle-right"
        resetDropdownPosition();
    } else {
        projectDropDown.style.display = "block";
        projectButtonIcon.className = "fas fa-angle-down"
        adjustDropdownPosition(projectDropDown.clientHeight);
    }
}

const adjustDropdownPosition = (dropdownHeight) => {
    var lastDropdownItem = document.querySelector(".dropdown-content .dropdown-item:last-child");

    if (lastDropdownItem) {
        lastDropdownItem.style.marginTop = dropdownHeight + "px";
    }
}

const resetDropdownPosition = () => {
    var lastDropdownItem = document.querySelector(".dropdown-content .dropdown-item:last-child");

    if (lastDropdownItem) {
        lastDropdownItem.style.marginTop = "0";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname
    var projectDropDown = document.getElementById("projectDropdown");
    var projectButtonIcon = document.getElementById("project-btn-icon")

    if (path === '/documents/game-project.html' 
        || path === '/documents/hockey-project.html' 
        || path === '/documents/mobile-app-project.html') {
            
        projectDropDown.style.display = "block"
        projectButtonIcon.className = "fas fa-angle-down"
        adjustDropdownPosition(projectDropDown.clientHeight);
    }
})