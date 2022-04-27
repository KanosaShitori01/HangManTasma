const hangManQuestions = [
    {
        words: "Kanosa",
        suggest: "Người tạo ra trò chơi này",
    },
    {
        words: "Nam Đầu Buồi",
        suggest: "Chúa tể gánh team",
    },
    {
        words: "LMEO",
        suggest: "Câu nói thiểu lăng mọi thời đại",
    },
    {
        words: "Trần Anh",
        suggest: "Con đĩ đuồi bầu",
    }
]
const hangManTurn = 8;
let random = Math.floor(Math.random() * hangManQuestions.length);
const questHM = hangManQuestions[random];
export { questHM, hangManTurn };