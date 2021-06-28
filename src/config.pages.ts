export default
  {
    propsLayout: {
      title: 'KMTT admin',
      menu: [
        {
          title: 'Статистика',
          links: [
            { name: 'Публикации' },
            { name: 'Мессенеджер' },
          ]
        },
        {
          links: [
            { name: 'Подписка на еженедельную рассылку' }
          ],
        },
        {
          title: 'Списки данных',
          links: [
            { name: 'Доступные города' },
            { name: 'Заблокированные пользователи' },
            { name: 'Черный списоск ссылок' },
            { name: 'Управление пользователями' },
          ]
        }
      ]
    },
    pages: [
      { page: 'App', path: '/', props: {} }
    ]
  }
