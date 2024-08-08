function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const e = parseInt(document.getElementById('key').value);
    const n = 3233;
    let encryptedText = rsaEncrypt(inputText, e, n);
    document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const d = parseInt(document.getElementById('key').value);
    const n = 3233;
    let decryptedText = rsaDecrypt(inputText, d, n);
    document.getElementById('outputText').value = decryptedText;
}

function rsaEncrypt(str, e, n) {
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        return BigInt(code) ** BigInt(e) % BigInt(n);
    }).join(' ');
}

function rsaDecrypt(str, d, n) {
    return str.split(' ').map(code => {
        return String.fromCharCode(Number(BigInt(code) ** BigInt(d) % BigInt(n)));
    }).join('');
}