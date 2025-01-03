// Version - 1.0.0.0

const troubleshootingSteps = {
    network: [
        "Check your internet connection.",
        "Restart your router.",
        "Ensure your device is connected to Wi-Fi.",
        "Contact your ISP if the issue persists."
    ],
    login: [
        "Ensure your username and password are correct.",
        "Check if Caps Lock is enabled.",
        "Reset your password if necessary.",
        "Contact support for further assistance."
    ]
};

function showSteps(category) {
    const stepsList = document.getElementById('steps-list');
    stepsList.innerHTML = ""; // Clear previous steps

    if (troubleshootingSteps[category]) {
        troubleshootingSteps[category].forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No steps available for this category.";
        stepsList.appendChild(li);
    }
}