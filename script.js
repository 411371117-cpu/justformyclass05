function showTab(tabId){

    let tabs =
    document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });

    document
        .getElementById(tabId)
        .classList.add("active");
}


// 第一次點擊網頁後播放背景音樂

document.addEventListener(
    "click",
    () => {

        const music = document.getElementById("bgm");
        const record = document.getElementById("record-player");

        if (music) {
            music.play();

            record.classList.add("show");
            record.classList.add("spin");
        }

    },
    { once: true }
);