module.exports = {
    devServer: {
        port: 9090,
        proxy: 'http://yapi.demo.qunar.com'
        // proxy: 'http://127.0.0.1:8080'
    }
}