$(document).ready(function () {
    var stringPathName = window.location.pathname
    console.log("this is the path" + stringPathName);
    var user, to, subject, text;
    var send_email = document.getElementById("send_email myBtn");

    $("#send_email").click(function () {
        // enter your email account that you want to recieve emails at.
        to = "pariscdo@gmail.com";
        name = $("#name").val();
        user = $("#user_email").val();
        text = $("#textarea1").val();
        // $("#message").text("Sending E-mail...Please wait");
        console.log(text);
        $.get("http://localhost:5000/send", {
            to: to,
            name: name,
            user: user,
            text: text
        }, function (data) {
            if (data == "sent") {
                console.log("Email sent");
            }
        });

        document.getElementById("name").value = "";
        document.getElementById("user_email").value = "";
        document.getElementById("textarea1").value = "";

    });

});

// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
$('.modal-trigger').leanModal();
