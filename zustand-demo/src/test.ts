import CryptoJS from "crypto-js";

// Example of creating an MD5 hash
const data = "Hello, world!";
const hash = CryptoJS.MD5(data).toString(); // `toString()` is used to get the string representation of the hash
console.log("MD5 Hash: ", hash);

// Example of AES encryption
const secretKey = "my-secret-key";
const plaintext = "This is a secret message!";
const encrypted = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
console.log("Encrypted message: ", encrypted);

// Example of AES decryption
const decryptedBytes = CryptoJS.AES.decrypt(encrypted, secretKey);
const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
console.log("Decrypted message: ", decryptedText);
