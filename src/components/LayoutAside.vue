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
        components: {
            MenuTree
        },
        mounted() {
            menu().then(res => {
                this.menuData = res.data;
            });
        },
        data() {
            return {
                menuData: []
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