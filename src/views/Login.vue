<template>
    <div class="layout-login">
        <el-form class="layout-form" ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input autocomplete="off" v-model="form.username"/>
            </el-form-item>
            <el-form-item label="密码">
                <el-input autocomplete="off" type="password" v-model="form.password"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import services from '../services';
    const {login} = services;
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form);
                this.$router.push({
                    name:'home'
                });
                login({
                    headers:{"auth":"askdjqwkeuqwioeuqwe"},
                    data:this.form
                }).then((res) => {
                    console.log(res);
                    localStorage.setItem('auth','xxxxxx');
                    this.$router.push({
                        name:'home'
                    });
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .layout-login{
        height: 100vh;
        background: #f0f2f5;
    }
    .layout-form {
        padding-top: 200px;
        margin: 0 auto;
        width: 500px;
    }
</style>