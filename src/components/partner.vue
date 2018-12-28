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
                <!-- 合作伙伴 -->
                <div class="right first">
                    <div class="right-title">
                        <router-link class="active" to="">代理合作</router-link>
                        <!-- <router-link to="registeredAgent">代理注册</router-link> -->
                        <div>加盟代理QQ：11330337</div>
                    </div>
                    <div class="txt partner">
                        <span>一、OG对合作伙伴（简称代理）的权利与义务</span>
                        <p>OG的客服会追踪代理底下的会员并观察他们的投注状况。 代理体系下的会员必须同意并遵守OG的会员条例，政策及操作程序。OG保留、拒绝或冻结代理与会员帐户的权利。</p>
                        <p>代理可随时登入管理后台观察体系下会员发展状态，以及会员的下注状况。OG代理专员会依据代理体系发展状态计算所得的佣金。</p>
                        <p>OG保留修改合约书上的任何条例的权利，包括: 现有的佣金计划、付款方式、及计划条例，OG会以电邮、网站公告等方法通知代理。 代理对于所做的修改合约有异议，可洽代理专员与客服人员反映意见，或选择终止合约。代理必须遵守更改后的相关规定，合作关系按照更改后的合约内容执行。</p>

                        <span>二、合作伙伴对OG的权力及义务</span>
                        <p>代理应尽其所能，广泛地宣传、销售及推广OG，使代理本身及OG的利润最大化。代理在不违反法律下，以正面形象宣传、销售及推广OG，并有责任义务告知体系下会员，所有OG的相关优惠条件及产品；代理选择的推广方式法若需付费，则代理应承担该费用。</p>
                        <p>代理有义务实时更新有效联系方式，可透过代理专员或24小时在线客服，与OG保持联系。</p>
                        <p>任何OG相关信息包括: 标志、报表、游戏画面、图样、文案等，代理不得私自复制、公开、分发有关材料，OG保留法律追诉权。欢迎随时洽OG代理专员或24小时在线客服，提出推广素材的相关需求，由OG制作并提供。</p>

                        <span>三、规则条款</span>
                        <p>代理不可在未经OG许可情况下开设双/多个的代理账号，严禁任何代理在自己体系下开启会员账号进行投注，OG有权终止合作，取消佣金，并取消会员账号及所有游戏中的盈利。</p>
                        <p>为确保所有OG会员账号隐私与权益，大OG不会提供任何会员密码与会员的个人资料。代理亦不可以用任何方式取得会员资料，或任意登入下层会员账号，如发现代理伙伴有侵害OG会员隐私行为，OG有权取消代理佣金资格，并终止合作。</p>
                        <p>代理体系下的会员不得开设多于一个的账号。OG有权要求会员提供有效的身份证明以验证会员的身份，并保留验查、判定是否重复会员的权利。如违反上述事项，OG有权终止代理合作，取消佣金，并取消会员账号及所有游戏中的盈利。如代理体系下的会员于OG进行个人或团体的非法投注行为，或查有威胁、滥用OG优惠行为，OG将不会分配相应的佣金给代理伙伴。如下层员银行资料须经审核，OG保留相关佣金直至审核完成。</p>
                        <p>合约内的条件会以大OG通知接受代理加入后开始执行。OG及代理可随时终止此合约，在任何情况下，代理如果想终止合约，都必须以书面/电邮方式提早于七日内通知OG代理专员或24小时在线客服。 如代理违反合约条例，OG有权立即终止合约。</p>
                        <p>在没有OG许可下，代理不能透露及提供OG相关数据，包括代理伙伴所获得的回馈、佣金报表、计算等;代理有义务在合约终止后仍执行机密文件及数据的保密。代理的联系数据如无法联系超过3个月， OG保留权利停权代理账号， 并终止合作关系。OG将无条件保留合作终止前所产生佣金6个月，如代理失联超过时效， OG保留权利取消相关佣金。</p>
                        <p>在合约终止后，代理及OG将不须要履行双方的权利及义务。终止合约并不会解除合作伙伴于终止合约前应履行的义务。</p>

                        <span>四、回馈/佣金计算</span>
                        <p>您不用投入任何的资金，即可享受最高45%的纯收入。您的用户的赢利不用您直接承担，都由公司为您承担，您不用承担任何客户赢钱的风险，佣金每个月的1号12点结算，结算完毕后，10号前派送至您指定收款银行帐号。联系代理QQ了解详情。</p>
                        <p>以下为佣金比例：</p>
                        <table width="649" style="width:486.75pt;">
                            <tbody>
                                <tr class="firstRow">
                                    <td class="et2" rowspan="2" width="131" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        当月营利 </td>
                                    <td class="et2" rowspan="2" width="145" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        当月最低有效会员 </td>
                                    <td class="et2" colspan="5" width="386" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        当月退佣比例 </td>
                                </tr>
                                <tr>
                                    <td class="et2" width="85" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        视讯直播 </td>
                                    <td class="et2" width="72" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        体育赛事 </td>
                                    <td class="et2" width="72" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        沙巴体育 </td>
                                    <td class="et2" width="72" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        电子游艺 </td>
                                    <td class="et2" width="72" style="color:#FFFF00;font-size:12pt;text-align:center;vertical-align:middle;background:#833C0C;">
                                        &nbsp;彩票游戏 </td>
                                </tr>
                                <tr>
                                    <td class="et4" width="131" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">100以上</span>
                                    </td>
                                    <td class="et4" width="145" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">2或以上</span>
                                    </td>
                                    <td class="et5" width="85" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="et4" width="131" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">100以上</span>
                                    </td>
                                    <td class="et4" width="145" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5或以上</span>
                                    </td>
                                    <td class="et5" width="85" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">30%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">30%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="et4" width="131" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">50000以上</span>
                                    </td>
                                    <td class="et4" width="145" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10或以上</span>
                                    </td>
                                    <td class="et5" width="85" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">35%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">35%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="et4" width="131" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">300000以上</span>
                                    </td>
                                    <td class="et4" width="145" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">30或以上</span>
                                    </td>
                                    <td class="et5" width="85" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">40%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">40%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="et4" width="131" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">800000以上</span>
                                    </td>
                                    <td class="et4" width="145" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">50或以上</span>
                                    </td>
                                    <td class="et5" width="85" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">45%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">45%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="et4" width="131" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">1300000以上</span>
                                    </td>
                                    <td class="et4" width="145" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">80或以上</span>
                                    </td>
                                    <td class="et5" width="85" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">50%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">20%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">10%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">50%</span>
                                    </td>
                                    <td class="et5" width="72" style="font-size:12pt;text-align:center;vertical-align:middle;background:#FCE4D6;">
                                        <span style="color:#003300;">5%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>上述「条件」是显示您的下线玩家每月为本公司带来的总纯利收入，这关系到您佣金比率 (您的佣金数目是根据玩家的每月总纯利收入所计算得出的)。</p>

                        <span>◆ 正数负数</span>
                        <p>· 正数时：相减下来的金额+派彩(前期累积+当期总派彩)*退佣比例= 可获得佣金</p>
                        <p>· 每月必须最少有2个活跃会员 (指当月于相关项目至少投注500元，每位下线会员存款不低于300)，您的分成条件才能成立。</p>
                        <p>· 联盟合作伙伴负责支付所有包含博彩税收、银行交易、红利和促销活动等所产生的费用。这些费用将采取累计制，并于合作伙伴每月的佣金中相应比例扣除一部分。</p>
                        <p>· 当月联盟体系【派彩/投注量/总额公点金额】，依照：视讯、BB体育、机率、彩票、运动博弈的顺序扣除相应费用</p>
                        <p>· 其中包括 : 为会员优惠、存/取款相应费用(请留意：本公司会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。</p>
                        <p>· 【当月最低有效会员】定义为，在月结区间内进行过最少三次有效下注的会员，如联盟体系当月未达【当月最低有效会员】最低门槛5人，则该月无法领取佣金回馈。联盟体系当月赢利达到标准，而【当月最低有效会员】人数未达相应最低门槛，则该月佣金比例依照【当月最低有效会员】人数所达门槛相应的百分比进行退佣。</p>
                        <p>· 例： 体系当月营利为￥100000，而当月有效会员人数为5人，联盟虽达到赢利为￥100000，却未达到有效会员10人以上，故依照联盟有效会员人数5人的门槛的退佣比例核算。</p>
                        <p>· A)支付费用 – 联盟合作伙伴推荐之会员所产生的银行存款、提款等支付费用。</p>
                        <p>· B) 优惠红利 – 联盟合作伙伴给予会员的现金红利或是折扣。</p>
                        <p>· 请紧记任何使用不诚实的方法以骗取佣金将会永久冻结账户，所有佣金一概不予发还。</p>
                        <p>· 例1: 加入本公司联盟合作计划后佣金高于100元，达到最少2个活跃用户，佣金将会于该月结算后，统一为各位代理派送。（具体派送时间，请各位代理及时查看代理专员发出的最新通告。）</p>
                        <p>· 例2: 假若本月佣金出现负数，将会带到下一个月继续累计，直至正数才会派送佣金。</p>

                        <span>◆ 代理功能</span>
                        <p>我们为您提供完善的代理管理平台，您可以在不受限制的推荐直接下线，并且实时了解直接下线用户输赢，投注，存款，取款情况。推荐人有一个专属您的推荐链接，您可以直接将您的链接在网站，论坛，博客，群里面发送您的链接，只要通过您的链接注册的会员都算是您的下线。推广方式多种多样。 </p>

                        <span>◆ 贴心服务</span>
                        <p>24小时值班在线客服和客服电话服务，您可以直接联系网站在线客服或直接拨打客服电话。立即加盟OG推荐人队伍，快速开创一番属于自己的事业！我们将以最低的门槛和最丰厚的回报助您成功！ </p>

                    </div>

                    <div id="gosubmit">
                        <span @click="Submit">代理申请</span>
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
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
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
        },
        Submit(){
            let user = window.sessionStorage.getItem("login_user");
            that.$post("person/agent/addAgent",{
                user: user
            }).then(res=>{
                if(res == 1){
                    alert("发送成功，请留意会员消息！")
                }else if(res == 2){
                    alert("您已经是代理会员，无需申请！")
                }else if(res == 3){
                    alert("您已经申请过了，请等待结果（留意会员消息）！")
                }
            }).catch(err=>{
                console.log(err);
                alert("发送失败！")
            })
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../css/footer.css"></style>

<style scoped>
/* 右边 开始 */
.right-title {
    width: 655px;
    margin: 0 auto;
}
.right-title a {
    display: inline-block;
    position: relative;
    height: 32px;
    font-size: 18px;
    margin-right: 45px;
    color: #d3b44f;
}
.right-title a::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 16px;
    width: 41px;
    height: 4px;
    border-top: 1px solid #695c34;
    border-bottom: 1px solid #695c34;
    background: #d3b44f;
}
.right-title div {
    margin: 20px;
    text-align: center;
    font-size: 18px;
    color: #ccc;
}
/* 右边 结束 */

/* banner下面游戏 结束 */
#gosubmit{
    padding: 10px 0 30px;
    text-align: center;
}
#gosubmit span{
    padding: 10px 40px;
    border-radius: 5px;
    color: #fff;
    background-color: #f60;
    cursor: pointer;
}
</style>