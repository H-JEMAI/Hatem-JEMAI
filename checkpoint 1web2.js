
////:ES5
var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

  function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}

////// ES6

   let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
   
  
 const getAge = (pet) =>new Date().getFullYear() - pet.bornOn;

   
/////////////////////
////////////////////

/////ES5

var petsWithAge = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  
  pet.age = getAge(pet) ;

  petsWithAge.push(pet);
}
console.log(petsWithAge);


//////ES6


  let petsWithAge = [];

  petsWithAge= pets.forEach(pet=> {
      pet.age=getAge(pet);
        petsWithAge.push(pet);
    
    })
    console.log(petsWithAge);

/////////////////////////////////////
//////////////////////////////////
   

/////ES5

var dogs = [];

for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);

////ES6

let dogs = [];

dogs = pets.filter(pet=> pet.type==="dog")
 
    console.log(dogs);
 

////////////////////////////////////////
////////////////////////////////////////

/////ES5 

var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");



////////ES6


  let jasper;
  jasper= pets.find(pet=> pet.name==="Jasper")
{
    console.log(`The animal is ${jasper.age} years old`);
 }



//////////////////////////////////
