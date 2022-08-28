// Default list to use if reset is used.
let defaultList = [
    "Rank I Foraging Component", "Rank II Foraging Component", "Rank III Foraging Component", "Rank IV Foraging Component", "Rank V Foraging Component", "Rank X Foraging Component", "Alchemical Light", "Toxin Antidote", "Ingestible Toxin Catalyst", "Thurgood’s Rust Remover", "Strength Sapping Dart", "Snake Oil", "Heal Wounds Potion", "Kneel Toxin", "Lock Oil", "Lock Tar", "Oil of Flame", "Oil of Frost", "Oil of Shock", "Oil of Stone", "Oil of Silver", "Blinding Toxin", "Heal Wounds Toxin", "Anti-Flame Lotion", "Anti-Frost Lotion", "Anti-Shock Lotion", "Anti-Stone Lotion", "Sleep Toxin", "Incredible Disappearing Ink", "Well Purification Tablet", "Quick-grow Plant Food", "Warblade’s Armor Polish", "Stunning Toxin", "Deadly Toxin", "Gaseous Concoction", "Rank I Mining Component", "Rank II Mining Component", "Rank III Mining Component", "Rank IV Mining Component", "Rank V Mining Component", "Rank X Mining Component", "Netted Projectile", "Chain Bindings", "Drill-Tip Projectile", "Armor Repair Kit", "Fine Short Weapon", "Bola", "Fine Long Weapon", "Flechette Projectile", "Fine Armor (10)", "Fine Twohand Weapon", "Whetstone", "Fine Ranged Weapon", "Fine Armor (20)", "Fine Armor (30)", "Shield Spikes", "Mirror Coating", "Fine Armor (40)", "Fiery Plating", "Freezing Plating", "Insulating Plating", "Stoneward Plating", "Fine Armor (80)", "Rank I Scrapping Component", "Rank II Scrapping Component", "Rank III Scrapping Component", "Rank IV Scrapping Component", "Rank V Scrapping Component", "Rank X Scrapping Component", "Mining Pickaxe", "Foraging Trowel", "Scrapping Screwdriver", "Logging Axe", "Cooking Utensils", "Lock", "Key", "Freeze Trap", "Lockpicks", "Trap Disarming Kit", "Explosive Grenade", "First Aid Kit", "Explosive Trap", "Pick Pocket Tools", "C-2 Explosive", "Rank I Logging Component", "Rank I Logging Component", "Rank II Logging Component", "Rank III Logging Component", "Rank IV Logging Component", "Rank X Logging Component", "1 Gold Coin"];

// Add or update a list.
function addList() {
    let newList = document.getElementById('listInput').value;

    if (newList) {
        let fullList = [];
        let listValue = document.getElementById('listArea');
        // Remove surrounding white space.
        fullList = newList.split(",").map(function (value) {
            return value.trim();
        });
        // Remove null entries.
        newList = fullList;
        fullList = newList.filter(function(val) {
            return val !== null && val !== '';
        });


        localStorage.setItem("optionsList", JSON.stringify(fullList));
        document.getElementById('snackbar').innerHTML = "New list saved.";
        sendToast();

        document.getElementById("addToListButton").innerHTML = 'Update List';
        document.getElementById("cancelListButton").innerHTML = 'Close';
    } else {
        document.getElementById('snackbar').innerHTML = "You didn't add anything yet.";
        sendToast();
    }
}


// Cancel add list or close list editor elements.
function cancelList() {
    let div = document.getElementById('listArea');
    let textarea = document.getElementById('listInput');
    let button = document.getElementById('addToListButton');
    let button2 = document.getElementById('cancelListButton');

    //div.removeChild(textarea);
    div.removeChild(textarea);
    div.removeChild(button);
    div.removeChild(button2);
}


// Clear full list.
function clearAllOptions() {
    if (localStorage.getItem("optionsList") === null) {
        document.getElementById('snackbar').innerHTML = "You do not have a list right now!";
        sendToast();
    } else {
        let retrievedData = localStorage.getItem("optionsList");
        let fullList = JSON.parse(retrievedData);
        // Loop this?
        document.getElementById('snackbar').innerHTML = ("Okay, deleted all of these values: " + fullList);
        sendToast();
        localStorage.clear();
        document.getElementById("listView").innerHTML = '';
    }
}


// Clear the roll history.
function clearPickHistory() {
    let history = document.getElementById("pickHistory").innerHTML;

    if (history) {
        document.getElementById("pickHistory").innerHTML = '';
        document.getElementById('snackbar').innerHTML = "Roll history cleared.";
        sendToast();
    } else {
        document.getElementById('snackbar').innerHTML = "You do not have a roll history right now!";
        sendToast();
    }
}


// Clear full list and input a full list.
function createList() {
    if (localStorage.getItem("optionsList") != null) {
        localStorage.clear();
        document.getElementById("listView").innerHTML = '';
    }
    let textarea = document.createElement('textarea');
    textarea.setAttribute("type", "text");
    textarea.setAttribute("class", "scroll");
    textarea.setAttribute("id", "listInput");
    textarea.setAttribute("placeholder", "Create your list here and separate each option with a comma.");

    let button = document.createElement('button');
    button.setAttribute("type", "button");
    button.setAttribute("class", "small");
    button.setAttribute("id", "addToListButton");
    button.setAttribute("onclick", "addList()");

    let button2 = document.createElement('button');
    button2.setAttribute("type", "button");
    button2.setAttribute("class", "small");
    button2.setAttribute("id", "cancelListButton");
    button2.setAttribute("onclick", "cancelList()");

    let div = document.getElementById('listArea');
    let br = document.createElement('br');
    div.appendChild(textarea);
    div.appendChild(button);
    div.appendChild(br);
    div.appendChild(button2);
    document.getElementById("addToListButton").innerHTML = 'Add List';
    document.getElementById("cancelListButton").innerHTML = 'Cancel';
}


// Edit the current list.
function editAllOptions() {
    if (localStorage.getItem("optionsList") === null) {
        document.getElementById("snackbar").innerHTML = "You do not have a list right now!";
        sendToast();
    } else {
        if (document.getElementById("listInput") === null) {
            let textarea = document.createElement('textarea');
            textarea.setAttribute("type", "text");
            textarea.setAttribute("class", "scroll");
            textarea.setAttribute("id", "listInput");

            let button = document.createElement('button');
            button.setAttribute("type", "button");
            button.setAttribute("class", "small");
            button.setAttribute("id", "addToListButton");
            button.setAttribute("onclick", "addList()");

            let button2 = document.createElement('button');
            button2.setAttribute("type", "button");
            button2.setAttribute("class", "small");
            button2.setAttribute("id", "cancelListButton");
            button2.setAttribute("onclick", "cancelList()");

            let div = document.getElementById('listArea');
            let br = document.createElement('br');
            div.appendChild(textarea);
            div.appendChild(br);
            div.appendChild(button);
            div.appendChild(button2);
            document.getElementById("addToListButton").innerHTML = 'Update List';
            document.getElementById("cancelListButton").innerHTML = 'Close';

            let retrievedData = localStorage.getItem("optionsList");
            let fullList = JSON.parse(retrievedData);
            let currentList = '';
            fullList.forEach(element => currentList += element += ", ");
            currentList = currentList.replace(/,\s*$/, "");
            currentList = currentList += ".";
            document.getElementById("listInput").innerHTML = currentList;

            let p = document.getElementById("listView");
            let div2 = document.getElementById("currentListArea");
            div2.removeChild(p);
        }
    }
}


// Consolidate the roll history into list with number of repeats for each roll.
function finalizePickHistory() {
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
    // Update UI with result.
    let displayString = Object.keys(rollHistoryArray).map(key => `${key}: ${rollHistoryArray[key]}`).join('<br>');
    document.getElementById("pickHistory").innerHTML = displayString;
}


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
    if (localStorage.getItem("optionsList") === null) {
        let msg = "You do not have a list right now!";
        document.getElementById("snackbar").innerHTML = msg;
        sendToast();
    } else {
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

        if (document.getElementById("pickHistoryClearButton") === null) {
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("id", "pickHistoryClearButton");
            button.setAttribute("onclick", "clearPickHistory()");

            let button2 = document.createElement("button");
            button2.setAttribute("type", "button");
            button2.setAttribute("id", "pickHistoryFinalizeButton");
            button2.setAttribute("onclick", "finalizePickHistory()");

            let div = document.getElementById("pickHistoryArea");
            div.appendChild(button);
            div.appendChild(button2);
            document.getElementById("pickHistoryClearButton").innerHTML = "Clear History";
            document.getElementById("pickHistoryFinalizeButton").innerHTML = "Finalize Rolls";
        }
    }
}


// Reset list back to default.
function resetList() {
    if (localStorage.getItem("optionsList") === null) {
        localStorage.setItem("optionsList", JSON.stringify(defaultList));
    } else {
        localStorage.clear();
        localStorage.setItem("optionsList", JSON.stringify(defaultList));
    }
    document.getElementById("snackbar").innerHTML = "Okay, the list has been reset back to the default list.";
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


// Toggles showing all options currently in the list.
function showAllOptions() {
    if (localStorage.getItem("optionsList") === null) {
        document.getElementById('snackbar').innerHTML = "You do not have a list right now!";
        sendToast();
    } else {
        let retrievedData = localStorage.getItem("optionsList");
        let fullList = JSON.parse(retrievedData);
        let currentList = '';
        fullList.forEach(element => currentList += element += ", ");
        currentList = currentList.replace(/,\s*$/, "");

        if (document.getElementById("listView") === null) {
            let p = document.createElement('p');
            p.setAttribute("type", "text");
            p.setAttribute("class", "scroll");
            p.setAttribute("id", "listView");

            let div = document.getElementById('currentListArea');
            div.appendChild(p);
            document.getElementById("listView").innerHTML = currentList;
        } else {
            if (document.getElementById("listView").hidden) {
                document.getElementById("listView").innerHTML = currentList;
                document.getElementById('listView').hidden = false;
            } else {
                document.getElementById('listView').hidden = true;
            }
        }
    }
}
