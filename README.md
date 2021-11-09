# vue3-tree-select
基于el-select和el-tree改造的树形选择器

## Demo
###
![Image text](https://github.com/hacfins/vue3-poster/blob/cc500464d7a359bc401e77ddf653ed5c5b46713b/src/assets/demoa.jpg)

## treeselect.vue

``` vue

```

## Components

### tree-select

#### Props

* `shareInfo {Object}`

  Default `{}`.

#### 组件props解释

##### shareInfo字段

| 字段            | 类型    | 必填 | 描述     |
| --------------- | ------- | ---- | -------- |
| title           | String  | 否   | 分享标题 |
| start_time      | String  | 否   | 分享时间 |
| share_url       | String  | 否   | 分享地址 |
| share_img       | String  | 否   | 分享封面 |
| school_name     | String  | 否   | 分享机构 |
| speakers        | Object  | 否   | 看下文   |

##### speakers字段

| 字段            | 类型    | 必填 | 描述         |
| --------------- | ------- | ---- | ------------ |
| full_name       | String  | 否   | 分享人的姓名 |
| avator          | String  | 否   | 分享人的头像 |

## Development

``` bash
# install dependencies
npm install
# serve with hot reload at localhost:3000
npm run serve
# build for production with minification
npm run build
```