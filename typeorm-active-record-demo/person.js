"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var typeorm_1 = require("typeorm");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person_1 = Person;
    /*
     * The following methods used to be in the PersonRepositoy class, but are now
     * in the entity instead.
     */
    Person.findByName = function (fullname) {
        return this.createQueryBuilder("people")
            .where("people.fullname = :fullname", { fullname: fullname })
            .getOne();
    };
    Person.prototype.updateName = function (fullname) {
        var id = this.id;
        return Person_1.createQueryBuilder("people")
            .update()
            .set({ fullname: fullname })
            .where("people.id = :id", { id: id })
            .execute();
    };
    var Person_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Person.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Person.prototype, "fullname", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Person.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Person.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Person.prototype, "age", void 0);
    __decorate([
        typeorm_1.Column({ name: "created_at" }),
        __metadata("design:type", Date)
    ], Person.prototype, "createdAt", void 0);
    Person = Person_1 = __decorate([
        typeorm_1.Entity({ name: "people" })
    ], Person);
    return Person;
}(typeorm_1.BaseEntity));
exports.Person = Person;
