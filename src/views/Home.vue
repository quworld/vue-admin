<template>
    <el-container>
        <el-header>
            <LayoutHeader/>
        </el-header>
        <el-container class="layout-container">
            <LayoutAside/>
            <el-container>
                <el-main>
                    <router-view/>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import LayoutAside from "../components/LayoutAside";
    import LayoutHeader from "../components/LayoutHeader";

    export default {
        name: 'home',
        components: {
            LayoutAside,
            LayoutHeader
        }
    }
</script>
<style lang="less">
    .el-header {
        border-bottom: 1px solid #e6e6e6;
    }

    .layout-container {
        height: calc(100vh - 60px);

        .el-aside {
            border-right: 1px solid #e6e6e6;
        }

        .el-menu {
            border-right: 0;
        }
    }
</style>
