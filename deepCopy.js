function deepCopy(obj) {
    const newObj = {};
    for (let key in obj) {
        if(typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key]);
        }
        else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let obj1 = {
    1: "Spring",
    "season2": "Summer",
	"innerObj": {
		"innerKey": "Winter"
    }
}
const obj2 = deepCopy(obj1);
obj2.innerObj.innerkey = "Fall";
console.log(obj1.innerObj.innerKey);
