function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function bubbleSort(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - 1; j++) {
      if (items[j].offsetHeight > items[j + 1].offsetHeight) {
        swap(j, j + 1, items)
        await sleep(50)
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

function generate(values) {
  items.forEach(item => {
    item.style.backgroundColor = "red"
    let random = Math.random() * 200
    item.style.width = "10px"
    item.style.height = `${random}px`
  })
}

let items = document.querySelectorAll("[id^='item-']")

let genBtn = document.getElementById("generateBtn")
let sortBtn = document.getElementById("sortBtn")

genBtn.addEventListener("click", () => {
  generate(100)
})

sortBtn.addEventListener("click", () => {
  bubbleSort(items)
})
