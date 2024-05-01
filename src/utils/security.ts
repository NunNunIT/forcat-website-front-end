import nacl from "tweetnacl";

const TWEETNACL_PUBLIC_KEY_BASE64 =
  "7zhu8+gSc34FGn2lBjH7bs2OM+hjkkrh3dKSAsQHuXA=";
const TWEETNACL_SECRET_KEY_BASE64 =
  "mcwvsaLSMthCmElVr2E4Pyp2B4qeK+vOGJsLmGpVVG8=";

const publicKey = Buffer.from(TWEETNACL_PUBLIC_KEY_BASE64, "base64");
const secretKey = Buffer.from(TWEETNACL_SECRET_KEY_BASE64, "base64");

const encryptData = (data: string) => {
  const nonce = new Uint8Array(nacl.box.nonceLength);

  // Encode data as UTF-8 before encryption
  const encodedData = Buffer.from(data, "utf-8");

  // Encrypt the data
  const encryptedData = nacl.box(encodedData, nonce, publicKey, secretKey);

  // Convert the encrypted data to base64 for string representation
  const base64Encoded = Buffer.from(encryptedData).toString("base64");

  // Change + to %2B
  const encryptedString = encodeURIComponent(base64Encoded)
    .replaceAll("%21", "!")
    .replaceAll("%27", "'")
    .replaceAll("%28", "(")
    .replaceAll("%29", ")")
    .replaceAll("%2A", "*");

  return encryptedString;
};

const decryptData = (encryptedData: string) => {
  const nonce = new Uint8Array(nacl.box.nonceLength);

  // console.log(decryptData);
  // Decode the base64 encoded string back to a Uint8Array
  const decodedData = Buffer.from(decodeURIComponent(encryptedData), "base64");

  console.log(decodedData);
  // Perform decryption using nacl.box.open
  const decryptedData = nacl.box.open(decodedData, nonce, publicKey, secretKey);

  // Convert the decrypted data back to a string (assuming UTF-8 encoding)
  const decryptedString = Buffer.from(decryptedData).toString("utf-8");

  return decryptedString;
};

export { encryptData, decryptData };
