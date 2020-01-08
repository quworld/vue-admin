<template>
    <el-aside width="215px">
        <el-menu
                default-active="2"
                :router="true"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
            <MenuTree :menuData="this.menuData"/>
        </el-menu>
    </el-aside>
</template>

<script>
    import MenuTree from "./MenuTree";
    import services from '../services';
    const {menu} = services;
    export default {
        name: "LayoutAside",
        components:{
            MenuTree
        },
        mounted() {
            menu().then(res => {
                console.log(res);
            });
        },
        data() {
            return {
                menuData: [
                    {
                        "id": "1",
                        "pid": "0",
                        "menuName": "第一级菜单 1",
                        "children": [
                            {
                                "id": "2",
                                "pid": "1",
                                "menuName": "第二级菜单 1-1",
                                "children": [
                                    {
                                        "id": "3",
                                        "pid": "2",
                                        "menuName": "第三级菜单 1-1-1",
                                        "menuUrl":'page1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "4",
                        "pid": "0",
                        "menuName": "第一级菜单 2",
                        "children": [
                            {
                                "id": "5",
                                "pid": "4",
                                "menuName": "第二级菜单 2-1",
                                "menuUrl":'page2'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>