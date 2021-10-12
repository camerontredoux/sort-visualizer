let speed = document.getElementById("speed")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function bubbleSort(items) {
  let sleep_ms = speed.value
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - i - 1; j++) {
      if (items[j].offsetHeight > items[j + 1].offsetHeight) {
        await swap(j, j + 1, items, sleep_ms)
      }
      render(items, j + 1, "green")
      render(items, j, "red")
      await sleep(sleep_ms)
    }
    items[items.length - i - 1].style.backgroundColor = "blue"
  }
}

function render(items, i, color) {
  items[i].style.backgroundColor = color
}

async function swap(a, b, list, sleep_ms) {
  render(list, a, "purple")
  render(list, b, "purple")
  if (checkbox.checked) {
    await sleep(sleep_ms)
  }
  let temp = list[a].offsetHeight
  list[a].style.height = `${list[b].offsetHeight}px`
  list[b].style.height = `${temp}px`
  if (checkbox.checked) {
    await sleep(sleep_ms)
  }
}

const itemsId = document.getElementById("items")
const checkbox = document.getElementById("show-steps")

const genBtn = document.getElementById("generateBtn")
const sortBtn = document.getElementById("sortBtn")
const amount = document.getElementById("amount")
let items

function generate() {
  while (itemsId.lastElementChild) {
    itemsId.removeChild(itemsId.lastElementChild)
  }
  for (let i = 0; i < amount.value; i++) {
    let item = `<div id="item-${i}"></div>`
    itemsId.insertAdjacentHTML("beforeend", item)
  }
  items = itemsId.querySelectorAll("[id^='item-']")
  items.forEach(item => {
    let random = Math.floor(Math.random() * 490) + 10
    item.style.height = `${random}px`
  })
}

amount.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    generate()
  }
})

genBtn.addEventListener("click", () => {
  generate()
})


sortBtn.addEventListener("click", () => {
  bubbleSort(items)
})
