function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question');
    if(question === null) {
        document.getElementById('response-text').innerText = 'Please Ask a Question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //Fix later
    }


}
