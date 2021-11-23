import Hash from './hash.js';

export function testHash() {
    let errors = 0

    for (let i = 0; i < 1000; i++) {
        const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const hash = new Hash(randomString);
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

export function testSmallVariations() {
    const strings = []
    const hashValues = []
    

    let str = 'hello, this is my teststring that tests small variations!'
    

    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * (str.length - 1))

        let testString = str.substring(Math.random().toString(36).substring(2, 15)) + str.substring(randomNumber, str.length);

        
        testString = str.split('').map((char, index) => {
            if (index === randomNumber) {
                return char.toUpperCase()
            } else {
                return char
            }
        }).join('')
        console.log(testString)
        //const hash = new Hash(testString);
        //console.log(hash.hashValue)
    }
}

