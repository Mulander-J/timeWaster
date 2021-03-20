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

const authText = `qul3MKdrXZcJTontvzxeycO4WxTXoJRiBhrIBliQV1qnlsGzZ/B83fKgIaJ6MTjPqh0eNHlX7+EYLyfKDaFofhoM7Z1DRCoNT9CH27pJiWJQRHnB//eLLlUsRNgHN4xU9131aF7NZjsGnL6oajS+NmPG87BqwlLXAfb3GSPd1kOeBGstxhDxllSTQdUyCVWbARy1E+i4uRl+YLUmQ64CqoIQ22wr5UAd3HazDQTlTeJtwgeGiGDexi1FkJs/A4ctmjX/mRkG5DgwDIrAyKRMuTx0dgWqnWD4dq6MGL3h+uDb9+kqgdDCNN+gP+ys71P/ok4Jfh5wMb4h2X78D8SlZQ==`;

export default {
  getAuthToken: (privKey: string) => {
    if (!privKey) return false;
    const encrypt = new JSEncrypt({});
    encrypt.setPublicKey(pubKey);
    encrypt.setPrivateKey(privKey);
    let res = encrypt.decrypt(authText);
    localStorage.setItem('Token', res || '');
    return res;
  },
};
