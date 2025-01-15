// Iteration 1: Names and Input
const hacker1 = 'Mónica';
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = 'Laura'
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

let nameSpacedNameDriver = '';
// Iteration 3: Loops
for (let i = hacker2.length; i > 0; i--) {
    nameSpacedNameDriver += hacker1[i];
    nameSpacedNameDriver += ' ';
}

console.log('Driver name separated by space -reversed-: ', nameSpacedNameDriver);

/*******************************
 * ******* BONUS ZONE ****** */

// BONUS 1!

// Long text
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, dolor pellentesque finibus lobortis, lectus sapien tincidunt nisl, et scelerisque ligula arcu eu enim. Donec pretium porta augue et ornare. Nam posuere eu ex eu fermentum. Quisque in sapien ac eros lobortis consectetur in ut libero. Mauris nec turpis a est sagittis aliquet. Aliquam rhoncus, urna at elementum interdum, velit nunc mollis nibh, quis laoreet tellus lacus sed felis. In hac habitasse platea dictumst. Nulla efficitur porta nisl eu imperdiet. Sed vulputate lectus nec ligula eleifend feugiat. In hac habitasse platea dictumst. Maecenas sed consectetur massa. Sed bibendum sollicitudin justo vestibulum rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum auctor fringilla elit a tristique. Sed sollicitudin tellus ligula, eu tincidunt lorem porta at. Nam malesuada auctor vestibulum. Fusce dignissim tortor nec nunc posuere, eget bibendum nibh pretium. Pellentesque placerat luctus viverra. Aliquam erat volutpat. Mauris euismod est non ipsum ornare, non tincidunt leo cursus. Praesent volutpat vestibulum elementum. Nulla nec commodo ligula. Cras at purus id nibh congue fringilla in in lorem. Fusce maximus elit non mi aliquet venenatis. Vivamus feugiat orci lacus, non consectetur elit ornare a. Morbi egestas pellentesque magna vel venenatis. Vivamus semper dignissim facilisis. Morbi eget metus in risus euismod commodo at at lacus. Nunc pellentesque ut mauris non rutrum. Mauris rutrum justo eu eros eleifend, bibendum condimentum lacus vulputate. Nulla vulputate purus risus, non varius orci dictum ut. Integer sed turpis et nibh finibus hendrerit eget tempus risus. Sed molestie tortor leo, quis fringilla lacus pellentesque eget.`;
let count = 0;
let arrayText = longText.split(' ');
console.log('Number of words of longText: ', arrayText.length);


for (let i = 0; i < arrayText.length; i++) {
    if (arrayText[i].includes('et')) {
        count++;
    }
 }

console.log(`The word "et" has appeared a number of ${count} times.`);

// BONUS 2!

// Palindrome?

let word = 'Amor, Roma';
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(word.toLowerCase())
console.log(reversedWord.toLowerCase())

if (word.toLowerCase() === reversedWord.toLowerCase()) {
    console.log(`Congratulations, it's palindrome!!`)
} else {
    console.log(`Sorry, is not palindrome.`)
}