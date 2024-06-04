// vee-validate.client.js
import { defineRule } from 'vee-validate';
import { all } from '@vee-validate/rules';

// 迴圈依序加入規則
Object.keys(all).forEach(rule => {
    defineRule(rule, all[rule]);
});

// 必須定義，用來封裝 plugin
export default defineNuxtPlugin((_nuxtApp) => {});