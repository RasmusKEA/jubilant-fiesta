// Serialize function
function serialize(data) {
  return JSON.stringify(data);
}

// Marshal function
function marshal(data) {
  return JSON.parse(data);
}

// Usage example
const originalData = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
};

// Serialize the data
const serializedData = serialize(originalData);
console.log("Serialized data:", serializedData);

// Marshal the data
const marshalledData = marshal(serializedData);
console.log("Marshalled data:", marshalledData);
