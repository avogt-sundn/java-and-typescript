// Run: ts-node app.ts


Hello('Dave').then((res) => {
    console.log(res);
});

type Person = {
    name: string;
    age: number;
}

const  arr : Person[] =[];


async function Hello(name: string) {

    arr.push({ name: name, age: 23 })
    return arr;
}
