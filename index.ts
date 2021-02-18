
interface Itank{
    id: number
    name: string
    speed: number
    damage: number
    maxhp: number
    hp: number
    healAmount: number
    armor: number
    way: number

    run():void
    shoot(targetHp:number, targetArmor: number, targetName:string):void
    reload():void
    repair():void
}

class Tank implements Itank{
    id: number
    name: string
    speed: number = 0
    damage: number = 0
    maxhp: number = 0
    hp: number = 0
    healAmount: number = 0
    armor: number = 0
    way: number = 0;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    run(){
        this.way += this.speed
        console.log(`Way of ${this.name} = ${this.way}.`)
    }

    shoot(targetHp:number, targetArmor: number, targetName: string){
        let ResultDamage = this.damage - targetArmor
        if(ResultDamage >= targetHp){
            console.log(`${targetName} was destroyed by ${this.name}`);
        } else{
            targetHp -= ResultDamage
            console.log(`${targetName} take damage from ${this.name}: ${ResultDamage} HP`)
        }
    }

    reload(){
        console.log('Reloading...')
        setTimeout(() => console.log(`${this.name} is ready for action!`), 1000)
    }

    repair(){
        if(this.hp == this.maxhp){
            console.log(`HP of ${this.name} is already full.`)
        } else{
            let NewHp: number = this.hp + this.healAmount
            if(NewHp >= this.maxhp){
                this.hp = this.maxhp
                console.log(`HP of ${this.name} = ${this.hp}`);
            } else{
                this.hp = NewHp
                console.log(`HP of ${this.name} = ${this.hp}`)
            }
        }
    }
}

class LightTank extends Tank{
    speed = 10
    damage = 4
    maxhp = 20
    hp = 20
    healAmount = 3
    armor = 1

    Cloack(){
        console.log(`${this.name} -> Invisible`)
    }
}

class MediumTank extends Tank{
    speed = 7
    damage = 5
    maxhp = 25
    hp = 25
    healAmount = 4
    armor = 2

    Scout(){
        console.log(`${this.name} -> Radar ON`)
    }
}

class HeavyTank extends Tank{
    speed = 5
    damage = 6
    maxhp = 30
    hp = 30
    healAmount = 5
    armor = 3

    ActiveDefense(){
        console.log(`${this.name} -> Active Defense`);
        this.armor += 5
        setTimeout(() => {console.log(`Active Defense [${this.name}] -> OFF`); this.armor -= 5}, 1000)
    }
}