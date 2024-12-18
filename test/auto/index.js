import {} from '../../src/auto.js'
setTimeout(run, 100)
function run() {
    let span, id, desc, clicked
    id = 'test'
    ;[span, desc] = select(id, '> span')
    add (desc, span.length === 0)
    //
    id = 'test-t1'
    ;[span, desc] = select(id, '> span')
    add (desc, span.textContent === 't1-name')
    
    id = 'test-t2'
    ;[span, desc] = select(id, '> span')
    add (desc, span.classList[0] === 'ok')
    //
    id = 'test-t3'
    ;[span, desc] = select(id, '> span')
    add (desc, span.textContent === 't3-name')
    //
    id = 'test-t4'
    ;[span, desc] = select(id, '> span')
    add (desc, span.parentElement.getAttribute('class') === 'ok')
    //
    id = 'test-t5'
    ;[span, desc] = select(id, '> span')
    add (desc, span.parentElement.getAttribute('class') === 'nok')
    
}
let index = 1

function select(id, next) {
    const  els = document.querySelectorAll(id + next)
    const el = els.length === 1 ? els[0] : []
    return [
        el,
        getPreviousComment(document.getElementById(id))
    ]
}
function add(message, isOk) {
    const p = document.createElement("p")
    const ok = isOk? 'OK': 'NOK'
    p.textContent = `${index}. ${ok} - ${message}`
    results.append(p)
    index++
}
function getPreviousComment(node) {
    if (node) {
        let previous = node.previousSibling
        while (previous) {
            if (previous.nodeType === 8) {
                return previous.textContent
            }
            previous = previous.previousSibling
        }
    }
    return 'No description'
}