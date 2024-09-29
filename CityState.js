function CityStateAddress(city, state) {
    let address = city + ', ' + state.toUpperCase(); // mn -> MN
    return address;
}

console.log(CityStateAddress('Minneapolis', 'MN'))

let address = CityStateAddress('St. Louis', 'MO');
console.log(address);

// let address = `${city}, ${state.toUpperCase()}`; - Template string

let className = 'Web Programming';
let classCode = 2560;
let department = 'ITEC';

console.log(`This is ${department} ${classCode} ${className}`);