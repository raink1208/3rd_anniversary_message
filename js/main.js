//画像クリックされたときに拡大表示
$(function () {
    $('#illustration-content').magnificPopup({
        delegate: 'a',
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

//cardの生成
window.addEventListener("DOMContentLoaded" ,function () {
    $.getJSON("./data/messages.json", function (json) {
        let messages = "";
        const data = json.data

        for (const i in data) {
            if (data.hasOwnProperty(i)) {
                const name = data[i].name
                const message = data[i].message
                messages += createMessageCard(name, message)
            }
        }
        $("#message-content").append(messages);
    });
    $.getJSON("./data/illustrations.json", function (json) {
        let illustrations = "";
        const data = json.data;

        for (const i in data) {
            if (data.hasOwnProperty(i)) {
                const illustrator = data[i].illustrator;
                const title = data[i].title
                const message = data[i].message
                const filename = data[i].filename;
                illustrations += createIllustrationCard(illustrator, title, message, filename)
            }
        }
        $("#illustration-content").append(illustrations)
    });
});

//function createMessageCard(name, message) {
//    return '<div class="card" style="width: 25rem">\n' +
//    '<div class="card-deco"></div>\n' +
//    '    <div class="card-body">\n' +
//    '        <p class="member">\n' +
//    '            <span class="name">'+ name +'</span>\n' +
//    '        </p>\n' +
//    '        <p class="card-text">'+ message +'</p>\n' +
//    '    </div>\n' +
//    '</div>\n'
//}

function createMessageCard(name, message) {
    return '<div class="card" style="width: 25rem">\n' +
        '    <div class="card-deco">\n' +
        '        <img src="images/miko_sakura.png" alt class="message-deco-top left">\n' +
        '        <img src="images/miko_sakura.png" alt class="message-deco-top right">\n' +
        '        <img src="images/miko_sakura.png" alt class="message-deco-bottom left">\n' +
        '        <img src="images/miko_sakura.png" alt class="message-deco-bottom right">\n' +
        '    </div>\n' +
        '    <div class="card-body">\n' +
        '        <p class="member">\n' +
        '            <span class="name">'+ name +'</span>\n' +
        '        </p>\n' +
        '        <p class="card-text">'+ message +'</p>\n' +
        '    </div>\n' +
        '</div>'
}

function createIllustrationCard(illustrator, title, message, filename) {
    return '<div class="illustration h-25" style="width: 30rem">\n' +
        '    <a href="images/illustrations/'+filename+'">\n' +
        '        <img class="card-img-top" src="images/illustrations/'+filename+'" alt>\n' +
        '    </a>\n' +
        '    <div class="card-body">\n' +
        '        <h4 class="card-title text-center">'+title+'</h4>\n' +
        '        <p class="card-text">'+message+'</p>\n' +
        '        <p class="illustrator text-right">'+illustrator+'</p>\n' +
        '    </div>\n' +
        '</div>'
}