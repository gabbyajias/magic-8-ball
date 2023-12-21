function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "YES";
            image = "10.webp" //change this!!;
            color = "text-success";
            break;
        case 1:
            answer = "NO";
            image = "images.jpg" //change this!!;
            color = "text-danger";
            break;
        case 2:
            answer = "TRY AGIAN LATER";
            image = "try.jpg" //change this!!;
            color = "text-primary";
            break;
        case 3:
            answer = "HMMM MAYBE";
            image = "may.jpg";//change this!!;
            color = "text-info";
            break;
        case 4:
            answer = "NOT SURE";
            image = "hmm.jpg";//change this!!;
            color = "text-success-emphasis";
            break;
        case 5:
            answer = "DONT THINK SO";
            image = "not.jpg";//change this!!;
            color = "text-success-emphasis";
            break;
        case 6:
            answer = "PROBABLY";
            image = "prob.jpg";//change this!!;
            color = "text-primary-emphasis";
            break;
        case 7:
            answer = "MOST DEFINITELY";
            image = "100.png";//change this!!;
            color = "text-info";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}