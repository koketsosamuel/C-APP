var message = document.getElementById("message");

var messageHeader = document.getElementById("messageHeader");

var gettydaty = new Date();

if (gettydaty.getHours() < 12) {
  messageHeader.innerHTML = "Morning!";

  message.innerHTML =
    "have you told God about how you slept and about your plans for today?";
} else if (gettydaty.getHours() < 16) {
  messageHeader.innerHTML = "Afternoon!";

  message.innerHTML =
    "have you told God about how your day has been going so far? if you have not then now might be a beatiful time to do so!";
} else if (gettydaty.getHours() < 18) {
  messageHeader.innerHTML = "Hi";

  message.innerHTML =
    "It's almost the evening, have you let God guide you today? If not then you can atleast invite Him to governing and ruling your life, you are still alive after all!";
} else if (gettydaty.getHours() < 19 && gettydaty.getMinutes() < 59) {
  messageHeader.innerHTML = "Evening!";

  message.innerHTML =
    "Talk to God before you sleep, tell Him about your day, thank Him for giving you life and tell Him about your plans for tomorrow if you wake up the next day, as well as what you would want if you don't wake up tomorrow!";
} else if (gettydaty.getHours() < 23 && gettydaty.getMinutes() < 59) {
  messageHeader.innerHTML = "Have a great night!";

  message.innerHTML =
    "Things may be going your way or today might have not been your worst day, maybe you sinned knowingly or unknowingly. The good news is: You still have time to repent and ask for forgiveness from God!";
} else {
  console.log("something is wrong");
}
