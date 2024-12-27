// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'

import DateAdapter from '@date-io/dayjs'; // 引入 @date-io 日期适配器
import dayjs from 'dayjs'; // 引入 dayjs

// 自定义日期适配器
const dateAdapter = new DateAdapter({
    instance: dayjs, // 使用 dayjs 作为实例
    formats: {
        normalDate: 'YYYY-MM-DD',
        fullDate: 'YYYY-MM-DD',
        fullDateTime: 'YYYY-MM-DD HH:mm:ss',
        year: 'YYYY',
    },
});

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: true,
        date: {
            adapter: dateAdapter
        }
    })
    app.vueApp.use(vuetify)
})