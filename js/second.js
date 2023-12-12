let d = document
let main_box = d.querySelector('.main_box')
let ul = d.querySelector('.ul')
let title_menu_h2 = d.querySelector('.title_menu_h2')
import menu from "./menu.js"


function second () {
    for (let index = 0; index < menu.length; index++) {
        let item = menu[index]
        // console.log(item);
    
        // header li's
        let a = d.createElement('a')
        ul.appendChild(a)
        let li = d.createElement('li')
        li.textContent = item.title
        if(index >= 6) {
            li.classList.add('last')
        }
        a.appendChild(li)
        title_menu_h2.textContent = localStorage.getItem('sub')

        // =======================================

            if(index >= 7) {
                let local = localStorage.getItem('next')
            let local2 = JSON.parse(local)
            for(let item of local2) {
                let block = d.createElement('a')
                block.classList.add('block')
                main_box.appendChild(block)
            
                let pos = d.createElement('div')
                pos.classList.add('pos')
                pos.textContent = item.subtitle
                block.appendChild(pos)
            }
            }
        


        // li header
        li.onclick = () => {
            localStorage.setItem('sub', item.title)
            let obj2 = JSON.stringify(item.content)
            localStorage.setItem('next', obj2);
            a.href = 'second.html'
        }
    }
}
export default second;
second()