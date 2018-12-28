<template>
    <!-- 底部 开始 -->
    <div class="footer">
        <div class="foot-top">
            <router-link to="">
                <img v-lazy='footNum2.footer' alt="">
                <div>
                    <span>{{footNum2.qname1}}</span>
                    <i>{{footNum2.qq1}}</i>
                    <br>
                    <span>{{footNum2.qname2}}</span>
                    <i>{{footNum2.qq2}}</i>
                </div>

            </router-link>
            <router-link class="footerNum" to="" v-if="footNum.length>1" v-for="(item,index) in footNum" :key="index">
                <img v-lazy=item.footer alt="">
                <p v-text=item.title></p>
                <span v-text=item.phone></span>
            </router-link>
        </div>
        <div class="foot-bot">
            <div>
                <div class="foot-text">
                    <p>
                        <router-link class="colorFooter" to="aboutUs">关于我们</router-link>|
                        <router-link class="colorFooter" to="contactUs">联系我们</router-link>|
                        <router-link class="colorFooter" to="partner">代理合作</router-link>|
                        <router-link class="colorFooter" to="deposit">存款帮助</router-link>|
                        <router-link class="colorFooter" to="withdrawal">取款帮助</router-link>|
                        <router-link class="colorFooter" to="questions">常见问题</router-link>|
                        <router-link class="colorFooter" to="complaint">投诉建议</router-link>
                    </p>
                    <span>Copyright ©澳门威尼斯人娱乐场Reserved</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部 结束 -->

    
</template>

<script>
    import "./../css/common.css";
    export default {
    data () {
        return {
            footNav:[
                {
                    text:'关于我们',
                    name:'aboutUs'
                }
            ]
        }
    },
    computed: {
        footNum(){
            return this.$store.state.footNum
        },
        footNum2(){
            return this.$store.state.footNum2
        }
    },
    methods:{

    },
    mounted() {
        // 底部文字变色 开始
        let colorFooter = document.getElementsByClassName('colorFooter')[2];
        let colorFooterArr = ['rgb(255,216,1)','rgb(255,255,255)']
        let colorFooternum = 0;
        window.colorFootertimer = setInterval(function () {
            colorFooter.style.color = colorFooterArr[colorFooternum]
            colorFooternum ++;
            if(colorFooternum >= colorFooterArr.length)colorFooternum = 0;
        },500)
        // 底部文字变色 结束
    },
    destroyed() {
        clearInterval(colorFootertimer)
    }
}
</script>

<style>

 
</style>
