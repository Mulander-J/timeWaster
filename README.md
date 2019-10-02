# TimeWaster `v1.5.0` 

> waste your time reading this md which tells u how to waste time

![pro-logo](./src/assets/logo.gif)

一直有考虑做一个自己的timer或者clock亦或是counter什么的，想法很多，这次就系统地去整理一下。

>技术栈: `Vue`  

- 项目整体采用 ` Vue ` 搭建，风格样式 模仿 [Momentum](https://momentumdash.com/)
- 小型项目暂未考虑 `Vuex ` 
- 数据管理 `props` ，  ` created ` ， ` mounted ` ， ` computed ` ， ` watch ` 
- 单页面开发SPA


 **目录** 
1. 快速链接—[demo演示地址](https://mulander-j.github.io/timeWaster/demo/index.html#/)
2. 安装教程
3. 使用说明
4. 开发笔记

## 1.快速连接
> [demo演示地址](https://mulander-j.github.io/timeWaster/demo/index.html#/)

## 2.安装教程
>  普通用户

- 在   `PC端`   打开  [此链接](https://mulander-j.github.io/timeWaster/demo/index.html#/)
- 收藏为 书签
- 设置为 游览器启动页
- 开始 waste time : )

> 开发人员

## Build Setup ##

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 3.使用说明
### 现有功能

1. 时间居中显示
2. 百度搜索跳转
3. 左侧日期显示，点击switch支持切换百分比
4. 右侧生命计算，包含进度条与数据
5. 7点，10点，15点，17点，21点这个5个小时内切换Gakki壁纸。
6. 设置支持主题色切换 `add at 2019/10/01`
7. 登录功能 `add at 2019/10/01`
8. 右侧日程预约功能 `删除`
9. 自适应分辨率1920*1080 `zoom.js`

### 待完善功能

- 移动端自适应

## 4 .开发笔记

首先第一个刚需就是 **显示时间** 

然后围绕这个衍生出一系列时间数据的需求。

### 草案一

2018/10/19
- 当前时间[布局居中]
  - 多格式
  - 多时区
- 占比[布局居左]
  - 月，周，年
  - 详细与总比切换
-  时差[布局居右]
  - 距离某一约定时间
- 存活时间
- 剩余时间[100年]

### 草案二

2018/10/21  ``已完成草案一部分功能  `` 
- 登录页
  -  姓名
  -  生辰
- 设置页
  - 主题样式自定义
- 主页
  - 搜索[百度]
  - 左侧circle 添加动画
  - 背景gakki 图片/视频
  - 右侧线条动画
- 移动端自适应？

草案二新增第二刚需   `Gakki` 
因为Gakki壁纸多选材为PC桌面类型，故暂时放弃移动端自适应问题

### 草案三

2019/10/01  `upGrade`

- 模块化改造 
- 自适应分辨率
