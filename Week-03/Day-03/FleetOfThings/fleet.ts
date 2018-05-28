import { Thing } from "./thing";

class Fleet {
    private things: Thing[] = [];

    constructor() { }
    add(thing: Thing) {
        this.things.push(thing);
    }

    complete(index: number) {
        this.things[index].complete();
    }

    print() {
        for (let i:number = 0; i < this.things.length; i++) {
            let output = '[';
            if (this.things[i].alreadyDone()) {
                output += `x] ${this.things[i].getName()}`;
            } else {
                output += ` ] ${this.things[i].getName()}`;
            }
            console.log(output);
        }
    }
}

export { Fleet };