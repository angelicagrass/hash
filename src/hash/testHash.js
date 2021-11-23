import Hash from './hash.js';

export default function testHash() {
    let errors = 0

    for (let i = 0; i < 1000; i++) {
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const hash = new Hash(randomString);
        //testObject[randomString] = hash.hashValue;
        if(hash.hashValue < 0 || hash.hashValue > 256) {
            errors++
        }
    }

    if (errors === 0) { 
        console.log('test passed, all the hashvalues is between 0-256')
    } else {
        console.log('test failed, there are ' + errors + ' hashvalues that is not between 0-256')
    }
}

