// Left-click drag functionality for timeline page
document.addEventListener('DOMContentLoaded', function () {
    const timelineContainer = document.querySelector('.timeline-container');

    if (!timelineContainer) {
        console.error('Timeline container not found!');
        return;
    }

    // Script initialized (console logging removed for production)

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    // Set initial cursor style
    timelineContainer.style.cursor = 'grab';
    timelineContainer.style.overflow = 'auto'; // Ensure scrolling is enabled

    // Mouse down - start dragging
    timelineContainer.addEventListener('mousedown', (e) => {
        // Left mouse button (button 0)
        // Don't drag if clicking on event markers or timeline bars
        if (e.button === 0 && !e.target.closest('.event-marker') && !e.target.closest('.timeline-bar')) {
            isDragging = true;
            timelineContainer.style.cursor = 'grabbing';
            timelineContainer.style.userSelect = 'none';

            // Disable smooth scrolling while dragging for instant response
            timelineContainer.style.scrollBehavior = 'auto';

            startX = e.clientX;
            startY = e.clientY;
            scrollLeft = timelineContainer.scrollLeft;
            scrollTop = timelineContainer.scrollTop;

            // Prevent text selection while dragging
            e.preventDefault();
        }
    });

    // Mouse move - update position
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        e.preventDefault();

        const x = e.clientX;
        const y = e.clientY;

        const walkX = (startX - x) * 1.5; // Multiplier for faster scrolling
        const walkY = (startY - y) * 1.5;

        timelineContainer.scrollLeft = scrollLeft + walkX;
        timelineContainer.scrollTop = scrollTop + walkY;
    });

    // Mouse up - stop dragging
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            timelineContainer.style.cursor = 'grab';
            timelineContainer.style.userSelect = '';

            // Restore smooth scrolling
            timelineContainer.style.scrollBehavior = 'smooth';
        }
    });

    // Prevent default drag behavior on images and links
    timelineContainer.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});