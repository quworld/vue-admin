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
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                    <el-input v-model="form.desc" autocomplete="off" />
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
                    name:'',
                    desc:''
                },
                formLabelWidth:'80px'
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
                    console.log(res);
                    this.dialogVisible = false;
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.layout-pagination{
    margin-top: 20px;
    text-align: right;
}
</style>