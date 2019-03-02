function vowel() {
    var userText = document.getElementById("exercise1TXT").value;
    var counter = 0;
    for (var i = 0; i < userText.length; i++) {
        if (userText[i] == 'а' || userText[i] == 'у' || userText[i] == 'о' || userText[i] == 'ы' ||
            userText[i] == 'и' || userText[i] == 'э' || userText[i] == 'я' || userText[i] == 'ю' ||
            userText[i] == 'е' || userText[i] == 'ё' || userText[i] == 'А' || userText[i] == 'У' ||
            userText[i] == 'О' || userText[i] == 'Ы' || userText[i] == 'И' || userText[i] == 'Э' ||
            userText[i] == 'Я' || userText[i] == 'Ю' || userText[i] == 'Е' || userText[i] == 'Ё')  {
            counter++;
        }
    }
    alert(counter);
}

function showCounter() {
    vowel();
}



