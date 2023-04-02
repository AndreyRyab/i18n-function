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

  const getPluralKey = (number) => {
    const lastDigit = Number(number.toString().substr(-1, 1));

    const plurals = {
      zero: lastDigit === 0,
      one: lastDigit === 1,
      few: [2,3,4].includes(lastDigit) || Math.trunc(number) !== number,
      many: lastDigit > 4,
      other: true,
    }

    return Object.entries(plurals).find(([_, value]) => value)[0];
  };

  const funcs = {
    '@date': (params) => {
      const formatter = new Intl.DateTimeFormat(
        locale,
        {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          timeZoneName: 'short',
        },
      );

      return formatter.format(params);
    },

    '@number': (params) => {
      const formatter = new Intl.NumberFormat(
        locale,
        {
          maximumFractionDigits: 2,
          ...(params[1] && {
            currency: params[1],
            style: 'currency',
          }),
        },
      );

      return formatter.format(params[0]);
    },

    '@plural': (params) => {
      const key = params[0].slice(1);
      const number = variables[params[1].slice(1)];

      const pluralKey = getPluralKey(number);

      const text = translations[locale][key][pluralKey];
      return `${number}${text}`;
    },

    '@list': (params) => {
      return params.reduce((acc, item, idx, arr) => {
        let text = '';

        const handleText = (text, idx, arr) => {
          if (arr.length === 1 || idx === 0) {
            return text;
          }
          if (idx === arr.length - 1) {
            return `, and ${text}`;
          }
          return `, ${text}`
        };

        if (item.startsWith('#')) {
          text = translations[locale][item.substring(1)];
          return acc.concat(handleText(text, idx, arr));
        }
        if (item.startsWith('$')) {
          text = variables[item.substring(1)];
          return acc.concat(handleText(text, idx, arr));
        } else {
          text = item;
          return acc.concat(handleText(text, idx, arr));
        }
      }, '');
    },

    '@relativeTime': (params) => {
      const [diff, key] = params;

      const pluralKey = getPluralKey(diff);
      
      return `${Math.abs(diff)}${translations[locale][key][pluralKey]} назад`;
    },
  };
  
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
