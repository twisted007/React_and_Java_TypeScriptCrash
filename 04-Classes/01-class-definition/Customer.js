var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
// Now lets construct the class instance
var myCustomer = new Customer();
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
var Customer2 = /** @class */ (function () {
    // constructors
    function Customer2(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer2;
}());
var mySecondCustomer = new Customer2("Eric", "Bana");
console.log("".concat(mySecondCustomer.firstName, " ").concat(mySecondCustomer.lastName));
var Customer3 = /** @class */ (function () {
    // constructors
    function Customer3(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        // getter / setter methods
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var myThirdCustomer = new Customer3("Max", "Jones");
console.log("".concat(myThirdCustomer.firstName, ", ").concat(myThirdCustomer.lastName));
myThirdCustomer.firstName = "Nick";
console.log("".concat(myThirdCustomer.firstName, ", ").concat(myThirdCustomer.lastName));
