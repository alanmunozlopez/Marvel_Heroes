import md5 from 'md5';

const tsNow = Date.now();
const publicKey = '00d78f0b5f9af206082392e0282987e5';
const privateKey = '731d8bf3e86c63b3194d9618562605e21d16ddbf';
const marvelHash = md5(`${tsNow}${privateKey}${publicKey}`);
const marvelEndPoint = `https://gateway.marvel.com/v1/public/events/238/characters?limit=90&ts=${tsNow}&apikey=${publicKey}&hash=${marvelHash}`;

const marvelCall = () => marvelEndPoint;

export default marvelCall;
