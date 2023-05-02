function displayMailingLabel(name, address, city, state, zip) {
  let addressLabel = `
  ${name} 
  ${address} 
  ${city}, ${state}, ${zip}
  `;
  console.log(addressLabel);
}

let fullName = "Demi Alabi";
let homeAddress = "123 bladerunner ave";
let homeCity = "Atlanta"
let homeState = "GA"
let zip = 40054

displayMailingLabel(fullName, homeAddress, homeCity, homeState, zip);
