import { request } from '@/common/api/request'

// 相册列表
export const getAlbumList = (data) => {
  return request({
    url: '/work/plan/album/lists',
    method: 'GET',
    params: data,
    describe: '相册列表'
  })
}
