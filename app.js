import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://champions-68a2d-default-rtdb.europe-west1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementOutput = ref(database, "endorse")



const endorsementInput = document.getElementById("endorseinput")
const publishButton = document.getElementById("publishbtn")
const endorsementMessage = document.getElementById("endorsemessage")
const fromInput = document.getElementById("frominput")
const toInput = document.getElementById("toinput")


publishButton.addEventListener("click", function () {
    let endorseValue = endorsementInput.value
    let fromValue = fromInput.value
    let toValue = toInput.value


    clearToInput()
    clearEndorsementMessage()
    clearFromInput()
    push(endorsementOutput, endorseValue, fromValue, toValue)
})

onValue(endorsementOutput, function (snapshot) {


    if (snapshot.exists()) {
        let endorseArray = Object.entries(snapshot.val())

        clearEndorsement()

        for (let i = 0; i < endorseArray.length; i++) {
            let currentEndorse = endorseArray[i]
            let currentEndorseID = currentEndorse[0]
            let currentEndorseValue = currentEndorse[1]
            listMyEndorsementsInDB(endorseArray[i])
        }
    } else {
        endorsementMessage.innerHTML = "Please write an endorsement for your colleague..."
    }


})

function clearToInput() {
    toInput.value = ""
}
function clearFromInput() {
    fromInput.value = ""
}
function clearEndorsementMessage() {
    endorsementInput.value = ""
}
function clearEndorsement() {
    endorsementMessage.innerHTML = ""
}


function listMyEndorsementsInDB(endorsement) {
    let endorseID = endorsement[0]
    let endorseValue = endorsement[1]

    let newEl = document.createElement("li")

    newEl.addEventListener("dblclick", function () {

        let exactLocationOfEndorsementInDB = ref(database, `endorse/${endorseID}`)

        remove(exactLocationOfEndorsementInDB)
    })

    newEl.textContent = endorseValue

    endorsementMessage.append(newEl)
}


