<template>
    <div class="page-list">
        <div>
            <el-button type="text" @click="dialogVisible = true">添加</el-button>
        </div>
        <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column type="index" width="50" />
            <el-table-column
                    v-for="(item,index) in column"
                    :key="index"
                    :prop="item.value"
                    :label="item.label"
                    :width="item.width"/>
        </el-table>
        <el-pagination
                @current-change="current"
                class="layout-pagination"
                background
                layout="prev, pager, next"
                :current-page="pageNo"
                :page-size="pageSize"
                :total="total">
        </el-pagination>
        <el-dialog title="添加" :visible.sync="dialogVisible">
            <el-form :model="form" label-position="right">
                <el-form-item label="库" :label-width="formLabelWidth">
                    <el-select v-model="form.store" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="表" :label-width="formLabelWidth">
                    <el-select v-model="form.table" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <div class="form-dynamic" v-for="(property, index) in form.property" :key="property.id">
                    <div class="title">属性{{ index + 1 }}</div>
                    <el-form-item
                            class="item"
                            :prop="'property.' + index + '.key'">
                        <el-select v-model="property.key" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item
                            class="item"
                            :prop="'property.' + index + '.value'">
                        <el-input v-model="property.value" />
                    </el-form-item>
                    <div class="btn">
                        <el-button @click.prevent="add(property)">添 加</el-button>
                        <el-button v-if="form.property.length > 1" @click.prevent="remove(property)">删 除</el-button>
                    </div>
                </div>
                <el-form-item label="条件" :label-width="formLabelWidth">
                    <el-input v-model="form.condition" />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSave">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import services from '../services';
    const {list,save} = services;
    export default {
        name: "Page1",
        mounted() {
            this.getData({
                pageNo:1,
                pageSize:10,
            });
        },
        data() {
            return {
                column:[{
                    label:'日期',
                    value:'date',
                    width:180
                },{
                    label:'姓名',
                    value:'name',
                    width:180
                },{
                    label:'日期',
                    value:'date',
                }],
                total:0,
                pageNo:1,
                pageSize:10,
                tableData: [],
                dialogVisible:false,
                form:{
                    store:'',
                    table:'',
                    property:[{
                        id:+Date.now(),
                        key:'',
                        value:''
                    }],
                    condition:''
                },
                formLabelWidth:'80px',
                options:[{
                    value:1,
                    label:"测试1"
                },{
                    value:2,
                    label:"测试2"
                },{
                    value:3,
                    label:"测试3"
                }]
            }
        },
        methods:{
            getData(payload){
                const {pageNo,pageSize} = payload;
                list({
                    data:{
                        pageNo,
                        pageSize
                    }
                }).then(res => {
                    console.log(res);
                    const {data,pageNo,pageSize,total} = res;
                    this.tableData = data;
                    this.pageNo = pageNo;
                    this.pageSize = pageSize;
                    this.total = total;
                })
            },
            current(pageNo){
                this.getData({
                    pageNo,
                    pageSize:10,
                });
            },
            onSave(){
                save({data:this.form}).then(res => {
                    console.log(this.form);
                    console.log(res);
                    this.dialogVisible = false;
                });
            },
            add(){
                this.form.property.push({
                    id:+Date.now(),
                    key:'',
                    value:''
                })
            },
            remove(item){
                const index = this.form.property.indexOf(item);
                if (index !== -1) {
                    this.form.property.splice(index, 1)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.layout-pagination{
    margin-top: 20px;
    text-align: right;
}
    .form-dynamic{
        display: flex;
        margin-bottom: 20px;
        .el-form-item{
            margin-bottom: 0;
        }
        .title{
            line-height: 40px;
            width: 80px;
            padding-right: 12px;
            text-align: right;
            box-sizing: border-box;
        }
        .item{
            width: 195px;
        }
        .item+.item{
            margin-left: 20px;
        }
        .btn{
            margin-left: 20px;
        }
    }
</style>