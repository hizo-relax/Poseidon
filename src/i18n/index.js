import { createI18n } from 'vue-i18n';
import zh from './lang/zh';
import en from './lang/en';

const i18n = createI18n({
    locale: localStorage.getItem('language') || 'zh',
    messages: {
        zh,
        en
    },
});

export default i18n;