<template>
    <div class="multi-room-select-wrap" style="width:100%">
        <el-popover ref="popover" popper-class="hk-pd-0"  trigger="manual" v-model:visible="visible" :width="inputWidth">
            <div class="select-room-tree"  @mouseenter = "select_room_mouseenter" @mouseleave = "select_room_mouseleave">
                <el-scrollbar >
                    <el-tree
                        class="group-tree"
                        ref="tree"
                        :data="treeParams.data"
                        :node-key="treeParams.props.value"
                        :props="treeParams.props"
                        :check-strictly="true"
                        :filter-node-method="filterNode"
                        :show-checkbox="true"
                        :check-on-click-node="true"
                        :expand-on-click-node="false"
                        :default-expanded-keys="default_expanded_keys"
                        :default-checked-keys="checked_keys"
                        @node-expand="nodeExpend"
                        @check="checkChange"
                    >
                        <template #default="{ node, data }">
                            <div class="group-tree-node">
                                <div class="folder-ic"><i class="el-icon-folder"></i></div>
                                <div class="hk-text-ellipsis" :title="node.label">
                                    {{node.label}}
                                </div>
                            </div>
                        </template>
                    </el-tree>

                </el-scrollbar>
            </div>
        </el-popover>
        <div ref="reference" @click="pop($event)" @mouseenter = "select_room_mouseenter" @mouseleave = "select_room_mouseleave"  class="el-select el-select--small" style="width: 100%;">
            <div class="el-select__tags" ref="select_tags" style="max-width: calc(100% - 32px)">
                <span>
                    <span v-for="(item,index) in selected" :key="item[valueKey]" class="el-tag el-tag--info el-tag--mini">
                        <span class="el-select__tags-text">{{item[valueName]}}</span>
                        <i class="el-icon el-tag__close no-visible" @click="deleteItem(index,item)"><svg class="no-visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path></svg></i>
                    </span>
                </span>
                <input :disabled="disabled" @blur="focus_input_blur" @input="inputChange" v-model="query" type="text" autocomplete="off" ref="focus_input" debounce="0" class="el-select__input is-small" :style="{'width':focus_width + 'px'}">
            </div>
            <el-input ref="bg-input" class="bg-input" size="small" type="text" :placeholder="selected.length > 0  || calc_query || com_start ? '' : place_holder" readonly :class="{'is-focus':visible}">
                <template #suffix>
                    <i class="el-icon el-select__caret el-input__icon" :class="{'is-reverse':visible}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                            <path fill="currentColor"
                                  d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"></path>
                        </svg>
                    </i>
                </template>
            </el-input>

        </div>
    </div>
</template>

<script>
    import { addResizeListener, removeResizeListener } from '@/config/resize-event'
    export default {
        props:{
            treeParams:{
                type:Object,
                default() {
                    return {
                        place_holder:'请选择',
                        data: [],
                        props: {
                            children: 'children',
                            label: 'name',
                            value:'value',
                            isLeaf: 'leaf',
                        }
                    };
                }
            },
            modelValue: {
                default: []
            },

        },
        data(){
            return {
                inputWidth: 0, // 下拉面板的宽度
                visible: false, // 面板是否显示
                query:'',
                selected:[],
                checked_keys:[],
                is_search:true,
                calc_query:'',
                is_mouse_enter:false,
                default_expanded_keys:[]
            }
        },
        computed:{
            focus_width(){
                return 20 + this.calc_query.length * 15
            },
            valueKey(){
                return this.treeParams.props.value
            },
            valueName(){
                return this.treeParams.props.label
            },
            place_holder(){
                return this.treeParams.place_holder
            }

        },
        mounted(){
            addResizeListener(this.$el, this.handleResize);
            this.setSelected();
        },
        methods:{

            /** 重置宽度 */
            handleResize() {
                this.inputWidth = this.$refs.reference.getBoundingClientRect().width;

            },
            /** 处理匹配过滤 */
            handleQuery(val) {
                if(val.length > 20){
                    this.$message.error('请输入20个以内的字符');
                    return
                }
                this.$refs['tree'].filter(val);
            },
            inputChange(event){
                this.is_search = true;

                this.calc_query = event.target.value

            },

            /** 设置初始化值 */
            setSelected() {
                this.checked_keys = this.modelValue
                this.$nextTick(() => {
                    this.selected = this.$refs.tree.getCheckedNodes()
                    this.setBgInputHeight();
                })

            },
            setBgInputHeight(){
                this.$nextTick(() => {
                    if(_height(this.$refs['select_tags']) > 32){
                        this.$refs['bg-input'].$el.querySelector('input').style.height = _height(this.$refs['select_tags']) + 6 + 'px'
                    }else{
                        this.$refs['bg-input'].$el.querySelector('input').style.height = '32px'
                    }
                })
            },
            deleteItem(index,item){
                this.$refs.focus_input.focus();
                this.selected.splice(index,1);
                var value =  this.selected.map(n => n[this.valueKey]);
                this.checked_keys = this.checked_keys.filter((fitem) => {
                    return fitem != item[this.valueKey]
                })
                this.$nextTick(() => {
                    this.$refs.tree.setChecked(item[this.valueKey],false,false)

                })
                this.$emit('update:modelValue',value);
                this.is_search = false;
                this.query = '';
                this.calc_query = '';
            },
            nodeExpend(){
                this.$refs.focus_input.focus()
            },
            checkChange(data,sel){
                this.$refs.focus_input.focus()
                this.checked_keys = sel.checkedNodes.map(n => n[this.valueKey])
                var value =  sel.checkedNodes.map(n => n[this.valueKey]);
                this.$emit('update:modelValue',value);

                this.is_search = false;
                this.query = '';
                this.calc_query = '';
            },
            filterNode(value, data) {
                if (!value) return true;
                return data[this.valueName].indexOf(value) !== -1;
            },


            select_room_mouseenter(){
                this.is_mouse_enter = true;
            },
            select_room_mouseleave(){
                this.is_mouse_enter = false;
            },
            focus_input_blur(){
                if(!this.is_mouse_enter){
                    this.visible = false;
                }
            },
            pop(event){
                if( _hasClass(event.target,'el-tag__close') || _getParentNode(event.target,'el-tag__close').length > 0){
                    return
                }
                this.visible = !this.visible;

                this.$refs['popover'].triggerRef =  event.currentTarget;


            },
        },
        components:{
        },
        beforeDestroy() {
            if (this.$el && this.handleResize) {
                removeResizeListener(this.$el, this.handleResize)
            }
        },
        watch:{
            visible(val) {
                if (!val) {
                    this.$refs.focus_input.blur()
                    this.is_search = false;
                    this.query = '';
                    this.calc_query = '';

                }else{
                    this.$refs.focus_input.focus();
                    this.handleQuery('')
                    this.checked_keys = this.modelValue
                    this.$nextTick(() => {
                        this.default_expanded_keys = this.modelValue.length > 0 ? this.modelValue : [this.treeParams.data[0][this.valueKey]];
                        this.$refs.tree.setCheckedKeys(this.checked_keys);
                    })
                }
            },
            query(val) {
                if(!this.is_search){
                    return
                }
                this.handleQuery(val);
            },
            modelValue(){
                this.setSelected()
            },
        }

    }

</script>


<style lang="scss"   rel="stylesheet/scss">
    .multi-room-select-wrap{
        width: 100%;
        .mult-el-select{
            width: 100%;
            display: flex;
            align-items: center;
            position: absolute;
            line-height: normal;
            white-space: normal;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            flex-wrap: wrap;

            .el-select_tags_wrap{
                display: flex;
            }
            .focus_input{
                width: 20px;
                .el-input__inner{
                    border:none;
                    outline: 0;
                    background: transparent;
                }

            }

        }
        .bg-input{
            position: relative;
        }

    }

    .select-room-tree{
        .el-scrollbar{
            height:264px;
            .el-scrollbar__wrap{
                overflow-x:hidden ;
            }
            ::-webkit-scrollbar{
                background:transparent;
                height:0;
            }
        }
    }
</style>
