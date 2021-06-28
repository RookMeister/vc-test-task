export default [
  {
    page: 'Main',
    path: '/',
    props: {
      title: 'KMTT admin',
      menu: [
        {
          title: 'Статистика',
          links: [
            { name: 'Публикации' },
            { name: 'Мессенеджер', url: 'chat' },
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
            { name: 'Управление пользователями', url: 'users' },
          ]
        }
      ]
    },
    children: [
      {
        path: '/users',
        props: {
          components: [
            {
              name: 'ButtonComponent',
              props: { text: 'Добавить пользователя', action: () => console.log('click') }
            }
          ]
        }
      }
    ]
  },
]
