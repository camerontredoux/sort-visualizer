function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function bubbleSort(items) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length - 1; j++) {
      if (items[j].offsetHeight > items[j + 1].offsetHeight) {
        swap(j, j + 1, items)
        await sleep(200)
      }
    }
  }
  console.log(items);
}

function swap(a, b, list) {
  let temp = list[a].offsetHeight
  list[a].style.height = `${list[b].offsetHeight}px`
  list[b].style.height = `${temp}px`
}

let items = document.querySelectorAll("[id^='item-']")
items.forEach(item => {
  console.log(item);
})

function generate(values) {
  items.forEach(item => {
    item.style.backgroundColor = "red"
    let random = Math.random() * 100
    item.style.width = "10px"
    item.style.height = `${random}px`
  })
}

console.log(items);

generate(100)

bubbleSort(items)
