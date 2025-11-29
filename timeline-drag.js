
document.addEventListener('DOMContentLoaded', function () {
    const timelineContainer = document.querySelector('.timeline-container');

    if (!timelineContainer) {
        console.error('Timeline container not found!');
        return;
    }

    

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    
    timelineContainer.style.cursor = 'grab';
    timelineContainer.style.overflow = 'auto'; 

    
    timelineContainer.addEventListener('mousedown', (e) => {
        
        
        if (e.button === 0 && !e.target.closest('.event-marker') && !e.target.closest('.timeline-bar')) {
            isDragging = true;
            timelineContainer.style.cursor = 'grabbing';
            timelineContainer.style.userSelect = 'none';

            
            timelineContainer.style.scrollBehavior = 'auto';

            startX = e.clientX;
            startY = e.clientY;
            scrollLeft = timelineContainer.scrollLeft;
            scrollTop = timelineContainer.scrollTop;

            
            e.preventDefault();
        }
    });

    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        e.preventDefault();

        const x = e.clientX;
        const y = e.clientY;

        const walkX = (startX - x) * 1.5; 
        const walkY = (startY - y) * 1.5;

        timelineContainer.scrollLeft = scrollLeft + walkX;
        timelineContainer.scrollTop = scrollTop + walkY;
    });

    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            timelineContainer.style.cursor = 'grab';
            timelineContainer.style.userSelect = '';

            
            timelineContainer.style.scrollBehavior = 'smooth';
        }
    });

    
    timelineContainer.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});