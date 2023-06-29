export class Poke {
    constructor(data) {
        this.id = data.id || ''
        this.name = data.name
        this.img = data.url

    }


    get DetailsTemplate() {
        return `
        <div>

            <h2>${this.name}</h2>
            <img src="${this.img}" alt="${this.name}"></img>

        </div>`
    }

}