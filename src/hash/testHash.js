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

function randomNr(str) {
    return Math.floor(Math.random() * (str.length - 1))
}

export function testSmallVariations() {
    const strings = []
    const hashValues = []
    
    let str = 'hello, this is my teststring that tests small variations!'
    
    for (let i = 0; i < 1000; i++) {
        let randomNumber = randomNr(str)
        let secondRandomNumber = randomNr(str)

        let testString = str.split('').map((char, index) => {
            if (index === randomNumber) {
                return char.toUpperCase()
            } else {
                return char
            }
        }).join('')

        testString = testString.slice(0, randomNumber + 1) + 's' + testString.slice(randomNumber + 2, testString.length);
        testString = testString.slice(0, secondRandomNumber + 1) + 'q' + testString.slice(secondRandomNumber + 2, testString.length);
        
        
        let hash = new Hash(testString)
        let value = hash.hashValue

        let stringAndHash = `${testString}: ${value}`

        if (!strings.includes(stringAndHash)) {
            strings.push(stringAndHash)
            hashValues.push(value)
        }
    }
    countMatchingHashValues(hashValues)
    console.log(strings.length)
}

function countMatchingHashValues(hashValues) {
    let count = {}
    for (let i = 0; i < hashValues.length; i++) {
        count[hashValues[i]] = (count[hashValues[i]] || 0) + 1
    }
    console.log(count)

    // write to file
}




