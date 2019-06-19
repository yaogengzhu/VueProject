//解决跨域问题 
module.exports = {
    devServer: {
        proxy: {
            '/apu': {
                target: 'http://yaogeng.ltd/api/private/v1',
                changeOrigin: true
            }
        }
    }
}