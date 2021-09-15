export function dragCreate(eventPlaceholder) {
    const dataName = eventPlaceholder.dataset.drag
    return searchKey(dataName)
    
}

function searchKey(dataName) {
    let HTML = ''
    let HTMLObjects = {
        github: `<h2>This is ${dataName}!</h2>
                <a href="https://github.com/wkila" target="_blank"><img class="gitImg" src="img/githubNew.svg" alt=""></a>`,

        nav: `  <h2>This is tab creater!</h2>
                <form action="">
                    <div class="text-block">
                        <input type="text" class="main-input" placeholder="Name" data-nav="title" id="1">
                    </div>
                    <div class="text-block">
                        <textarea name="" placeholder="Title" id="" data-nav="text" rows="5"></textarea>
                    </div>
        
                    <div class="btn-block">
                        <button class="submit">Submit</button>
                    </div>
                </form>`,
        info: `  <h2>This is ${dataName}!</h2>
                <p>But now we have no ${dataName}</p>`
    }
    Object.keys(HTMLObjects).forEach(key => {
        if (dataName === key) {
            HTML = HTMLObjects[key]
        }
    })
    return HTML
}