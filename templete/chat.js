

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hello^^ <br> my name is INU ON! <BR> Please question about INU!"
    document.getElementById("botStarterMessage").innerHTML 
    = '<li class="botText"><span>' + firstMessage + '</span></li>';
}

// HTML 생성이 완료된 후 firstBotMessage를 호출해야 
// document.getElementById("botStarterMessage")를 찾을 수 있습니다
$(document).ready(function() {
    firstBotMessage();
});

function getAnswer(){

}

// Retrieves the response
function getHardResponse() {
    //let botResponse = getBotResponse(userText);
    let URL = 'https://inuon.run.goorm.io/chatbot/user?'
    URL += 'username=201802904' // 사용자 학번으로 추후에 변경하기
    //URL += 'content=' + userText
    
    fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(resp) {
        let res = ''
        resp.json().then((result) => {
            res = result['res']

            let botResponse = res
            let botHtml = '<li class="botText"><span>' + botResponse + '</span></li>';
            $("#chatbox").append(botHtml);

            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        })
    })
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<li class="userText"><span>' + userText + '</span></li>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    getHardResponse(userText);   

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {

    let userHtml = '<li class="userText"><span>' + sampleText + '</span></li>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

    setTimeout(() => {
             getHardResponse(sampleText);
         }, 1000)
}

function sendButton() {
    getResponse();
}


// Press enter to send a message
$("#textInput").keypress(function (key) {
    if (key.which == 13) {
        getResponse();
    }
});