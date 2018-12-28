<template>
    <div class="index">
        <!-- title 开始 -->
        <div class="header">
            <div class="title clearfix">
                <ul class="t-left">
                    <li v-for="(item,index) in titleLeft" :key="index">
                        <router-link :to="item.name" v-text="item.text"></router-link>
                    </li>
                </ul>
                <img src="../../static/images/grade-img/logo.png" alt="">
                <ul class="t-right">
                    <li v-for="(item,index) in titleRight" :key="index">
                        <router-link :to="item.name" v-text="item.text"></router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- title 结束 -->
        <!-- banner 开始 -->
        <div class="banner">
            <ul>
                <li>
                    <router-link to="">
                        <img src="../../static/images/grade-img/banner.png" alt="">
                    </router-link>
                    <div class="newMessage">
                        <p>
                            <img src="../../static/images/grade-img/news.png" alt="">
                            <i>最新消息</i>
                            <router-link tag="a" target="_blank" :to="{name:'commonNewMsg'}">
                                <marquee scrollamount="3" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" style="color: #fff;">
                                    <span style="margin-right: 40px;" v-for="(item,index) in news" :key="index">
                                        {{item.mess}}
                                    </span>
                                </marquee>
                            </router-link>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- banner 结束 -->

        <!-- table 开始 -->
        <div class="contentWrap">
            <div class="content">
                <div class="search">
                    <input class="searchInput" type="text">
                    <input class="btn" type="button" value="">
                </div>
                <div class="content-title">
                    <div>
                        <img src="../../static/images/grade-img/hd1.png" alt="">
                    </div>
                    <p>活动对象：澳门威尼斯人全体会员</p>
                    <p>活动内容：凡是在美东时间2017年6月1号，在威尼斯人的每一笔电子投注将永久累积打码，累积到一定标准，即可升级，每升一级即可获得相对应的等级礼金，等级礼金最高可获得553417元，还可获得无门槛要求的周周俸禄、月月俸禄。让您的会员账号变成永久收益的有价值的会员账号！</p>
                    <p>注：所有电子平台游戏不包含桌面游戏，视讯扑克游戏以及单线类老虎机，若投注将不计算有效投注！</p>
                </div>
                <div class="mainTable">
                    <table class="tbl" style="display:none;">
                        <tr class="first">
                            <th>晋升标准等级</th>
                            <th>累积打码</th>
                            <th>等级礼金</th>
                            <th>周俸禄</th>
                            <th>月俸禄</th>
                            <th>年终奖</th>
                            <th>24小时服务</th>
                            <th>荣升VIP</th>
                            <th>1V1客服经理</th>
                        </tr>
                    </table>
                    <table class="tbl">
                        <tbody>
                            <tr class="first">
                                <th>晋升标准等级</th>
                                <th>累积打码</th>
                                <th>等级礼金</th>
                                <th>周俸禄</th>
                                <th>月俸禄</th>
                                <th>年终奖</th>
                                <th>24小时服务</th>
                                <th>荣升VIP</th>
                                <th>1V1客服经理</th>
                            </tr>
                            <tr v-for="(item,index) in table" :key="index">
                                <td v-text="item.grade"></td>
                                <td v-text="item.coding"></td>
                                <td v-text="item.cash"></td>
                                <td v-text="item.weeks"></td>
                                <td v-text="item.montd"></td>
                                <td v-text="item.year"></td>
                                <td v-text="item.hours"></td>
                                <td v-text="item.vip"></td>
                                <td v-text="item.oneByOne"></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        <span>例：</span>
                        会员每一笔电子投注累计达到100万打码量即可获得等级礼金177元，无周俸禄，每月可获得80元月俸禄；当累计到500万有效投注，即可再次获得升级礼金377元，每周可获得27元周俸禄，每月可获得150元月俸禄！
                    </p>
                </div>

                <!-- 活动说明 开始 -->
                <h2 class="hd"><img src="../../static/images/grade-img/hd1.png" alt=""></h2>
                <h2 class="hd"><img src="../../static/images/grade-img/hd2.png" alt=""></h2>
                <div class="box">
                    <p>公司在每周二23:59:59前会更新您的排位等级,请登入“威尼斯人小金库” www.33117mg.com 输入会员账号，进行自助查询有效投注、等级等明细。</p>
                </div>
                <h2 class="hd"><img src="../../static/images/grade-img/hd3.png" alt=""></h2>
                <div class="box">
                    <p>无需申请, 专员将在每周二23:59:59前统计完成, 因会员众多,分三天派送完成。并非每个会员都会及时到账, 若未及时到账请您耐心等待，彩金一倍流水即可自由提款。</p>
                    <p>
                        <span>如：</span>会员直接从等级3升级到等级6，跨越3个等级，即可获得升级礼金：277（等级4）+377（等级5）+577（等级6）=1231元</p>
                </div>
                <h2 class="hd"><img src="../../static/images/grade-img/hd4.png" alt=""></h2>
                <div class="box">
                    <p>按您的等级来计算，每周二23:59:59前统计完成，因会员众多，分三天派送完成。账号打码永久累积，有无游戏每周都可派送小金库周俸禄。每周俸禄奖金请参考上方小金库标准与奖金。</p>
                </div>
                <h2 class="hd"><img src="../../static/images/grade-img/hd5.png" alt=""></h2>
                <div class="box">
                    <p>按您的等级来计算，每月2号23:59:59前统计完成，因会员众多，分三天派送完成。账号打码永久累积，有无游戏每月都可派送小金库月俸禄。每月俸禄奖金请参考上方小金库标准与奖金。</p>
                </div>
                <h2 class="hd"><img src="../../static/images/grade-img/hd6.png" alt=""></h2>
                <div class="box">
                    <p>只要在本公司注册超过半年，按您的等级来计算，即可在新年大年三十为您送上超豪华年终奖！</p>
                </div>
                <!-- 活动说明 结束 -->

            </div>
        </div>
        <!-- table 结束 -->

        <div class="kefu">
            <div class="kefuList">
                <a href="https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba" target="blank"></a>
            </div>
        </div>

        <!-- 底部 开始 -->
        <div class="footer">
            <div class="foot-text">
                <p>
                    <router-link class="colorFooter" to="aboutUs">关于我们</router-link>
                    <router-link class="colorFooter" to="contactUs">联系我们</router-link>
                    <router-link class="colorFooter" to="partner">代理合作</router-link>
                    <router-link class="colorFooter" to="deposit">存款帮助</router-link>
                    <router-link class="colorFooter" to="withdrawal">取款帮助</router-link>
                    <router-link class="colorFooter" to="questions">常见问题</router-link>
                    <router-link class="colorFooter" to="complaint">投诉建议</router-link>
                </p>
                <span>Copyright ©澳门威尼斯人娱乐场Reserved</span>
            </div>
        </div>
        <!-- 底部 结束 -->

    </div>

</template>

<script>
export default {
    name: "index",
    data() {
        return {
            titleLeft: [
                {
                    text: "网站首页",
                    name: "/"
                },
                {
                    text: "活动大厅",
                    name: "activitiesHall"
                },
                {
                    text: "快速充值",
                    name: "pay"
                }
            ],
            titleRight: [
                {
                    text: "线路检测",
                    name: ""
                },
                {
                    text: "手机投注",
                    name: ""
                },
                {
                    text: "免费开户",
                    name: "register"
                }
            ],
            table: [
                {
                    grade: "1级",
                    coding: "10万+",
                    cash: "27元",
                    weeks: "-",
                    month: "10元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "2级",
                    coding: "50万+",
                    cash: "77元",
                    weeks: "-",
                    month: "30元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "3级",
                    coding: "100万+",
                    cash: "177元",
                    weeks: "-",
                    month: "80元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "4级",
                    coding: "200万+",
                    cash: "277元",
                    weeks: "10元",
                    month: "110元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "5级",
                    coding: "500万+",
                    cash: "377元",
                    weeks: "27元",
                    month: "150元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "6级",
                    coding: "700万+",
                    cash: "577元",
                    weeks: "77元",
                    month: "200元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "7级",
                    coding: "1000万+",
                    cash: "777元",
                    weeks: "107元",
                    month: "300元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "8级",
                    coding: "1500万+",
                    cash: "1377元",
                    weeks: "177元",
                    month: "500元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "9级",
                    coding: "2000万+",
                    cash: "1777元",
                    weeks: "277元",
                    month: "800元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                },
                {
                    grade: "10级",
                    coding: "2500万+",
                    cash: "2377元",
                    weeks: "377元",
                    month: "1000元",
                    year: "-",
                    hours: "√",
                    vip: "-",
                    oneByOne: "-"
                }
            ]
        };
    },
    created() {
        let that = this;
        this.common.noData(that);
    },
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.contentWrap {
    padding-top: 20px;
    background-color: #363636;
}

.header {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.header .title {
    width: 800px;
    margin: 0 auto;
}
.header .title > img {
    margin-top: 4px;
    height: 100%;
}
.header .title ul {
    float: left;
}
.header .title ul li {
    float: left;
    margin: 0 20px 0 0;
    width: 68px;
    height: 80px;
    line-height: 87px;
    text-align: center;
}
.header .title ul li a {
    display: block;
    position: relative;
    color: #fff;
    text-align: center;
    line-height: 80px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    transition: 0.5s;
}
.header .title ul li a:hover {
    color: #f9be3a;
    border-bottom: 4px solid #f9be3a;
}
.header .title .t-right {
    float: right;
}
/* banner 开始 */
.banner {
    height: 500px;
    border-bottom: 3px solid #fbec91;
}
.banner ul {
    height: 100%;
}
.banner ul li {
    position: relative;

    height: 100%;
}
/* banner 结束 */
/* 最新消息 开始 */
.banner ul li .newMessage {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.banner ul li .newMessage > p {
    margin: 0 auto;
    width: 1200px;
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    color: #fff;
}

.banner ul li .newMessage p i {
    font-style: normal;
    margin-left: 5px;
    color: #e9b342;
    font-size: 15px;
}
.banner ul li .newMessage p marquee {
    float: right;
    width: 90%;
    font-size: 15px;
    color: #ccc;
}
.banner ul li .newMessage p img {
    margin-left: 25px;
    margin-top: -3px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
/* 最新消息 结束 */

.content {
    position: relative;
    width: 1011px;
    margin: 0 auto;
    padding-bottom: 40px;
    color: #997052;
    background: url("../../static/images/grade-img/tableBg.png");
}
/* 搜索框 */
.content .search {
    width: 1010px;
    margin: 0 auto;
    height: 72px;
    background: url("../../static/images/grade-img/search.png") no-repeat;
}
.content .search .searchInput {
    width: 330px;
    height: 35px;
    background: none;
    float: left;
    border: 0;
    color: #727272;
    font-size: 16px;
    margin: 13px 0 0 350px;
    text-indent: 20px;
    outline: none;
}
.content .search .btn {
    width: 100px;
    height: 35px;
    float: right;
    border: 0;
    margin: 15px 223px 0 0;
    cursor: pointer;
    background: none;
    outline: none;
}

/* 活动说明 */
.content .content-title {
    width: 955px;
    margin: 15px auto;
    border: solid 1px #867c6d;
    background: rgba(0, 0, 0, 0.1);
}
.content .content-title > div {
    padding-top: 5px;
    text-align: center;
}
.content .content-title p {
    padding: 2px 5px;
    line-height: 30px;
    font-size: 15px;
    color: #797376;
}

/* table 开始 */
.content .mainTable {
    width: 955px;
    margin: 0 auto;
    padding: 10px 5px 10px;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.content .mainTable .tbl {
    width: 100%;
    background: #fff;
    text-align: center;
    color: #987a5d;
    font-size: 14px;
}
.content .mainTable .tbl th {
    border: solid 1px #987a5d;
    background: #c2aa92;
    padding: 5px 0;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
}
.content .mainTable .tbl td {
    border: solid 1px #987a5d;
    padding: 7px 0;
}
.content .mainTable p {
    font-size: 15px;
    line-height: 30px;
    padding: 2px 0;
    color: #907b4e;
}
.content .mainTable p span {
    color: red;
}

.content .hd {
    width: 955px;
    margin: 15px auto;
    text-align: center;
}
.content .box {
    width: 955px;
    margin: 0 auto;
    padding: 10px 20px;
    text-indent: 2em;
    box-sizing: border-box;
}
/* table 结束 */

/* 在线客服 开始 */
.kefu {
    background-color: #363636;
}
.kefuList {
    width: 1011px;
    height: 172px;
    margin: 0px auto 0;
    background: url("../../static/images/grade-img/kufu.png") no-repeat 0 0;
}
.kefuList a {
    width: 180px;
    height: 50px;
    float: left;
    border: 0;
    margin-left: 15px;
    margin-top: 15px;
}
/* 在线客服 结束 */

/* footer 开始 */
.footer {
    background-color: #363636;
}
.foot-text {
    width: 1011px;
    margin: 0 auto;
    padding-bottom: 20px;
    text-align: center;
    color: #fff;
}
.foot-text p {
    padding: 10px 0;
}
.foot-text a {
    padding: 0 10px;
    color: #fff;
    font-size: 14px;
    transition: 1s;
}
.foot-text a:hover {
    color: #f9be3a;
}
/* footer 结束 */
</style>