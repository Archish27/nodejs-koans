const { equal } = require('assert');

class Dog {
}

class Dog2 {
    setName(name){
        this.name = name;
    }
}

class Dog3 {
    static breed = "pug";
    static getName(){
        return "Laila";
    }
}
describe('Classes' , () => {
    it('#testClassName', () => { 
        equal(__, Dog.name);
    });

    it('#testInstanceVariablesSetByAssigning', () => { 
        const d = new Dog2();
        d.setName("Tony");
        equal(__, d.name);
    });

    it('#testStaticMemberVariablesAndMethods', () => { 
        equal(__, Dog3.breed);
        equal(__, Dog3.getName());
    });

    it('#testIsStaticMemberVariablesAndMethodsAccessible', () => { 
        const d = new Dog3();
        equal(__, d.breed);
        equal(__, d.getName);
    });
});
