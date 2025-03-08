// Translations for all text content
const translations = {
    vi: {
        title: "Happy Women's Day",
        subtitle: "Bùi Khánh Linh",
        date: "08.03.2025",
        greeting: "Gửi Linh yêu quý,",
        message1: "Nhân ngày Quốc tế Phụ nữ, anh muốn dành tặng em những lời chúc tốt đẹp nhất. Em là điều tuyệt vời nhất đã đến với cuộc sống của anh.",
        message2: "Cảm ơn em vì đã luôn ở bên anh, vì nụ cười tỏa nắng và trái tim ấm áp của em.",
        message3: "Chúc em ngày 8/3 thật hạnh phúc!",
        love: "Yêu em rất nhiều! ❤️",
        signature: "Phạm Thắng",
        footer: "Mãi yêu em! ❤️"
    },
    en: {
        title: "Happy Women's Day",
        subtitle: "Bui Khanh Linh",
        date: "08.03.2025",
        greeting: "Dear beloved Linh,",
        message1: "On International Women's Day, I want to send you my best wishes. You are the most wonderful thing that has come into my life.",
        message2: "Thank you for always being by my side, for your sunny smile and warm heart.",
        message3: "Wishing you a very happy Women's Day!",
        love: "Love you so much! ❤️",
        signature: "Pham Thang",
        footer: "Forever love you! ❤️"
    },
    ru: {
        title: "С Международным женским днём",
        subtitle: "Буй Хань Линь",
        date: "08.03.2025",
        greeting: "Дорогая Линь,",
        message1: "В Международный женский день я хочу отправить тебе свои наилучшие пожелания. Ты самое прекрасное, что появилось в моей жизни.",
        message2: "Спасибо, что всегда рядом со мной, за твою солнечную улыбку и тёплое сердце.",
        message3: "Желаю тебе счастливого 8 марта!",
        love: "Очень люблю тебя! ❤️",
        signature: "Фам Тханг",
        footer: "Люблю тебя вечно! ❤️"
    },
    de: {
        title: "Froher Frauentag", 
        subtitle: "Bui Khanh Linh",
        date: "08.03.2025",
        greeting: "Liebe Linh,",
        message1: "Zum Internationalen Frauentag möchte ich dir meine besten Wünsche senden. Du bist das Wunderbarste, das in mein Leben gekommen ist.",
        message2: "Danke, dass du immer an meiner Seite bist, für dein sonniges Lächeln und dein warmes Herz.",
        message3: "Ich wünsche dir einen sehr schönen Frauentag!",
        love: "Ich liebe dich so sehr! ❤️",
        signature: "Pham Thang",
        footer: "Liebe dich für immer! ❤️"
    },
    zh: {
        title: "妇女节快乐",
        subtitle: "裴庆灵",
        date: "08.03.2025",
        greeting: "亲爱的灵，",
        message1: "在三八妇女节，我想送给你最美好的祝福。你是我生命中最美好的事物。",
        message2: "感谢你一直在我身边，感谢你阳光般的微笑和温暖的心。",
        message3: "祝你三八妇女节快乐！",
        love: "非常爱你！❤️",
        signature: "范胜",
        footer: "永远爱你！❤️"
    }
};

// Array of language codes to cycle through
const languages = ['vi', 'en', 'ru', 'de', 'zh'];
let currentLangIndex = 0;

// Function to animate text change character by character
async function animateText(element, newText) {
    const currentText = element.innerText;
    const maxLength = Math.max(currentText.length, newText.length);
    
    // First, replace characters with random ones
    for (let i = 0; i < maxLength; i++) {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33);
        const text = newText.substring(0, i) + randomChar + currentText.substring(i + 1);
        element.innerText = text;
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Then, reveal the actual characters
    for (let i = 0; i < maxLength; i++) {
        const text = newText.substring(0, i + 1) + currentText.substring(i + 1);
        element.innerText = text;
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

// Function to update all text content
async function updateContent(langCode) {
    const translation = translations[langCode];
    
    // Update each element with animation
    await Promise.all([
        animateText(document.querySelector('.title'), translation.title),
        animateText(document.querySelector('.subtitle'), translation.subtitle),
        animateText(document.querySelector('.date'), translation.date),
        animateText(document.querySelector('.message p:nth-child(1)'), translation.greeting),
        animateText(document.querySelector('.message p:nth-child(2)'), translation.message1),
        animateText(document.querySelector('.message p:nth-child(3)'), translation.message2),
        animateText(document.querySelector('.message p:nth-child(4)'), translation.message3),
        animateText(document.querySelector('.message p.signature'), translation.love),
        animateText(document.querySelector('.signature p'), translation.signature),
        animateText(document.querySelector('.footer-text'), translation.footer)
    ]);
}

// Function to cycle through languages
function cycleLanguage() {
    currentLangIndex = (currentLangIndex + 1) % languages.length;
    updateContent(languages[currentLangIndex]);
}

// Start the language cycling
setInterval(cycleLanguage, 60000); // Change language every 10 seconds