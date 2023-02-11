let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.innerHTML = count
}

function save() {
    let exerciseName = document.getElementById("exercise-name").value
    let countStr = exerciseName + " - " + count + " sets"
    saveEl.innerHTML +=  "<br>" + countStr
    countEl.innerHTML = 0
    count = 0
    document.getElementById("exercise-name").value = " "
}