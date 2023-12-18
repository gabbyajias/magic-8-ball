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
            image = "yes-image.jpg" //change this!!;
            color = "text-success";
            break;
        case 1:
            answer = "NO";
            image = "no-image.jpg" //change this!!;
            color = "text-danger";
            break;
        case 2:
            answer = "TRY AGIAN LATER";
            image = "later-image.jpg" //change this!!;
            color = "text-secondary";
            break;
        case 3:
            answer = "HMMM MAYBE";
            image = "maybe-image.jpg";//change this!!;
            color = "text-warning";
            break;
        case 4:
            answer = "NOT SURE";
            image = "cannot-predict-image.jpg";//change this!!;
            color = "text-muted";
            break;
        case 5:
            answer = "DONT THINK SO";
            image = "dont-count-on-it-image.jpg";//change this!!;
            color = "text-danger";
            break;
        case 6:
            answer = "PROBABLY";
            image = "most-likely-image.jpg";//change this!!;
            color = "text-success";
            break;
        case 7:
            answer = "MOST DEFINITELY";
            image = "outlook-not-good-image.jpg";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}