(function () {
    let PIANO = "";
    const KEYBOARD_LIST = [
        [
            {
                className: "white",
                note: "a1"
            },
            {
                className: "black",
                note: "a1s"
            },
            {
                className: "white",
                note: "b1"
            }
        ],
        [
            {
                className: "white",
                note: "c1"
            },
            {
                className: "black",
                note: "c1s"
            },
            {
                className: "white",
                note: "d1"
            },
            {
                className: "black",
                note: "d1s"
            },
            {
                className: "white",
                note: "e1"
            },
            {
                className: "white",
                note: "f1"
            },
            {
                className: "black",
                note: "f1s"
            },
            {
                className: "white",
                note: "g1"
            },
            {
                className: "black",
                note: "g1s"
            },
            {
                className: "white",
                note: "a1"
            },
            {
                className: "black",
                note: "a1s"
            },
            {
                className: "white",
                note: "b1"
            }
        ],
        [
            {
                className: "white",
                note: "c1"
            },
            {
                className: "black",
                note: "c1s"
            },
            {
                className: "white",
                note: "d1"
            },
            {
                className: "black",
                note: "d1s"
            },
            {
                className: "white",
                note: "e1"
            },
            {
                className: "white",
                note: "f1"
            },
            {
                className: "black",
                note: "f1s"
            },
            {
                className: "white",
                note: "g1"
            },
            {
                className: "black",
                note: "g1s"
            }
        ]
    ];

    window.playNote = function (note) {
        var audio = new Audio(`./mp3/${note}.mp3`);
        audio.play();
    };

    KEYBOARD_LIST.forEach((keyboardGroup, index) => {
        let PIANO_PART = "";
        keyboardGroup.forEach((keyboard) => {
            PIANO_PART += `<td class="${keyboard.className}" onclick="playNote('${keyboard.note}')"> </td>`
        });
        PIANO_PART = PIANO_PART.repeat(((index == 1) && 5) || 1);
        PIANO += PIANO_PART;
    });
    document.querySelector("#piano").innerHTML = PIANO;
})(document);






