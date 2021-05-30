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
                const by = data[i].by;
                const path = data[i].path;
                illustrations += createIllustrationCard(by, path)
            }
        }
        $("#illustration-content").append(illustrations)
    });
});

function createMessageCard(name, message) {
    return '<div class="card" style="width: 25rem">\n' +
    '    <div class="card-body">\n' +
    '        <p class="member">\n' +
    '            <span class="name">'+ name +'<span>\n' +
    '        </p>\n' +
    '        <p class="card-text">'+ message +'</p>\n' +
    '    </div>\n' +
    '</div>\n'
}

function createIllustrationCard(by, path) {
    return '<div class="col-6 text-center">\n' +
        '    <a href="images/illustrations/'+ path +'">\n' +
        '        <img src="images/illustrations/'+ path +'" alt="" style="width: 25rem">\n' +
        '    </a>\n' +
        '    <p>'+ by +'作</p>\n' +
        '</div>\n'
}
