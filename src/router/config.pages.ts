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
        path: '/',
        props: {
          components: [
            {
              name: 'TableComponent',
              props: {
                title: 'Список пользователей',
                data: [
                  {
                    'ID': 56723, 'Имя':'Alex Stone', 'Email': 'alexstone.greatsoul@gmail.com', 'Статус': 'Активен', 'Действия': []
                  },
                  {
                    'ID': 56723, 'Имя':'Alex Stone', 'Email': 'alexstone.greatsoul@gmail.com', 'Статус': 'Активен', 'Действия1': []
                  }
                ]
              }
            },
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
