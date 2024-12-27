import {useDate} from "vuetify";

export const blogs = async (page=1, size = 10) => {
    const arr = []

    // for (let i = 1; i <= 111; i++) {
    //     arr.push({
    //         id: i + "",
    //         atdate: useDate().format(new Date(), "normalDate"),
    //         title: '彭丽媛出席2024年“世界艾滋病日”主题宣传活动' + i,
    //         content: '博客内容' + i
    //     })
    // }
    // const res = await useFetch('https://wj.xwqjcy.com/OA/front/anon/articleList.json', {
    //     params: {
    //         categoryid: '21587010153008',
    //         page: page,
    //         size: size
    //     }
    // });
    const res = await useAsyncData('blogList' + page, () => $fetch('https://wj.xwqjcy.com/OA/front/anon/articleList.json', {
        method: "get",
        params: {
            categoryid: '21587010153008',
            page: page,
            size: size,
        }
    }))
    return res.data.value
}