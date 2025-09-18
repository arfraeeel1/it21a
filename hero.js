class Hero{
    #health;

    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health;
    }

    getStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);
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

const jayboy = new Warrior ("Jayboy",100,10);
//jayboy.useAbility()
jayboy.getStats();

const pol = new Mage("Pol", 80 , 8, 50);
//pol.useAbility();
pol.getStats();

function performAbilitty(Hero){
    console.log("\n");
   hero.useAbility();

    performAbilitty(jayboy);
    performAbilitty(pol);
}