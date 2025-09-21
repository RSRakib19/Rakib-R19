module.exports.config = {
    name: "baba",
    version: "1.0.0",
    author: "Rakib",
    countDown: 5,
    role: 0,
    shortDescription: "Rakib নিয়ে জোকস",
    longDescription: "গ্রুপে মজা করার জন্য Rakib ভাইকে নিয়ে কিছু কাস্টম জোকস পাঠাবে",
    category: "fun",
    guide: {
        en: "{p}{n}"
    }
};

module.exports.onStart = async function ({ event, message }) {
    const jokes = [
        "😎 সবাই বলে বট Rakib ভাইয়ের হাতে থাকলেই গ্রুপ জমে যায়!",
        "😂 Rakib ভাই নাকি ঘুমানোর আগে গ্রুপকে গুড নাইট মেসেজ দেন!",
        "🤖 বট বলল: আমার আসল বস হলো Rakib ভাই!",
        "🤣 একদিন গ্রুপে সবাই চুপ ছিল, Rakib আসতেই আবার হইচই শুরু!"
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    message.reply(randomJoke);
};
