class Stats {
    constructor(array) {
        this.array = array;
    }

    static round(value, roundUpto = 2) {
        return Math.round(value * Math.pow(10, roundUpto)) / Math.pow(10, roundUpto);
    }

    // The "mean" is defined as the sum of the collection divided by its size
    getMean() {
        let result = this.array.reduce((sum, num) => sum + num) / this.array.length;
        return result;
    }

    // The "median" is the "middle" value in the list of numbers. 
    // For collection of even size, its the avg of two middle values.
    getMedian() {
        let sorted = this.array.sort();
        let median;
        if(sorted.length % 2 == 0) {
            median = (sorted[sorted.length/2] + sorted[sorted.length/2 - 1]) / 2;
        }
        else 
            median = sorted[Math.floor(sorted.length/2)];
        return median;
    }

    // The "mode" is defined as the number or numbers that appear the most often, 
    // if every value appears the same number of times, there is no mode
    getMode() {
        const table = {};
        for (let number of this.array) {
            table[number] = table[number] + 1 || 1;
        }
        let modes = [];
        let max = 0;

        for (const key in table) {
            const value = parseFloat(key);
            const count = table[key];
            if (count > max) {
                max = count;
                modes = [value];
            }
            else if (count === max)
                modes.push(value);
        }

        if (modes.length === Object.keys(table).length)
            modes = [];
        
        return modes;
    }
}

const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);

console.log(Stats.round(stat1.getMean()));
console.log(Stats.round(stat2.getMean()));

console.log(stat1.getMedian());
console.log(stat2.getMedian());

console.log(stat1.getMode());
console.log(stat2.getMode());