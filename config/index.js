export const config = {
    // 公众号配置
    // 公众号appId
    appId: "",
    // 公众号appSecret
    appSecret: "bc1e399052c79fe1d7a5948ee82d49f0",
    // 模板消息id
    templateId: "tIW1pXz4FWH8sPUFVDIzVq8sXR3pbUPRjGNCQQYOiLY",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [“Wpqccc”],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "中山",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "猪猪", "year": "2006", "date": "06-27", "type": 'new'},
      {"name": "璨璨", "year": "2004", "date": "09-26", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-08-08",

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
