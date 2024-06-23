class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOFWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels = 4
    constructor(readonly model: string) { }
}

let car: Car = new Car('Wolsvagen')

// =========== 
class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('may')
console.log(cat.color)

// =======================

abstract class Component{
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component{
    render(): void {
        console.log('COmponent on render')
    }
    info() {
        return 'this is info'
    }
}