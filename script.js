const userInput = document.getElementById('text-input');
const checkIfPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkPalindrome = word => { 
    const initialText = word;

    if (word === '') {
        alert('Please input a value');
        return;
    }

    resultDiv.replaceChildren();

    const lowerCaseString = word.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    // then a return message that contains a ternary operator to determine if it is a palindrome. 
    let returnMsg = `<strong>${initialText}</strong> ${
        lowerCaseString === [...lowerCaseString].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    const newTag = document.createElement('p');
    newTag.className = 'user-input';
    newTag.innerHTML = returnMsg; 
    resultDiv.appendChild(newTag);

    resultDiv.classList.remove('hidden');
};

//this will function if the button is pressed after entering text
checkIfPalindromeBtn.addEventListener('click',() => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});

//this functions if enter is pressed after entering text
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPalindrome(userInput.value)
        userInput.value = '';
    }
});