<template>
    <div class="layout-header">
        <div class="title">vue admin</div>
        <div class="logout" @click="onLogout">logout</div>
    </div>
</template>

<script>
    export default {
        name: "LayoutHeader",
        methods:{
            onLogout(){
                console.log('logout');
                sessionStorage.removeItem('Authorization');
            }
        }
    }
</script>

<style scoped lang="less">
    .layout-header{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        .logout{
            cursor: pointer;
        }
    }
</style>