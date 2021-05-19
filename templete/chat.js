

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hello^^ my name is INU ON! please question about INU!"
    document.getElementById("botStarterMessage").innerHTML 
    = '<p class="botText"><span>' + firstMessage + '</span></p>';
}

// HTML 생성이 완료된 후 firstBotMessage를 호출해야 
// document.getElementById("botStarterMessage")를 찾을 수 있습니다
$(document).ready(function() {
    firstBotMessage();
});


// Retrieves the response
function getHardResponse(userText) {
    let URL = 'https://inuon.run.goorm.io/chatbot/answer?'
    URL += 'username=201801589' // 사용자 학번으로 추후에 변경하기
    URL += 'content=' + userText
    
    fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(resp) {
        let res = ''   
            res = result['res']

            let botResponse = res
            let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
            $("#chatbox").append(botHtml);

            document.getElementById("chat-bar-buttom").scrollIntoView(true);
        })
    })
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-input-box").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-input-box").scrollIntoView(true);

}

function sendButton() {
    getResponse();
}


// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
        return false;
    }
});