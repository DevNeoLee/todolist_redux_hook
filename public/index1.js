
console.log('hellow world! from index1.test');

const decide = (something) => {

    switch (something.trim()) {
        case 'hi':
            return 'one';
        case 'hello':
            return 'two';
        case 'hmm':
            return 'three';
    }
      
}

const value = 'hmm';

console.log(decide(value));