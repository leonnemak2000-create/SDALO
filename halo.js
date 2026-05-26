async function sendMessage(){

    let input = document.getElementById("userInput");
    let message = input.value;

    if(message === ""){
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // USER MESSAGE
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerText = message;

    chatBox.appendChild(userMessage);

    // BOT MESSAGE
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerText = "Searching...";

    chatBox.appendChild(botMessage);

    input.value = "";

    try{

        let response = await fetch(
            "https://en.wikipedia.org/api/rest_v1/page/summary/" +
            encodeURIComponent(message)
        );

        let data = await response.json();

        if(data.extract){
            botMessage.innerText = data.extract;
        }
        else{
            botMessage.innerText = "I could not find anything.";
        }

    }
    catch(error){
        botMessage.innerText = "Error searching the internet.";
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}