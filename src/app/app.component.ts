import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //they are Property
  myName : string = "Ali";
  ten : number = 10;
  negative :number = -10;
  decimal :number = 0.1;
  yes : boolean = true;
  nothingHere :null =null;
  noDefinition = undefined;
  any : any = {};
  constructor(){
    //they are variable
    let sentence :string = "this is a sentence."
    let result:boolean = sentence.includes("this");
    console.log(result);
  }
}
//Define Function
function add(a:number,b:number) : number{
  return a+b;
}
//arrow Function
const sum = (a:number,b:number) : number => {return a + b}
//local Function
const joinString = function(a:string,b:string){
  return a + " " + b;
}
console.log(add(1,3));
console.log(sum(5,8));
console.log(joinString("ali","keshvari"))
//Object
//const post :{title :string,content : string,daysOld:number,published:boolean,test:string} = {
const post :Model = {
  // key : value
  title : 'angular',
  content : 'angular is cool',
  daysOld: 10,
  published : true,
  test : 'test'
}
//const printPost = (postToPrint:{title :string;content : string;daysOld:number;published:boolean;test:string}) : string => {
const printPost = (postToPrint:Model) : string => {
  return `${postToPrint.title} - ${postToPrint.content}`;
};
console.log(printPost(post));

//Decorator
const componentTest = (target:any) =>{
  console.log("this is a component test")
}

//هر گاه از کلاس car صدا زده شد این
@componentTest
//class
class Car
{
//   //property
//   //Defult Public
//   public color : string;
//   private year :  number;
//   //Constractor
//   constructor(color: string,year: number){
//     this.color = color;
//     this.year = year;
//   }
//Or
constructor(public color: string,private year: number){
      this.color = color;
      this.year = year;
    }
  //method
  driver(name : string){
    console.log(`${name} is driving a ${this.color} ${this.year}`);
  }

}
const car = new Car("red",2024);
car.color = "yellow";
// car.year = 2020;
car.driver("John");
//combine interface and class
interface Drivable{
  speed: number;
  drive():string
}
class Vehicle implements Drivable{
  speed: number = 50;
  drive(): string {
    return "Vehicle"
  }
}
class Test implements Drivable{
  speed: number = 70;
  drive(): string {
    return "test"
  }
}
const vehicle = new Vehicle();
const test = new Test();

const startDriving = (drive :Drivable) =>{
  drive.drive;
}

startDriving(test);
//generic Class
class NumberHolder{
  value : number = 0;
}
class StringHolder{
  value : string = '';
}
const numberHolder = new NumberHolder();
const stringHolder = new StringHolder();

class ValueHolder<T>{
  value :T ;
  //by adding this "strictPropertyInitialization": false, into tsconfig.json we can solve error
}

const numberHolder2 = new ValueHolder<number>();
numberHolder2.value = 10;
const stringHolder2 = new ValueHolder<string>();
stringHolder2.value = 'test';
const booleanHolder = new ValueHolder<boolean>();
booleanHolder.value = true;
//Generic Function
const numberWrapper = (value : number) : number[] =>{
  return [value];
};
const stringWrapper = (value : string) : string[] =>{
  return[value];
};
const valueWrapper = <T>(value : T) :T[]=>{
  return[value];
};

const numWrap = valueWrapper<number>(10);
const strinpWrap = valueWrapper<string>("test");
//or
const numWrap2 = valueWrapper(10);
const strinpWrap2 = valueWrapper("test");


const valueWrapper2 = <T,U>(value : T,value2 : U) :T[]=>{
  return[value];
};
const numWrap3 = valueWrapper2<number,string>(10,"Ali");
const numWrap4 = valueWrapper2("Ali",10);


// Pars Json

const json: string = '{"x" : 10 , "y" : 20}';
const coordinate :{x : number, y:number} = JSON.parse(json);
console.log(coordinate);
console.log(coordinate.x);
console.log(coordinate.y);


//Object
const profile ={
  family : 'keshvari',
  age : 25,
  coords : {
    lat : 12.234,
    lng : 12.526
  },
  setAge(age : number){
    this.age = age
  }
};
let ageOne = profile.age;
const{age,family} = profile;
const coords = profile.coords;
const {coords:{lat,lng}} = profile;

//Extend

//parent
class Vehicles{
  constructor(public name:string){

  }
  honk(){
    console.log(`${this.name}`);

  }
}
//child
class Cars extends Vehicles{
  constructor(name:string){
    //ارسال name به name کلاس پدر
    super(name)
  }
  driver(name:string){
    console.log(`drive`);
  }
}

const car2 = new Cars("ali");
car2.honk()
