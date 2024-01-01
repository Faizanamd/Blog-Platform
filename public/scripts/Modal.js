document.addEventListener('DOMContentLoaded', function () {
    var newProjectBtn = document.getElementById('loginbutton');
    var newProjectModal = document.getElementById('newProjectModal');
    var closeModal = document.getElementById('closeModal');

    newProjectBtn.addEventListener('click', function () {
        newProjectModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        newProjectModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target == newProjectModal) {
            newProjectModal.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterContainer = document.getElementById("filterContainer");
    const loadMoreButton = document.getElementById("loadMoreButton");
    const additionalButtons = [
        "Computer", "Environmental", "Fashion", "Food and Cooking",
        "DIY and Crafts", "Beauty and Makeup", "Education", "Wellness",
        "Personal Development", "Photography", "Parenting", "Finance",
        "Social Issues", "Music", "Home Decor", "Book Reviews", "Technology",
        "Sports", "Career and Professional Development", "Travel", "Science",
        "Entertainment", "Art and Design", "Business", "History"
    ];

    let renderCount = 6;

    function renderButtons() {
        filterContainer.innerHTML = "";
        const endIndex = Math.min(renderCount, additionalButtons.length);
        for (let i = 0; i < endIndex; i++) {
            const button = document.createElement("button");
            button.textContent = additionalButtons[i];
            filterContainer.appendChild(button);
        }
    }

    function loadMoreButtons() {
        if (renderCount < additionalButtons.length) {
            renderCount += 6;
            renderButtons();

            // Disable the button when all buttons are displayed
            if (renderCount >= additionalButtons.length) {
                loadMoreButton.disabled = true;
            }
        }
    }

    // Initial rendering
    loadMoreButtons();

    // Load more on button click
    loadMoreButton.addEventListener("click", loadMoreButtons);
});
document.addEventListener('DOMContentLoaded', function () {
    var warningMessage = document.getElementById('warningMessage');
    var closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click' ,() =>{
        warningMessage.style.display = 'none'
    })
});
