export const blogs = async (page = 1, size = 15) => {
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