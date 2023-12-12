import block from "./index.js"
let d = document
let main_box = d.querySelector('.main_box')
let ul = d.querySelector('.ul')
import menu from "./menu.js"

block()
// for (let index = 0; index < menu.length; index++) {
//     let item = menu[index]
//     console.log(item);

//     // header li's
//     let li = d.createElement('li')
//     li.textContent = item.title
//     if(index >= 6) {
//         li.classList.add('last')
//     }
//     ul.appendChild(li)

//     // main blocks
//     let block = d.createElement('div')
//     block.classList.add('block')
//     main_box.appendChild(block)

//     let pos = d.createElement('div')
//     pos.classList.add('pos')
//     pos.textContent = item.title
//     block.appendChild(pos)


//     // block onclick
//     block.onclick = () => {
//         for(let elem of item.content) {
//             console.log(elem.subtitle);
//         }
//     }
//     li.onclick = () => {
//         for(let elem of item.content) {
//             console.log(elem.subtitle);
//         }
//     }
// }