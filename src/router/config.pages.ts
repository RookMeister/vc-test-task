export default [
  {
    path: '/',
    props: {
      title: 'KMTT admin',
      data: [
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
              name: 'Table.vue',
              props: {
                title: 'Список пользователей',
                data: [
                  {
                    'ID': 56723, 'Имя':'Alex Stone', 'Email': 'alexstone.greatsoul@gmail.com', 'Статус': 'Активен', 'Действия': {
                      component: {
                        // path: '../core/Button.vue',
                        name: 'ButtonComponent',
                        props: {
                          text: 'Добавить пользователя'
                        }
                      }
                    }
                  },
                  {
                    'ID': 62346, 'Имя':'Rook', 'Email': 'rook.greatsoul@gmail.com', 'Статус': 'Активен', 'Действия1': []
                  }
                ]
              }
            },
            {
              name: 'Button.vue',
              props: { text: 'Добавить пользователя', action: () => console.log('click') }
            }
          ]
        }
      }
    ]
  },
]
