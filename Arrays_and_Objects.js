/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position": {
        "latitude": "49.2167", //input latitude information
        "longitude": "100.5363" //input longitude information
    },
    "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
console.log(`Latitude: ${iss_location.iss_position.latitude}`);

// TODO Extract the longitude value, and log it to the console.
console.log(`Longitude: ${iss_location.iss_position.longitude}`);

/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
*/

let rates = {
    "AUD": 1.5417, //Australian dollar exchange rate
    "BGN": 1.9558, //Bulgarian Lev exchange rate
    "BRL": 3.8959, //Brazilian Real exchange rate
    "CAD": 1.5194 //Canadian Dollar exchange rate
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787; //Add Swiss Franc (CHF) to the exchange rate
console.log(rates); // Check if CHF has been added

// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
let euros = 100; //Total in Euros
let audEquivalent = euros * rates.AUD; //Convert Euros to Australian dollars
console.log(`100 Euros is equivalent to ${audEquivalent} AUD`);

/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

//Array of objects that represents a cat owner and their cat
let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({ name: "Taylor Swift", cat: "Meredith" }); //Adds Taylor Swift and her cat
console.log(cats_and_owners);

// TODO write a loop to print each cat owner, and their cat's name, one per line.
cats_and_owners.forEach(owner => {
    console.log(`${owner.name}'s cat is called ${owner.cat}`);
});

// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation

//Pull up information on Gary Oldman and his cat using the array
console.log(`Gary Oldman's cat is called ${cats_and_owners[1].cat}`);

// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
for (let owner of cats_and_owners) { //Loop through array
    if (owner.name === "Gary Oldman") { //Check if owner's name is Gary Oldman
        console.log(`Gary Oldman's cat is called ${owner.cat}`);
    }
}

/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
*/

let nobel_prize_winners_2017 = {
    "prizes": [
        {
            "year": "2017",
            "category": "physics",
            "laureates": [
                {
                    "id": "941",
                    "firstname": "Rainer",
                    "surname": "Weiss",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "2"
                },
                {
                    "id": "942",
                    "firstname": "Barry C.",
                    "surname": "Barish",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "4"
                },
                {
                    "id": "943",
                    "firstname": "Kip S.",
                    "surname": "Thorne",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "4"
                }
            ]
        },
        {
            "year": "2017",
            "category": "chemistry",
            "laureates": [
                {
                    "id": "944",
                    "firstname": "Jacques",
                    "surname": "Dubochet",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                },
                {
                    "id": "945",
                    "firstname": "Joachim",
                    "surname": "Frank",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                },
                {
                    "id": "946",
                    "firstname": "Richard",
                    "surname": "Henderson",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                }
            ]
        },
        {
            "year": "2017",
            "category": "medicine",
            "laureates": [
                {
                    "id": "938",
                    "firstname": "Jeffrey C.",
                    "surname": "Hall",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                },
                {
                    "id": "939",
                    "firstname": "Michael",
                    "surname": "Rosbash",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                },
                {
                    "id": "940",
                    "firstname": "Michael W.",
                    "surname": "Young",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                }
            ]
        },
        {
            "year": "2017",
            "category": "literature",
            "laureates": [
                {
                    "id": "947",
                    "firstname": "Kazuo",
                    "surname": "Ishiguro",
                    "motivation": "\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share": "1"
                }
            ]
        },
        {
            "year": "2017",
            "category": "peace",
            "laureates": [
                {
                    "id": "948",
                    "firstname": "International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation": "\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share": "1",
                    "surname": ""
                }
            ]
        },
        {
            "year": "2017",
            "category": "economics",
            "laureates": [
                {
                    "id": "949",
                    "firstname": "Richard H.",
                    "surname": "Thaler",
                    "motivation": "\"for his contributions to behavioural economics\"",
                    "share": "1"
                }
            ]
        }
    ]
}

// TODO print the full name of the Literature Nobel laureate.

//Find literature category and get the laureate
let literatureLaureate = nobel_prize_winners_2017.prizes.find(prize => prize.category === 'literature').laureates[0];
console.log(`The Literature Nobel laureate is ${literatureLaureate.firstname} ${literatureLaureate.surname}`);

// TODO print the ids of each of the Physics Nobel laureates.

//Find the physics category and its corresponding laureate
let physicsLaureates = nobel_prize_winners_2017.prizes.find(prize => prize.category === 'physics').laureates;
physicsLaureates.forEach(laureate => console.log(`Physics laureate ID: ${laureate.id}`));

// TODO write code to print the names of all of the prize categories.

//Print each category
nobel_prize_winners_2017.prizes.forEach(prize => console.log(prize.category));

// TODO write code to print the total number of prize categories

//Print the number of categories
console.log(`Total number of prize categories: ${nobel_prize_winners_2017.prizes.length}`);

// TODO write code to count the total number of laureates from 2017.

//Count all laureates
let totalLaureates = nobel_prize_winners_2017.prizes.reduce((total, prize) => total + prize.laureates.length, 0);
console.log(`Total number of laureates in 2017: ${totalLaureates}`);
