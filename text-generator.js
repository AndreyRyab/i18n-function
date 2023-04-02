export function setupOutputText(element) {
  let outputText = '';

  const setOutput = (text) => {
    outputText = text;
    element.innerHTML = `${outputText}`
  };

  setOutput('start text');
};

const getI18nText = function ({ stringTokens, variables, translations, locale }) {
  let i18nText = '';
  
  stringTokens.forEach(token => {
    if (Array.isArray(token)) {
      i18nText = i18nText.concat(funcs[token[0]](token.slice(1,)));

      return;
    }

    if (token.startsWith('#')) {
      const key = token.substring(1);

      i18nText = i18nText.concat(translations[locale][key]);

      return;
    }
    
    i18nText = i18nText.concat(token);
  });
 
  return i18nText;
};
