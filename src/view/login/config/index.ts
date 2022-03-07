export const rules = {
  account: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /[a-z0-9]{3,9}/,
      message: '账号3-9位',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /[a-z0-9]{3,9}/,
      message: '密码3-9位',
      trigger: 'blur'
    }
  ]
}
