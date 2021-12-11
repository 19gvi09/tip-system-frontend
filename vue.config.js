const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import './src/scss/variables.scss';
                    @import './src/scss/mixins.scss';
                `
            },
        },
    },
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000/api'
            },
        },
    },
}