function nextMsg(i) {
    if (messages.length == i) {
        i = 0;
    }
    $('#quickMessage').html(messages[i]).fadeIn(700).delay(3000).fadeOut(500, function() {
        nextMsg(i + 1);
    });
};

var messages = [
    "ПРОВЕДЕНИЕ МЕРОПРИЯТИЙ",
    "ОБСУЖЕНИЕ НОВОСТЕЙ",
    "ФАН-ЗОНА НА КОНЦЕРТАХ",
];

$('#message').hide();

nextMsg(0);

