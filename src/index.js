const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";

    if (expr.length % 10 != 0)
        for (let i = 0; i < (expr.length % 10); i++) {
          expr = '0' + expr;
        }

        for (let j = 0; j + 10 <= expr.length; j += 10) {

        let CodeResult = expr.substr(j, 10);

        if (CodeResult === "**********")
        result += ' ';
        
        else {
            CodeResult = CodeResult.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
            result += MORSE_TABLE[CodeResult];
        }
    }
    return result;
}

module.exports = {
    decode
}

