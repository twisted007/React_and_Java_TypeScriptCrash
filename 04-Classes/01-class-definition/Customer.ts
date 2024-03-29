class Customer {

    // Properties
    firstName: string;
    lastName: string;
    // constructors

    // getter / setter methods
}

// Now lets construct the class instance

let myCustomer = new Customer();
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName + " " + myCustomer.lastName);



class Customer2 {

    // Properties
    firstName: string;
    lastName: string;
    // constructors
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    // getter / setter methods
} 

let mySecondCustomer = new Customer2("Eric", "Bana");
console.log(`${mySecondCustomer.firstName} ${mySecondCustomer.lastName}`);


class Customer3 {

    // Properties
    private _firstName: string;
    private _lastName: string;

    // constructors
    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // getter / setter methods
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    // These two were actually auto-generated by the IDE.
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

} 

let myThirdCustomer = new Customer3("Max", "Jones");
console.log(`${myThirdCustomer.firstName}, ${myThirdCustomer.lastName}`);
myThirdCustomer.firstName = "Nick"
console.log(`${myThirdCustomer.firstName}, ${myThirdCustomer.lastName}`);
