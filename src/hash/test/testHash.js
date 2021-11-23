import Hash from '../hash.js';

// test hash  -   hash.js
function testHash() {
    const hash = new Hash();
    // create random string
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    console.log(randomString)

}