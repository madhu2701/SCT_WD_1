document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. SCROLL REVEAL ANIMATION ---
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15 
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // --- 3. CART FUNCTIONALITY ---
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemName = e.target.getAttribute('data-name') || "Item";
            
            cartCount++;
            cartCountElement.textContent = cartCount;

            alert(`Yum! Added ${itemName} to your cart! 🛒`);
        });
    });

    console.log("Sweet Tooth script loaded 🍦");
});