<template>
    <div class="box">
        <div class="title">亲爱的盆友们：</div>
        <div class="text">
            为了能让您访问更快更稳定，同时为您提供更高品质的服务，源码库正在维护系统。因此目前网站的部分功能不能使用，请稍后再回来。给您造成了不便，请谅解。
        </div>
    </div>

</template>

<script>
export default {
    name: "noData",
    data() {
        return {
            
        };
    },
    methods: {

    },
    created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    body{background:#F9FAFD;color:#818181;}
    .box{width:624px;height:188px;padding:99px 30px 0 184px;background:url("../../static/images/maintenance.png") no-repeat 0 0;position:absolute;margin:-144px 0 0 -419px;top:50%;left:50%;font-size:14px;line-height:24px;}
    .box .title{margin-bottom:11px;}
    .box .text{padding-left:29px;}
</style>