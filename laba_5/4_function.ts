function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWhithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWhithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number):MyPosition | MyPositionWhithDefault {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString()}
    }

    return { x: a, y: b }
}

console.log('Empty:', position())
console.log('One param:', position(43))
console.log('Two params:', position(43, 13))