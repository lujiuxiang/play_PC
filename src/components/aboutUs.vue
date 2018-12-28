<template>
    <div class="index">
        <!-- title 开始 -->
        <common-title></common-title>
        <!-- title 结束 -->

        <!-- body 开始 -->
        <div class="contentWrap">
            <!-- 顶部导航 开始 -->
            <common-title-nav></common-title-nav>
            <!-- 顶部导航 结束 -->
            <ul>
                <li>
                    <router-link to="">
                        <img src="../../static/images/register-img/banner.jpg" alt="">
                    </router-link>
                    <div class="newMessage">
                        <p>
                            <img src="../../static/images/banner/laba.png" alt="">
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
        <!-- play 开始 -->
        <div class="play refisterWrap">
            <div class="playwrap refister clearfix">
                <div class="left">
                    <ul>
                        <li v-for="(item,index) in aslide" ref="aslide" v-if="aslide.length>1" :key="index">
                            <!-- 有模板时 -->
                            <router-link v-if="item.name" :to="item.name" :style="item.bg"></router-link>
                            <!-- 没有模板时 跳转 -->
                            <a href="" v-else target="blank" :style="item.bg"></a>
                        </li>
                    </ul>
                    <div class="bot-bg"></div>
                </div>
                <!-- 关于我们 -->
                <div class="right first">
                    <div class="txt">
                        <span>关于我们</span>
                        <p>威尼斯人娱乐场是与亚洲最大的博彩软件提供商“OG与BBIN”进行技术合作，共同打造高质量多元化游戏平台，获得菲律宾政府认证的合法网上博彩公司。我们一切博彩营业行为皆遵从菲律宾政府博彩条约。我们在越来越热络的网络博彩市场中，不断地求新求变，寻找最新的创意，一直秉持诚信可靠，秉持最好服务的企业宗旨为广大网上博彩游戏爱好者服务。以带给客户高质量的服务、产品、娱乐，是我们的企业永恒宗旨打造亚洲最有公信力，最受玩家欢迎的网络在线博彩娱乐平台。</p>
                        <p>我们的体育博彩拥有顶级的盘房操盘，投入大量的人力以及资源，提高完整赛事，多元化平台丰富玩法给热爱体育的玩家。真人视讯游戏拥有经国际赌场专业训练的荷官，所有赌局都依荷官动作，而不是默认的计算机机率结果，以高科技的网络直播技术，带给玩家身历赌场的刺激经验! 各式彩票游戏，是依官方赛果产生游戏结果，让玩家在活泼的投注界面，享受最公正的娱乐。而我们的电子游戏使用最公平的随机数生成机率，让玩家安心享受多元的娱乐性游戏。</p>
                        <span>诚信为本</span>
                        <p>作为国际专业的网上博彩游戏运营商，我们承诺，为每一位客户提供最安全、最公平的博彩游戏，以及全方位的服务。威尼斯人娱乐场所有的游戏皆有共同的优点： 不须耗时下载；接口简单明了；操作功能齐全；画面精致优雅；游戏结果公平、公正、公开，欢迎团队或个人进行验证及监督！</p>
                        <span>多样化游戏 </span>
                        <p>除了体育游戏项目多元化外，全方位提供：赌场老虎机，虚拟游戏，和扑克游戏等。精挑细选各种在线游戏，给您提供最好的选择。真人荷官及娱乐场也是无可挑剔的,信誉可靠设有 24/7 进行在线监测，确保每一局游戏结果均为现场真实的游戏结果，而不是计算机默认的游戏结果。</p>
                        <span>客户服务</span>
                        <p>1. 在竞争激烈的博彩市场中，威尼斯人娱乐场向来是众多玩家一致的选择，除了因为多元化的娱乐产品使人流连忘返、更因为高质量的服务以及威尼斯人娱乐场长久以来的良好信誉在广大玩家群众之间建立了口碑。</p>
                        <p>2. 我们为客户提供最专业的娱乐服务：365天×24小时专业的客户服务，全天候处理会员出入款的相关事宜，严格训练的客服团队，以专业、亲切的态度解，让每位玩家有宾至如归的感觉!</p>
                        <p>3. 多渠道的与客户的互动交流，了解客户的需求，随时关注客户的意见及建议；</p>
                        <p>4. 举办更多的优惠及促销活动，给客户提供更多的回馈及惊喜。</p>
                        <span>游戏责任 </span>
                        <p>1. 威尼斯人娱乐场提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：</p>
                        <p>2. 禁止未满18岁的人士参与赌博游戏，在加入游戏之前，请您确定您已年满18周岁。</p>
                        <p>3. 自定博彩预算，并按预算下注。</p>
                        <span>账户与资金</span>
                        <p>玩家网上支付和所有银行交易由国际金融机构在高标准的安全和机密的网络端口（SSL 128 bit encryption Standard）中进行。进入玩家帐户数据也必须有玩家唯一的登录ID和密码，确保客户的资金安全有保障。同时也采用最先进的加密措施来保证玩家的游戏安全，7×24小时的后台检测和监控，确保我们可以提供一个完全公正和安全的网络游戏空间。客户在本平台的所有活动均严格保密，我们不会向第三方（包括政府）透露客户数据。威尼斯人娱乐场以业界前所未见的各种优惠方式回馈我们的会员，绝对是玩家最明智的选择！</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- play 结束 -->

        <!-- body 结束 -->

        <!-- 底部 开始 -->
        <commonfooter></commonfooter>
        <!-- 底部 结束 -->

    </div>

</template>

<script>
import commonTitle from "./../commonViews/commonTitle.vue";
import commonTitleNav from "./../commonViews/commonTitleNav.vue";
import commonfooter from "./../commonViews/footer.vue";
import gameslogin from "./../commonViews/gameslogin.vue";
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            aslide: [
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide1.png") +
                            ") no-repeat -30px top"
                    },
                    name: "aboutUs"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide2.png") +
                            ") no-repeat -30px top"
                    },
                    name: "contactUs"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide3.png") +
                            ") no-repeat -30px top"
                    },
                    name: "partner"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide4.png") +
                            ") no-repeat -30px top"
                    },
                    name: "deposit"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide5.png") +
                            ") no-repeat -30px top"
                    },
                    name: "withdrawal"
                },
                {
                    bg: {
                        background:
                            "url(" +
                            require("../../static/images/aboutUs-img/aslide6.png") +
                            ") no-repeat -30px top"
                    },
                    name: "questions"
                }
            ]
        };
    },
    components: {
        commonfooter,
        commonTitleNav,
        commonTitle,
        gameslogin
    },
    created() {
        let that = this;
        this.common.noData(that);
    },
    methods: {
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        }
    },

    computed: {
        // 最新消息
        news() {
            return this.$store.state.news;
        }
    },
};
</script>


<style scoped src="../css/footer.css"></style>
