const originalString = "Hello, world!";

// Encode the string to UTF-8 values HEX
const utf8Encoded = Buffer.from(originalString, "utf-8");
console.log("UTF-8 Encoded:", utf8Encoded);

// Encode the string to ASCII values HEX
const asciiEncoded = Buffer.from(originalString, "ascii");
console.log("ASCII Encoded:", asciiEncoded);

// Decode the UTF-8 encoded values back to the original string
const decodedUtf8 = utf8Encoded.toString("utf-8");
console.log("Decoded from UTF-8:", decodedUtf8);

// Decode the ASCII encoded values back to the original string
const decodedAscii = asciiEncoded.toString("ascii");
console.log("Decoded from ASCII:", decodedAscii);
