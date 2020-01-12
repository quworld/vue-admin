<template>
    <div class="layout-header">
        Header
        <div @click="onLogout">logout</div>
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

</style>