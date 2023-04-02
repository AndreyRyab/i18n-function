// To check a @method you can just uncomment the corresponding mock

//@date
/* export const stringTokens = [['@date', 1676561884561]];

export const locale = 'ru-RU'; */

//@number
/* export const stringTokens = [['@number', 56789.01, 'USD']];

export const locale = 'ru-RU'; */

//@plural
/* export const stringTokens = [['@plural', '#day', '$tripDays']];

export const variables = { tripDays: 434.5 };

export const translations = {  
  'ru-RU': {  
    day: {  
      zero: ' дней',  
      one: ' день',  
      few: ' дня',  
      many: ' дней',  
      other: ' дней',  
    },  
  }  
  // ...  
};

export const locale = 'ru-RU'; */

//@list
/* export const stringTokens = [['@list', 'Motorcycle', '$item', '#bus']];
export const variables = { item: 'Car' };
export const translations = {  
  'en-US': {  
      bus: 'Bus',  
  },  
  // ...  
};
export const locale = 'en-US'; */

//@relativeTime
/* export const stringTokens = [['@relativeTime', -5, 'hours']];
export const translations = {  
  'ru-RU': {  
    hours: {  
      zero: ' дней',  
      one: ' день',  
      few: ' дня',  
      many: ' дней',  
      other: ' дней',  
    },  
  }  
  // ...  
};
export const locale = 'ru-RU'; */

//just a plain text
/* export const stringTokens = ['Just', ' a plain', '  text']; */

//full example
/* export const stringTokens = [
  '#price',
  ' ',
  ['@plural', '#day', '$tripDays'],
  ' - ',
  ['@number', '$tripPrice', 'USD'],
];

export const variables = {
  tripDays: 10,
  tripPrice: 56789.01,
};

export const translations = {
  'ru-RU': {
    price: 'Цена',
    day: {
      zero: ' дней',
      one: ' день',
      few: ' дня',
      many: ' дней',
      other: ' дней',
    },
  },
  'en-US': {
    price: 'Price',
    day: {
      one: ' day',
      other: ' days',
    },
  },
};

export const locale = 'ru-RU'; */
