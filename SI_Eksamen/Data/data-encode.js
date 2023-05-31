// String to be encoded
const originalString = "Hello, world!";

// Encoding the string using UTF-8
const encodedBytes = Buffer.from(originalString, "utf-8");

// Decoding the encoded bytes back to string
const decodedString = encodedBytes.toString("utf-8");

// Printing the results
console.log("Encoded Bytes:", encodedBytes);
console.log("Decoded String:", decodedString);
