# vue3-tree-select
基于elementUI的el-popover和el-tree改造的树形选择器

## Demo效果
###
![Image text](https://github.com/hacfins/vue3-tree-select/raw/master/src/assets/demo.gif)

## treeselect.vue

``` vue
<template>
    <div class="tree-select-wrap">
        <tree-select  v-model="values" :treeParams="treeParams"></tree-select>
    </div>

</template>

<script>
import treeSelect from 'components/tree-select'
export default {
    data(){
        return{
            //select-tree 参数
            treeParams:{
                place_holder:'请选择',
                data: [],//tree_data
                props: {//数据的配置项
                    children: 'children',
                    label: 'sr_name',
                    value:'sr_id',
                    isLeaf: 'leaf',
                }
            },
            values:[],//默认选中的节点
        }
    },
    components: {
        treeSelect
    },
    mounted(){
        this.treeParams.data = [{
            sr_id:'11',
            sr_name:'山东省',
            leaf:false,
            children:[{
                sr_id:'112',
                sr_name:'济南市',
                leaf:true,
            }]
        },{
            sr_id:'21',
            sr_name:'江苏省',
            leaf:false,
            children:[{
                sr_id:'212',
                sr_name:'杭州市',
                leaf:true,
            }]
        }]
    },
    watch:{
        values(val){
            console.log(val)
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss">
    .tree-select-wrap{
        width:400px;
        margin:100px auto 0 auto;

    }
</style>

```

## Components

### tree-select

#### Props

* `treeParams {Object}`

    Default:
    ```js
    {
     place_holder:'请选择',
     data : [],
     props: {
              children: 'children',
              label: 'name',
              value:'value',
              isLeaf: 'leaf'
          }
    }
    ```

#### 组件props解释

##### treeParams字段

| 字段            | 类型    | 必填 | 描述     |
| --------------- | ------- | ---- | -------- |
| place_holder    | String  | 否   | tree-select 占位符 |
| data            | Array   | 否   | tree数据(看下文) |
| props           | Object  | 否   | tree数据valueKey 和 valueName 的配置，看下文 |

##### data字段

| 字段            | 类型    | 必填 | 描述         |
| --------------- | ------- | ---- | ------------ |
| sr_name         | String  | 否   | 节点名称 |
| sr_id           | String  | 否   | 节点id |
| leaf            | String  | 否   | 是否为叶子节点 |
| children        | Array   | 否   | 子节点 |

##### props字段

| 字段            | 类型    | 必填 | 描述         |
| --------------- | ------- | ---- | ------------ |
| children        | String  | 否   | children 字段配置 |
| label           | String  | 否   | label 字段配置 |
| value           | String  | 否   | value 字段配置|
| isLeaf          | Array   | 否   | leaf 字段配置 |

## Development

``` bash
# install dependencies
npm install
# serve with hot reload at localhost:3001
npm run serve
# build for production with minification
npm run build
```