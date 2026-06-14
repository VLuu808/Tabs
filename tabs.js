const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));

        // Hide all content sections
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // Activate clicked tab
        tab.classList.add("active");

        // Show corresponding content
        const target = document.getElementById(
            tab.dataset.tab
        );

        target.classList.add("active");
    });
});