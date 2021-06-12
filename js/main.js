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
                const fileName = data[i].filename;
                illustrations += createIllustrationCard(by, fileName)
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

//function createIllustrationCard(by, fileName) {
//    return '<div class="col-6 text-center">\n' +
//        '    <a href="images/illustrations/'+ fileName +'">\n' +
//        '        <img class="" src="images/illustrations/'+ fileName +'" alt="">\n' +
//        '    </a>\n' +
//        '    <p>'+ by +'作</p>\n' +
//        '</div>\n'
//}

function createIllustrationCard(by, fileName) {
    return '<div class="card" style="width: 30rem">\n' +
        '    <div class="card-img-top">\n' +
        '        <a href="images/illustrations/'+ fileName +'">\n' +
        '            <img class="card-img-top" src="images/illustrations/'+ fileName +'" alt="">\n' +
        '        </a>\n' +
        '    </div>\n' +
        '</div>'
}
