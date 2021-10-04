
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function bubbleSort(items) {
  let speed = document.getElementById("speed")
  let sleep_ms = speed.value
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - 1; j++) {
      if (items[j].offsetHeight > items[j + 1].offsetHeight) {
        swap(j, j + 1, items)
        await sleep(sleep_ms)
        items[j + 1].style.backgroundColor = "red"
      }
    }
    items[items.length - i - 1].style.backgroundColor = "blue"
  }
}

function swap(a, b, list) {
  let temp = list[a].offsetHeight
  list[a].style.height = `${list[b].offsetHeight}px`
  list[b].style.height = `${temp}px`
  list[b].style.backgroundColor = "green"
}

let itemsId = document.getElementById("items")

let genBtn = document.getElementById("generateBtn")
let sortBtn = document.getElementById("sortBtn")
let amount = document.getElementById("amount")
let items

genBtn.addEventListener("click", () => {
  while (itemsId.lastElementChild) {
    itemsId.removeChild(itemsId.lastElementChild)
  }
  for (let i = 0; i < amount.value; i++) {
    let item = `<div id="item-${i}"></div>`
    itemsId.insertAdjacentHTML("beforeend", item)
  }
  items = itemsId.querySelectorAll("[id^='item-']")
  items.forEach(item => {
    let random = Math.random() * 200
    item.style.height = `${random}px`
  })
})


sortBtn.addEventListener("click", () => {
  bubbleSort(items)
})
