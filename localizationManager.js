let params = new URLSearchParams(document.location.search);
let lang = params.get("lang") || navigator.language.split('-')[0];

document.getElementsByTagName("html")[0].setAttribute("lang", lang);
document.getElementsByTagName("body")[0].classList.add(lang);

import en from './assets/localizations/en.json'
import de from './assets/localizations/de.json'
import es from './assets/localizations/es.json'
import fr from './assets/localizations/fr.json'
import ja from './assets/localizations/ja.json'
import pt from './assets/localizations/pt.json'

const localizationManager = {
    localization: {
        "en": en,
        "de": de,
        "es": es,
        "fr": fr,
        "ja": ja,
        "pt": pt
    },
    getLocalization: function () {
        return this.localization[lang] || this.localization["en"];
    }
}

export default localizationManager;