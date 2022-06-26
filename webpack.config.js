const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // punto de entrada
    entry: './src/index.js',
    //punto de salida
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'   
    },
    // extensiones que se van a utilizar 
    resolve:{
        extensions: ['.js','.jsx']
    },
    //Reglas y particularidades para la obtención de los recursos
    module:{
        rules:[
            {
                
            }
        ]
    }
}