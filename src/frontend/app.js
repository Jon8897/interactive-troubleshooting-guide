// Version - 1.0.0.0

const issueDescriptions = {
    issue1: "Wi-Fi connection dropping frequently could be caused by interference or router settings.",
    issue2: "Unable to connect to the internet may be due to incorrect settings or ISP issues.",
    issue3: "Slow internet speeds are often caused by bandwidth limitations or network congestion.",
    issue4: "A router not responding could indicate a hardware issue or a need for a firmware update."
};

function showIssueDetails(issueKey) {
    const details = document.getElementById("issue-details");
    details.innerHTML = `<p>${issueDescriptions[issueKey]}</p>`;
}