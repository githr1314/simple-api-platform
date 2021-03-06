module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins:[
        ['import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css'
            }
        ],
        ['@babel/plugin-proposal-decorators', {
            legacy: true
        }],
        ['@babel/plugin-proposal-class-properties', {
            loose: true
        }],
        '@babel/plugin-syntax-dynamic-import'
    ]
}