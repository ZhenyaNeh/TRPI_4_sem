interface Rect{
    readonly id: string
    color?: string
    size: {
        width: number 
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size:{
        width: 12,
        height: 23
    },
    color: 'red'
}

const rect2:Rect = {
    id: '122',
    size: {
        width: 32,
        height: 23
    }
}

rect2.color = "black"

const rect3 = {} as Rect
const rect4 = <Rect>{} 

// =======================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '233',
    size: {
        width: 32,
        height:33
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}

console.log(rect5.getArea())

interface IClock{
    time: Date
    setTIme(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTIme(date: Date): void {
        this.time = date;
    } 
}

// ============================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}