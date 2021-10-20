import Mock from 'mockjs'

//导入当前同级所有文件夹的ts
const modules = import.meta.globEager('./**/*.ts')

//延时200-600毫秒请求到数据
Mock.setup({ timeout: '200-600' })
