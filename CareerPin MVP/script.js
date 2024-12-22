// Function to navigate between pages
function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        page.classList.remove('active');
    });

    // Show the selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Function to toggle the visibility of the chatbox
function toggleChatbox() {
    const chatbox = document.querySelector('.chatbox');
    const toggleButton = document.querySelector('#toggle-chatbox');

    // Toggle the 'collapsed' class on the chatbox
    chatbox.classList.toggle('collapsed');

    // Update the button text based on the chatbox state
    if (chatbox.classList.contains('collapsed')) {
        toggleButton.innerText = 'Show Chatbox';
    } else {
        toggleButton.innerText = 'Hide Chatbox';
    }
}

// Add event listener to the toggle button
const toggleButton = document.createElement('button');
toggleButton.id = 'toggle-chatbox';
toggleButton.innerText = 'Hide Chatbox'; // Initial state
toggleButton.addEventListener('click', toggleChatbox);

// Insert the toggle button into the chatbox
document.querySelector('.chatbox').prepend(toggleButton);

