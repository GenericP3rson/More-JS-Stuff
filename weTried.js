class um {
    constructor(this) {
        this.list = [];
    }
    get(this, x) {
        console.log(`get ${x}`);
        let result;
        this.list.forEach(pairs => {
            if (pairs[0] === x) {
                result = pairs[1]
            }
        //return this.list[hash(x)];
        });
        return result;
        //So this should check each element for if it exists. If it does, it changes it
    }
    set(this, x,y) {
        this.list.push([x,y]);
        console.log(`set ${x} to ${y}`);
    }
}

let m = new um();
m.set("a", 1000000);
m.set("sarah", 3);
m.set("ari", 4839);
console.log(m.get("a"));
console.log(m.get("sarah"));
console.log(m.get("ari"))
console.log(m.get("NO_REAL"));