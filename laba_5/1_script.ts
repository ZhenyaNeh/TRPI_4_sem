const isFeatchig: boolean = true
const ifLoading: boolean = false

const int: number = 342
const float: number = 2.33
const num: number = 3e10

const message: string = 'Hello world'

const numberArr: number[] = [1, 2, 3, 4, 5, 6, 7]
const secondArr: Array<number> = [1, 2, 3, 4, 5, 6, 7]

const words: string[] = ['Hello', 'World', '!!!']

const tupleExample: [string, number] = ['Jhon', 23133]

let anyType: any = 322
anyType = 'hello'
anyType = words

function sayMyName(name:string):void{
    console.log(name)
}

sayMyName('Jhon');

function throwError(message: string ):never{
    throw new Error(message)
}

function infinity(): never{
    while(true){

    }
}

//Type

type Login = string;

const login: Login = 'Hello'
//const log: Login = 43

type ID = string | number

const id1: ID = 2
const id2: ID = "Hello"
//const id3: ID = true

type SomeType = string | null | undefined