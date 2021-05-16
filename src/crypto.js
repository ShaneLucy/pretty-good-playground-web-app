import * as openpgp from "openpgp";
import { publicKey, privateKey } from "./stores";

/**
 * Generates and sets the public/private keys to encrypt the questions
 * @param {string} curve
 * @param {string} name
 * @param {string} email
 */
export const generateKey = async (curve, name, email) => {
  try {
    const key = await openpgp.generateKey({
      curve: curve, //"brainpoolP512r11",
      userIds: [{ name: name, email: email }],
      //   userIds: [{ name: "Test", email: "test@test.com" }],
    });

    // console.log(key);
    publicKey.set(key.publicKeyArmored);
    privateKey.set(key.privateKeyArmored);
  } catch (error) {
    throw new Error(error.message);
  }
};
