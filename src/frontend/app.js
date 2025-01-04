// Version - 1.0.0.0

// Object containing dynamic issue descriptions
const issueDescriptions = {
    "network-issue1": "Wi-Fi connection dropping frequently could be caused by interference or router settings.",
    "network-issue2": "Unable to connect to the internet may be due to incorrect settings or ISP issues.",
    "network-issue3": "Slow internet speeds are often caused by bandwidth limitations or network congestion.",
    "network-issue4": "A router not responding could indicate a hardware issue or a need for a firmware update."
};

// Function to display the selected issue description dynamically
function showIssueDetails(issueKey) {
    const details = document.getElementById("issue-details");
    if (issueDescriptions[issueKey]) {
        details.innerHTML = `<p>${issueDescriptions[issueKey]}</p>`;
        details.style.display = "block"; // Ensure details are visible
    } else {
        details.innerHTML = "<p>Details for this issue are not available.</p>";
    }
}