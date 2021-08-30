const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('components', resolve('./src/components'))
            .set('views', resolve('./src/views'))
            .set('assets', resolve('./src/assets'))
            .set('network', resolve('./src/network'))
            .set('common', resolve('./src/common'))
            .set('store', resolve('./src/store'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
    },
    devServer: { // 环境配置
        host: '0.0.0.0',
        public: '192.168.0.8:8080',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        open: true // 配置自动启动浏览器
    },

}