const quotes = [
    {
        quote: "천리길도 한 걸음부터 시작된다",
        author: "노자"
    },
    {
        quote: "아는 것과 행하는 것은 다르다",
        author: "공자"
    },
    {
        quote: "실패란 성공으로 가는 또 하나의 과정이다",
        author: "토머스 에디슨"
    },
    {
        quote: "노력은 배신하지 않는다",
        author: "마이클 조던"
    },
    {
        quote: "미래를 예측하는 가장 좋은 방법은 미래를 만드는 것이다",
        author: "피터 드러커"
    },
    {
        quote: "성공은 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다",
        author: "윈스턴 처칠"
    },
    {
        quote: "자신을 이기는 사람이 가장 강한 사람이다",
        author: "아리스토텔레스"
    },
    {
        quote: "행동이 모든 성공의 기초다",
        author: "파블로 피카소"
    },
    {
        quote: "배움에는 끝이 없다",
        author: "소크라테스"
    },
    {
        quote: "꿈을 이루고 싶다면 깨어 있어라",
        author: "프리드리히 니체"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
