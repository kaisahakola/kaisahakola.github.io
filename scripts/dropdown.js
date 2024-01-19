function toggleDropdown() {
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

function toggleProjectDropdown() {
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

function adjustDropdownPosition(dropdownHeight) {
    var lastDropdownItem = document.querySelector(".dropdown-content .dropdown-item:last-child");

    if (lastDropdownItem) {
        lastDropdownItem.style.marginTop = dropdownHeight + "px";
    }
}

function resetDropdownPosition() {
    var lastDropdownItem = document.querySelector(".dropdown-content .dropdown-item:last-child");

    if (lastDropdownItem) {
        lastDropdownItem.style.marginTop = "0";
    }
}