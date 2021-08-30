import backtop from "components/content/backtop/backtop";
export const backTopmixin = {
    components: {
        backtop,
    },
    data() {
        return {
            isposition: false
        }
    },
    methods: {
        // 返回顶部
        backClick() {
            this.$refs.scroll.scrollTo(0, 0);
        },
    }
}