## 目标

此系统用于用户统一登录,通过配置可以分别对应客户和管理员

## 原型
[OST 用户登陆](http://ots.rd.800abk.com/ots-biz/start.html#c=1&g=1&p=index)

## 结构
> 
- 注册: **验证码,注册**
- 登录: **登录,微信二维码**
- 个人资料: 增删改查
- 我的企业: 增删改查
- 企业用户: **用户关联,解绑**
- 邀请好友: **发送邮件**
- 修改密码: **修改密码**
    
## 时间规划
```mermaid
    gantt

    title OTS客户登录系统时间规划（7个一级页/90h）

    section 设计架构
        设计架构                :active,a1,today, 16h

    section 页面编写
        注册(1P+2C)             :b1,after a1,4h
        登录(1P+2C)             :b2,after b1,4h
        个人资料(1P)            :b3,after b2,4h
        我的企业(1P)            :b4,after b3,4h
        企业用户(1P+2C)         :b5,after b4,4h
        邀请好友(1P+1C)         :b6,after b5,1h
        修改密码(1P+1C)         :b7,after b6,1h

    section 数据接入
        注册(2A+)               :c1,after b7,8h
        登录(2A+)               :c2,after c1,8h
        个人资料(4A+)           :c3,after c2,2h
        我的企业(4A+)           :c4,after c3,2h
        企业用户(2A+)           :c5,after c4,2h
        邀请好友(1A+)           :c6,after c5,4h
        修改密码(1A+)           :c7,after c6,2h

    section 测试修改
        测试修改                :d1,after c7,16h

    section 发布上线
        发布上线                :e1,after d1,8h

    section 总时间
        总计                    :done,f1,90h
```

## 脚本
``` bash
# 开发
npm run dev

# 输出
npm run build

# 测试
npm run unit
```

## 技术栈
* admin-lte 2.4.10
* bootstrap 3.4.0
* jquery 2.2.0
* vue 2.5.2
* vue-router 3.0.1
* vuex 3.1.1"
