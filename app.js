import { initialiseApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"


const appSettings = {
    databaseURL: "https://champions-68a2d-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initialiseApp(appSettings)
const database = getDatabase(app)
const endorsementOutput = ref(database, "endorse")

const endorsementInput = document.getElementById("endorseinput")
const publishButton = document.getElementById("publishbtn")
const endorsementMessage = document.getElementById("endorsemessage")

endorsementInput.addEventListener("click", function () {

})

publishButton.addEventListener("click", function () {
    let publishValue = 
})

function clearEndorsement() {
    endorsementMessage.innerHTML = ""
}

function clearEndorsementInput() {
    endorsementInput.value = ""
}


function listMyEndorsementsInDB(endorsement) {
    let endorseID = endorsement[0]
    let endorseValue = endorsement[1]

    let newEl = document.createElement("li")

    newEl.addEventListener("dblclick", function () {
        let exactLocationOfEndorsementInDB = ref(database, `endorse/${endorseID}`)
    })
}


