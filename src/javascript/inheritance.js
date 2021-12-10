
const { equal, match } = require('assert');

describe('Inheritance' , () => {

    class Dog {
        constructor(name){
            this.name = name;
        }
    
        bark() {
            return "WOOF";
        }
    }
    
    class Chihuahua extends Dog {
        constructor(name){
            super(name);
        }
    
        wag() {
            return "HAPPY";
        }
    
        bark() {
            return "WIG";
        }
    }
    
    it('#testDerivedClassHaveTheBaseAsAnAncestor', () => {
        equal(__, Chihuahua.prototype instanceof Dog);
    });

    it('#testAllClassesUltimatelyInheritFromObject', () => {
        equal(__, Chihuahua.prototype instanceof Object);
    });

    it('#testDerivedClassesInheritBehaviorFromBaseClass', () => {
        const chico = new Chihuahua("Chico");
        equal(__, chico.name);
    });

    it('#testDerivedClassesInheritBehaviorFromBaseClass', () => {
        const chico = new Chihuahua("Chico");
        equal(__, chico.wag());

        try {
            const laila = new Dog("Laila");
            laila.wag();    
        } catch (error) {
            match(error.toString(), /__/)
        }
    });

    it('#testDerivedClassesCanModifyExistingBehavior', () => {
        const chico = new Chihuahua("Chico");
        equal(__, chico.bark());
        
        const laila = new Dog("Laila");
        equal(__, laila.bark())
    });

    // ------------------------------------------------------------

    class BullDog extends Dog {
        constructor(name){
            super(name);
        }

        bark() {
            return `${this.name}, GROWL`;
        }
    }

    it('#testDerivedClassesCanInvokeBaseBehaviorViaSuper', () => {
        const ralph = new BullDog("Ralph");
        equal(__, ralph.bark());
    });
    
    // ------------------------------------------------------------
    
    class GreatDane extends Dog {
        constructor(name) {
            super(name);
        }

        growl() {
            return `${this.bark()}, GROWL`;
        }
    }

    it('#testDerivedClassesCanInvokeBaseMethodViaSuper', () => {
        const tom = new GreatDane("Tom");
        equal(__, tom.growl());
    });
});
