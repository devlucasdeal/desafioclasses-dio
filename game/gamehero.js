class hero {
    constructor(name, age, type, atack){
        this.name = name
        this.age = age
        this.type = type
        this.atack = atack
    }
    atackAction(){
        console.log(`O ${this.type} atacou usando ${this.atack}`)
    }
}

let play = new hero("Agnus", "29", "ninja", "shuriken")

play.atackAction()
