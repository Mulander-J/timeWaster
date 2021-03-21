import { JSEncrypt } from 'jsencrypt';

const pubKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxouG8MaoDHqM1r9dFzct
pQlcJ2hAWGyBo50pYIR4rOdROmX/i1QN8pg2oUY3A//CZ+DJI3tCsVAuKRQKqeH+
QgxXpTNaLm4hsrR5xr80tpeZAakxD65jw+HQbjSYih+38v+yjnEQMVOi6Xggvn8X
+0AjAQ1Vf0U4umBoDFq944YTOWpXdQEdRmscS3SGVrLecDw57gf6xMe976preYdy
BXyuSXNHxDyD97foGxjO4M5jDtM9SROVCx5pP13/4ZJerb0ncrQHWKgF3SjBUIia
6vsSq2/n5H5fQ1UNLmvre3cf1XxwsKt+uLfT0DrEcT6Dk8h6kubTYq6a2ATojjnq
kwIDAQAB
-----END PUBLIC KEY-----
`;
const authText = `G8lxD6NEy1y/BBMjKJxN2Dq4F5Dhex7qmToPaCptD7tO8QD/vyUhj+NM4lyvyga3JNM2p6x8qfHZT6qbhK3f2pgJV1DErqIVb/oxIcPtnCpD/g39kalfGysS4Fw6va9RUJwtkytF5aX+z67CDNgoZpjNfnpXDjTfnRVY5SFD0TirSaQ9Z3WhuRjlhGrvLoFETS6MdyXPRuMkLbrXc/UuWsBxeOzYRf4hw7/ztwTl8dc4hZyIHfMAjhmXLtkDggZvsDItLp1RAiHQ6RRpB9yu44tZaofqwHxwVzZMxVm8giPVgT6d16FNZDiFAA/JMJpbldY925VD25mwyH2AxpCTWA==`;

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
