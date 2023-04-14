import { JSEncrypt } from 'jsencrypt';

const pubKey = import.meta.env.VITE_PUBKEY
const authText = import.meta.env.VITE_AUTHTEXT

export default {
  getAuthToken: (privKey: string) => {
    if (!privKey) return false;
    const encrypt = new JSEncrypt({});
    encrypt.setPublicKey(pubKey);
    encrypt.setPrivateKey(privKey);
    let res = encrypt.decrypt(authText);
    localStorage.setItem('Token', res ? privKey : '');
    return res;
  },
};
