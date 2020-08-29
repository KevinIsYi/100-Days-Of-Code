const people = {
    name: "Kevin",
    age: 20,
    key: "Coder"
};

const {name, age, key} = people; // What is insided will be extracted from de object

console.log(name);
console.log(age);
console.log(key);

//const getPerson = ({name, age}) => `Your name is ${name}, your age is ${age}`;
//console.log(getPerson(people));

const useContext = ({key, name, age, rank = "Captain"}) => ({
    keyName: key,
    yearsOld: age,
    lating: {
        lat: 14.1252,
        lng: -125.5451
    }
});

const {keyName, yearsOld, lating: {lat, lng}} = useContext(people);

console.log(useContext(people));
console.log(lat, lng);

//Array destructuring
const characters = ["Superman", "Batman", "Spider-Man"];
const [, , p2] = characters;

console.log(p2);

const returnAray = () => ["ABC", 123]

const [, s] = returnAray();
console.log(s);


const useState = (value) => { 
    return [value, () => { console.log("Hello world!"); }];
}

const arr = useState("Kevin");
arr[1]();


const [name2, setName] = useState("Kevin");
console.log(name2);
setName();
