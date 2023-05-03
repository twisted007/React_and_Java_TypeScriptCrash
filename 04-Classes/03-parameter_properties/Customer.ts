class Customer {


    // Properties

    // constructors
    constructor(private _firstName: string,
        private _lastName: string){

        }

    // getter / setter methods
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
}

let myCustomer = new Customer("Mary", "Lamb");
console.log(myCustomer.firstName +" " + myCustomer.lastName)