import { defineCustomElement, getAttributes} from '../../src/index.js'
setTimeout(run, 100)
function run() {
    const observed = getAttributes('test-t1')
    const expected = ['t-name', 't-class']
    const tests = []
    tests.push([
        `retrieve template attributes with getAttributes fn`,
        includesAll(observed, expected)
    ])
    let html = ''
    for (const test of tests) {
        const [desc, assertion] = test
        html+= `<p>${assertion? 'OK' : 'NOK'} - ${desc}</p>`
    }
    results.innerHTML = html
}

function includesAll (arr1, arr2) {
   return  arr2.every(v => arr1.includes(v))
}