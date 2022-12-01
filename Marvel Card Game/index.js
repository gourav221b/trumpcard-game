var intelligenceControl = document.getElementById("Intelligence");
var strengthControl = document.getElementById("Strength");
var speedControl = document.getElementById("Speed");
var durabilityControl = document.getElementById("Durability");
var powerControl = document.getElementById("Power");
var combatControl = document.getElementById("Combat");
var totalControl = document.getElementById("Total");
var playerCardImage = document.getElementById("playerCardImage");
var playerCardDetails = document.getElementById("playerCardDetails");

var computerCardImage = document.getElementById("computerCardImage");
var computerCardDetails = document.getElementById("computerCardDetails");

var result = document.getElementById("resultText");
var resetButton = document.getElementById("resetButton");

// DATA SET
var stack1 = [
    {
        "Name": "AntMan",
        "Race": "Human",
        "Intelligence": 100,
        "Strength": 10,
        "Speed": 23,
        "Durability": 28,
        "Power": 32,
        "Combat": 32,
        "Total": 225
    },

    {
        "Name": "Black Widow",
        "Race": "Human",
        "Intelligence": 75,
        "Strength": 13,
        "Speed": 27,
        "Durability": 32,
        "Power": 32,
        "Combat": 100,
        "Total": 279
    },

    {
        "Name": "Captain Marvel",
        "Race": "Human-Kree",
        "Intelligence": 100,
        "Strength": 100,
        "Speed": 67,
        "Durability": 95,
        "Power": 62,
        "Combat": 56,
        "Total": 480
    },

    {
        "Name": "Doctor Strange",
        "Race": "Human",
        "Intelligence": 100,
        "Strength": 10,
        "Speed": 12,
        "Durability": 84,
        "Power": 100,
        "Combat": 60,
        "Total": 366
    },

    {
        "Name": "Hawkeye",
        "Race": "Human",
        "Intelligence": 50,
        "Strength": 12,
        "Speed": 23,
        "Durability": 14,
        "Power": 26,
        "Combat": 80,
        "Total": 205
    },

    {
        "Name": "Iron Man",
        "Race": "Human",
        "Intelligence": 100,
        "Strength": 85,
        "Speed": 58,
        "Durability": 85,
        "Power": 100,
        "Combat": 64,
        "Total": 492
    },

    {
        "Name": "Scarlet Witch",
        "Race": "Mutant",
        "Intelligence": 88,
        "Strength": 10,
        "Speed": 23,
        "Durability": 42,
        "Power": 67,
        "Combat": 28,
        "Total": 258
    },

    {
        "Name": "Thanos",
        "Race": "Eternal",
        "Intelligence": 88,
        "Strength": 100,
        "Speed": 17,
        "Durability": 100,
        "Power": 100,
        "Combat": 80,
        "Total": 485
    },

    {
        "Name": "Ultron",
        "Race": "Android",
        "Intelligence": 88,
        "Strength": 83,
        "Speed": 42,
        "Durability": 100,
        "Power": 100,
        "Combat": 64,
        "Total": 477
    },

    {
        "Name": "Winter Soldier",
        "Race": "Human",
        "Intelligence": 56,
        "Strength": 32,
        "Speed": 35,
        "Durability": 65,
        "Power": 60,
        "Combat": 84,
        "Total": 332
    },

]

var stack2 =
    [

        {
            "Name": "Black Panther",
            "Race": "Human",
            "Intelligence": 88,
            "Strength": 16,
            "Speed": 30,
            "Durability": 60,
            "Power": 41,
            "Combat": 100,
            "Total": 335
        },

        {
            "Name": "Captain America",
            "Race": "Human",
            "Intelligence": 63,
            "Strength": 19,
            "Speed": 35,
            "Durability": 56,
            "Power": 46,
            "Combat": 100,
            "Total": 319
        },

        {
            "Name": "Deadpool",
            "Race": "Mutant",
            "Intelligence": 50,
            "Strength": 15,
            "Speed": 30,
            "Durability": 100,
            "Power": 100,
            "Combat": 100,
            "Total": 395
        },

        {
            "Name": "Falcon",
            "Race": "Human",
            "Intelligence": 38,
            "Strength": 13,
            "Speed": 50,
            "Durability": 28,
            "Power": 22,
            "Combat": 64,
            "Total": 215
        },

        {
            "Name": "Hulk",
            "Race": "Human / Radiation",
            "Intelligence": 88,
            "Strength": 100,
            "Speed": 47,
            "Durability": 100,
            "Power": 41,
            "Combat": 85,
            "Total": 461
        },

        {
            "Name": "Loki",
            "Race": "Asgardian",
            "Intelligence": 88,
            "Strength": 57,
            "Speed": 47,
            "Durability": 85,
            "Power": 85,
            "Combat": 56,
            "Total": 418
        },

        {
            "Name": "Spider Man",
            "Race": "Human",
            "Intelligence": 88,
            "Strength": 55,
            "Speed": 60,
            "Durability": 74,
            "Power": 58,
            "Combat": 85,
            "Total": 420
        },

        {
            "Name": "Thor",
            "Race": "Asgardian",
            "Intelligence": 69,
            "Strength": 100,
            "Speed": 92,
            "Durability": 100,
            "Power": 100,
            "Combat": 85,
            "Total": 546
        },

        {
            "Name": "War Machine",
            "Race": "Human",
            "Intelligence": 63,
            "Strength": 80,
            "Speed": 63,
            "Durability": 100,
            "Power": 100,
            "Combat": 85,
            "Total": 491
        },

        {
            "Name": "Wolverine",
            "Race": "Mutant",
            "Intelligence": 55,
            "Strength": 32,
            "Speed": 38,
            "Durability": 100,
            "Power": 44,
            "Combat": 100,
            "Total": 369
        }
    ]

var activePlayer = stack1[0]
var activeComputer = stack2[0]
var i = 0;
window.onload = updateCards()



resetButton.addEventListener('click', () => {
    if (i > 10)
        restartGame()
    else
        nextTurn()

})

function updateCards() {
    playerCardImage.src = `assets/${activePlayer.Name.replace(/\s+/g, '')}.png`
    playerCardImage.alt = activePlayer.Name
    playerCardDetails.innerHTML = `
  <div class="characterName">${activePlayer.Name}</div>
                    <div class="characterRace">${activePlayer.Race}</div>
                    <div class="characterStatsMainWrapper">
                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Intelligence</div>
                            <div class="characterStatVal">${activePlayer.Intelligence}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Strength</div>
                            <div class="characterStatVal">${activePlayer.Strength}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Speed</div>
                            <div class="characterStatVal">${activePlayer.Speed}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Durability</div>
                            <div class="characterStatVal">${activePlayer.Durability}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Power</div>
                            <div class="characterStatVal">${activePlayer.Power}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Combat</div>
                            <div class="characterStatVal">${activePlayer.Combat}</div>
                        </div>
                    </div>
`

    computerCardImage.src = `assets/${activeComputer.Name.replace(/\s+/g, '')}.png`
    computerCardImage.alt = activeComputer.Name

    computerCardDetails.innerHTML = `
  <div class="characterName">${activeComputer.Name}</div>
                    <div class="characterRace">${activeComputer.Race}</div>
                    <div class="characterStatsMainWrapper">
                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Intelligence</div>
                            <div class="characterStatVal">${activeComputer.Intelligence}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Strength</div>
                            <div class="characterStatVal">${activeComputer.Strength}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Speed</div>
                            <div class="characterStatVal">${activeComputer.Speed}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Durability</div>
                            <div class="characterStatVal">${activeComputer.Durability}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Power</div>
                            <div class="characterStatVal">${activeComputer.Power}</div>
                        </div>

                        <div class="characterStatsWrapper">
                            <div class="characterStatParam">Combat</div>
                            <div class="characterStatVal">${activeComputer.Combat}</div>
                        </div>
                    </div>
`
    setTimeout(() => {
        document.querySelectorAll('.card').forEach(card => card.style.animation = "")
    }, 500);
}


// CHECKER FUNCTIONS
function checkIntelligence() {
    if (activePlayer.Intelligence > activeComputer.Intelligence)
        declareResult(activePlayer.Name)
    else if (activePlayer.Intelligence < activeComputer.Intelligence)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}
function checkStrength() {
    if (activePlayer.Strength > activeComputer.Strength)
        declareResult(activePlayer.Name)
    else if (activePlayer.Strength < activeComputer.Strength)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}

function checkSpeed() {
    if (activePlayer.Speed > activeComputer.Speed)
        declareResult(activePlayer.Name)
    else if (activePlayer.Speed < activeComputer.Speed)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}

function checkDurability() {
    if (activePlayer.Durability > activeComputer.Durability)
        declareResult(activePlayer.Name)
    else if (activePlayer.Durability < activeComputer.Durability)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}

function checkPower() {
    if (activePlayer.Power > activeComputer.Power)
        declareResult(activePlayer.Name)
    else if (activePlayer.Power < activeComputer.Power)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}

function checkCombat() {
    if (activePlayer.Combat > activeComputer.Combat)
        declareResult(activePlayer.Name)
    else if (activePlayer.Combat < activeComputer.Combat)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}
function checkTotal() {
    if (activePlayer.Total > activeComputer.Total)
        declareResult(activePlayer.Name)
    else if (activePlayer.Total < activeComputer.Total)
        declareResult(activeComputer.Name)
    else
        declareResult(null, true)
}



function declareResult(name = "", draw = false) {
    document.querySelectorAll('.overlay').forEach(overlay => overlay.classList.add('active'))

    document.querySelectorAll('.characterStatsMainWrapper').forEach(stat => stat.classList.add('activeStats'))


    if (!draw)
        result.innerHTML = `${name} Wins!`
    else
        result.innerHTML = "Match Draw"



    document.getElementById("resultWrapper").classList.add('activeResult')
}


function nextTurn() {
    if (i < 10) {
        i++
        activePlayer = stack1[i]
        activeComputer = stack2[i]
    }


    document.querySelectorAll('.overlay').forEach(overlay => overlay.classList.remove('active'))
    document.querySelectorAll('.characterStatsMainWrapper').forEach(stat => stat.classList.remove('activeStats'))
    document.querySelectorAll('.card').forEach(card => card.style.animation = "grow 0.5s linear")



    document.getElementById("resultWrapper").classList.remove('activeResult')
    updateCards()
}

function restartGame() {
    window.location.reload()

}