const membersModal = document.getElementById("members-modal");
const aboutModal = document.getElementById("about-modal");
const openMembersModal = document.getElementById("open-members-modal");
const openAboutModal = document.getElementById("open-about-modal");
const closeMembersModal = document.getElementById("close-members-modal");
const closeAboutModal = document.getElementById("close-about-modal");

// Open Members Modal
openMembersModal.addEventListener("click", (e) => {
    e.preventDefault();
    membersModal.classList.add("active");
});

// Close Members Modal
closeMembersModal.addEventListener("click", () => {
    membersModal.classList.remove("active");
});

// Open About Modal
openAboutModal.addEventListener("click", (e) => {
    e.preventDefault();
    aboutModal.classList.add("active");
});

// Close About Modal
closeAboutModal.addEventListener("click", () => {
    aboutModal.classList.remove("active");
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === membersModal) membersModal.classList.remove("active");
    if (e.target === aboutModal) aboutModal.classList.remove("active");
});

// Ripple effect on mousemove
document.addEventListener("mousemove", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600); // Match animation duration
});

// Select elements
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Toggle the menu when hamburger is clicked
// Toggle the menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active"); // Add or remove the 'active' class

    // Change hamburger icon to 'X' and back
    if (hamburger.classList.contains("open")) {
        hamburger.classList.remove("open"); // Remove 'open' class
        hamburger.innerHTML = "&#9776;"; // Change to hamburger icon
    } else {
        hamburger.classList.add("open"); // Add 'open' class
        hamburger.innerHTML = "&times;"; // Change to 'X' icon
    }
});
