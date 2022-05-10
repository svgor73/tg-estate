import { DISTRICTS_NAMES } from 'src/enities/DistrictsFilter';
import { ROOMS_NAMES } from 'src/enities/RoomsFilter';
import { IDistrictsFilter } from 'src/interfaces/IDistrictsFilter';
import { IRoomsFilter } from 'src/interfaces/IRoomsFilter';
import { CreatedSubscription } from 'src/interfaces/Subscription';

export const KEYBOARD_BACK_TO_MENU = {
  inline_keyboard: [[{ text: '⤴️ Меню', callback_data: '/menu' }]],
};

export const KEYBOARD_BACK_TO_FILTER = {
  inline_keyboard: [[{ text: '⤴️ Фильтры', callback_data: '/filters' }]],
};

export const KEYBOARD_FILTERS_START = {
  inline_keyboard: [
    [
      { text: '🏷️ Цена объекта', callback_data: '/filter-maxprice' },
      { text: '🛁 Комнатность', callback_data: '/filter-rooms' },
    ],
    [
      { text: '🌇 Район', callback_data: '/filter-districts' },
      { text: '🪜 Этаж', callback_data: '/filter-floors' },
      { text: '📐 Площадь', callback_data: '/filter-square' },
    ],
    [{ text: '⤴️ Меню', callback_data: '/menu' }],
  ],
};

export const KEYBOARD_ROOMS_FILTER = (rooms: IRoomsFilter) => {
  return {
    inline_keyboard: [
      [
        {
          text: `${rooms[0] ? '✅' : ''} ${ROOMS_NAMES[0]}`,
          callback_data: '/filter-rooms-0',
        },
        {
          text: `${rooms[1] ? '✅' : ''} ${ROOMS_NAMES[1]}`,
          callback_data: '/filter-rooms-1',
        },
        {
          text: `${rooms[2] ? '✅' : ''} ${ROOMS_NAMES[2]}`,
          callback_data: '/filter-rooms-2',
        },
      ],
      [
        {
          text: `${rooms[3] ? '✅' : ''} ${ROOMS_NAMES[3]}`,
          callback_data: '/filter-rooms-3',
        },
        {
          text: `${rooms[4] ? '✅' : ''} ${ROOMS_NAMES[4]}`,
          callback_data: '/filter-rooms-4',
        },
        {
          text: `${rooms[5] ? '✅' : ''} ${ROOMS_NAMES[5]}`,
          callback_data: '/filter-rooms-5',
        },
      ],
      [{ text: 'Готово', callback_data: '/filter-rooms-save' }],
    ],
  };
};

export const KEYBOARD_DISTRICTS_FILTER = (districts: IDistrictsFilter) => {
  return {
    inline_keyboard: [
      [
        {
          text: `${districts[0] ? '✅' : ''} ${DISTRICTS_NAMES[0]}`,
          callback_data: '/filter-districts-0',
        },
      ],
      [
        {
          text: `${districts[1] ? '✅' : ''} ${DISTRICTS_NAMES[1]}`,
          callback_data: '/filter-districts-1',
        },
      ],
      [
        {
          text: `${districts[2] ? '✅' : ''} ${DISTRICTS_NAMES[2]}`,
          callback_data: '/filter-districts-2',
        },
      ],
      [
        {
          text: `${districts[3] ? '✅' : ''} ${DISTRICTS_NAMES[3]}`,
          callback_data: '/filter-districts-3',
        },
      ],
      [{ text: 'Готово', callback_data: '/filter-districts-save' }],
    ],
  };
};

export const KEYBOARD_SEARCH_MENU = {
  inline_keyboard: [
    [
      { text: '✅ Включить', callback_data: '/search-start' },
      { text: '🚫 Остановить', callback_data: '/search-stop' },
    ],
    [{ text: '⤴️ Меню', callback_data: '/menu' }],
  ],
};

export const KEYBOARD_MAIN_MENU = {
  inline_keyboard: [
    [
      { text: '⚙️ Мои фильтры', callback_data: '/filters' },
      { text: '✉️ Оповещения', callback_data: '/search' },
    ],
    [
      { text: '⭐ Моя подписка', callback_data: '/subscription' },
      { text: '🚀 Тарифы', callback_data: '/tariffs' },
    ],
    [
      { text: '🤖 Инструкция', callback_data: '/about' },
      { text: '📧 Поддержка', callback_data: '/support' },
    ],
  ],
};

export const KEYBOARD_TARIFFS_MENU = {
  inline_keyboard: [
    [{ text: '⭐ Моя подписка', callback_data: '/subscription' }],
    [{ text: '💳 Оплатить подписку', callback_data: '/pay-subscription' }],
    [{ text: '⤴️ Меню', callback_data: '/menu' }],
  ],
};

export const TEMPLATE_KEYBOARD_PAY_SUBSCRIPTION_MENU = (
  subscriptions: CreatedSubscription[]
) => {
  const keyboard = subscriptions.reduce((acc, sub) => {
    return [
      ...acc,
      [{ text: sub.name, callback_data: `/subscription-pay-${sub.id}` }],
    ];
  }, []);

  return {
    inline_keyboard: [
      ...keyboard,
      [{ text: '⤴️ Меню', callback_data: '/menu' }],
    ],
  };
};
