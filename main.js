// Hollow pyramid:

let number = 5;
let values = "";
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number - i; j++) {
        values += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === number) {
            values += "*";
        } else {
            if (k === 0 || k === 2 * i - 2) {
                values += "*";
            } else {
                values += " ";
            }
        }
    }
    values += "\n";
}

console.log(values);
