var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tank = /** @class */ (function () {
    function Tank(id, name) {
        this.speed = 0;
        this.damage = 0;
        this.maxhp = 0;
        this.hp = 0;
        this.healAmount = 0;
        this.armor = 0;
        this.way = 0;
        this.id = id;
        this.name = name;
    }
    Tank.prototype.run = function () {
        this.way += this.speed;
        console.log("Way of " + this.name + " = " + this.way + ".");
    };
    Tank.prototype.shoot = function (targetHp, targetArmor, targetName) {
        var ResultDamage = this.damage - targetArmor;
        if (ResultDamage >= targetHp) {
            console.log(targetName + " was destroyed by " + this.name);
        }
        else {
            targetHp -= ResultDamage;
            console.log(targetName + " take damage from " + this.name + ": " + ResultDamage + " HP");
        }
    };
    Tank.prototype.reload = function () {
        console.log('Reloading...');
        setTimeout(function () { return console.log('Ready for action!'); }, 1000);
    };
    Tank.prototype.repair = function () {
        if (this.hp == this.maxhp) {
            console.log("HP of " + this.name + " is already full.");
        }
        else {
            var NewHp = this.hp + this.healAmount;
            if (NewHp >= this.maxhp) {
                this.hp = this.maxhp;
                console.log("HP of " + this.name + " = " + this.hp);
            }
            else {
                this.hp = NewHp;
                console.log("HP of " + this.name + " = " + this.hp);
            }
        }
    };
    return Tank;
}());
var LightTank = /** @class */ (function (_super) {
    __extends(LightTank, _super);
    function LightTank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 10;
        _this.damage = 4;
        _this.maxhp = 20;
        _this.hp = 20;
        _this.healAmount = 3;
        _this.armor = 1;
        return _this;
    }
    LightTank.prototype.Cloack = function () {
        console.log(this.name + " -> Invisible");
    };
    return LightTank;
}(Tank));
var MediumTank = /** @class */ (function (_super) {
    __extends(MediumTank, _super);
    function MediumTank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 7;
        _this.damage = 5;
        _this.maxhp = 25;
        _this.hp = 25;
        _this.healAmount = 4;
        _this.armor = 2;
        return _this;
    }
    MediumTank.prototype.Scout = function () {
        console.log(this.name + " -> Radar ON");
    };
    return MediumTank;
}(Tank));
var HeavyTank = /** @class */ (function (_super) {
    __extends(HeavyTank, _super);
    function HeavyTank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 5;
        _this.damage = 6;
        _this.maxhp = 30;
        _this.hp = 30;
        _this.healAmount = 5;
        _this.armor = 3;
        return _this;
    }
    HeavyTank.prototype.ActiveDefense = function () {
        var _this = this;
        console.log(this.name + " -> Active Defense");
        this.armor += 5;
        setTimeout(function () { console.log("Active Defense [" + _this.name + "] -> OFF"); _this.armor -= 5; }, 1000);
    };
    return HeavyTank;
}(Tank));
