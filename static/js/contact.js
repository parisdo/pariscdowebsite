$(document).ready(function () {
    var user, to, subject, text;
    var send_email = document.getElementById("send_email myBtn");

    $("#send_email").click(function () {
        // enter your email account that you want to recieve emails at.
        to = "pariscdo@gmail.com";
        name = $("#name").val();
        user = $("#user_email").val();
        text = $("#textarea1").val();
        var url = document.location.href;
        $.get(url + "send", {
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
