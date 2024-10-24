// exercise15.js
// Parsing YAML content using js-yaml library

const yamlInput = `
name: John Doe
age: 30
address:
  city: New York
  zipcode: 10001
`;

const parsedYaml = jsyaml.load(yamlInput);
console.log('Parsed YAML:', parsedYaml);

// Accessing specific properties from the parsed YAML object
console.log(`User Name: ${parsedYaml.name}`);
console.log(`User City: ${parsedYaml.address.city}`);
