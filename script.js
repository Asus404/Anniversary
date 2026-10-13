document.addEventListener("DOMContentLoaded", () => {
    const book = document.getElementById("anniversaryBook");
    const hints = document.getElementById("clickHint");
    
    // Define the sequence states of our interactive experience
    // State 0: Front Cover closed
    // State 1: Opened to Page 1 (Message left, photos right)
    // State 2: Flipped to Page 2 (Photos on both sides)
    // State 3: Closed to Back Cover
    let currentState = 0;
    
    // Page DOM groupings
    const states = [
        document.getElementById("coverFront"),
        document.getElementById("page1"),
        document.getElementById("page2"),
        document.getElementById("coverBack")
    ];

    // Initialize layout setting first element active
    updateBookState();

    book.addEventListener("click", () => {
        // Increment state loop or restart sequence
        currentState = (currentState + 1) % 4;
        updateBookState();
    });

    function updateBookState() {
        // Reset states classes cleanly across all segments
        states.forEach((page) => {
            page.classList.remove("active-state");
        });

        // Set the active component configuration visible
        states[currentState].classList.add("active-state");

        // Handle navigation helpers text hints updates dynamically
        switch(currentState) {
            case 0:
                hints.textContent = "Click to open the book";
                break;
            case 1:
                hints.textContent = "Click to turn the page";
                break;
            case 2:
                hints.textContent = "Click to close the book";
                break;
            case 3:
                hints.textContent = "Click to read again";
                break;
        }
    }
});
