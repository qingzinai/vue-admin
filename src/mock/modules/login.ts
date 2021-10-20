import Mock from 'mockjs'

Mock.mock('/api/login', 'get', {
  code: '1',
  data: {
    'token|20': /[a-z]{2}[A-Z]{2}[0-9]/
  },
  msg: '成功',
  time: '@now()'
})
