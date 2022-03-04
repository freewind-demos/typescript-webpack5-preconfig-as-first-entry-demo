import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: "development",
  devtool: false,
  entry: [
    './src/entry1.ts',
    './src/entry2.ts'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}

export default config;
