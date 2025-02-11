(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();


const messages = [
    "NO?",
    "Weh??",
    "Talaga ba?",
    "Hindi nga???",
    "PLEASE?",
    "PLEEEAAAASEE",
    "Malulungkot ako huhu",
    "PLEAAAAAAAAAAASEEEEE",
    "sigi wag na ",
    "CHAROT SIGE NA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
    let audio = document.getElementById("BOOMSKIRI");

    localStorage.setItem("audioTime", audio.currentTime);
    localStorage.setItem("isPlaying", !audio.paused); // Save playing state


    window.location.href = "yes_page.html";

}



window.addEventListener("load", function() {
    let audio = document.getElementById("BOOMSKIRI");
    audio.play().then(() => {
        console.log("Autoplay started (muted).");
    }).catch(err => {
        console.warn("Autoplay blocked. Waiting for user interaction.");
        document.addEventListener("click", () => {
            audio.muted = false; // Unmute on click
            audio.play();
        }, { once: true });
    });
});