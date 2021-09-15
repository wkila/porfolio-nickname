
export function renderInfo(inputs, dataname) {
    let newObj = {}
    if (inputs) {
        newObj = {...inputs[0], ...inputs[1]}
    }
    
    let HTMLInfo = {
        nav: `
            <div class="block-join" style="box-shadow: 12px 12px 2px 1px rgb(${
                (Math.random() * (257 - 10) + 10).toFixed(0)}
                ${(Math.random() * (257 - 10) + 10).toFixed(0)}
                ${(Math.random() * (257 - 10) + 10).toFixed(0)} / 20%)">
                <h1>${newObj.title}</h1>
                <p>${newObj.text}</p>
            </div>
            `,
        row: `<div class="row" data-nav="row"></div>`
    }
    return HTMLInfo[dataname]
}
