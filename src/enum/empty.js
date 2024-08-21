import { staticPicture } from '@/common/enum/resource'

export const emptyConfig = [
  {
    key: 'default',
    name: '默认',
    content: '暂无数据',
    vice: '',
    icon: staticPicture.empty1,
    showBtn: false,
    textBtn: '',
    typeBtn: ''
  },
  {
    key: 'Agreement',
    name: '协议暂无内容',
    content: '',
    vice: '还没有内容哟',
    icon: staticPicture.empty1,
    showBtn: false,
    textBtn: '',
    typeBtn: ''
  },
  {
    key: 'Index-login',
    name: '首页没有活动线路',
    content: '请登录后查看活动',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: true,
    textBtn: '去登录',
    typeBtn: 'default'
  },
  {
    key: 'Index-list',
    name: '首页没有研学计划',
    content: '首页没有研学计划',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: false,
    textBtn: '',
    typeBtn: 'default'
  },
  {
    key: 'personalCenter-list',
    name: '暂无研学计划',
    content: '暂无研学计划',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: false,
    textBtn: '',
    typeBtn: 'default'
  },
  {
    key: 'Album-list',
    name: '相册没有数据',
    content: '活动相册内容为空',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: true,
    textBtn: '创建相册',
    typeBtn: 'default'
  },
  {
    key: 'LiveBroadcastPlan-list',
    name: '直播计划内容为空',
    content: '直播计划内容为空',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: true,
    textBtn: '创建直播间',
    typeBtn: 'default'
  },
  {
    key: 'LiveBroadcastPlan-noCreate-list',
    name: '直播计划内容为空',
    content: '直播计划内容为空',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: false,
    textBtn: '创建直播间',
    typeBtn: 'default'
  },
  {
    key: 'LiveBroadcastHistory-list',
    name: '历史直播内容为空',
    content: '历史直播内容为空',
    vice: '',
    icon: staticPicture.empty2,
    showBtn: false,
    textBtn: '',
    typeBtn: 'default'
  }
]
