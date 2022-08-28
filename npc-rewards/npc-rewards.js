/*
 Variables
 */

// Component List.
let componentList = [
    "Foraging","Logging","Mining","Scrapping"]

// Main Reward List.
let rewardList = [
    "One Gold Coin", "Rank 5 Component", "Bundle of five Rank 1 Components", "Bundle of seven Rank 1 Components"]

/*
 Functions.
 */

// Clean up local storage on refresh.
window.onbeforeunload = function () {
    localStorage.removeItem("npcRewardList");
    localStorage.removeItem("rollCount");
}


// Consolidate the roll history into list with number of repeats for each roll.
function cleanUpRolls() {
    // Grab the roll history.
    let rollHistoryString = document.getElementById("pickHistory").innerHTML;

    // Convert to array and remove surrounding white space.
    let rollHistoryArray = rollHistoryString.split(",").map(function (value) {
        return value.trim();
    });

    // Sort the array and count duplicates.
    rollHistoryArray.sort();
    rollHistoryArray = rollHistoryArray.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev
    }, {});

    // Update UI elements.
    document.getElementById("randomPick").innerHTML = '';
    document.getElementById("resultsLabel").hidden = true;
    document.getElementById("rollButton").hidden = true;
    document.getElementById("pickHistoryCleanUpButton").hidden = true;

    // Update UI with result.
    document.getElementById("pickHistory").innerHTML = Object.keys(rollHistoryArray).map(key => `${key}: ${rollHistoryArray[key]}`).join('<br>');
}


// Generate random components.
function getRandomComponent() {
    let randomComponents = '';
    let listLength = componentList.length;
    let stringValue = document.getElementById("randomPick").innerHTML;
    // Return a single Rank 5.
    if (stringValue.match(/^(Rank 5 Component)$/)) {
        randomComponents = "Rank 5 " + componentList[getRandomInt(listLength)] + " Component";
    }
    // Bundles.
    let bundleQuantity = 0;
    if (stringValue.match(/^(Bundle of five Rank 1 Components)$/)) {
        bundleQuantity = 5;
    }
    // Return seven random Rank 1s.
    if (stringValue.match(/^(Bundle of seven Rank 1 Components)$/)) {
        bundleQuantity = 7;
    }
    if (bundleQuantity !== 0) {
        for (let i = 0; i < bundleQuantity; i++) {
            if (randomComponents === '') {
                randomComponents = "Rank 1 " + componentList[getRandomInt(listLength)] + " Component";
            } else {
               let nextRandomComponent = "Rank 1 " + componentList[getRandomInt(listLength)] + " Component";
                randomComponents = randomComponents + ", " + nextRandomComponent;
            }
        }
    }

    return randomComponents;
}

// Returns a random number between 0 and the length of the array.
function getRandomInt(max) {
    let random = Math.floor(Math.random() * max);
    if (random > max) {
        random = random - 1;
    }

    return random;
}


// Resets the local storage in case something else has used it.
function initLocalStorage(option){
    if (localStorage.getItem("npcRewardList") === null) {
        localStorage.setItem("npcRewardList", JSON.stringify(rewardList));
    } else {
        localStorage.removeItem("npcRewardList");
        localStorage.setItem("npcRewardList", JSON.stringify(rewardList));
    }
    if (localStorage.getItem("rollCount") === null) {
        localStorage.setItem("rollCount", "0");
    } else {
        if (option === 'reset') {
            localStorage.removeItem("rollCount");
            localStorage.setItem("rollCount", "0");
        }
    }
}


// Pulls reward options, selects a random one, and displays it.
function randomButton() {
    // Ensure local storage is initialized.
    initLocalStorage();
    let retrievedRewardList = JSON.parse(localStorage.getItem("npcRewardList"));
    let listLength = retrievedRewardList.length;
    // Update roll count.
    rollCountUpdate();
    document.getElementById("resultsLabel").hidden = false;
    // Display random selection, add to history.
    document.getElementById("randomPick").innerHTML = retrievedRewardList[getRandomInt(listLength)];
    let history = document.getElementById("pickHistory").innerHTML;
    let newHistory = document.getElementById("randomPick").innerHTML;
    // Handle additional randoms.
    if (newHistory.match(/^.*(Component).*$/)) {
        newHistory = getRandomComponent();
    }
    // Update history list.
    if (history !== '') {
        newHistory = history + ", " + newHistory;
    }
    document.getElementById("pickHistory").innerHTML = newHistory;

    // Add Clean Up button.
    if (document.getElementById("pickHistoryCleanUpButton") === null) {
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("id", "pickHistoryCleanUpButton");
        button.setAttribute("onclick", "cleanUpRolls()");

        let div = document.getElementById("pickHistoryArea");
        div.appendChild(button);
        document.getElementById("pickHistoryCleanUpButton").innerHTML = "Clean Up Results";
    }
}


// Reset the app.
function resetList() {
    initLocalStorage("reset");
    if (document.getElementById("pickHistoryCleanUpButton") !== null) {
        document.getElementById("pickHistoryArea").removeChild(document.getElementById("pickHistoryCleanUpButton"));
    }
    document.getElementById("randomPick").innerHTML = '';
    document.getElementById("pickHistory").innerHTML = '';
    document.getElementById("rollButton").hidden = false;
    document.getElementById("rollCount").innerHTML = '';
    document.getElementById("resultsLabel").hidden = true;
    document.getElementById("snackbar").innerHTML = "Reset complete.";
    sendToast();
}

// Update the count for rolls.
function rollCountUpdate() {
    let retrievedRollCount = JSON.parse(localStorage.getItem("rollCount"));
    let newCount = parseInt(retrievedRollCount, 10);
    newCount = (newCount + 1);
    localStorage.setItem("rollCount", JSON.stringify(newCount));
    document.getElementById("rollCount").innerHTML = "[Rolls: " + newCount + "] "
}

// Send an alert to the toast box.
function sendToast() {
    let toastElement = document.getElementById("snackbar");
    toastElement.className = "show";

    setTimeout(function() {
        toastElement.className = toastElement.className.replace("show", "");
    }, 3000);
}
