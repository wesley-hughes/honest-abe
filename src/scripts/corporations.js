import { getCorporations } from "./dataAccess.js";

const corporationListItems = (corporation) => {
    let html = `<article class="corporations">
                    <section class="corporation">
                        <header class="corporation__name">
                            <h1>${corporation.name}</h1>
                        </header>
                        <div class="corporation__info">
                            <div>Address: ${corporation.address}</div>
                        </div>
                    </section>
                </article>`
    return html
}

export const corporationList = () => {
    const corporations = getCorporations()
    let html = ""
    let listItems = corporations.map(corporationListItems)
    html += `${listItems.join("")}`
    return html
}