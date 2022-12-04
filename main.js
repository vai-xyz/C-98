var SpeechRecognition=window.webkitSpeechRecognition;
var recogniton=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recogniton.start();
}

recogniton.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
}
