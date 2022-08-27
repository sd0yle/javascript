// Default list to use if reset is used.
let defaultList = [
    "Minor Alchemical Catalyst", "Lesser Alchemical Catalyst", "Moderate Alchemical Catalyst", "Major Alchemical Catalyst", "Greater Alchemical Catalyst", "Ultimate Alchemical Catalyst", "Ingestible Poison", "Poisonous Dart", "Alchemical Light", "Spicy Beverage", "Smelling Salts", "Solvent", "Knockout Drops", "Poison Antidote", "Ingestible Poison", "Poisonous Dart", "Pink Elephant Cocktail", "Thurgood’s Rust Remover", "Strength Sapping Dart", "Poisonous Dart", "Snake Oil", "Look Out Rum!", "Heal Wounds Potion", "Feeblemind Dart", "Clouded Mind Potion", "Webbing Dart", "Lock Oil", "Lock Tar", "Oil of Flame", "Oil of Frost", "Oil of Shock", "Oil of Acid", "Oil of Silver", "Flash Powder Dart", "Itching Powder Dart", "Dr. Brek’s Cure-all", "Charming Dart", "Heal Wounds Dart", "Anti-Flame Lotion", "Anti-Frost Lotion", "Anti-Shock Lotion", "Anti-Acid Lotion", "Sleep Dart", "Auntie Grimm’s Poison Amplifier Dart", "Incredible Disappearing Ink", "Well Purification Tablet", "Quick-grow Plant Food", "Gurgle’s Familiar Chow", "Grandma’s Cookies", "Warblade’s Armor Polish", "Paralyzing Dart", "Hair Dye", "Pure Aetherium Bar", "Deadly Poison Dart", "Gaseous Concoction", "Alchemist Stone", "Aluminum Ore", "Copper Ore", "Tin Ore", "Nickel Ore", "Iron Ore", "Titanium Ore", "Ranged Ammunition", "Netted Projectile", "Chain Bindings", "Drill-Tip Projectile", "Armor Repair Kit", "Fine Short Weapon", "Silvered Fine Short Weapon", "Bola Projectile", "Reforging Tools", "Fine Long Weapon", "Silvered Fine Long Weapon", "Silvered Fine Shield", "Flechette Projectile", "Fine Armor Cloth (10)", "Fine Two Hand Weapon", "Fine Two Hand Weapon", "Whetstone", "Fine Ranged Weapon", "Silvered Fine Ranged Weapon", "Fine Armor Leather (20)", "Fine Armor Hardened Leather (30)", "Shield Spikes", "Mirror Coating", "Fine Armor Chain Mail (40)", "Fiery Plating", "Freezing Plating", "Insulating Plating", "Acidic Plating", "Fine Armor Plate Mail (80)", "Master Work Short Weapon", "Master Work Long Weapon", "Master Work Two Hand Weapon", "Master Work Ranged Weapon", "Silvered Master Work Short Weapon", "Silvered Master Work Long Weapon", "Silvered Master Work Two Hand Weapon", "Silvered Master Work Ranged Weapon", "Master Work Armor Cloth", "Master Work Armor Leather", "Master Work Armor Hardened Leather", "Master Work Armor Chain Mail", "Master Work Armor Plate Mail", "Refined Aetherite Bar", "Pure Aetherium Short Weapon", "Pure Aetherium Long Weapon", "Pure Aetherium Two Hand Weapon", "Pure Aetherium Ranged Weapon", "Pure Aetherium Shield", "Pure Aetherium Armor Cloth", "Pure Aetherium Armor Leather", "Pure Aetherium Armor Hardened Leather", "Pure Aetherium Armor Chain Mail", "Pure Aetherium Armor Plate Mail", "Pure Aetherium Jewelry", "Tiny Scrap Parts", "Small Scrap Parts", "Medium Scrap Parts", "Large Scrap Parts", "Huge Scrap Parts", "Massive Scrap Parts", "Mining Pickaxe", "Foraging Trowel", "Salvaging Screwdriver", "Carving Knife", "Cooking Utensils", "Lock", "Key", "Freeze Trap", "Lock Picks", "Trap Disarming Kit", "Explosive Grenade", "First Aid Kit", "Smithing Tools", "Alchemy Tools", "Rune Carving Tools", "Tinkering Tools", "Explosive Trap", "Parachute Cloak", "Range Extender", "Pit Trap", "Delayed Timer", "Crate of Explosives", "Pick Pocket Tools", "Monster Box", "Caltrops", "Mechanical Lifting Device", "Golem Legs", "C-2 Explosive", "Stun Gun", "Flame Thrower", "Golem Arms", "Mechanical Eye", "Golem Torso", "Jumper Cables", "Box of Wonder", "Golem Head", "Pure Aetherium Rune Socket", "Rotten Wood", "Dried Wood", "Green Wood", "Singed Wood", "Aged Wood", "Petrified Wood", "Glowing Wand Stone", "Arcane Rank I Rune of Charging", "Spirit Rank I Rune of Charging", "Nature Rank I Rune of Charging", "Alarm Rune", "Rune of Unmarking", "Rank I Arcane Wand", "Rank I Spirit Wand", "Rank I Nature Wand", "Rune of Marking", "Arcane Rank II Rune of Charging", "Spirit Rank II Rune of Charging", "Nature Rank II Rune of Charging", "Rank II Arcane Wand", "Rank II Spirit Wand", "Rank II Nature Wand", "Arcane Rank III Rune of Charging", "Spirit Rank III Rune of Charging", "Nature Rank III Rune of Charging", "Rune of the Beacon", "Rank III Arcane Wand", "Rank III Spirit Wand", "Rank III Nature Wand", "Arcane Rank IV Rune of Charging", "Spirit Rank IV Rune of Charging", "Nature Rank IV Rune of Charging", "Rune of Hastening", "Rank IV Arcane Wand", "Rank IV Spirit Wand", "Rank IV Nature Wand",  "Arcane Rank V Rune of Charging", "Spirit Rank V Rune of Charging", "Nature Rank V Rune of Charging", "Rune of Chambering", "Rank V Arcane Wand", "Rank V Spirit Wand",  "Rank V Nature Wand",   "Arcane Rank VI Rune of Charging", "Spirit Rank VI Rune of Charging", "Nature Rank VI Rune of Charging",   "Rank VI Arcane Wand", "Rank VI Spirit Wand", "Rank VI Nature Wand",  "Arcane Rank VII Rune of Charging", "Spirit Rank VII Rune of Charging", "Nature Rank VII Rune of Charging",  "Runic Converter", "Rank VII Arcane Wand", "Rank VII Spirit Wand",  "Rank VII Nature Wand",   "Arcane Rank VIII Rune of Charging", "Spirit Rank VIII Rune of Charging",  "Nature Rank VIII Rune of Charging", "Rank VIII Arcane Wand", "Rank VIII Spirit Wand", "Rank VIII Nature Wand", "Rune of Recall", "Rune of Enchantment: Blood Drinker", "Rune of Enchantment: Flame Striker", "Rune of Enchantment: Frost Striker", "Rune of Enchantment: Shock Striker", "Rune of Enchantment: Acid Striker", "Rune of Enchantment: Minor Spells", "Rune of Enchantment: Major Spells", "Rune of Enchantment: Greater Spells", "Rune of Enchantment: Vital Blow", "Rune of Enchantment: Critical Strike I", "Rune of Enchantment: Critical Strike III", "Rune of Enchantment: Critical Strike V", "Rune of Enchantment: Critical Strike VII", "Rune of Enchantment: Critical Strike IX", "Rune of Enchantment: Devious Strike I", "Rune of Enchantment: Devious Strike III", "Rune of Enchantment: Devious Strike V", "Rune of Enchantment: Devious Strike VII", "Rune of Enchantment: Devious Strike IX", "Magic Short Weapon", "Magic Long Weapon", "Magic Two Hand Weapon", "Magic Ranged Weapon", "Magic Pouch", "Magic Ring", "Magic Cloth Armor (10)", "Magic Leather Armor (20)", "Magic Hardened Leather Armor (30)", "Magic Chain Mail Armor (40)", "Magic Platemail Armor (80)", "Magic Cloak", "Magic Necklace", "Magic Belt", "Rune of Grand Spells", "Rune of Dodge", "Rune of Slay", "Rune of Parry", "Rune of Murder", "Rune of Spell Parry", "Rune of Plot Effects", "Plot Item", "Raw Aetherite Ore", "1 Mana", "1 Credit", "Elemental Shift Scroll", "Create Spirit Familiar Scroll", "Reincarnation Scroll", "Improve Aether Flow Scroll", "Empower Spirit Scroll", "Transformation Scroll (Plot Determined)", "Monstrous Body Scroll", "Monstrous Limited Teleport Scroll", "Monstrous Resist Spell Scroll", "Monstrous Resist Physical Scroll", "Monstrous Gaseous Form Scroll", "Monstrous Strength Scroll", "Monstrous Dodge Scroll", "Monstrous Phylactery Scroll", "Monstrous (Element) Striker Scroll", "Monstrous Dull Pain Scroll", "Monstrous Healed by (Element) Scroll", "Monstrous Materialize/Dematerialize Scroll", "Monstrous Voice Radius Spell Scroll Scroll", "Monstrous Cast Spells Innately Scroll", "Monstrous Aether Spell Scroll", "Monstrous Plot Ability Scroll", "Monstrous Claws Scroll", "Monstrous Innate Spell Scroll", "Magic Shield" ];


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


// Consolidate the roll history.
function finalizePickHistory() {
    // Save roll history to localStorage.
    let rollList;
    let rollValue = document.getElementById("pickHistory").innerHTML;

    // Remove surrounding white space.
    rollList = rollValue.split(",").map(function (value) {
        return value.trim();
    });

    rollList.sort();
    let map = rollList.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev
    }, {});
    //localStorage.setItem("historyList", JSON.stringify(rollList));
    console.log(map);
    document.getElementById("pickHistory").innerHTML = map;

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