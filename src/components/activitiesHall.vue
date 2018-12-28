<template>
    <div class="index">
        <!-- title 开始 -->
        <div class="header">
            <div class="title clearfix">
                <div class="logo">
                    <h1>
                        <router-link to="">
                            <img src="../../static/images/title/weinisi.png" alt="">
                        </router-link>
                    </h1>
                </div>
                <div class="logosecond">
                    <img src="../../static/images/activitiesHall-img/title/img1.png" alt="">
                </div>
                <div class="shenhe">
                    <a @click="queryShow">
                        <img src="../../static/images/activitiesHall-img/title/shenhe.png" alt="">
                    </a>
                </div>
                
                <!-- 侧边导航 -->
                <div ref="aslide" class="aslide">
                    <ul class="fixed">
                        <li v-for="(item,index) in aslide" :key="index">
                            <!-- 有name模板时 -->
                            <router-link class="aslides" v-if="item.name" :to="item.name" :style="item.bg1"></router-link>
                            <!-- 没有name模板时 -->
                            <a v-else class="aslides" :href="item.url" target="blank" :style="item.bg1"></a>

                        </li>

                    </ul>
                </div>
                <!-- 侧边导航 -->
            </div>
        </div>
        <!-- title 结束 -->

        <!-- 最新消息 -->
        <div class="newMessage">
            <div class="news">
                <h3>最新消息：</h3>
                <router-link tag="a" target="_blank" :to="{name:'commonNewMsg'}">
                    <marquee scrollamount="3" scrolldelay="100" direction="left" onmouseover="this.stop();" onmouseout="this.start();" style="color: #fff;">
                        <span style="margin-right: 40px;" v-for="(item,index) in news" :key="index">
                            {{item.mess}}
                        </span>
                    </marquee>
                </router-link>
            </div>
        </div>
        <!-- 最新消息 -->

        <!-- content 开始 -->
        <div class="contentWrap">
            <div class="content">
                <ul>
                    <li>
                        <router-link to="grade">
                            <img src="../../static/images/activitiesHall-img/content/list1.gif" alt="">
                        </router-link>
                    </li>
                    <li v-for="(item,index) in contentList" ref="games" :key="index">
                        <router-link to="">
                            <img v-lazy="item.src" alt="">
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- content 结束 -->

        <!-- 底部 开始 -->
        <div class="footer clearfix">
            <div class="inner clearfix">
                <div class="transaction">
                    <div ref="ulWarp">
                        <ul ref="listFirst">
                            <li v-for="(item,index) in transactionArr" :key="index">
                                <span class="red">恭喜：</span>
                                <span class="user" v-text="item.user"></span>
                                成功办理
                                <span>{{item.type}}</span>
                            </li>
                        </ul>
                        <ul ref="listSecond"></ul>
                    </div>

                </div>
                <div class="mid">
                    <ul>
                        <li v-for="(item,index) in midNav" :key="index">
                            <!-- 有name模板时 -->
                            <router-link v-if="item.name" :to="item.name" :style="item.navBg"></router-link>
                            <!-- 没有name模板时 -->
                            <a v-else :href="item.url" target="blank" :style="item.navBg"></a>
                        </li>
                    </ul>
                </div>
                <div class="goTop" @click="goTop"></div>
            </div>
            <div class="foot-img">
                <img src="../../static/images/activitiesHall-img/footer/fimg.png" alt="">
            </div>
            <div class="foot-text">Copyright © 威尼斯人娱乐场 Reserved</div>
        </div>
        <!-- 底部 结束 -->

        <!-- 点击申请 开始 -->
        <div ref="applyFor" id="applyfor" v-show="applyActive">
            <div class="apply">
                <!-- 顶部图片和关闭按钮 -->
                <div class="title">
                    <img src="../../static/images/activitiesHall-img/title/logo.png" alt="">
                    <div class="close" @click="close">
                        <img src="../../static/images/activitiesHall-img/title/close.png" alt="">
                    </div>
                </div>
                <div class="content">
                    <!-- content图片 -->
                    <p>
                        <img src="../../static/images/activitiesHall-img/title/huodongshenqing.png" alt="">
                    </p>
                    <!-- 申请主题 -->
                    <div class="shenqing clearfix">
                        <span>申请主题</span>
                        <div id="PactTitle">
                            <div class="hg" id="PactListFDiv1">
                                <em class="jh">体育周保险</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv2">
                                <em class="jh">新人专享礼包</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv3">
                                <em class="jh">视讯嘉年华</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv4">
                                <em class="jh">单注派彩</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv5">
                                <em class="jh">彩票 周闯关达人</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv6">
                                <em class="jh">VG棋牌亏损救援</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv7">
                                <em class="jh">百家乐连赢奖</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv8">
                                <em class="jh">A-捕鱼大狂欢</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv9">
                                <em class="jh">电子注单300倍奖</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv10">
                                <em class="jh">消除挑战赛</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv11">
                                <em class="jh">A-电子周周救援金</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv12">
                                <em class="jh">电子 超级注单奖上奖</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                            <div class="hg" id="PactListFDiv13">
                                <em class="jh">电子 组团共赢</em>
                                <router-link to="specialOffers" tag='a' target='_blank' class="hong">查看详情</router-link>
                            </div>
                        </div>

                    </div>

                    <!-- input输入框 -->
                    <div class="huiyuan">
                        <span>会员账号</span>
                        <input type="text" ref="memberID">
                        <i>*必填</i>
                    </div>
                    <div class="itemList">
                        <div class="item" id="item1"></div>
                        <div class="item" id="item2"></div>
                        <div class="item" id="item3"></div>
                        <div class="item" id="item4">
                            <span>彩票注单号</span>
                            <input type="text" placeholder="点击填写彩票注单编号">
                            <i>*必填</i>
                        </div>
                        <div class="item" id="item5">
                            <span>周有效投注</span>
                            <input type="text" placeholder="点击填写周有效投注数据">
                        </div>
                        <div class="item" id="item6"></div>
                        <div class="item" id="item7">
                            <span>百家乐注单号</span>
                            <input type="text" placeholder="请填写视讯平台与注单号">
                            <i>*必填</i>
                        </div>
                        <div class="item" id="item8">
                            <span>捕鱼彩金类型</span>
                            <input type="text" placeholder="点击填写捕鱼亏损彩金或盈利彩金">
                            <i>*必填</i>
                        </div>
                        <div class="item" id="item9">
                            <span>老虎机注单号</span>
                            <input type="text" placeholder="请填写电子平台与注单号">
                            <i>*必填</i>
                        </div>
                        <div class="item" id="item10">
                            <span>消除注单号</span>
                            <input type="text" placeholder="点击填写注单号">
                            <i>*必填</i>
                        </div>
                        <div class="item" id="item11">
                            <span>周负盈利</span>
                            <input type="text" placeholder="点击填写负盈利金额">
                        </div>
                        <div class="item" id="item12">
                            <span>电子注单号</span>
                            <input type="text" placeholder="点击填写电子平台与注单号">
                            <i>*必填</i>
                        </div>
                        <div class="item" id="item13">
                            <span>组团人员</span>
                            <input type="text" placeholder="点击填写账号（不低于3个）">
                            <i>*必填</i>
                        </div>
                    </div>
                    <div class="yanzhengma">
                        <span>验证码</span>
                        <input type="text" ref="yzm">
                        <img id="imageId" :src="yzmsrc" @click="yzm" alt="( 点选此处产生新验证码 )" align="absmiddle">
                    </div>

                    <!-- 申请按钮与进度查询 -->
                    <div class="bot-btn">
                        <p>
                            <router-link to="" @click.native ='gosubmit'>
                                <img src="../../static/images/activitiesHall-img/title/shenqing.png" alt="">
                            </router-link>
                            <router-link to="" @click.native="queryShow">
                                <img src="../../static/images/activitiesHall-img/title/jindu.png" alt="">
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 点击申请 结束 -->

        <!-- 点击查询 开始 -->
        <div ref="query" class="queryWrap" v-show="queryActive">
            <div class="apply query">
                <!-- 顶部图片和关闭按钮 -->
                <div class="title">
                    <img src="../../static/images/activitiesHall-img/title/logo.png" alt="">
                    <div ref="closeSecond" class="close" @click="closeSecond">
                        <img src="../../static/images/activitiesHall-img/title/close2.png" alt="">
                    </div>
                </div>
                <div class="content">
                    <!-- content图片 -->
                    <p>
                        <img src="../../static/images/activitiesHall-img/title/jinduchaxun.png" alt="">
                    </p>

                    <div v-show="!querySuccess">
                        <!-- input输入框 -->
                        <div class="huiyuan">
                            <span>请输入会员账号</span>
                            <input ref="memberIdSecond" type="text" placeholder="填写会员账号">
                        </div>
                        <div class="huiyuan">
                            <span>选择查询项目</span>
                            <select id="query-actid" ref="select" class="huiinpt">
                                <option value="16">体育周保险</option>
                                <option value="15">新人专享礼包</option>
                                <option value="13">视讯嘉年华</option>
                                <option value="9">彩票 单注派彩</option>
                                <option value="8">彩票 周闯关达人</option>
                                <option value="14">VG棋牌亏损救援</option>
                                <option value="7">百家乐连赢奖</option>
                                <option value="10">A-捕鱼大狂欢</option>
                                <option value="4">电子注单300倍奖</option>
                                <option value="6">消除挑战赛</option>
                                <option value="5">A-电子周周救援金</option>
                                <option value="2">电子 超级注单奖上奖</option>
                                <option value="1">电子 组团共赢</option>
                            </select>
                        </div>

                        <!-- 申请按钮与进度查询 -->
                        <div class="bot-btn">
                            <p>
                                <router-link to="" @click.native="cxjd">
                                    <img src="../../static/images/activitiesHall-img/title/jindu.png" alt="">
                                </router-link>
                            </p>
                        </div>
                    </div>
                    <div class="querySuccessWrap" v-show="querySuccess">
                        <table>
                            <thead>
                                <th>会员账号</th>
                                <th>活动内容</th>
                                <th>申请信息</th>
                                <th>彩金</th>
                                <th>申请状态</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan='5'>未查到信息</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- 点击查询 结束 -->

    </div>

</template>

<script>
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
            // 申请名字
            sqName: '',
            // 申请类型
            sqType:'',
            //查询框显示/隐藏
            applyActive: false,
            // 进度查询框显示/隐藏
            queryActive: false,
            // 查询申请进度 查询成功后变成true
            querySuccess: false,
            // 验证码
            yzmsrc:"",
            // 侧边栏导航
            aslide: [
                {
                    bg1: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao1.png") +
                            ")no-repeat  "
                    },
                    bg2: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao1hover.png") +
                            ")no-repeat"
                    },
                    name: "register"
                },
                {
                    bg1: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao2.png") +
                            ")no-repeat -3px 0  "
                    },
                    bg2: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao2hover.png") +
                            ")no-repeat -3px 0  "
                    },
                    name: "",
                    url:
                        "https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba"
                },
                {
                    bg1: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao3.png") +
                            ")no-repeat -3px 0  "
                    },
                    bg2: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao3hover.png") +
                            ")no-repeat -3px 0  "
                    },
                    name: "",
                    url:
                        "https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba"
                },
                {
                    bg1: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao4.png") +
                            ")no-repeat -3px 0  "
                    },
                    bg2: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao4hover.png") +
                            ")no-repeat -3px 0  "
                    },
                    name: "pay"
                },
                {
                    bg1: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao5.png") +
                            ")no-repeat -3px 0  "
                    },
                    bg2: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/title/ldao5hover.png") +
                            ")no-repeat -3px 0  "
                    },
                    name: "specialOffers"
                }
            ],
            // content内容
            contentList: [
                {
                    src: require("../../static/images/activitiesHall-img/content/list2.gif")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list3.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list4.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list5.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list6.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list7.gif")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list8.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list9.gif")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list10.gif")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list11.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list12.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list13.png")
                },
                {
                    src: require("../../static/images/activitiesHall-img/content/list14.png")
                }
            ],
            // 中奖名单
            transactionArr: [
                {
                    user: "111",
                    type: "彩票 单注派彩"
                },
                {
                    user: "222",
                    type: "彩票 单注派彩"
                },
                {
                    user: "333",
                    type: "彩票 单注派彩"
                },
                {
                    user: "444",
                    type: "彩票 单注派彩"
                },
                {
                    user: "555",
                    type: "彩票 单注派彩"
                },
                {
                    user: "666",
                    type: "彩票 单注派彩"
                },
                {
                    user: "777",
                    type: "彩票 单注派彩"
                },
                {
                    user: "888",
                    type: "彩票 单注派彩"
                },
                {
                    user: "888",
                    type: "彩票 单注派彩"
                },
                {
                    user: "111",
                    type: "彩票 单注派彩"
                },
                {
                    user: "222",
                    type: "彩票 单注派彩"
                },
                {
                    user: "333",
                    type: "彩票 单注派彩"
                },
                {
                    user: "444",
                    type: "彩票 单注派彩"
                },
                {
                    user: "555",
                    type: "彩票 单注派彩"
                },
                {
                    user: "666",
                    type: "彩票 单注派彩"
                }
            ],
            // 底部导航
            midNav: [
                {
                    navBg: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/footer/navbg1.png") +
                            ")no-repeat"
                    },
                    name: "register"
                },
                {
                    navBg: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/footer/navbg2.png") +
                            ")no-repeat"
                    },
                    name: "",
                    url:
                        "https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba"
                },
                {
                    navBg: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/footer/navbg3.png") +
                            ")no-repeat"
                    },
                    name: "",
                    url:
                        "https://ziker-talk.yun.pingan.com/webim/?channel=WEBIM&authorizerAppid=webim2c83aec44342e0a&eid=86a67bbad3e4b01765bf596b95e47b4e&theme=07c5ba"
                },
                {
                    navBg: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/footer/navbg4.png") +
                            ")no-repeat"
                    },
                    name: "pay"
                },
                {
                    navBg: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/footer/navbg5.png") +
                            ")no-repeat"
                    },
                    name: "activitiesHall"
                },
                {
                    navBg: {
                        background:
                            "url(" +
                            require("../../static/images/activitiesHall-img/footer/navbg6.png") +
                            ")no-repeat"
                    },
                    name: "grade"
                }
            ]
        };
    },
    created() {
        let that = this;
        this.common.noData(that);
    },
    methods: {
        // 侧边栏hover效果
        aslideHover() {
            let that = this;
            let aslides = document.getElementsByClassName("aslides");

            let aslideList = [...aslides];
            aslideList.forEach((item, index) => {
                item.onmouseenter = function() {
                    this.style.background = that.aslide[index].bg2.background;
                };
                item.onmouseleave = function() {
                    this.style.background = that.aslide[index].bg1.background;
                };
            });
        },
        // 中奖名单 banner
        transactionBanner() {
            let ulWarp = this.$refs.ulWarp;
            let demo1 =  this.$refs.listFirst;
            let demo2 =  this.$refs.listSecond;
            demo2.innerHTML = demo1.innerHTML;
            function run() {
                if (ulWarp.scrollTop >= demo1.offsetHeight) {
                    ulWarp.scrollTop = 0;
                } else {
                    ulWarp.scrollTop++;
                }
            }
            let timer = setInterval(run, 50);
            ulWarp.onmouseleave = function() {
                timer = setInterval(run, 50);
            };
            ulWarp.onmouseenter = function() {
                clearInterval(timer);
            };
        },
        // 点击申请
        applyFor() {
            let that = this;
            // 获取游戏
            let games = this.$refs.games;
            // 获取申请框
            let applyFor = this.$refs.applyFor;
            // 获取申请项目
            let hg = document.getElementsByClassName("hg");
            // 获取申请项目的input
            let input = document.getElementsByClassName("item");

            // 游戏点击时让对应的申请项目和input显示
            games.forEach((item, index) => {
                item.onclick = function() {
                    // 显示不同的验证码
                    that.yzm()
                    // 让所有的申请项目和input都是none状态
                    for (let i = 0; i < hg.length; i++) {
                        hg[i].style.display = "none";
                    }
                    for (let j = 0; j < input.length; j++) {
                        input[j].style.display = "none";
                    }
                    // 申请框显示
                    that.applyActive = true
                    // 对应的申请项目和input显示
                    hg[index].style.display = "block";
                    input[index].style.display = "block";
                    that.sqType = input[index].children[1]
                    that.sqName = input[index].children[0]
                };
            });
        },
        // 查询框显示
        queryShow() {
            this.applyActive = false
            this.queryActive = true
            this.querySuccess = false
        },
        // 关闭申请框
        close() {
            this.applyActive = false
        },
        // 关闭查询框
        closeSecond() {
            this.queryActive = false
            this.$refs.memberID.value = '';
            this.$refs.memberIdSecond.value = '';
        },
        // 侧边栏动画
        aslideScroll() {
            // 获取左侧导航
            let aslide = this.$refs.aslide;
            // 如果可以获取到左侧导航之后 执行此函数
            if (aslide) {
                // 到顶部距离
                let scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                let t =
                    scrollTop +
                    (document.documentElement.clientHeight -
                        aslide.offsetHeight) /
                        2;
                // 清空上一次执行的定时器
                clearInterval(timer);
                // 给当前移动的距离设置定时器
                window.timer = setInterval(function() {
                    let iSpeed = (t - aslide.offsetTop) / 10;
                    iSpeed =
                        iSpeed > 0 ? Math.floor(iSpeed) : Math.floor(iSpeed);

                    // 当isspeed的数值变成0时  清除定时器
                    if (iSpeed == 0) {
                        clearInterval(timer);
                    } else {
                        aslide.style.top = aslide.offsetTop + iSpeed + "px";
                    }
                }, 30);
            }
        },
        // 点击返回顶部
        goTop() {
            //设置定时器
            let time = setInterval(function() {
                //获取滚动条距离顶部高度
                let isTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                let ispeed = Math.floor(-isTop / 7);
                document.documentElement.scrollTop = document.body.scrollTop =
                    isTop + ispeed;
                //到达顶部，清除定时器
                if (isTop == 0) {
                    clearInterval(time);
                }
            }, 30);
        },
        // 提交申请
        gosubmit(){
            let memberID = this.$refs.memberID
            let yzm = this.$refs.yzm;
            let type;
            // 判断会员账号是否存在
            if(memberID.value.trim() == ''){
                alert("请输入会员账号！")
                this.yzm()
                return
            }
            // 判断验证码是否输入正确
            if(yzm.value != window.sessionStorage.getItem('yzm')){
                alert("验证码错误！")
                this.yzm()
                return
            }
            // 判断是否存在申请类型 不存在就返回notype  存在就返回输入的内容
            type = this.sqType === undefined ? 'noType' : this.sqType.value
            // 如果申请类型 不存在 或者 输入的内容不为空格时  可以发送给后台
            if(type == 'noType' || type.trim() != ''){
                alert("申请成功")
                // 清空输入的值
                memberID.value = ''
                yzm.value = ''
                if(this.sqType){
                    this.sqType.value = ''
                }
            }else{
                // 输入的内容为空格时 重新输入
                alert("请输入"+this.sqName.innerHTML)
                return
            }

            

            // alert("恭喜您，您的优惠申请已提交成功，我们将在30分钟内给以审核")
        }, 
        // 查询进度
        cxjd(){
            let memberIdSecond = this.$refs.memberIdSecond
            let select = this.$refs.select
            let index = select.selectedIndex ; // selectedIndex代表的是你所选中项的index
            let value = select.options[index].text
            if(memberIdSecond.value.trim() == ''){
                alert("请输入会员账号！")
                return
            }

            this.querySuccess = true

            
        },
        // 验证码
        yzm() {
            let random = Math.floor(Math.random() * 10000);
            let yzm = "http://148.72.206.211:803/index/yzm/index?id=" + random;
            this.yzmsrc = yzm;
            window.sessionStorage.setItem("yzm", random);
        },
    },
    computed: {
        news(){
            return this.$store.state.news
        }
    },
    mounted() {
        // 左侧导航hover换图片
        this.aslideHover();
        this.transactionBanner();
        // 点击申请
        this.applyFor();
        // 关闭查询框
        this.closeSecond();
        // 验证码进入页面时 有一个默认的
        this.yzm()
        //左侧导航动画
        window.addEventListener("scroll", this.aslideScroll);
        // 每次执行完scroll 给定时器清空
        window.timer = null;
    },
    beforeDestroy() {
        // 离开时给scroll解绑
        window.removeEventListener("scroll", this.aslideScroll);
        // 清除定时器
        window.clearInterval(window.timer);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* 点击申请 开始 */
#applyfor {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 1s;
}
.apply {
    position: fixed;
    top: 130px;
    left: 50%;
    margin-left: -370px;
    width: 825px;
    background: #1a1a1a;
    border: 2px solid #f9de63;
    border-radius: 14px;
    background: url("../../static/images/activitiesHall-img/title/bgshenqing.png")
        no-repeat center top;
    background-size: 100% 100%;
}
.apply .title {
    margin-top: 20px;
    text-align: center;
}
.apply .title .close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}

.apply .content {
    width: 525px;
    margin: 0 auto;
    padding: 12px 0px;
    position: relative;
    margin-top: 5px;
}
.apply .content > p {
    text-align: center;
}
/* 申请的主题 */
.hg {
    display: none;
}
.apply .content .shenqing {
    margin-top: 10px;
}
.apply .content .shenqing > span {
    float: left;
    padding-left: 55px;
    color: #ffea00;
    line-height: 30px;
    font-size: 20px;
}
.apply .content .shenqing > div {
    float: left;
    padding-left: 10px;
    line-height: 30px;
    color: #fff;
}
.apply .content .shenqing > div em {
    font-size: 20px;
    font-style: normal;
}
.apply .content .shenqing > div a {
    color: red;
}
/* 具体申请的表单 */
.item {
    display: none;
}
.content > div {
    margin-bottom: 10px;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    font-family: STHeiti, Arial, "Microsoft Yahei", "Hiragino Sans GB",
        "Simsun,sans-self";
}
.content > div > div {
    margin-bottom: 10px;
}
.content > div span {
    float: left;
    width: 175px;
    text-align: right;
    line-height: 33px;
    color: #fbfffd;
}
.content > div input {
    border: none;
    background: #fff;
    width: 233px;
    margin-left: 8px;
    padding-left: 5px;
    color: #a1a1a1;
    height: 33px;
    line-height: 33px;
    border: 1px solid #ad8720;
}
.content > div i {
    font-style: normal;
    color: red;
}


/* 查询后返回的表格数据 */
.content .querySuccessWrap{
    padding: 0 15px 0 10px;
}
.content .querySuccessWrap table{
    width: 100%;
    color: yellow;
    border-collapse: collapse;
}
.content .querySuccessWrap table th{
    padding: 5px 0;
    width: 20%;
    border: 1px solid #eee;    
}
.content .querySuccessWrap table td{
    padding: 5px 0;
    text-align: center;
    color: #fff;
    border: 1px solid #eee;    
}




.content > .yanzhengma input {
    width: 122px;
    margin-right: 8px;
}
.content .bot-btn {
    text-align: center;
}
/* 点击申请 结束 */
/* 查询 开始 */
.queryWrap {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.query {
    width: 520px;
    margin-left: -260px;
}
.query .content > div span {
    width: 155px;
}
.query .content > div select {
    border: none;
    background: #fff;
    width: 233px;
    margin-left: 8px;
    padding-left: 5px;
    color: #a1a1a1;
    height: 33px;
    line-height: 33px;
    border: 1px solid #ad8720;
}
/* 查询 结束 */

.index {
    background: #000 url("../../static/images//activitiesHall-img/title/bg.png")
        no-repeat 0 0;
}
/* 头部 开始 */
.header {
    position: relative;
    padding-top: 30px;
    font-size: 14px;
}
.header .title {
    position: relative;
    width: 1000px;
    margin: 0 auto;
}
.header .title .logo {
    float: left;
}
.header .title .logosecond {
    float: left;
    margin-top: 20px;
    margin-left: 40px;
}
.header .title .shenhe {
    margin-right: 80px;
    text-align: center;
}
.header .title .shenhe img {
    margin-top: 10px;
}

.newMessage {
    height: 45px;
    line-height: 45px;
    color: #b7b7b7;
}
.newMessage .news {
    height: 100%;
    margin: 0 auto;
    padding-left: 735px;
}
.newMessage .news h3 {
    font-weight: bold;
    font-size: 18px;
    float: left;
    padding-left: 40px;
}
.newMessage .news marquee {
    width: 60%;
    overflow: hidden;
    font-size: 16px;
    font-weight: bold;
}

/* 侧边导航 开始 */
.aslide {
    position: absolute;
    top: 300px;
    left: -130px;
}
.aslide li {
    margin-bottom: 2px;
}
.aslide li a {
    display: block;
    width: 99px;
    height: 75px;
}
/* 侧边导航 结束 */
/* 头部 结束 */

/* content 开始 */
.content {
    width: 1000px;
    margin: 0 auto;
}
.content ul {
    display: flex;
    flex-wrap: wrap;
}
.content ul li {
    position: relative;
    margin: 8px 8px;
    width: 220px;
    height: 220px;
    transition: all ease 0.2s;
    bottom: 0px;
    border-radius: 50%;
    border: 2px solid transparent;
    background: url("../../static/images/activitiesHall-img/content/kuang.png")
        no-repeat center top;
}
.content ul li:hover {
    border: 2px solid #fffea5;
}

/* content 结束 */
/* 底部 开始 */
.footer {
    background-color: #000;
}
.footer .inner {
    width: 1000px;
    margin: 0 auto;
}
.footer .inner .transaction {
    float: left;
    width: 350px;
    height: 220px;
    padding: 10px 20px;
    border: 1px solid #1a1a1a;
    overflow: hidden;
}
.footer .inner .transaction > div {
    position: relative;
    width: 320px;
    height: 100%;
    font-size: 12px;
    color: #fff;
    overflow: hidden;
}
.footer .inner .transaction > div li {
    padding: 5px 0;
}
.footer .inner .transaction > div .red {
    color: red;
}

.footer .mid {
    float: left;
    margin-left: 20px;
    width: 473px;
    height: 100%;
}
.footer .mid ul {
    display: flex;
    flex-wrap: wrap;
}
.footer .mid ul li {
    width: 137px;
    height: 103px;
    margin: 10px 5px;
}
.footer .mid ul li a {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.footer .inner .goTop {
    float: right;
    width: 90px;
    height: 100px;
    margin-top: 100px;
    cursor: pointer;
    background: url("../../static/images/activitiesHall-img/footer/top.png")
        no-repeat;
}

.footer .foot-img {
    padding-top: 30px;
    text-align: center;
}
.footer .foot-text {
    text-align: center;
    color: #707070;
    font-size: 12px;
    line-height: 60px;
}
/* 底部 结束 */
</style>