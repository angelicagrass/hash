import Hash from './hash.js';

const testObject = {}

// test hash  -   hash.js
export default function testHash() {

    for (let i = 0; i < 10; i++) {
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(randomString)
        const hash = new Hash(randomString);
        console.log(hash.hashValue)
    
        testObject[randomString] = hash.hashValue;






    }
    

    console.log(testObject)

    //return randomString
}

