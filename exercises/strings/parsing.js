// let name = "Demi Alabi";
// let firstName = name.substring(0, 4);
// let lastName = name.substring(4);
// let fullName = firstName + lastName;
// console.log(fullName);

function parseAndDisplayName(name) {
  let posOfSpace = name.indexOf(" ");
  console.log(posOfSpace);
  let firstName = name.substring(0, posOfSpace);
  let lastName = name.substring(posOfSpace);
  let fullName = firstName + lastName;
  console.log(
    `Name: ${fullName}
First name: ${firstName} 
Last name: ${lastName}`
  );
}

parseAndDisplayName("Demi Alabi");
parseAndDisplayName("Skyler Clemens");
