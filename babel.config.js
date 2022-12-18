/*
 * @Author: 时不待我 790002517@qq.com
 * @Date: 2022-12-17 22:18:59
 * @LastEditors: 时不待我 790002517@qq.com
 * @LastEditTime: 2022-12-18 00:48:06
 */
const devPresets = ['@vue/babel-preset-app'];
const buildPresets = [
  [
    '@babel/preset-env',
    // Config for @babel/preset-env
    {
      // Example: Always transpile optional chaining/nullish coalescing
      // include: [
      //   /(optional-chaining|nullish-coalescing)/
      // ],
    },
  ],
  '@babel/preset-typescript',
  
];
module.exports = {
  presets: (process.env.NODE_ENV === 'development' ? devPresets : buildPresets),
};
