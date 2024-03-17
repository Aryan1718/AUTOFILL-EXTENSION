function randomNameGenerator() {
    const num = 8;
    let res = '';
    for (var i = 0; i < num; i++) {
        const random = Math.floor(Math.random() * 26);
        res += String.fromCharCode(97 + random);
    }
    return res;
}

function randomEmail() {
    let name = randomNameGenerator();
    
    const domain = ['@gmail.com','@ymail.com','@hotmail.com','@edu.com'];

    let email = '';

    let randomNumber = Math.floor(Math.random() * domain.length);

    email = name + domain[randomNumber];

    return email;
}

function randomValue(inputArray) {
    var radioIndexes = [];
    var checkBoxIndex = [];

    for (var i = 0; i < inputArray.length; i++) {
        try {
            if (inputArray[i].type == 'text') {
                inputArray[i].value = randomNameGenerator();
            }
            if (inputArray[i].type == 'number') {
                inputArray[i].value = Math.floor(Math.random() * 100000000000);
            }
            if (inputArray[i].type == 'checkbox') {
                checkBoxIndex.push(i);
            }
            if (inputArray[i].type == 'radio') {
                radioIndexes.push(i);
            }
            if (inputArray[i].type == 'email') {
                inputArray[i].value = randomEmail();
            }
            if (inputArray[i].type == 'password'){
                inputArray[i].value = randomNameGenerator()
            }
        } catch (error) {
            console.log("Error occur", error);
        }
    }

    if (checkBoxIndex.length > 0) {
        var randomCheckboxIndex = checkBoxIndex[Math.floor(Math.random() * checkBoxIndex.length)];
        inputArray.forEach((checkbox, index) => {
            checkbox.checked = index === randomCheckboxIndex;
        });
    }

    if (radioIndexes.length > 0) {
        var randomRadioIndex = radioIndexes[Math.floor(Math.random() * radioIndexes.length)];
        inputArray[randomRadioIndex].checked = true; // Select the random radio button directly
    }
}

console.log('in main')

if (typeof input_all === 'undefined') {
    const input_all = document.querySelectorAll('input');
    randomValue(input_all);
} else {

    randomValue(input_all);
}
