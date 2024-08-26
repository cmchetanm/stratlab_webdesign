// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener('click', function() {
            for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
            }
        });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const courseSummary = document.getElementById('courseSummary');
    const nextButtons = courseSummary.querySelectorAll('.next-btn');

    nextButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const currentItem = this.closest('.course-summary-item');
        const nextItem = currentItem.nextElementSibling || courseSummary.firstElementChild;

        // Shrink all items
        courseSummary.querySelectorAll('.course-summary-item').forEach(item => {
        item.classList.remove('expanded');
        item.classList.add('shrunk');
        item.querySelectorAll('.content').forEach(content => content.classList.add('hidden'));
        });

        // Expand the next item
        nextItem.classList.remove('shrunk');
        nextItem.classList.add('expanded');
        nextItem.querySelectorAll('.content').forEach(content => content.classList.remove('hidden'));
    });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = Array.from(document.querySelectorAll('.course-summary-item'));
    let currentIndex = 0;  // Start with the first section

    function initializeMobileBehavior() {
    if (window.innerWidth <= 640) {
        // Initially hide the vertical heading of the "Fundamentals" block
        if (sections.length > 0) {
        const initialHeading = sections[0].querySelector('.vertical-heading');
        if (initialHeading) {
            initialHeading.style.display = 'none';
        }
        }

        sections.forEach((section, index) => {
        const nextBtn = section.querySelector('.next-btn');

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
            // Show the vertical heading of the current section
            const currentHeading = sections[currentIndex].querySelector('.vertical-heading');
            if (currentHeading) {
                currentHeading.style.display = '';
            }

            // Move to the next section, wrapping around if necessary
            currentIndex = (currentIndex + 1) % sections.length;

            // Hide the vertical heading of the next section
            const nextHeading = sections[currentIndex].querySelector('.vertical-heading');
            if (nextHeading) {
                nextHeading.style.display = 'none';
            }
            });
        }
        });
    }
    }
    // Run the function on initial load
    initializeMobileBehavior();

    // Optionally, handle screen resize to reapply logic if needed
    window.addEventListener('resize', function() {
    // Reapply logic if screen width is <= 640px
    if (window.innerWidth <= 640) {
        initializeMobileBehavior();
    } else {
        // If the screen width is larger than 640px, reset all vertical headings to visible
        sections.forEach(section => {
        const heading = section.querySelector('.vertical-heading');
        if (heading) {
            heading.style.display = '';
        }
        });
    }
    });
});