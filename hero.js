class Hero{
    #health;

    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.items = [];
    }

    getHealth(){
        return this.#health;
    }

    getAttack(){
        console.log(this.attack);
    
    }

    getStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
    }
    addItem(item) {
        this.items.push(item);
    }
    totalAttack() {
        return this.attack + this.items.reduce((sum, i) => sum + i.bonusAttack, 0);
    }
}

class Warrior extends Hero{  
    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }
}

class Mage extends Hero {
    constructor(name, health, attack, mana){
        super(name, health, attack);
        this.mana = mana;
    } 
    useAbility(){
        console.log(`${this.name} casts Payirbol!`);
    }
}

class Item{
    constructor(name, bonusAttack){

        this.name = name;
        this.bonusAttack = bonusAttack;
    }
}

const sword = new Item("Sword", 5);
const Staff = new Item("Staff", 3);

const jayboy = new Warrior ("Jayboy",100,10);
jayboy.getName;
jayboy.getAttack();
jayboy.addItem(sword);
console.log(jayboy.totalAttack());


const pol = new Mage("Pol", 80 , 8, 50);
//pol.useAbility();
pol.getStats();

function performAbilitty(Hero){
    console.log("\n");
   hero.useAbility();

    performAbilitty(jayboy);
    performAbilitty(pol);
}