console.log("kjsjdrf")
const container = document.querySelector("#container")
const tomb = ["alma", "körte", "kutya", "macska"]

let ize = document.createElement("div")
ize.innerText = "blablablablabla"
container.appendChild(ize)

for (const element of tomb) {
  let tDiv = document.createElement("div")
  tDiv.innerText = element
  container.appendChild(tDiv)
}
