<template>
    <div class="layout-menu-tree">
        <template v-for="value in this.menuData">
            <el-submenu :key="value.id" :index="value.id" v-if="value.children">
                <template slot="title">
                    <span slot="title">{{value.menuName}}</span>
                </template>
                <MenuTree :menuData="value.children"/>
            </el-submenu>
            <el-menu-item :key="value.id" :index="value.menuUrl" v-else>
                <span slot="title">{{value.menuName}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: "MenuTree",
        props: {
            menuData: Array
        }
    }
</script>

<style scoped>

</style>