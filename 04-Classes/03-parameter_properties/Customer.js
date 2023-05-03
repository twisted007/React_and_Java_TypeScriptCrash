"use strict";
var Customer = /** @class */ (function () {
    // Properties
    // constructors
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "lastName", {
        // getter / setter methods
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Mary", "Lamb");
console.log(myCustomer.firstName + " " + myCustomer.lastName);
