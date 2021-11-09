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
                treeParams:{
                    place_holder:'请选择',
                    data: [],
                    props: {
                        children: 'children',
                        label: 'sr_name',
                        value:'sr_id',
                        isLeaf: 'leaf',
                    }
                },
                values:[]
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
