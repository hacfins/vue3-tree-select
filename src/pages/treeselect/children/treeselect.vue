<template>
    <div class="tree-select-wrap">
        <tree-select></tree-select>
    </div>

</template>

<script>
    import treeSelect from 'components/tree-select'

	export default {
        data(){
            return{

			}
		},
		components: {
            treeSelect
		},
		setup() {

		},
		mounted(){


		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
    .tree-select-wrap{
        width:400px;
        margin:0 auto 0 auto;

    }


</style>
