document.addEventListener('DOMContentLoaded', function() {
    // Create falling hearts
    createFallingHearts();
    
    // Add photo hover effect
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        photo.addEventListener('mouseout', function() {
            this.style.transform = '';
        });
    });
    
    // Add special effects when page loads
    setTimeout(() => {
        const title = document.querySelector('.title');
        if (title) {
            title.style.textShadow = '2px 2px 4px rgba(255, 107, 107, 0.3)';
        }
    }, 2000);
});

// Function to create falling hearts
function createFallingHearts() {
    const fallingHeartsContainer = document.createElement('div');
    fallingHeartsContainer.className = 'falling-hearts';
    document.body.appendChild(fallingHeartsContainer);
    
    // Create 20 falling hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart(fallingHeartsContainer);
        }, i * 300); // Stagger the creation
    }
    
    // Continue creating hearts at intervals
    setInterval(() => {
        createHeart(fallingHeartsContainer);
    }, 3000);
}

// Create individual heart
function createHeart(container) {
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart heart-drop';
    
    // Random properties
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    
    // Apply styles
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${left}%`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    
    // Add to container
    container.appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}

// Add a surprise message when clicked on the big heart
document.addEventListener('DOMContentLoaded', function() {
    const heartElement = document.querySelector('.heart');
    
    if (heartElement) {
        heartElement.addEventListener('click', function() {
            // Create a popup message
            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
            popup.style.background = 'white';
            popup.style.padding = '20px';
            popup.style.borderRadius = '10px';
            popup.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.2)';
            popup.style.zIndex = '1000';
            popup.style.maxWidth = '300px';
            popup.style.textAlign = 'center';
            
            popup.innerHTML = `
                <h3 style="color: #ff6b6b; margin-bottom: 10px; font-family: 'Dancing Script', cursive;">Linh ơi!</h3>
                <p style="margin-bottom: 15px;">Em là người con gái tuyệt vời nhất trên đời này!</p>
                <button style="background: #ff6b6b; color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer;">❤️ Đóng</button>
            `;
            
            document.body.appendChild(popup);
            
            // Close button
            const closeButton = popup.querySelector('button');
            closeButton.addEventListener('click', function() {
                popup.remove();
            });
        });
    }
});
