//Q6
const myProfile = {
  name: "Victor",
  age: 30,
  country: "Nigeria",
  hobby: "Coding"
};

function displayProfile(person) {
  console.log(
    `${person.name} is ${person.age} years old, lives in ${person.country}, and enjoys ${person.hobby}.`
  );
}

// Call the function
displayProfile(myProfile);
