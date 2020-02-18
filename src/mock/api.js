import mock from 'mockjs'
// 这个一个获取URL参数的方法
import { getParams } from './utils'

// 在这里编写你的逻辑代码
mock.mock(/\/lists/,options=>{
  const num = getParams(options.url, 'num')
  const data = `data|${num}`;
  const res = {
    [data]: [
      {
        "tid|+1": 1,
        title: "@title(2,5)",
        catalog: "index",
        "fav|1-20": 1,
        created: '@date("yyyy-MM-dd")',
        "isEnd|0-1": 0,
        "answer|0-100": 0,
        user: {
          avatar: "@image('200x100')",
          name: "@cname",
          "isVip|0-1": 0,
          "level|0-10": 0
        }
      }
    ]
  };
  return mock.mock(res);
})
