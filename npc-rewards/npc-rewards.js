// Main Reward List.
let rewardList = [
    "One Gold Coin", "Rank 5 Component", "Bundle of five Rank 1 Components", "Bundle of seven Rank 1 Components"]

// Component List.
let componentList = [
    "Foraging","Logging","Mining","Scrapping"]


// Returns a random number between 0 and the length of the array.
function getRandomInt(max) {
    let random = Math.floor(Math.random() * max);
    if (random > max) {
        random = random - 1;
    }

    return random;
}


// Grabs a random thing.
function randomButton() {
    let retrievedData = localStorage.getItem("optionsList");
    let fullList = JSON.parse(retrievedData);
    let flength = fullList.length;

    document.getElementById("randomPick").innerHTML = fullList[getRandomInt(flength)];

    // Save to localStorage.

    // Display in roll history.

    // Add count to display.

    let history = document.getElementById("pickHistory").innerHTML;
    let newValue = document.getElementById("randomPick").innerHTML;
    if (history !== '') {
        newValue = history + ", " + newValue;
    }
    document.getElementById("pickHistory").innerHTML = newValue;
}


// Reset list back to default.
function resetList() {
    if (localStorage.getItem("optionsList") === null) {
        localStorage.setItem("optionsList", JSON.stringify(rewardList));
    } else {
        localStorage.clear();
        localStorage.setItem("optionsList", JSON.stringify(rewardList));
    }
    if (document.getElementById("pickHistory").innerHTML !== '') {
        document.getElementById("pickHistory").innerHTML = '';
    }
    document.getElementById("snackbar").innerHTML = "Reset complete.";
    sendToast();
    showAllOptions();
}


// Send an alert to the toast box.
function sendToast() {
    let toastElement = document.getElementById("snackbar");
    toastElement.className = "show";

    setTimeout(function() {
        toastElement.className = toastElement.className.replace("show", "");
    }, 3000);
}
