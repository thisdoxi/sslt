import backtop from "components/content/backtop/backtop"; //tab显示区
export const backTopmixin={
    components:{
        backtop,
    },
    data() {
        return {
            isposition: false
        }
    },
    methods:{
        // 返回顶部
        backClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
    }
}