var config = {
  baseApiURL: '',
  cdnServer: location.origin, //location.origin, //默认cdn就设置成当前域名
  reactCommonModuleURL: 'https://uatj9bc-game-web.uatnine.com', //老公共活动页
  vueCommonModuleURL: 'https://common-subject.j998958.com/loader.js', //新公共活动页 url
  wmsPath: '_l', // wms环境路径
  cdnPath: '/cdn/tus5r4F', // 静态文件路径
  cdns: ['https://tus5r4front.owproofing.com','https://tus5r4front.xianzhaoquan.com'], //需要选址的cdn
  cdnCacheSeconds: 600, //cdn缓存时间[秒] //cdn缓存时间
  messageSocketUrl: 'wss://ips2.io/ws', // 消息推送服务地址 （需要配置为线上的websocket地址）
}

window.yunweiConfig = config
