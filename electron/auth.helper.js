const base64url = require('base64url');
const crypto = require('crypto');

const randomBytes = crypto.randomBytes(32);

const verifier = base64url(randomBytes.toString('ascii'));
const codeChallenge = base64url(crypto.createHash('sha256').update(verifier).digest());

module.exports = {
    verifier: verifier,
    codeChallenge: codeChallenge
};
