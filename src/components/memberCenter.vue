<template>
    <div class="AllWrap">
        <input type="hidden" id="isCheckTestMember" name="isCheckTestMember" value="1">
        <div id="wrap" style="position: relative;">
            <div class="top">
                <div id="MALogo"></div>
                <div id="MATime">
                    <div id="timepic"></div>
                    <span class="time">美东时间：
                        <span ref="time" id="time"></span>
                    </span>
                </div>
                <div id="MABank" @click="gocunkuan"></div>
            </div>
            <div id="MAContent" class="main_mem clear_fix">
                <div class="account-bg">
                    <div class="ulList">
                        <div id="welcome">会员中心</div>

                        <ul class="sidebar">
                            <li>
                                <a>会员专区</a>
                            </li>
                            <li ref="li1" class="li">
                                <a class="a">&nbsp;我的账户</a>
                            </li>
                            <li ref="li2" class="li">
                                <a class="a">&nbsp;银行交易</a>
                            </li>
                            <li ref="li3" class="li">
                                <a class="a">&nbsp;交易记录</a>
                            </li>
                            <li ref="li4" class="li">
                                <a class="a">&nbsp;我的推广</a>
                            </li>
                            <li>
                                <a>信息公告</a>
                            </li>
                            <li ref="li5" class="li">
                                <a class="a">&nbsp;系统消息</a>
                            </li>
                            <li ref="li6" class="li">
                                <a class="a">&nbsp;个人反馈</a>
                            </li>
                            <li ref="li7" class="li">
                                <a class="a">&nbsp;游戏公告</a>
                            </li>

                        </ul>
                    </div>

                </div>
                <!--右边区域-->

                <div class="account-right">
                    <!-- 我的账户 开始 -->
                    <div id="mamain" ref="rightBox1" class="mamain" style="display:none">
                        <div id="MACenter-content">
                            <div id="MNav">
                                <ul class="subMenu" id="subMenu">
                                    <li style="background:#1d1d1d">
                                        <a>基本资讯</a>
                                    </li>
                                    <li>
                                        <a class="current">安全设置</a>
                                    </li>
                                    <li>
                                        <a class="current">安全中心</a>
                                    </li>
                                    <li>
                                        <a class="current">绑定银行卡</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 我的账户 右侧列表  基本资讯 开始-->
                        <div id="mmaindata">
                            <div class="imformation">
                                <div class="info-img">
                                </div>
                                <div class="info-content">
                                    <p class="info-title">
                                        <span class="info-title-acname">
                                            &nbsp;账户：{{username}}
                                        </span>

                                    </p>
                                    <p class="info-title">
                                        <span class="info-title-acname">
                                            &nbsp;币别：人民币
                                        </span>
                                    </p>
                                </div>

                            </div>
                            <!--数据 表格 区域 设计一行 4个 -->

                            <div class="info-table-area clear_fix">
                                <div class="game-item" v-for="(item,index) in myAccount" :key="index" v-if="item">
                                    <div class="game-name" v-text="item.name"></div>
                                    <div class="game-balance" ref="mymoney" v-text="item.money"></div>
                                </div>
                                <div class="game-item">
                                    <div class="game-name">刷新余额</div>
                                    <div class="game-balance">
                                        <button @click="shuaxin" ref="shuaxin" style="height: 100%; padding: 0 5px;">刷新</button>
                                    </div>
                                </div>
                            </div>

                            <!-- 我的账户 底部 -->
                            <div class="info-table-area clear_fix" id="game-log">
                                <h2 class="M-sub-title">有效投注额</h2>
                                <!-- 日期与有效投注额 是循环生成的 -->
                                <div class="game-log">
                                    <div class="game-name"> 日期 </div>
                                    <div class="game-balance" v-for="(item,index) in myAccountBot" :key="index" v-text="item.data"></div>
                                </div>
                                <div class="game-log">
                                    <div class="game-name"> 有效投注 </div>
                                    <div class="game-balance  text-right" id="yesterDateSummary" v-for="(item,index) in myAccountBot" :key="index">
                                        <span v-text="item.bet"></span>
                                        <div class="slideEffect-btn" indexs="0" @click="myDateListShow"> </div>
                                    </div>

                                    <!-- 我的账户 底部日期列表 table -->
                                    <div v-show="dateListShow" class="log-show" opens="0" style="height: 450px; overflow-y: scroll;">
                                        <div class="log-close2"></div>
                                        <!-- 请求后台数据 渲染到此table -->
                                        <table border="0">
                                            <tbody>
                                                <tr v-for="(item,index) in myAccountBotTabel" :key="index">
                                                    <td width="250" align="center" v-text="item.title"></td>
                                                    <td width="122" align="center" v-text="item.money"></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- 我的账户 右侧列表  基本资讯 结束 -->

                        <!-- 我的账户 右侧列表  安全设置 开始 -->
                        <div id="mmaindata" style="display:none">
                            <!-- 安全设置 头部 -->
                            <div class="secrity-setting">
                                <div class="imformation">
                                    <div class="info-img"> </div>
                                    <div class="info-content">
                                        <p class="info-title">
                                            <span class="info-title-acname">{{username}}</span>&nbsp;欢迎进入安全设置
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- 安全设置 内容 -->
                            <div class="scy-content clearfix">
                                <div class="scy-change-psd scy-link-area clear_fix" id="dlmmxg">
                                    <span class="scy-link-txt">
                                        <img src="../../static/images/memberCenter/flmmxg.png" />
                                        <span @click="changeLoginPass">登录密码修改</span>
                                    </span>
                                </div>
                                <div class="scy-link-area"></div>
                                <div class="scy-content clearfix">
                                    <div class="scy-change-psd scy-link-area clear_fix" id="qkmmxg">
                                        <span class="scy-link-txt">
                                            <img src="../../static/images/memberCenter/qkmmxg.png" />
                                            <span @click="changeQKPass">取款密码修改</span>
                                        </span>
                                    </div>

                                </div>
                                <!--登录密码修改-->
                                <div id="chagepss" v-show="loginPassShow" style="background:#d2d2d2;position: fixed; left: 50%; top: 50%; margin-left: -190px; margin-top: -149px; z-index: 1008; outline: none 0px; height: auto; width: 385px;" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-chang-psd-dialog">

                                    <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
                                        <span class="ui-dialog-title" id="ui-dialog-title-chang-psd-dialog">&nbsp;</span>
                                        <a href="#" class="ui-dialog-titlebar-close ui-corner-all" role="button" style="    float: right; margin-right: 5px;font-size: 24px;">
                                            <span @click="changeLoginPass" class="ui-icon ui-icon-closethick" name="cancel" id="gbxgmm">x</span>
                                        </a>
                                    </div>
                                    <div id="chang-psd-dialog" class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; height: 354.267px;" scrolltop="0" scrollleft="0">

                                        <form id="accountForm" name="accountForm">
                                            <input type="hidden" id="memid" value="59240185">

                                            <div class="box effect7" id="forgetPwd">
                                                <div class="pwd-title-area">
                                                    <div class="pwd-title-txt">登入密码修改</div>
                                                </div>

                                                <div class="pwd-input-content">
                                                    <div class="pwd-input-area ">
                                                        <p class="pwd-input-unit pwd-old ">

                                                            <input id="old_password" ref="old_password" placeholder="旧密码" class="pwd-input" type="password" maxlength="12" size="12" name="password">
                                                        </p>

                                                        <p class="pwd-input-unit pwd-new">

                                                            <input id="password2" ref="password2" placeholder="新密码" class="password_adv pwd-input " type="password" maxlength="12" size="12" name="password">
                                                        </p>

                                                        <div class="top_testresult" id="tips">
                                                            <span ref="tipsSpan1" class="pwdefault"></span>
                                                            <span ref="tipsSpan2" class="pwdefault"></span>
                                                            <span ref="tipsSpan3" class="pwdefault"></span>
                                                            <span ref="tipsSpan4" class="pwdefault"></span>
                                                            <div ref="ztys" class="ztys">密码强度：
                                                                <b ref="hzts" class="hzts">--</b>
                                                            </div>
                                                        </div>

                                                        <p class="pwd-input-unit pwd-new">

                                                            <input id="password" ref="password3" placeholder="确认新密码" class="password_adv pwd-input " type="password" maxlength="12" size="12" name="password">
                                                        </p>
                                                    </div>
                                                    <div class="pwd-info-area">*密码规则：须为6~12码英文或数字夹杂</div>
                                                    <div class="pwd-info-area">且符合0~9或a~z字元</div>
                                                    <div>
                                                        <div class="pwd-btn-wrap">
                                                            <input @click="loginPass" type="button" value="确认修改" name="OK" class=" pwd-btn-submit pwd-btn ">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <!--取款密码修改-->
                                <div id="chagepss2" v-show="qkpassShow" style="background:#d2d2d2;position: fixed; left: 50%; top: 50%; margin-left: -190px; margin-top: -149px; z-index: 1008; outline: none 0px; height: auto; width: 385px;" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-chang-psd-dialog">

                                    <div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">
                                        <span class="ui-dialog-title" id="ui-dialog-title-chang-psd-dialog">&nbsp;</span>
                                        <a href="#" class="ui-dialog-titlebar-close ui-corner-all" role="button" style="    float: right; margin-right: 5px;font-size: 24px;">
                                            <span @click="changeQKPass" class="ui-icon ui-icon-closethick" name="cancel" id="gbxgmm2">x</span>
                                        </a>
                                    </div>
                                    <div id="chang-psd-dialog" class="ui-dialog-content ui-widget-content" style="width: auto; min-height: 0px; " scrolltop="0" scrollleft="0">

                                        <form id="accountForm1" name="accountForm">
                                            <input type="hidden" id="memid1" value="59240185">

                                            <div class="box effect7" id="forgetPwd">
                                                <div class="pwd-title-area">
                                                    <div class="pwd-title-txt" style="background: url(image/qkmmtb.png) no-repeat scroll left center;">取款密码修改</div>
                                                </div>

                                                <div class="pwd-input-content">
                                                    <div class="pwd-input-area ">
                                                        <p class="pwd-input-unit pwd-old ">
                                                            <input id="old_password1" ref="old_password1" placeholder="旧密码" class="pwd-input" type="password" maxlength="12" size="12" name="password">
                                                        </p>

                                                        <p class="pwd-input-unit pwd-new">
                                                            <input id="password1" ref="password1" placeholder="新密码" class="password_adv pwd-input " type="password" maxlength="12" size="12" name="password">
                                                        </p>
                                                        <p class="pwd-input-unit pwd-new">
                                                            <input id="newPassSecond" ref="newPassSecond" placeholder="确认新密码" class="password_adv pwd-input " type="password" maxlength="12" size="12" name="password">
                                                        </p>

                                                    </div>
                                                    <div>
                                                        <div class="pwd-btn-wrap">
                                                            <input @click="getPass" type="button" value="确认修改" name="OK" class=" pwd-btn-submit pwd-btn ">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <!-- 我的账户 右侧列表  安全设置 结束 -->

                        <!-- 我的账户 右侧列表  安全中心 开始 -->
                        <div id="mmaindata" style="display:none">
                            <div class="safeCenter">
                                <h3>
                                    <i></i>安全中心
                                </h3>
                                <ul>
                                    <li>
                                        <span>会员账号：</span>{{username}}
                                    </li>
                                    <li>
                                        <span>真实姓名：</span>{{realname}}
                                    </li>
                                    <li v-for="(newitem,newindex) in safeBankList" :key="'bankcard'+newindex">
                                        <span>银行卡号：</span>
                                        <input type="text" :value="newitem.bankcard" disabled>
                                    </li>
                                    <li v-for="(item,index) in binging" :key="index">
                                        <span>{{item.title}}：</span>
                                        <input type="text" ref="newList" :placeholder="item.placeholder">
                                        <strong @click="bingingList($event,1,item.ck,index)">绑定</strong>
                                        <!-- <strong @click="bingingList($event,2,item.ck,index)">解绑</strong> -->
                                    </li>
                                </ul>
                                <p class="tips">注：每个账号最多只可绑定三张银行卡，银行卡绑定后不可更改，绑定时一定不要错哦~</p>
                                <p class="tips">注：姓名、支付宝、联系电话、QQ不可自行更改，如需更改请联系客服！</p>
                            </div>
                        </div>
                        <!-- 我的账户 右侧列表  安全中心 结束 -->

                        <!-- 我的账户 右侧列表  绑定银行卡 开始 -->
                        <div id="mmaindata" style="display:none">
                            <div class="bingBankCard safeCenter">
                                <ul>
                                    <li>
                                        <span>选择银行：</span>
                                        <select name="" id="bank" ref="select">
                                            <option value="">中国工商银行</option>
                                            <option value="">中国建设银行</option>
                                            <option value="">中国银行</option>
                                            <option value="">交通银行</option>
                                            <option value="">中国农业银行</option>
                                            <option value="">邮政储蓄银行</option>
                                            <option value="">北京银行</option>
                                            <option value="">吉林银行</option>
                                            <option value="">浦发银行</option>
                                            <option value="">广大银行</option>
                                            <option value="">华夏银行</option>
                                            <option value="">兴业银行</option>
                                            <option value="">中信银行</option>
                                        </select>
                                    </li>
                                    <li>
                                        <span>真实姓名：</span>{{username}}
                                    </li>
                                    <li>
                                        <span>银行卡号：</span>
                                        <input type="text" ref="input1" placeholder="请输入银行卡号">
                                        <p ref="pass1"></p>
                                    </li>
                                    <li>
                                        <span>开户行省：</span>
                                        <input type="text" ref="input2" placeholder="请输入开户行省">
                                        <p ref="pass2"></p>
                                    </li>
                                    <li>
                                        <span>开户行市：</span>
                                        <input type="text" ref="input3" placeholder="请输入开户行市">
                                        <p ref="pass3"></p>
                                    </li>
                                </ul>
                                <strong @click="bindBank">确认</strong>
                            </div>
                        </div>
                        <!-- 我的账户 右侧列表  绑定银行卡 结束 -->

                    </div>
                    <!-- 我的账户 结束 -->
                    <!-- 银行交易 开始 -->
                    <div id="mamain2" ref="rightBox2" class="mamain" style="display:none">
                        <!-- 银行交易 顶部导航 -->
                        <div id="MNav">
                            <ul class="subMenu" id="subMenu2">
                                <li style="background:#1d1d1d">
                                    <a>额度转换</a>
                                </li>
                                <li>
                                    <a>线上存款</a>
                                </li>
                                <li>
                                    <a>线上取款</a>
                                </li>
                            </ul>
                        </div>
                        <!-- 银行交易 额度转换 内容部分 -->
                        <div id="mmaindata">
                            <!-- 手动切换余额 开始 -->
                            <div v-show="handShow" class="l-balance-transfer wid" id="sd">
                                <div style="display:flex;justify-content: space-between; padding: 10px 5px;">
                                    <h2 class="MSubTitle" style="color:#000;font-size:16px;display:inline-block">目前额度</h2>
                                </div>
                                <div class="two columns clear_fix" style="width: 65%;">
                                    <div class="account-balance">
                                        <table border="1" style="margin-bottom: 8px;" class="MMain3 MMain">
                                            <thead>
                                                <tr>
                                                    <th nowrap="" style="width: 30%;">账户</th>
                                                    <th nowrap="" style="width: 70%;">余额</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td width="35%">总余额</td>
                                                    <td width="65%">
                                                        <span id="totalMoney" v-text="allbalance"></span> RMB
                                                        <button class="jryx" style="float:none" @click="selfMotion2">更新</button>
                                                    </td>
                                                </tr>
                                                <!-- <tr>
														<td width="35%" class="">现金余额</td>
														<td width="65%" class="">
															<span id="luomaMoney">0.00</span> RMB
														</td>
													</tr> -->
                                                <!-- 循环生成列表 -->
                                                <tr v-for="(item,index) in limitLeft" :key="index">
                                                    <td width="35%" class="" v-text="item.name"></td>
                                                    <td width="65%" class="">
                                                        <span id="agMoney" ref="transitionMoney" v-text="item.money"></span> RMB
                                                        <span class="jryx" @click="goin(item.title)">进入游戏</span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="one column" style="width: 30%;">
                                    <div class="transfer-funds">

                                        <h2 class="MSubTitle" style="	font-size:14px;">额度转换</h2>

                                        <div>
                                            <fieldset class="transfer-field">
                                                <div class="status success" style="display:none;">
                                                    <strong></strong>
                                                </div>
                                                <div class="status fail" style="display:none;">
                                                    <strong></strong>
                                                </div>
                                                <div>
                                                    <label for="transfer-from">转出: </label>
                                                    <select ref="rollOut" @change="transitionPlatform" class="form transfer-accounts form-select" style="width:152px; margin:0" name="from" id="from">
                                                        <option v-for="(item,index) in myAccount" :key="index" :value="item.name" v-text="item.name"></option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label for="transfer-to">转入:</label>
                                                    <select ref="shiftTo" @change="transitionPlatform" class="form transfer-accounts form-select" style="width:152px; margin:0" name="to" id="to">
                                                        <option v-for="(item,index) in myAccount" :key="index" :value="item.name" v-text="item.name"></option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label for="transfer-amount">数额: </label>
                                                    <input ref="rollMoney" class="form " type="text" maxlength="120" size="60" value="" name="transfer_amount" style="width:152px;" id="amount">
                                                    <input type="hidden" value="transfer" name="act">

                                                </div>
                                            </fieldset>
                                            <div class="btn-container">
                                                <input id="SubmitForm" class="" @click="transition" type="button" value="确定">
                                                <span id="MSwitchResult"></span>
                                            </div>
                                            <div class="wid" style="padding: 10px 0">
                                                <label style="color: red;">温馨提示：切换到自动额度转换前，请先通过手动转换把额度转移到现金余额。</label>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- 手动切换余额 结束 -->

                        </div>
                        <!-- 银行交易 线上存款 内容部分 -->
                        <div id="mmaindata" style="display:none">
                            <div class="l-balance-transfer">
                                <div class="cashierWrapper" style="width:96%;margin:0px auto">
                                    <div id="titleTab">
                                        <h1>欢迎您! 请点击以下图标进行存款</h1>
                                    </div>
                                    <ul class="clearfix">
                                        <li v-for="(item,index) in depositList" :key="index" @click="payShow(index,$event)">
                                            <img :src="item.src" alt="">
                                            <span>{{item.text}}</span>
                                        </li>
                                    </ul>
                                    <!-- 支付弹窗 -->
                                    <!-- 微信支付或支付宝支付 -->
                                    <form ref="form" v-if="pay_type === 'wechat' || pay_type === 'apply'" action="http://148.72.206.211:803/public/alipay/pagepay/pagepay.php" onkeydown="if(event.keyCode==13)return false;" method=post target="_blank" id="form">
                                        <div class="payPop" ref="payPop" v-show="payPopShow">
                                            <div>
                                                <p>
                                                    <span>账户名：</span>
                                                    <span>{{username}}</span>
                                                    <i @click="payClose">x</i>
                                                </p>
                                                <p>
                                                    <span>支付方式：</span>
                                                    <span>{{payWay}}</span>
                                                </p>
                                                <p>
                                                    <span>支付金额：</span>
                                                    <input type="number" min="1" ref="money">
                                                </p>
                                                <p>
                                                    <span>支付额度：</span>
                                                    <span>{{minmoney}} —— 10000元</span>
                                                </p>

                                                <input ref="WIDbody" id="WIDbody" name="WIDbody" type="hidden" value="" />
                                                <input ref="WIDsubject" id="WIDsubject" name="WIDsubject" type="hidden" value="" />
                                                <input ref="WIDout_trade_no" id="WIDout_trade_no" name="WIDout_trade_no" type="hidden" value="" />
                                                <input ref="WIDtotal_amount" type="hidden" class="layui-input" id="WIDtotal_amount" name="WIDtotal_amount" placeholder="请输入充值金额">

                                                <!-- 微信的二维码 -->
                                                <p v-if="imgShow" ref="wx_img" id="img"></p>
                                                <input type="button" value="支付" @click="goPay">

                                            </div>
                                        </div>
                                    </form>
                                    <!-- 银行卡支付 -->
                                    <form ref="form" v-else-if="pay_type === 'bank' "  onkeydown="if(event.keyCode==13)return false;">
                                        <div class="payPop" ref="payPop" v-show="payPopShow">
                                            <div class="bank_card_wrap">
                                                <div class="bankcard_nav clearfix">
                                                    <div class="bankcard_title">选择汇款卡号</div>
                                                    <div>
                                                        <span class='navBar' 
                                                                    :class="{bank_title_red: bank_card_nav_index == newindex }" 
                                                                    ref="navBar" v-for="(newitem,newindex) in bank_card_List" 
                                                                    @click="bank_card_nav_index = newindex" 
                                                                    :key="newindex">
                                                            <span>{{newitem.k2}}-{{newitem.k1}}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <!-- 循环银行卡数组 -->
                                                <div class="page-tab-container">
                                                    <div 
                                                            class="bankcard_content" 
                                                            v-for="(newitem,newindex) in bank_card_List" 
                                                            :key="newindex"
                                                            v-if="newindex == bank_card_nav_index">
                                                        <div>
                                                            <span>持卡人</span>
                                                            <strong ref="bankcard_username">{{newitem.k1}}</strong>
                                                        </div>
                                                        <div>
                                                            <span>银行卡号</span>
                                                            <strong ref="bankcard_card">{{newitem.k4}}</strong>
                                                        </div>
                                                        <div>
                                                            <span>开户行</span>
                                                            <strong ref="bankcard_addr">{{newitem.k3}}</strong>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="bankcard_content">
                                                    <!-- 汇款方式 -->
                                                    <div>
                                                        <span>汇款方式</span>
                                                        <!-- <i ref="remittance_methods_text" @click.prevent.stop="remiteance_show">{{remittance_methods_text}}</i> -->
                                                        <select ref="bank_card_methods" @change="bankcard_methods">
                                                            <option id="default" value="请选择支付方式">请选择支付方式</option>
                                                            <option id="wechat" value="微信转卡">微信转卡</option>
                                                            <option id="apply" value="支付宝转卡">支付宝转卡</option>
                                                            <option id="mobile_bank" value="手机银行转卡">手机银行转卡</option>
                                                            <option id="bank" value="银行柜台">银行柜台</option>
                                                            <option id="ATM_money" value="ATM现金">ATM现金</option>
                                                            <option id="ATM_bankcard" value="ATM卡转">ATM卡转</option>
                                                            <option id="E_bank" value="网银转账">网银转账</option>
                                                            <option id="other" value="其他（手动输入）">其他（手动输入）</option>
                                                        </select>
                                                    </div>
                                                    <!-- 选择汇款方式时 需要填写的选项 -->
                                                    <div v-if="remittance_methods_id === 'ATM_money' || remittance_methods_id === 'ATM_bankcard'">
                                                        <span>汇款地点</span>
                                                        <input ref="my_addr" type="text" placeholder="请输入汇款地点">
                                                    </div>
                                                    <div v-else-if="remittance_methods_id === 'E_bank'">
                                                        <span>汇款人姓名</span>
                                                        <input ref="my_name" type="text" placeholder="请输入汇款人姓名">
                                                        <strong class="bank_tips">温馨提示：当转账人姓名与上方姓名不符时，请填写正确的转账人姓名以便快速到账。</strong>
                                                    </div>
                                                    <div v-else-if="remittance_methods_id === 'other'">
                                                        <span>其它</span>
                                                        <input ref="my_otoers_methods" type="text" placeholder="请输入其它汇款方式">
                                                    </div>
                                                    <div><span>金额</span><input type="text" ref="money" placeholder="最少10元"></div>
                                                </div>
                                                <input type="button" value="提交" @click="goPay">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                        <!-- 银行交易 线上取款 内容部分 -->
                        <div id="mmaindata" style="display:none;">
                            <div class="wid" style="margin-top:40px;">
                                <div id="bank_content" style="padding: 0 6px;">
                                    <form method="post" name="myFORM">
                                        <input type="hidden" name="redirect" value="3">

                                        <table class="MMain2 MMain" border="0" cellspacing="1" cellpadding="0" style="width: 420px;">
                                            <tbody>
                                                <tr class="m_bc_ed ">
                                                    <td class="m_bc_ed pay_info " style="width:100px;display: inline-block;">
                                                        <div>
                                                            <span class="star">*</span>
                                                            <label style="font-weight:600;font-size:16px;color:#000">真实姓名:</label>
                                                        </div>
                                                    </td>
                                                    <td class="m_bc_ed bankMsg">{{realname}}</td>
                                                </tr>
                                                <tr class="m_bc_ed">
                                                    <td style="width: 100px;display: inline-block;" class="m_bc_ed pay_info">
                                                        <div>
                                                            <span class="star">*</span>
                                                            <label style="font-weight:600;font-size:16px;color:#000">取款密码:</label>
                                                        </div>
                                                    </td>
                                                    <td class="m_bc_ed bankMsg">
                                                        <input type="password" maxlength="4" ref="pass" id="pass" style="width: 100%;" placeholder="请输入取款密码">
                                                    </td>
                                                </tr>
                                                <tr class="m_bc_ed ">
                                                    <td style=" width: 100px;display: inline-block;" class="m_bc_ed pay_info">
                                                        <div>
                                                            <span class="star">*</span>
                                                            <label style="font-weight:600;font-size:16px;color:#000">支付宝:</label>
                                                        </div>
                                                    </td>
                                                    <td class="m_bc_ed bankMsg">
                                                        <input type="text" id="get_account" ref="get_account" name="get_account" value="" class="za_text" style="ime-mode:disabled; width: 100%;" placeholder="请输入支付宝账号">
                                                    </td>
                                                </tr>
                                                <tr class="m_bc_ed ">
                                                    <td style=" width: 100px;display: inline-block;" class="m_bc_ed pay_info">
                                                        <div>
                                                            <span class="star">*</span>
                                                            <label style="font-weight:600;font-size:16px;color:#000">取款金额:</label>
                                                        </div>
                                                    </td>
                                                    <td class="m_bc_ed bankMsg">
                                                        <input type="number" min="1" id="money2" ref="money2" name="get_account" value=""  class="za_text" style="ime-mode:disabled; width: 100%;" placeholder="请输入取款金额">
                                                    </td>
                                                </tr>
                                                <!-- <tr class="m_bc_ed ">
                                                    <td style="    width:  100px;display: inline-block;" class="m_bc_ed  pay_info" valign="top">
                                                        <div><span class="star">*</span><label style="font-weight:600;font-size:16px;color:#000">出款银行:</label></div>
                                                    </td>
                                                    <td class="m_bc_ed pay_info bankMsg" valign="bottom">
                                                        <select name="bank">
                                                            <option v-for="(item,index) in bankList" :key="index" :value="item.val" v-text="item.bank"></option>

                                                        </select>
                                                        <input type="text" name="province" size="8" value="" maxlength="20"> 省
                                                        <input type="text" name="city" value="" size="8" maxlength="20"> 县/市&nbsp;&nbsp;
                                                    </td>
                                                </tr> -->
                                                <!-- <tr class="m_bc_ed ">
                                                    <td style="width:  100px;display: inline-block;" class="m_bc_ed pay_info">&nbsp;</td>
                                                    <td class="m_bc_ed bankMsg">为保障您的出款权益，请先绑定您的出款资讯!</td>
                                                </tr> -->
                                            </tbody>
                                        </table>
                                        <div class="firstpay_btn" style="width:200px;margin:0px auto;margin-top:20px;margin-bottom:20px;">
                                            <input type="button" name="OK2" value="确认" class="gsdgsado2" style="cursor: pointer;" @click="alipayzh">
                                            <input type="button" name="CANCEL2" value="重设" class="gsdgsado2" style="cursor: pointer;" @click="empty">
                                        </div>
                                        <div id="note">
                                            <p>温馨提醒：</p>

                                            <p>1.标记有&nbsp;
                                                <span class="star">*</span>&nbsp;均为必填项目，请认真填写。</p>

                                            <p>2.手机号码与取款密码为取款的重要凭证,请务必填写并牢记。</p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- 银行交易 结束 -->

                    <!-- 交易记录 开始 -->
                    <div id="mamain3" ref="rightBox3" class="mamain" style="display:none">
                        <div id="MACenter-content">

                            <div id="MNav">
                                <ul class="subMenu" id="subMenu3">
                                    <li style="background:#1d1d1d">
                                        <a>投注记录</a>
                                    </li>
                                    <li>
                                        <a>往来记录</a>
                                    </li>
                                </ul>
                            </div>

                            <!-- 投注记录 -->
                            <div id="mmaindata">
                                <div class="wid" style="margin-top:20px;">
                                    <!-- 交易记录 顶部导航 -->
                                    <div id="mnavlv2">
                                        <span class="mgametype heise" ref="titleNav" v-for="(item,index) in tradingNav" :key="index">
                                            <a v-text="item.name"></a> |
                                        </span>
                                        <input type="hidden" id="ffcType" value="">
                                    </div>

                                    <!-- 查询时间 -->
                                    <div class="mcontrolnav">
                                        开始查询：
                                        <input type="date" ref="betRecodeStartTime" class="startTime" :min="minTime" :max="endTime" name="">
                                        <input type="date" ref="betRecodeEndTime" class="endTime" :min="minTime" :max="endTime" name="">
                                        <input class="gsdgsado" type="button" style="cursor: pointer; background-position: 0px top;" value="查询" @click="inquire($event,page.name)">
                                    </div>

                                    <!-- 交易记录 详细列表 -->
                                    <!-- AG -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <!-- 详细列表 -->
                                        <tbody align="center">
                                            <tr>
                                                <th width="11%">下注时间</th>
                                                <th width="11%">游戏局号</th>
                                                <th width="11%">注单流水号</th>
                                                <th width="11%">游戏类型</th>
                                                <th width="11%">下注金额</th>
                                                <th width="11%">玩家输赢额度</th>
                                                <th width="11%">玩家下注前的剩余额度</th>
                                                <th width="11%">有效注入额度</th>
                                                <th width="11%">结果</th>
                                            </tr>
                                            <tr v-for="(item,index) in AG" :key="index">
                                                <td width="11%">{{item.betTime}}</td>
                                                <td width="11%">{{item.gameCode}}</td>
                                                <td width="11%">{{item.billNo}}</td>
                                                <td width="11%">{{item.gameType}}</td>
                                                <td width="11%">{{item.betAmount}}</td>
                                                <td width="11%">{{item.netAmount}}</td>
                                                <td width="11%">{{item.beforeCredit}}</td>
                                                <td width="11%">{{item.validBetAmount}}</td>
                                                <td width="11%">{{item.result}}</td>
                                            </tr>
                                            <tr v-if="AG.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- AG -->
                                    <!-- MG -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="14%">ISO日期</th>
                                                <th width="14%">注单流水号</th>
                                                <th width="14%">玩家账号</th>
                                                <th width="14%">下注金额</th>
                                                <th width="14%">派彩金额</th>
                                                <th width="14%">大奖派彩金额</th>
                                                <th width="14%">结算状态</th>
                                            </tr>
                                            <tr v-for="(item,index) in MG" :key="index">
                                                <td width="14%">{{item.GameEndTime}}</td>
                                                <td width="14%">{{item.SessionId}}</td>
                                                <td width="14%">{{item.ModuleId}}</td>
                                                <td width="14%">{{item.TotalWager}}</td>
                                                <td width="14%">{{item.TotalPayout}}</td>
                                                <td width="14%">{{item.ProgressiveWager}}</td>
                                                <td width="14%">{{item.PlayerName}}</td>
                                            </tr>
                                            <tr v-if="MG.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- MG -->
                                    <!-- GD -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="14%">下注时间</th>
                                                <th width="14%">游戏账号</th>
                                                <th width="14%">下注金额</th>
                                                <th width="14%">投注类型</th>
                                                <th width="14%">游戏结果</th>
                                                <th width="14%">派彩时间</th>
                                            </tr>
                                            <tr v-for="(item,index) in GD" :key="index">
                                                <td width="14%">{{item.BetTime}}</td>
                                                <td width="14%">{{item.GameID}}</td>
                                                <td width="14%">{{item.BetAmount}}</td>
                                                <td width="14%">{{item.BetType}}</td>
                                                <td width="14%">{{item.GameResult}}</td>
                                                <td width="14%">{{item.BalanceTime}}</td>
                                            </tr>
                                            <tr v-if="GD.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- GD -->
                                    <!-- CQ9 -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="14%">下注时间</th>
                                                <th width="14%">局号</th>
                                                <th width="14%">玩家账号</th>
                                                <th width="14%">下注金额</th>
                                                <th width="14%">投注类型</th>
                                                <th width="14%">游戏输赢</th>
                                                <th width="14%">游戏余额</th>
                                            </tr>
                                            <tr v-for="(item,index) in CQ9" :key="index">
                                                <td width="14%">{{item.bettime}}</td>
                                                <td width="14%">{{item.round}}</td>
                                                <td width="14%">{{item.account}}</td>
                                                <td width="14%">{{item.bet}}</td>
                                                <td width="14%">{{item.balance}}</td>
                                                <td width="14%">{{item.win}}</td>
                                                <td width="14%">{{item.jackpot}}</td>
                                            </tr>
                                            <tr v-if="CQ9.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- CQ9 -->
                                    <!-- IM2 -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="20%">玩家账号</th>
                                                <th width="20%">下注金额</th>
                                                <th width="20%">下注平台</th>
                                                <th width="20%">下注时间</th>
                                                <th width="20%">游戏输赢</th>
                                            </tr>
                                            <tr v-for="(item,index) in IM2" :key="index">
                                                <td width="20%">{{item.PlayerId}}</td>
                                                <td width="20%">{{item.BetAmount}}</td>
                                                <td width="20%">{{item.Platform}}</td>
                                                <td width="20%">{{item.GameDate}}</td>
                                                <td width="20%">{{item.WinLoss}}</td>
                                            </tr>
                                            <tr v-if="IM2.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- IM2 -->
                                    <!-- IM101 -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="20%">玩家账号</th>
                                                <th width="20%">下注金额</th>
                                                <th width="20%">下注平台</th>
                                                <th width="20%">下注时间</th>
                                                <th width="20%">游戏输赢</th>
                                            </tr>
                                            <tr v-for="(item,index) in IM101" :key="index">
                                                <td width="20%">{{item.PlayerId}}</td>
                                                <td width="20%">{{item.BetAmount}}</td>
                                                <td width="20%">{{item.Platform}}</td>
                                                <td width="20%">{{item.GameDate}}</td>
                                                <td width="20%">{{item.WinLoss}}</td>
                                            </tr>
                                            <tr v-if="IM101.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- IM101 -->
                                    <!-- IM102 -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="20%">下注时间</th>
                                                <th width="20%">玩家账号</th>
                                                <th width="20%">游戏类型</th>
                                                <th width="20%">游戏名称</th>
                                                <th width="20%">赢得奖金</th>
                                            </tr>
                                            <tr v-for="(item,index) in IM102" :key="index">
                                                <td width="20%">{{item.GameDate}}</td>
                                                <td width="20%">{{item.PlayerName}}</td>
                                                <td width="20%">{{item.GameType}}</td>
                                                <td width="20%">{{item.GameName}}</td>
                                                <td width="20%">{{item.Win}}</td>
                                            </tr>
                                            <tr v-if="IM102.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- IM102 -->
                                    <!-- IM201 -->
                                    <table class="mmain titleList" border="1" align="center">
                                        <tbody align="center">
                                            <tr>
                                                <th width="20%">玩家账号</th>
                                                <th width="20%">下注金额</th>
                                                <th width="20%">下注平台</th>
                                                <th width="20%">下注时间</th>
                                                <th width="20%">游戏输赢</th>
                                            </tr>
                                            <tr v-for="(item,index) in IM201" :key="index">
                                                <td width="20%">{{item.PlayerId}}</td>
                                                <td width="20%">{{item.BetAmount}}</td>
                                                <td width="20%">{{item.Platform}}</td>
                                                <td width="20%">{{item.LastUpdatedDate}}</td>
                                                <td width="20%">{{item.WinLoss}}</td>
                                            </tr>
                                            <tr v-if="IM201.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="9">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- IM201 -->
                                    <p id="noticeTd" colspan="8" style="text-align: left;color:red;margin-top:20px;" class="">当日交易记录请到游戏中心查询。</p>

                                </div>

                                <!-- 切换页 -->
                                <div class="listButton">
                                    <b @click="PageBet(1,page.endpage,page.name,page.starttime,page.endtime)">首页</b>
                                    <b @click="PageBet(page.page - 1 ,page.endpage,page.name,page.starttime,page.endtime)">上一页</b>
                                    <span>当前页:
                                        <i>{{page.page}}</i>
                                    </span>
                                    <b @click="PageBet(parseInt(page.page) + 1,page.endpage,page.name,page.starttime,page.endtime)">下一页</b>
                                    <b @click="PageBet(page.endpage, page.endpage, page.name, page.starttime, page.endtime)">尾页</b>
                                    <span>共
                                        <i>{{page.endpage}}</i>页</span>
                                    <span>共
                                        <i>{{page.count}}</i>条</span>
                                </div>

                            </div>

                            <!-- 往来记录 -->
                            <div id="mmaindata" style="display:none">
                                <div class="wid" style="margin-top:40px;">
                                    <form name="frm" id="frm" action="/member/memberCentre" method="post">
                                        <input type="hidden" name="method" id="type" value="currentRendMssage">

                                        <!-- <div class="mcontrolnav">
											<span></span>
											<select name="flag" id="flag" class="loteryId" onchange="selectCateGory();">
												<option value="">交易类别</option>
												<option value="0">入款，出款交易</option>
												<option value="2">传统彩</option>

											</select>
												    屏蔽彩票  by handy
													<select id="selectId" name="selectId"  style="display:none;">
														<option selected="selected" label="全部彩票" value="0">全部彩票</option>
													</select>

											<select name="selDate" id="selDate" class="loteryId" onchange="onDateChange(this);">
												<option value="0" selected="">本月</option>
												<option value="1">上个月</option>
											</select>
											<input style="width: 125px;" class="MFormStyle hasDatepicker" name="createDate" id="createDate"  type="date"> -
											<input style="width: 125px;" class="MFormStyle hasDatepicker" name="createDateEnd" id="createDateEnd"  type="date">
											<input class="gsdgsado" style="cursor:pointer;" type="button" value="查询" onclick="queryCurrentRecord()">
											<div style="float: right;" align="right">

											</div>
										</div> -->
                                        <!-- 查询时间 -->
                                        <div class="mcontrolnav">
                                            开始查询：
                                            <input type="date" ref="andRecodeStartTime" class="startTime" :min="minTime" :max="endTime" name="">
                                            <input type="date" ref="andRecodeEndTime" class="endTime" :min="minTime" :max="endTime" name="">
                                            <input class="gsdgsado" type="button" style="cursor: pointer; background-position: 0px top;" value="查询" @click="inquire($event,correspondencePage.name)">
                                        </div>
                                        <table class="mmain" border="1">
                                            <tbody>
                                                <tr>
                                                    <th width="25%">日期</th>
                                                    <th width="25%">交易类别</th>
                                                    <th width="25%">交易额度</th>
                                                    <th width="25%">注单明细</th>
                                                </tr>
                                                <tr v-for="(item,index) in correspondence" :key="index">
                                                    <td width="25%">{{item.ctime}}</td>
                                                    <td width="25%">{{item.typed}}</td>
                                                    <td width="25%">{{item.money}}</td>
                                                    <td width="25%">{{item.dd}}</td>
                                                </tr>

                                                <tr v-if="correspondence.length<=0">
                                                    <td class="" height="70" style="text-align: center;" colspan="6">未查询到相关记录</td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </form>
                                </div>
                                <!-- 切换页 -->
                                <div class="listButton">
                                    <b @click="pageSwitch(1,correspondencePage.endpage,correspondencePage.name)">首页</b>
                                    <b @click="pageSwitch(correspondencePage.page - 1 ,correspondencePage.endpage,correspondencePage.name)">上一页</b>
                                    <span>当前页:
                                        <i>{{correspondencePage.page}}</i>
                                    </span>
                                    <b @click="pageSwitch(parseInt(correspondencePage.page) + 1,correspondencePage.endpage,correspondencePage.name)">下一页</b>
                                    <b @click="pageSwitch(correspondencePage.endpage,correspondencePage.endpage,correspondencePage.name)">尾页</b>
                                    <span>共
                                        <i>{{correspondencePage.endpage}}</i>页</span>
                                    <span>共
                                        <i>{{correspondencePage.count}}</i>条</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 我的推广 开始 -->
                    <div id="mamain8" ref="rightBox4" class="mamain" style="display:none">
                        <div id="MACenter-content">
                            <div id="MNav">
                                <ul class="subMenu" id="subMenu8">
                                    <li style="background:#1d1d1d">
                                        <a>下级管理</a>
                                    </li>
                                    <!-- <li>
                                        <a>默认设置</a>
                                    </li> -->
                                    <li>
                                        <a>推广地址</a>
                                    </li>
                                    <li>
                                        <a>添加下级</a>
                                    </li>
                                    <li>
                                        <a>推广说明</a>
                                    </li>
                                </ul>
                            </div>

                            <!-- 下级管理 -->
                            <div id="mmaindata">
                                <!-- 代理用户登录 -->
                                <table class="content1" v-if="agent">
                                    <thead>
                                        <th>账户</th>
                                        <th>真实姓名</th>
                                        <th>余额</th>
                                        <th>最后登录时间</th>
                                        <th>登录设备信息</th>
                                        <th>注册时间</th>
                                        <th>已提现金额</th>
                                        <th>日盈利</th>
                                        <th>总盈利</th>
                                        <!-- <th>下线返点</th>
                                        <th>抽取下线点数</th> -->
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in subUser" :key="index">
                                            <td>{{item.user}}</td>
                                            <td v-html="item.realname ? item.realname : '未填写姓名'"></td>
                                            <td>{{item.money}}元</td>
                                            <td v-html="item.logintime ? item.logintime : '从未登录'"></td>
                                            <td v-html="item.logininfo && item.logininfo != -1 ? item.logininfo : '从未登录'"></td>
                                            <td>{{item.ctime}}</td>
                                            <td>{{item.liushui}}</td>
                                            <td>{{item.dayprofit}}</td>
                                            <td>{{item.totalprofit}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <!-- 普通用户登录 -->
                                <table class="content1" v-else>
                                    <thead>
                                        <th width="10%">账户</th>
                                        <th width="10%">真实姓名</th>
                                        <th width="10%">余额</th>
                                        <!-- <th>下线返点</th>
                                        <th>抽取下线点数</th> -->
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in subUser" :key="index">
                                            <td>{{item.user}}</td>
                                            <td v-html="item.realname ? item.realname : '未填写姓名'"></td>
                                            <td>{{item.money}}元</td>
                                            <!-- <td>
                                                <ul class="clearfix">
                                                    <li v-for="(newitem,newindex) in item.sub" :key="newindex">
                                                        {{newitem.title}}：
                                                        <span ref="scale1">{{newitem.scale}}</span>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul class="clearfix">
                                                    <li v-for="(newitem,newindex) in item.sub" :key="newindex">
                                                        {{newitem.title}}：
                                                        <select name="" ref="selected1" v-model="newitem.scale">
                                                            <option value="0.0">0.0</option>
                                                            <option value="0.1">0.1</option>
                                                            <option value="0.2">0.2</option>
                                                            <option value="0.3">0.3</option>
                                                            <option value="0.4">0.4</option>
                                                            <option value="0.5">0.5</option>
                                                            <option value="0.6">0.6</option>
                                                            <option value="0.7">0.7</option>
                                                            <option value="0.8">0.8</option>
                                                            <option value="0.9">0.9</option>
                                                            <option value="1.0">1.0</option>
                                                        </select>
                                                    </li>
                                                </ul>
                                                <button @click="subordinateChange(1)">修改</button>
                                            </td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- 默认设置 -->
                            <!-- <div id="mmaindata" style="display:none">
                                <table class="content2">
                                    <thead>
                                        <th colspan="3">默认抽水设置</th>
                                    </thead>
                                    <tbody v-for="(newitem,newindex) in subordinate" :key="newindex">
                                        <tr v-for="(item,index) in newitem.sub" :key="index">
                                            <td width="30%">{{item.title}}</td>
                                            <td ref="scale2" width="30%">{{item.scale}}</td>
                                            <td>
                                                抽水值：
                                                <select ref="selected2" v-model="item.scale" name="">
                                                    <option value="0.0">0.0</option>
                                                    <option value="0.1">0.1</option>
                                                    <option value="0.2">0.2</option>
                                                    <option value="0.3">0.3</option>
                                                    <option value="0.4">0.4</option>
                                                    <option value="0.5">0.5</option>
                                                    <option value="0.6">0.6</option>
                                                    <option value="0.7">0.7</option>
                                                    <option value="0.8">0.8</option>
                                                    <option value="0.9">0.9</option>
                                                    <option value="1.0">1.0</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <button @click="subordinateChange(2)">修改</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> -->
                            <!-- 推广地址 -->
                            <div id="mmaindata" style="display:none">
                                <table class="content3">
                                    <thead>
                                        <th>我的推广地址</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>您的专属推荐码：</span>
                                                <i ref="code" class="code">{{tgdz}}</i>
                                                <textarea ref="noShow" id="noShow"></textarea>
                                                <span class="yellow" @click="copyMSG($event)">复制</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>如果想赚取推广佣金,请复制推广链接发给好友注册 </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- 添加下级 -->
                            <div id="mmaindata" style="display:none">
                                <ul class="content4">
                                    <li>
                                        <span>登录账号：</span>
                                        <input ref="regInput1" class="reg-input" type="text" placeholder="请输入您的账号">
                                        <p ref="regBg1" class="bg0 reg-bg">账号为字母开头，6-12位的字母与数字组合！</p>
                                    </li>
                                    <li>
                                        <span>真实姓名：</span>
                                        <input ref="regInput2" class="reg-input" type="text" placeholder="请输入您的真实姓名">
                                        <p ref="regBg2" class="bg1 reg-bg">必须与您的银行账户名称相同，否则不能出款！</p>
                                    </li>
                                    <li>
                                        <span>登录密码：</span>
                                        <div class="pass-box">
                                            <input ref="regInput3" class="reg-input" type="password" name="" placeholder="请输入你新的密码">
                                            <a class="passshow"></a>
                                        </div>
                                        <p ref="regBg3" class="bg2 reg-bg">密码为6-12位字母与数字的组合！</p>
                                    </li>
                                    <li>
                                        <span>确认密码：</span>
                                        <div class="pass-box">
                                            <input ref="regInput4" class="reg-input" type="password" name="" placeholder="请输入您的密码">
                                            <a class="passshow"></a>
                                        </div>
                                        <p ref="regBg4" class="bg3 reg-bg"></p>
                                    </li>
                                    <li>
                                        <span>取款密码：</span>
                                        <div class="pass-box">
                                            <input ref="regInput5" class="reg-input" type="password" placeholder="请您输入4位纯数字取款密码">
                                            <a class="passshow"></a>
                                        </div>
                                        <p ref="regBg5" class="bg4 reg-bg">取款时要用到的密码，非常重要，请务必牢记！</p>
                                    </li>
                                </ul>
                                <button @click="goSubmit">提交</button>
                            </div>
                            <!-- 推广说明 -->
                            <div id="mmaindata" style="display:none">
                                <div class="content5">
                                    <p>推广功能说明</p>
                                    <ol>
                                        <li>只要您是公司的有效会员就可以在《会员中心--我的推广》直接发展属于您的客户，从中赚取返水。</li>
                                        <li>推广方式：只要在会员推广里面的右上角点击"添加下线或复制推广链接"，即可发展您的下线，设置好下线反水 即可从中盈利。</li>
                                        <li>代理模式会员必须是公司直属会员视为有效。公司保留对活动的最终解释</li>
                                    </ol>
                                    <p>佣金计算方式</p>
                                    <ul>
                                        <li>反水佣金=下线打码量*您设置抽下线的反水值</li>
                                        <li>返水计算方式：如会员当天视讯洗码10万，您设置抽取下线会员视讯1%的反水，则（100000 X 1.0% = 1000）当天产生盈利当天返到您的账户余额。您可以根据您下线会员的情况个性化的设置抽水值：</li>
                                    </ul>
                                    <table>
                                        <thead>
                                            <th>设置下限抽水</th>
                                            <th>您获取反水佣金</th>
                                            <th>下线反水金额</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in waterTable" :key="index">
                                                <td>当您设置：{{item.scale}}</td>
                                                <td>您返水{{item.mymoney}}元</td>
                                                <td>下线返水{{item.othermoney}}元</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>☀每日反水，下线反水佣金直接添加到您的账户余额，无需打码，随时提现。</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- 交易记录 结束 -->

                    <!-- 系统信息 开始 -->
                    <div id="mamain5" ref="rightBox5" class="mamain" style="display:none">
                        <div id="MACenter-content">
                            <div id="MNav">
                                <ul class="subMenu" id="subMenu5">
                                    <li style="background:#1d1d1d">
                                        <a>未读消息</a>
                                    </li>
                                    <li>
                                        <a>历史消息</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- 未读消息 -->
                            <div id="mmaindata">
                                <div class="wid" style="margin-top:40px;">
                                    <table class="mmain" border="1" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th style="width: 20%;">日期</th>
                                                <th colspan="2">内容</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="mcolor1" align="center" v-for="(item,index) in newMsg" :key="index">
                                                <td style="width: 20%;" class="" v-text="item.remark"></td>
                                                <td style="width: 75%;" class="mcontent" v-text="item.mess"></td>
                                                <!-- <td style="width: 5%;" class="mcontent" >
                                                    <input class="delete" type="button" @click="deleteNoRead(newMsg,index,item)" value="删除">
                                                </td> -->
                                            </tr>
                                            <!-- 都删除之后 没有数据 -->
                                            <tr v-if="newMsg.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="6">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- 未读消息 切换页 -->
                                    <div class="listButton">
                                        <b @click="pageSwitch(1,noReadPage.endpage,noReadPage.name)">首页</b>
                                        <b @click="pageSwitch(noReadPage.page - 1 ,noReadPage.endpage,noReadPage.name)">上一页</b>
                                        <span>当前页:
                                            <i>{{noReadPage.page}}</i>
                                        </span>
                                        <b @click="pageSwitch(parseInt(noReadPage.page) + 1,noReadPage.endpage,noReadPage.name)">下一页</b>
                                        <b @click="pageSwitch(noReadPage.endpage,noReadPage.endpage,noReadPage.name)">尾页</b>
                                        <span>共
                                            <i>{{noReadPage.endpage}}</i>页</span>
                                        <span>共
                                            <i>{{noReadPage.count}}</i>条</span>
                                    </div>
                                </div>
                            </div>
                            <!-- 历史消息 -->
                            <div id="mmaindata" style="display:none">
                                <div class="wid" style="margin-top:40px;">
                                    <table class="mmain" border="1" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th style="width: 48%;">日期</th>
                                                <th colspan="2">内容</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="mcolor1" align="center" v-for="(item,index) in historyMsg" :key="index">
                                                <td style="width: 48%;" class="" v-text="item.remark"></td>
                                                <td style="width: 48%;" class="mcontent" v-text="item.mess"></td>
                                                <td style="width: 4%;" class="mcontent">
                                                    <input class="delete" type="button" @click="deleteNoRead(historyMsg,index,item)" value="删除">
                                                </td>
                                            </tr>
                                            <!-- 都删除之后 没有数据 -->
                                            <tr v-if="historyMsg.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="6">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="listButton">
                                    <b @click="pageSwitch(1,historyPage.endpage,historyPage.name)">首页</b>
                                    <b @click="pageSwitch(historyPage.page - 1 ,historyPage.endpage,historyPage.name)">上一页</b>
                                    <span>当前页:
                                        <i>{{historyPage.page}}</i>
                                    </span>
                                    <b @click="pageSwitch(parseInt(historyPage.page) + 1,historyPage.endpage,historyPage.name)">下一页</b>
                                    <b @click="pageSwitch(historyPage.endpage,historyPage.endpage,historyPage.name)">尾页</b>
                                    <span>共
                                        <i>{{historyPage.endpage}}</i>页</span>
                                    <span>共
                                        <i>{{historyPage.count}}</i>条</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 系统信息 结束 -->

                    <!-- 个人信息 开始 -->
                    <div id="mamain6" ref="rightBox6" class="mamain" style="display:none">
                        <div id="MACenter-content">

                            <div id="MNav">
                                <ul class="subMenu" id="subMenu6">
                                    <li style="background:#1d1d1d">
                                        <a>已处理反馈</a>
                                    </li>
                                    <li>
                                        <a>未处理反馈</a>
                                    </li>

                                </ul>
                            </div>
                            <!-- 已处理反馈 -->
                            <div id="mmaindata">
                                <div class="wid">
                                    <h2 class="msubtitle">个人消息</h2>
                                    <table class="mmain" border="1">
                                        <thead>
                                            <tr>
                                                <th style="width: 33%;">发送时间</th>
                                                <th style="width: 33%;">消息</th>
                                                <th colspan="2">反馈</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in processed" :key="index">
                                                <td width="32%">{{item.remark}}</td>
                                                <td width="32%">{{item.mess}}</td>
                                                <td width="32%">{{item.backmess}}</td>
                                                <!-- <td style="width: 4%;" class="mcontent" >
                                                    <input class="delete" type="button" @click="deleteNoRead(processed,index,item)" value="删除">
                                                </td> -->
                                            </tr>

                                            <tr v-if="processed.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="6">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <!-- 切换页 -->
                                <div class="listButton">
                                    <b @click="pageSwitch(1,processedPage.endpage,processedPage.name)">首页</b>
                                    <b @click="pageSwitch(processedPage.page - 1 ,processedPage.endpage,processedPage.name)">上一页</b>
                                    <span>当前页:
                                        <i>{{processedPage.page}}</i>
                                    </span>
                                    <b @click="pageSwitch(parseInt(processedPage.page) + 1,processedPage.endpage,processedPage.name)">下一页</b>
                                    <b @click="pageSwitch(processedPage.endpage,processedPage.endpage,processedPage.name)">尾页</b>
                                    <span>共
                                        <i>{{processedPage.endpage}}</i>页</span>
                                    <span>共
                                        <i>{{processedPage.count}}</i>条</span>
                                </div>
                            </div>
                            <!-- 未处理反馈 -->
                            <div id="mmaindata" style="display:none">
                                <div class="wid">
                                    <h2 class="msubtitle">会员留言</h2>
                                    <!-- 新增留言 按钮 -->
                                    <button @click="newMessageActive">
                                        <span style="font-weight:bolder;font-size:initial;">+</span> 新增留言</button>
                                    <h2 class="msubtitle"></h2>
                                    <!-- 未反馈消息 表格 -->
                                    <table class="mmain" border="1">
                                        <thead>
                                            <tr>
                                                <th style="width: 200px;">留言时间</th>
                                                <th style="width: 233px;">内容</th>
                                                <th colspan="2">反馈</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,index) in untreated" :key="index">
                                                <td width="200px">{{item.remark}}</td>
                                                <td width="233px">{{item.mess}}</td>
                                                <td width="223px">{{item.backmess}}</td>
                                                <!-- <td width="5%" class="mcontent" >
                                                    <input class="delete" type="button" @click="deleteNoRead(untreated,index,item)" value="删除">
                                                </td> -->
                                            </tr>

                                            <tr v-if="untreated.length<=0">
                                                <td class="" height="70" style="text-align: center;" colspan="6">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- 新增留言 弹出框 开始 -->
                                    <div class="newMessage" v-show="newMessageShow" ref="newMessage">
                                        <div>
                                            <div class="title">新增留言
                                                <i @click="newMessageActive">x</i>
                                            </div>
                                            <p>留言内容</p>
                                            <textarea ref="textMsg" name="" id="" cols="30" rows="10" style="resize:none" placeholder="请输入不超过200字的留言"></textarea>
                                            <hr>
                                            <p class="flr">
                                                <button @click="sendMess">发送</button>
                                                <button @click="newMessageActive">取消</button>
                                            </p>
                                        </div>
                                    </div>
                                    <!-- 新增留言 弹出框 结束 -->

                                </div>
                                <!-- 切换页 -->
                                <div class="listButton">
                                    <b @click="pageSwitch(1,untreatedPage.endpage,untreatedPage.name)">首页</b>
                                    <b @click="pageSwitch(untreatedPage.page - 1 ,untreatedPage.endpage,untreatedPage.name)">上一页</b>
                                    <span>当前页:
                                        <i>{{untreatedPage.page}}</i>
                                    </span>
                                    <b @click="pageSwitch(parseInt(untreatedPage.page) + 1,untreatedPage.endpage,untreatedPage.name)">下一页</b>
                                    <b @click="pageSwitch(untreatedPage.endpage,untreatedPage.endpage,untreatedPage.name)">尾页</b>
                                    <span>共
                                        <i>{{untreatedPage.endpage}}</i>页</span>
                                    <span>共
                                        <i>{{untreatedPage.count}}</i>条</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 个人信息 结束 -->

                    <!-- 游戏公告 开始 -->
                    <div id="mamain7" ref="rightBox7" class="mamain" style="display:none">
                        <div id="MACenter-content">

                            <div id="MNav">
                                <ul class="subMenu" id="subMenu7">
                                    <li style="background:#1d1d1d">
                                        <a>游戏公告</a>
                                    </li>
                                </ul>
                            </div>

                            <div id="mmaindata">
                                <div class="wid" style="margin-top:40px;">
                                    <!-- 游戏公告 -->
                                    <table class="mmain" border="1">
                                        <thead>
                                            <tr>
                                                <th nowrap="" style="width: 50%;">No.</th>
                                                <th nowrap="">内容</th>
                                            </tr>
                                        </thead>
                                        <tbody id="mmarqueecontent">
                                            <tr v-for="(item,index) in notice" :key="index">
                                                <td nowrap="" style="width: 50%;" v-text="item.remark"></td>
                                                <td nowrap="" v-text="item.mess"></td>
                                            </tr>
                                            <tr align="center" v-if="notice.length <= 0">
                                                <td class="" height="70" style="text-align: center;" colspan="2">未查询到相关记录</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- 游戏公告 结束 -->

                </div>
            </div>

        </div>
        <div id="MAFoot">Copyright © 威尼斯人娱乐场 Reserved</div>
    </div>


</template>

<script>
import axios from "axios";
export default {
    name: "index",
    data() {
        return {
            // 我的账户名
            username: "",
            // 我的账户右侧列表
            myAccount: [],
            // 我的账户 底部列表
            myAccountBot: [
                {
                    data: "08/09~08/10",
                    bet: "0"
                },
                {
                    data: "08/09~08/10",
                    bet: "0"
                },
                {
                    data: "08/09~08/10",
                    bet: "0"
                },
                {
                    data: "08/09~08/10",
                    bet: "0"
                }
            ],
            // 我的账户 查询余额的列表
            myAccountBotTabel: [
                {
                    title: "彩票类",
                    money: "0.00"
                },
                {
                    title: "视讯类",
                    money: "0.00"
                },
                {
                    title: "机率类",
                    money: "0.00"
                },
                {
                    title: "AG视讯",
                    money: "0.00"
                },
                {
                    title: "AG捕鱼",
                    money: "0.00"
                },
                {
                    title: "AG电子",
                    money: "0.00"
                },
                {
                    title: "OG",
                    money: "0.00"
                },
                {
                    title: "BB体育",
                    money: "0.00"
                },
                {
                    title: "BB彩票",
                    money: "0.00"
                },
                {
                    title: "BB视讯",
                    money: "0.00"
                },
                {
                    title: "BB电子",
                    money: "0.00"
                },
                {
                    title: "BB3D厅",
                    money: "0.00"
                },
                {
                    title: "MG电子",
                    money: "0.00"
                },
                {
                    title: "新MG电子",
                    money: "0.00"
                },
                {
                    title: "PP电子",
                    money: "0.00"
                },
                {
                    title: "CMD体育",
                    money: "0.00"
                },
                {
                    title: "VG棋牌",
                    money: "0.00"
                },
                {
                    title: "CQ9电子",
                    money: "0.00"
                },
                {
                    title: "OG体育",
                    money: "0.00"
                },
                {
                    title: "BG视讯",
                    money: "0.00"
                },
                {
                    title: "BG捕鱼",
                    money: "0.00"
                },
                {
                    title: "BG电子",
                    money: "0.00"
                },
                {
                    title: "PNG电子",
                    money: "0.00"
                },
                {
                    title: "OPUS",
                    money: "0.00"
                },
                {
                    title: "沙巴体育",
                    money: "0.00"
                },
                {
                    title: "PT电子",
                    money: "0.00"
                },
                {
                    title: "MWG电子",
                    money: "0.00"
                },
                {
                    title: "LEBO视讯",
                    money: "0.00"
                },
                {
                    title: "AB视讯",
                    money: "0.00"
                }
            ],
            // 我的账户 余额列表 显示与隐藏
            dateListShow: false,

            // 我的账户 余额列表 手动切换 总余额
            allbalance: "",

            // 我的账户 修改登录密码框 显示/隐藏
            loginPassShow: false,
            // 我的账户 修改取款密码框 显示/隐藏
            qkpassShow: false,
            // 我的账户 安全中心
            binging: [
                {
                    title: "支付宝",
                    placeholder: "请输入支付宝账号",
                    ck: "alipaynum"
                },
                {
                    title: "联系电话",
                    placeholder: "请输入联系电话",
                    ck: "phone"
                },
                {
                    title: "QQ",
                    placeholder: "请输入QQ",
                    ck: "qq"
                },
                {
                    title: "微信",
                    placeholder: "请输入微信号",
                    ck: "wx"
                },
            ],
            // 我的账户 安全中心 获取绑定的银行卡
            safeBankList: "",
            // 我的账户 绑定银行卡 正则是否通过
            bank1: "",
            bank2: "",
            bank3: "",
            // 银行交易 自动/手动余额切换
            handShow: true,
            // 银行交易 账户余额
            bankBalance: [
                {
                    left: "账户余额",
                    money: ""
                }
            ],
            // 银行交易 额度转换 左侧游戏列表
            limitLeft: [],
            // 银行交易 额度转换 右侧下拉列表
            limitSelect: [],
            // 银行交易 线上存款 最大最小充值
            minmoney: "",
            min_wx_money: "", //微信
            min_zfb_money: "", //支付宝
            // 银行交易 线上存款 列表
            depositList: [
                {
                    // class:'listh1',
                    text: "微信充值",
                    src: require("../../static/images/memberCenter/wx.png")
                },
                {
                    // class:'listh1',
                    text: "支付宝充值",
                    src: require("../../static/images/memberCenter/zfb.png")
                },
                {
                    // class:'listh1',
                    text: "银行卡充值",
                    src: require("../../static/images/memberCenter/xianshang.png")
                },
                {
                    // class:'listh1',
                    text: "转账服务",
                    src: require("../../static/images/memberCenter/wxzfb.png")
                },
                {
                    // class:'listh1',
                    text: "QQ钱包",
                    src: require("../../static/images/memberCenter/QQ.png")
                },
                {
                    // class:'listh1',
                    text: "网银支付",
                    src: require("../../static/images/memberCenter/wangyin.png")
                },
                {
                    // class:'listh1',
                    text: "银联扫码",
                    src: require("../../static/images/memberCenter/yinlian.png")
                },
                {
                    // class:'listh1',
                    text: "京东扫码",
                    src: require("../../static/images/memberCenter/jd.png")
                }
            ],
            payPopShow: false,
            // 线上存款 支付时是否微信支付
            imgShow: false,
            // 线上存款 支付方式
            payWay: "",
            // 线上存款是 记录种类
            pay_type: "",

            // 微信支付二维码
            erweima: "",

            // 银行交易 线上存款 银行卡充值所需的值
            active: "true",
            bank_card_nav_index : 0,
            bank_card_List: [],
            remittance_methods: false,
            remittance_methods_text: "请选择汇款方式",
            remittance_methods_id: "",

            // 线上取款
            realname: "",
            // 线上取款的出款银行
            bankList: [
                {
                    bank: "请选择银行",
                    val: "-1"
                },
                {
                    bank: "中国工商银行",
                    val: "1"
                },
                {
                    bank: "中国人民银行",
                    val: "2"
                },
                {
                    bank: "中国农业银行",
                    val: "3"
                },
                {
                    bank: "中国银行",
                    val: "4"
                }
            ],
            // 交易记录 顶部导航
            tradingNav: [],
            // 交易记录 具体记录
            tradingRecord: [],
            // 交易记录 往来记录
            correspondence: "",
            // 交易记录的未处理反馈
            untreated: [],
            // 交易记录的已处理反馈

            // 我的推广 是否是代理用户登录
            agent: window.sessionStorage.getItem("agent"),
            // 我的推广 推广地址
            tgdz: "",
            // 我的推广 下级管理
            subUser: [],

            // 我的推广 添加下级的验证变量
            Isval1: false,
            Isval2: false,
            Isval3: false,
            Isval4: false,
            Isval5: false,

            // 我的推广 抽水的详细表格
            waterTable: [
                {
                    scale: "1.0", //比例
                    mymoney: "1000", //我获得的
                    othermoney: "0" //下线获得的
                },
                {
                    scale: "0.5",
                    mymoney: "500",
                    othermoney: "500"
                },
                {
                    scale: "0.0",
                    mymoney: "0",
                    othermoney: "1000"
                }
            ],

            // 个人信息 已处理反馈
            processed: [],
            // 系统消息
            newMsg: [],
            // 系统消息 未读消息 切换页
            noReadPage: [],
            // 历史消息
            historyMsg: [],

            // 个人反馈 未处理反馈 留言弹出框 显示/隐藏
            newMessageShow: false,
            // 游戏公告
            notice: "",

            // 投注记录的头部导航和分页器
            AG: "",
            MG: "",
            GD: "",
            CQ9: "",
            IM2: "",
            IM101: "",
            IM102: "",
            IM201: "",
            historyPage: "",
            moneyPage: "",
            AGPage: "",
            MGPage: "",
            CQ9Page: "",
            GDPage: "",
            IM2Page: "",
            IM101Page: "",
            IM102Page: "",
            IM201Page: "",
            // 个人信息 未处理反馈 分页器
            untreatedPage: "",
            // 个人信息 已处理反馈 分页器
            processedPage: "",
            // 往来记录 分页器
            correspondencePage: "",

            // 查询时返回的全部游戏列表和当前列表的 页数
            info: "",
            page: "",

            // 返回所有记录的查询时间
            startTime: "",
            endTime: "",
            minTime: ""
        };
    },
    components: {},
    methods: {
        // 我的账户 余额列表 显示与隐藏
        myDateListShow() {
            this.dateListShow = !this.dateListShow;
        },
        // 我的账户 刷新余额
        shuaxin() {
            let that = this;
            let mymoney = this.$refs.mymoney;
            let shuaxin = this.$refs.shuaxin;
            let user = window.sessionStorage.getItem("login_user");
            shuaxin.setAttribute("disabled", true);
            shuaxin.innerHTML = "30S";
            mymoney.forEach((item, index) => {
                item.innerHTML = "加载中..";
            });

            that.$post("person/index/userinfo",{
                user: user
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                let money = [];
                // 获取到刷新之后的最新的余额
                that.myAccount = res;
                // 刷新之后给对应的余额赋值
                for (const i in that.myAccount) {
                    money.push(that.myAccount[i].money);
                    mymoney.forEach((item, index) => {
                        item.innerHTML = money[index];
                    });
                }
            })

            let mytimer = setInterval(function() {
                shuaxin.innerHTML = parseFloat(shuaxin.innerHTML) - 1 + "S";
                if (parseFloat(shuaxin.innerHTML) === 0) {
                    shuaxin.removeAttribute("disabled");
                    shuaxin.innerHTML = "刷新";
                    clearInterval(mytimer);
                }
            }, 1000);
        },

        // 我的账户 安全中心绑定事件/解绑事件
        // 绑定事件、 解绑事件
        bingingList(event, typed, ck, index, id) {
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            let e = event.currentTarget.parentNode.children[1]; //当前点击所在的input
            let cv = e.value; //input的内容
            let reg;

            // 支付宝 手机 QQ验证正则
            if (index == 0) {
                reg = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/;
                if (!reg.test(e.value)) {
                    alert("您输入的账号不符合要求，请重新检查输入！");
                    return;
                }
            } else if (index == 1) {
                reg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,1,2,3,5,6,7,8])|(19[7]))\d{8}$/;
                if (!reg.test(e.value)) {
                    alert("手机号格式有误，请重新检查输入！");
                    return;
                }
            } else if (index == 2) {
                reg = /^[1-9]\d{4,10}$/;
                if (!reg.test(e.value)) {
                    alert("QQ号格式有误，请重新检查输入！");
                    return;
                }
            }

            // 1是绑定
            if (typed == 1) {
                that.$post("index/user/updateUser",{
                    user: user,
                    typed: typed,
                    ck: ck,
                    cv: cv
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    if (res == 0) {
                        // 失败
                        alert("绑定失败！");
                    } else if (res == 1) {
                        alert("绑定成功！");
                        e.setAttribute("disabled", true);
                    }
                }).catch(err=>{
                    console.log(err);
                })
            } else if (typed == 2) {
                // 是否有绑定值 没有无法解绑
                if (!e.disabled) {
                    alert("当前没有绑定，无法解绑！");
                    return;
                }
                // 是否确定解绑
                let r = confirm("确定解绑?");
                if (r == true) {
                    // axios 请求
                    that.$post("index/user/updateUser",{
                        user: user,
                        typed: typed,
                        ck: ck,
                        cv: cv
                    }).then(res=>{
                        // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                        if (res == -1 || res == -2) {
                            that.common.isOnline(that, res);
                            return;
                        }
                        if (data == 0) {
                            // 失败
                            alert("解绑失败！");
                        } else if (data == 1) {
                            alert("解绑成功！");
                            e.value = "";
                            e.removeAttribute("disabled");
                        } else if (data == 2) {
                            alert("此银行卡已绑定账户！");
                            return;
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }
            }
        },

        // 我的账户 修改登录密码框 显示/隐藏
        changeLoginPass() {
            this.loginPassShow = !this.loginPassShow;
            // 修改登录密码时 取款密码隐藏
            this.qkpassShow = false;
        },
        // 我的账户 修改取款密码框 显示/隐藏
        changeQKPass() {
            this.qkpassShow = !this.qkpassShow;
            // 修改取款密码时 登录密码隐藏
            this.loginPassShow = false;
        },
        // 我的账户 登入密码修改
        loginPass() {
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            let oldPass = this.$refs.old_password; //旧密码
            let newPass = this.$refs.password2; //新密码
            let realNewpass = this.$refs.password3; //确认新密码
            if (realNewpass.value !== newPass.value) {
                alert("两次密码输入的值不相同，请仔细检查！");
                return;
            } else if (oldPass.value == newPass.value) {
                alert("新密码不能与旧密码相同！");
                return;
            }
            // axios 请求
            that.$post("person/index/passUpdate",{
                user: user,
                newpass: newPass.value,
                oldpass: oldPass.value,
                typed: 1
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                if (res == 0) {
                    alert("修改密码失败！原密码错误！");
                } else if (res == 1) {
                    alert("修改密码成功！");
                    oldPass.value = "";
                    newPass.value = "";
                    realNewpass.value = "";
                    window.sessionStorage.removeItem("login_user");
                    that.$router.push({ name: "index" });
                } else if (res == 2) {
                    alert("修改密码失败！新密码与原密码相同！");
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        // 我的账户 取款密码修改
        getPass() {
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            let oldPass = this.$refs.old_password1; //旧密码
            let newPass = this.$refs.password1; //新密码
            let newPass2 = this.$refs.newPassSecond; //新密码
            let reg5 = /^\d{4}$/;
            if (!reg5.test(oldPass.value) || !reg5.test(newPass.value)) {
                alert("取款密码为四位数字！请仔细检查");
                return;
            }

            if (oldPass.value == newPass.value) {
                alert("新密码不能与旧密码相同！");
                return;
            } else if (newPass.value != newPass2.value) {
                alert("两次密码不一致，请重新输入！");
                return;
            }
            // axios 请求
            that.$post("person/index/passUpdate",{
                user: user,
                newpass: newPass.value,
                oldpass: oldPass.value,
                typed: 2
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                if (res == 0) {
                    alert("修改密码失败！原密码错误！");
                } else if (res == 1) {
                    alert("修改密码成功！");

                    oldPass.value = "";
                    newPass.value = "";
                    newPass2.value = "";
                    // 修改密码框
                    that.qkpassShow = false;
                } else if (res == 2) {
                    alert("修改密码失败！新密码与原密码相同！");
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        // 我的账户 绑定银行卡 正则判断
        bankReg() {
            let that = this;
            let input1 = this.$refs.input1, //银行卡
                input2 = this.$refs.input2, //开户行省
                input3 = this.$refs.input3, //开户行市
                pass1 = this.$refs.pass1, //是否匹配正确
                pass2 = this.$refs.pass2, //是否匹配正确
                pass3 = this.$refs.pass3; //是否匹配正确
            // 银行卡号正则
            input1.onblur = function() {
                let reg1 = /^([1-9]{1})(\d{14}|\d{18})$/;
                if (this.value == "") {
                    that.bank1 = false;
                    pass1.innerHTML =
                        "<i class='iconfont icon-guanbi' style='font-weight:bold; color:red;'></i>";
                } else if (!reg1.test(this.value)) {
                    that.bank1 = false;
                    pass1.innerHTML =
                        "<i class='iconfont icon-guanbi' style='font-weight:bold; color:red;'></i>";
                } else {
                    that.bank1 = true;
                    pass1.innerHTML =
                        "<i class='iconfont icon-duihaocheckmark17' style='font-weight:bold; color:#22bd22;'></i>";
                }
            };
            // 开户行省正则
            input2.onblur = function() {
                if (this.value == "") {
                    that.bank2 = false;
                    pass2.innerHTML =
                        "<i class='iconfont icon-guanbi' style='font-weight:bold; color:red;'></i>";
                } else {
                    that.bank2 = true;
                    pass2.innerHTML =
                        "<i class='iconfont icon-duihaocheckmark17' style='font-weight:bold; color:#22bd22;'></i>";
                }
            };
            // 开户行市正则
            input3.onblur = function() {
                if (this.value == "") {
                    that.bank3 = false;
                    pass3.innerHTML =
                        "<i class='iconfont icon-guanbi' style='font-weight:bold; color:red;'></i>";
                } else {
                    that.bank3 = true;
                    pass3.innerHTML =
                        "<i class='iconfont icon-duihaocheckmark17' style='font-weight:bold; color:#22bd22;'></i>";
                }
            };
        },

        // 我的账户 绑定银行卡 提交绑定
        bindBank() {
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            let select = this.$refs.select;
            let index = select.selectedIndex; //option的下标
            let val = select.options[index].text; //option的具体值 (xx银行)
            let realname = this.realname;
            let input1 = this.$refs.input1;
            let input2 = this.$refs.input2;
            let input3 = this.$refs.input3;

            if (this.bank1 && this.bank2 && this.bank3) {
                that.$post("index/user/updateUser",{
                    bank: val,
                    user: user,
                    realname: realname,
                    bankcard: input1.value,
                    province: input2.value,
                    city: input3.value
                }).then(res=>{
                     // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    if (res == 0) {
                        alert("绑定失败，请重新检查！");
                    } else if (res == 1) {
                        alert("绑定成功！");
                        input1.value = "";
                        input2.value = "";
                        input3.value = "";
                    } else if (res == 2) {
                        alert("此银行卡已被绑定！");
                        return;
                    } else if (res == 3) {
                        alert("银行卡最多绑定3张，如需解绑请联系客服！");
                        return;
                    }
                }).catch(err=>{
                    console.log(err);
                })
            } else {
                alert("输入有误，请检查后重新输入！");
            }
        },


        // 银行交易 额度转换 手动转换
        selfMotion2(event) {
            let user = window.sessionStorage.getItem("login_user");
            let allbalance = event.currentTarget.parentNode.children[0]; //总余额的内容
            let e = event.currentTarget; //更新按钮
            let transitionMoney = this.$refs.transitionMoney; //其他余额项
            allbalance.innerHTML = "加载中.."; //未请求之前显示 加载中
            e.innerHTML = "30S"; //在30秒内禁止用户再次操作
            e.setAttribute("disabled", true);
            // 其他余额都显示加载中
            transitionMoney.forEach((item, index) => {
                item.innerHTML = "加载中..";
            });

            this.$post("person/index/userinfo",{
                user: user
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                let money = [];
                // 获取到刷新之后的最新的余额
                this.myAccount = res;
                allbalance.innerHTML = res.summoney.money;
                // 刷新之后给对应的余额赋值
                for (const i in this.myAccount) {
                    money.push(this.myAccount[i].money);
                    transitionMoney.forEach((item, index) => {
                        item.innerHTML = money[index];
                    });
                }
            }).catch(err=>{
                console.log(err);
            })

            let mytimer = setInterval(function() {
                e.innerHTML = parseFloat(e.innerHTML) - 1 + "S";
                if (parseFloat(e.innerHTML) === 0) {
                    e.removeAttribute("disabled");
                    e.innerHTML = "刷新";
                    clearInterval(mytimer);
                }
            }, 1000);
        },
        // 银行交易 额度转换 确认提交
        transition() {
            let user = window.sessionStorage.getItem("login_user");
            let rollOut = this.$refs.rollOut.value;
            let shiftTo = this.$refs.shiftTo.value;
            let rollMoney = this.$refs.rollMoney.value;
            let typed;
            let platform;
            let reg = /^\d+$/;
            if (shiftTo == rollOut) {
                alert("两次输入值不能相同，请重新输入！");
                return;
            }
            if (rollOut && shiftTo && rollMoney && reg.test(rollMoney)) {
                //如果转入的value == "总余额" 则需要的是转出的值 反之一样
                if (rollOut == "总余额") {
                    typed = "INMONEY";
                    platform = shiftTo;
                } else if (shiftTo == "总余额") {
                    typed = "OUTMONEY";
                    platform = rollOut;
                }
                this.$post("game/game/moneyUpdate",{
                    user: user,
                    money: rollMoney,
                    platform: platform,
                    typed: typed
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    if (res == 1) {
                        //成功
                        alert("转换成功！");
                        window.location.reload();
                    } else if (res == 0) {
                        //转账失败
                        alert("转换失败！请联系客服！");
                    } else if (res == 2) {
                        //账户余额不足
                        alert("转换失败！账户余额不足！");
                    } else if (res == 3) {
                        //平台余额不足
                        alert("转换失败！平台余额不足！");
                    }
                }).catch(err=>{
                    console.log(err);
                })
            } else {
                alert("您输入的金额有误，请重新输入！");
            }
        },
        //银行交易 额度转换 右侧转入转出 实时切换
        transitionPlatform(event) {
            let rollOut = this.$refs.rollOut;
            let shiftTo = this.$refs.shiftTo;
            let e = event.currentTarget;
            const index = rollOut.options.length - 1;
            // 转出
            if (e.id == "from") {
                if (rollOut.options[index] != index - 1) {
                    shiftTo.options[index].selected = true;
                    return;
                }
            } else if (e.id == "to") {
                // 转入
                if (shiftTo.options[index] != index - 1) {
                    rollOut.options[index].selected = true;
                    return;
                }
            }
        },
        // 额度转换 进入游戏按钮
        goin(a, b, c) {
            let that = this;
            this.common.goin(a, b, c, that);
        },
        gocunkuan() {
            let index = 2,
                num = 1,
                liArr = [],
                rightArr = [];
            // 获取左侧导航的li 和 对应的右侧 内容区域的div
            liArr.push(
                this.$refs.li1,
                this.$refs.li2,
                this.$refs.li3,
                this.$refs.li4,
                this.$refs.li5,
                this.$refs.li6,
                this.$refs.li7
            );
            rightArr.push(
                this.$refs.rightBox1,
                this.$refs.rightBox2,
                this.$refs.rightBox3,
                this.$refs.rightBox4,
                this.$refs.rightBox5,
                this.$refs.rightBox6,
                this.$refs.rightBox7
            );
            let rightLiArr = [
                ...rightArr[index - 1].querySelectorAll("#MNav li")
            ]; //获取进入页面时 对应右侧内容的头部导航（li）
            let contentBox = rightArr[index - 1].querySelectorAll("#mmaindata");
            liArr[index - 1].onclick();
            // 默认所有的li和a以及右部分内容 消失
            rightLiArr.forEach((newitem, newindex) => {
                // 默认导航的li背景颜色不存在
                newitem.style.background = "none";
                contentBox[newindex].style.display = "none";
                // 默认给第num个添加背景色 并且显示内容
                rightLiArr[num].style.background = "#1d1d1d";
                contentBox[num].style.display = "block";
                newitem.onclick = function() {
                    // 点击时清空所有的背景色 和 显示的内容
                    for (let k = 0; k < rightLiArr.length; k++) {
                        contentBox[k].style.display = "none";
                        rightLiArr[k].style.background = "none";
                    }
                    // 点击当前的添加背景色和内容
                    newitem.style.background = "#1d1d1d";
                    contentBox[newindex].style.display = "block";
                };
            });
            window.sessionStorage.setItem("index", 2);
            window.sessionStorage.setItem("num", 1);
        },
        // 线上存款 支付框显示
        payShow(index, event) {
            if(index == 0){
                // 微信支付
                this.minmoney = this.min_wx_money;
                this.pay_type = "wechat"
            }else if (index == 1) {
                // 支付宝支付
                this.imgShow = false;
                this.minmoney = this.min_zfb_money;
                this.pay_type = "apply"
            }else if(index == 2){
                // 银行卡充值
                this.imgShow = false;
                this.minmoney = 10;
                this.pay_type = "bank"
            }
            if (index > 2) {
                this.imgShow = false;
                alert("此支付方式暂时维护中！请暂时用其他的支付方式！");
                return;
            }
            this.payWay = event.currentTarget.children[1].innerHTML;
            this.payPopShow = true;
            window.sessionStorage.setItem("pay", index);
        },
        // 线上存款 支付框关闭
        payClose() {
            // 输入的金额
            let money = this.$refs.money;
            this.payPopShow = false;
            money.value = "";
            window.sessionStorage.removeItem("pay");
            this.imgShow = false;
        },
        // 银行交易 线上存款 银行卡充值 改变支付方式
        bankcard_methods(){
            let bank_card_methods = this.$refs.bank_card_methods;
            this.remittance_methods_text = bank_card_methods.options[bank_card_methods.selectedIndex].value;
            this.remittance_methods_id =  bank_card_methods.options[bank_card_methods.selectedIndex].id
        },
        // 线上存款 支付按钮
        goPay() {
            let that = this
            let index = window.sessionStorage.getItem("pay");
            let user = window.sessionStorage.getItem("login_user");
            let input = this.$refs.money;
            let money = input.value;
            let minmoney = parseFloat(this.minmoney);
            
            // 没有支付金额时 无法支付
            if (input.value == "") {
                alert("请输入支付金额！");
                return;
            } else if (parseFloat(input.value) < minmoney || parseFloat(input.value)  > 10000) {
                alert("单笔金额不能小于"+minmoney+"元且不能大于10000元！");
                return;
            }
             if (index == 0) {
                // 微信支付
                that.$get("public/wxpay/example/native.php",{
                    user: user,
                    money: money
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    that.$refs.wx_img.innerHTML = '<img alt="余额充值" src="http://148.72.206.211:803/public/wxpay/example/qrcode.php?data='+res+'" style="width:150px;height:150px;"/>'
                }).catch(err=>{
                    console.log(err);
                })
                this.imgShow = true;
            }else if (index == 1) {
                // 支付宝
                var t = new Date().getTime();
                this.$refs.WIDsubject.value = "余额充值"
                this.$refs.WIDout_trade_no.value = user + t
                this.$refs.WIDbody.value = user
                this.$refs.WIDtotal_amount.value = money
                this.$refs.form.submit()
                this.imgShow = false;
            } else if(index == 2){
                // 银行卡支付
                let r_user = this.$refs.bankcard_username,
                    idcard = this.$refs.bankcard_card,
                    addr = this.$refs.bankcard_addr,
                    method = this.remittance_methods_text,
                    my_name = this.$refs.my_name ? this.$refs.my_name : null,
                    my_addr = this.$refs.my_addr ? this.$refs.my_addr : null,
                    my_otoers_methods = this.$refs.my_otoers_methods ? this.$refs.my_otoers_methods : null,
                    remark = "";
                
                if(this.remittance_methods_id == "" || this.remittance_methods_id === "default"){
                    alert("请选择汇款方式")
                    return
                }

                if(my_name && my_name.value.trim() == ""){
                    alert("请输入汇款人姓名")
                    return
                }else{
                    remark += my_name ?  my_name.value : "";
                }
                if(my_addr && my_addr.value.trim() == ""){
                    alert("请输入汇款地点")
                    return
                }else{
                    remark += my_addr ?  my_addr.value : "";
                }
                if(my_otoers_methods && my_otoers_methods.value.trim() == ""){
                    alert("请输入其他汇款方式")
                    return
                }else{
                    remark += my_otoers_methods ?  my_otoers_methods.value : "";
                }
                // axios 请求
                that.$post("person/index/huiMoney",{
                    user: user,
                    r_user: r_user[0].innerHTML,
                    idcard: idcard[0].innerHTML,
                    addr: addr[0].innerHTML,
                    method: method,
                    money: money,
                    remark: remark
                }).then(res=>{
                    alert(res.msg)
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        // 银行账户 线上取款 提现
        alipayzh() {
            let that = this
            let user = window.sessionStorage.getItem("login_user"); //用户名
            var zfb = this.$refs.get_account.value; //账户
            var money = this.$refs.money2.value; //金额
            let pass = this.$refs.pass.value; //密码
            // 查看流水 提醒用户
            that.$post("index/user/tixian",{
                user: user,
                money: money
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                // 弹出手续费信息
                if(res.code != 1){
                    let next = window.confirm(res.mess);
                    if(next !== true)return
                }
                // axios 请求
                that.$post("public/alipay/pagepay/zz.php",{
                    user: user,
                    money : money,
                    zh: zfb,
                    pass: pass,
                    ip: res.ip,
                    free: res.free
                }).then(res_2=>{
                    // 如果res_2为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res_2 == -1 || res_2 == -2) {
                        that.common.isOnline(that, res_2);
                        return;
                    }
                    alert(res_2);
                }).catch(err=>{
                    alert("提现成功")
                })
            }).catch(err=>{
                console.log(err);
            })
        },

        // 线上取款 清空输入值
        empty() {
            this.$refs.get_account.value = ""; //支付宝账号
            this.$refs.money.value = ""; //取款金额
            this.$refs.pass.value = ""; //取款密码
        },

        // 新增留言 弹出框显示 / 隐藏
        newMessageActive() {
            this.newMessageShow = !this.newMessageShow;
            if (this.newMessageShow == false) {
                this.$refs.textMsg.innerHTML = "";
            }
        },
        // 投注记录 点击显示对应记录列表
        tableShow() {
            let that = this;
            let titleNav = this.$refs.titleNav;
            let titleList = document.getElementsByClassName("titleList");

            titleNav[0].children[0].style.color = "red";
            titleList[0].style.display = "table";
            titleNav.forEach((item, index) => {
                item.onclick = function() {
                    for (let i = 0; i < titleList.length; i++) {
                        titleNav[i].children[0].style.color = "#000";
                        titleList[i].style.display = "none";
                    }
                    this.children[0].style.color = "red";
                    titleList[index].style.display = "table";
                    switch (titleNav[index].children[0].innerHTML) {
                        case "Ag":
                            that.page = that.tradingNav.Ag.sub.page;
                            break;
                        case "Mg":
                            that.page = that.tradingNav.Mg.sub.page;
                            break;
                        case "Gd":
                            that.page = that.tradingNav.Gd.sub.page;
                            break;
                        case "Cq9":
                            that.page = that.tradingNav.Cq9.sub.page;
                            break;
                        case "IM2":
                            that.page = that.tradingNav.IM2.IM2Page;
                            break;
                        case "IM101":
                            that.page = that.tradingNav.IM101.IM101Page;
                            break;
                        case "IM102":
                            that.page = that.tradingNav.IM102.IM102Page;
                            break;
                        case "IM201":
                            that.page = that.tradingNav.IM201.IM201Page;
                            break;

                        default:
                            break;
                    }
                };
            });
        },

        // 交易记录 投注记录的切换页
        PageBet(page, endpage, name, starttime, endtime) {
            let user = window.sessionStorage.getItem("login_user");
            let that = this;
            if (page <= 0) return;
            if (page > endpage) return;
            that.$post("person/index/pageRemarkSelect",{
                page: page,
                user: user,
                name: name,
                starttime: starttime,
                endtime: endtime
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                that.page = res.page;
                switch (name) {
                    case "Ag":
                        that.AG = res.info;
                        that.AGPage = res.page;
                        break;
                    case "Mg":
                        that.MG = res.info;
                        that.MGPage = res.page;
                        break;
                    case "Gd":
                        that.GD = res.info;
                        that.GDPage = res.page;
                        break;
                    case "Cq9":
                        that.CQ9 = res.info;
                        that.CQ9Page = res.page;
                        break;
                    case "2":
                        that.IM2 = res.info;
                        that.IM2Page = res.page;
                        break;
                    case "101":
                        that.IM101 = res.info;
                        that.IM101Page = res.page;
                        break;
                    case "102":
                        that.IM102 = res.info;
                        that.IM102Page = res.page;
                        break;
                    case "201":
                        that.IM201 = res.info;
                        that.IM201Page = res.page;
                        break;

                    default:
                        break;
                }
            }).catch(err=>{
                console.log(err);
            })
        },

        // 我的推广 下级管理 改变抽水比例
        subordinateChange(active) {
            if (active == 1) {
                // 下级管理
                let scale1 = this.$refs.scale1;
                let selected1 = this.$refs.selected1;
                selected1.forEach((item, index) => {
                    let num = item.selectedIndex; // selectedIndex代表的是你所选中项的num
                    let value = item.options[num].value; //当前改变的比例值
                    scale1[index].innerHTML = value;
                });
            } else if (active == 2) {
                // 默认设置
                let scale2 = this.$refs.scale2;
                let selected2 = this.$refs.selected2;
                selected2.forEach((item, index) => {
                    let num = item.selectedIndex; // selectedIndex代表的是你所选中项的num
                    let value = item.options[num].value; //当前改变的比例值
                    scale2[index].innerHTML = value;
                });
            }
        },
        // 推广地址 复制邀请码
        copyMSG(event) {
            let textarea = this.$refs.noShow; //获取textarea
            let text = this.$refs.code.innerHTML; //获取i标签的内容
            textarea.value = text; //textarea的value = 内容
            textarea.select(); //让textarea选中
            document.execCommand("copy"); //执行复制命令
            alert("复制成功！");
        },
        // 我的推广 添加下级 验证
        reg() {
            let that = this;
            let reginput1 = this.$refs.regInput1,
                reginput2 = this.$refs.regInput2,
                reginput3 = this.$refs.regInput3,
                reginput4 = this.$refs.regInput4,
                reginput5 = this.$refs.regInput5,
                regBg1 = this.$refs.regBg1,
                regBg2 = this.$refs.regBg2,
                regBg3 = this.$refs.regBg3,
                regBg4 = this.$refs.regBg4,
                regBg5 = this.$refs.regBg5;
            //登录账号
            reginput1.onblur = function() {
                let val0 = this.value;
                let reg = /^[A-Za-z]{1}[A-Za-z0-9]{5,12}/;
                // axios 请求
                that.$post("index/user/isuser",{
                    user: val0
                }).then(res=>{
                    if (
                        !reg.test(val0) ||
                        val0.length < 6 ||
                        val0.length > 12
                    ) {
                        regBg1.innerHTML =
                            "账号必须为6-12位的数字和字母的组合";
                        regBg1.style.color = "red";
                        that.Isval1 = false;
                        return false;
                    } else if (data == 2) {
                        regBg1.innerHTML = "用户名已被注册！";
                        regBg1.style.color = "red";
                        that.Isval1 = false;
                        return false;
                    } else {
                        regBg1.innerHTML =
                            "账号必须为6-12位的数字和字母的组合";
                        regBg1.style.color = "#22bd22";
                        that.Isval1 = true;
                        return true;
                    }
                }).catch(err=>{
                    console.log(err);
                })
            };
            // 真实姓名
            reginput2.onblur = function() {
                let val1 = this.value;
                if (val1 == "") {
                    regBg2.style.color = "red";
                    regBg2.innerHTML = "请输入您的真实姓名";
                    that.Isval2 = false;
                    return false;
                } else {
                    regBg2.style.color = "#22bd22";
                    regBg2.innerHTML =
                        "必须与您的银行账户名称相同，否则不能出款！";
                    that.Isval2 = true;
                    return true;
                }
            };
            // 登录密码
            reginput3.onblur = function() {
                let val2 = this.value;
                let reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
                if (val2.length < 6) {
                    regBg3.style.color = "red";
                    regBg3.innerHTML = "密码长度不能少于6个字符！";
                    that.Isval3 = false;
                    return false;
                } else if (!reg2.test(val2) || val2.length > 12) {
                    regBg3.style.color = "red";
                    regBg3.innerHTML = "密码必须是6-12位字母与数字的组合！";
                    that.Isval3 = false;
                    return false;
                } else {
                    regBg3.style.color = "#22bd22";
                    regBg3.innerHTML = "密码必须是6-12位字母与数字的组合！";
                    that.Isval3 = true;
                    return true;
                }
            };

            // 确认密码
            reginput4.onblur = function() {
                let val2 = reginput3.value;
                let val3 = this.value;
                if (val3 !== val2) {
                    regBg4.style.color = "red";
                    regBg4.innerHTML = "两次输入的的密码不一致，请仔细检查！";
                    that.Isval4 = false;
                    return false;
                } else {
                    regBg4.style.color = "#22bd22";
                    regBg4.innerHTML = "验证正确";
                    that.Isval4 = true;
                    return true;
                }
            };
            // 取款密码
            reginput5.onblur = function() {
                let val4 = this.value;
                let reg4 = /^\d{4}$/;
                if (!reg4.test(val4)) {
                    regBg5.style.color = "red";
                    regBg5.innerHTML = "请输入4位纯数字作为取款密码！";
                    that.Isval5 = false;
                    return false;
                } else {
                    regBg5.style.color = "#22bd22";
                    regBg5.innerHTML =
                        "取款时要用到的密码，非常重要，请务必牢记！";
                    that.Isval5 = true;
                    return true;
                }
            };
        },

        // 系统消息 未读消息 删除
        deleteNoRead(obj, index, item) {
            let user = window.sessionStorage.getItem("login_user");
            //obj 是当前的循环的数组 index是点击删除额数组下标
            obj.splice(index, 1);
            this.$post("person/index/messUpdate",{
                user: user,
                id: item.id,
                typed: 2
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
            }).catch(err=>{
                console.log(err);
            })
        },

        //添加下级 注册提交事件
        goSubmit() {
            let that = this;
            let parentname = window.sessionStorage.getItem("username");
            let user = this.$refs.regInput1.value;
            let realname = this.$refs.regInput2.value;
            let pass = this.$refs.regInput3.value;
            let qkpass = this.$refs.regInput5.value;
            // 如果表单的正则都判断成功 则可以提交
            if (
                this.Isval1 &&
                this.Isval2 &&
                this.Isval3 &&
                this.Isval4 &&
                this.Isval5
            ) {
                that.$post("index/user/memberAdd",{
                    parentname: parentname,
                    user: user,
                    pass: pass,
                    realname: realname,
                    qkpass: qkpass
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    if (res == 1) {
                        alert("添加成功！");
                    } else {
                        alert("添加失败！");
                    }
                }).catch(err=>{
                    console.log(err)
                })
            } else {
                alert("请检查是否有错误的选项！");
            }
        },

        // 其他所有通用的 切换页
        pageSwitch(page, endpage, name, starttime, endtime) {
            let user = window.sessionStorage.getItem("login_user");
            let that = this;
            if (page > endpage) return;
            if (page <= 0) return;

            that.$post("person/index/pageOtherSelect",{
                page: page,
                user: user,
                name: name,
                starttime: starttime,
                endtime: endtime
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                switch (name) {
                    // 个人中心的 未处理反馈
                    case "npersonmess":
                        that.untreated = res.info;
                        that.untreatedPage = res.page;
                        break;
                    // 个人中心的 已处理反馈
                    case "personmess":
                        that.processed = res.info;
                        that.processedPage = res.page;
                        break;
                    // 交易记录的 往来记录
                    case "money":
                        that.correspondence = res.info;
                        that.correspondencePage = res.page;
                        break;

                    default:
                        break;
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        // 按时间查询 函数
        inquire(event, name) {
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            let e = event.currentTarget;
            let startTime = e.parentNode.children[0].value;
            let endTime = e.parentNode.children[1].value;
            if (startTime > endTime || startTime == "" || endTime == "") {
                alert("您输入的查询日期不正确，请确认后查询！");
                return;
            }
            if (name == "money") {
                // axios 请求
                that.$post("person/index/pageOtherSelect",{
                    user: user,
                    name: name,
                    starttime: startTime,
                    endtime: endTime
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    switch (name) {
                        // 个人中心的 未处理反馈
                        case "npersonmess":
                            that.untreated = res.info;
                            that.untreatedPage = res.page;
                            break;
                        // 个人中心的 已处理反馈
                        case "personmess":
                            that.processed = res.info;
                            that.processedPage = res.page;
                            break;
                        // 交易记录的 往来记录
                        case "money":
                            that.correspondence = res.info;
                            that.correspondencePage = res.page;
                            break;
                        default:
                            break;
                    }
                }).catch(err=>{
                    console.log(err)
                })
            } else {
                // axios 请求
                that.$post("person/index/pageRemarkSelect",{
                    user: user,
                    name: name,
                    starttime: startTime,
                    endtime: endTime
                }).then(res=>{
                    // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                    if (res == -1 || res == -2) {
                        that.common.isOnline(that, res);
                        return;
                    }
                    switch (name) {
                        case "Ag":
                            that.AG = res.info;
                            that.page = res.page;
                            break;
                        case "Mg":
                            that.MG = res.info;
                            that.page = res.page;
                            break;
                        case "Gd":
                            that.GD = res.info;
                            that.page = res.page;
                            break;
                        case "Cq9":
                            that.CQ9 = res.info;
                            that.page = res.page;
                            break;
                        case "2":
                            that.IM2 = res.info;
                            that.page = res.page;
                            break;
                        case "101":
                            that.IM101 = res.info;
                            that.page = res.page;
                            break;
                        case "102":
                            that.IM102 = res.info;
                            that.page = res.page;
                            break;
                        case "201":
                            that.IM201 = res.info;
                            that.page = res.page;
                            break;

                        default:
                            break;
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        // 新增留言  发送留言
        sendMess() {
            let that = this;
            let user = window.sessionStorage.getItem("login_user");
            let mess = this.$refs.textMsg.value;
            // 如果没有输入值 或 输入的是空格时  不能发送请求
            if (mess.trim() === "") {
                alert("不能发送空消息！");
                return;
            }
            // axios 请求
            that.$post("person/index/sendSms",{
                user: user,
                mess: mess
            }).then(res=>{
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    that.common.isOnline(that, res);
                    return;
                }
                let _confirm = window.confirm(
                    "发送成功！点击确定刷新页面查看！"
                );
                if (_confirm == true) {
                    window.location.reload();
                    window.sessionStorage.setItem("num", "1");
                }
            }).catch(err=>{
                console.log(err)
            })
            // 留言框隐藏
            this.newMessageShow = false;
            this.$refs.textMsg.value = "";
        }
    },
    created() {
        let that = this;
        this.common.noData(that);
        // 进入页面时 给当前的html加一个类名
        document.getElementsByTagName("html")[0].classList.add("forgetBg");
        // 获取query传值
        if (
            !window.sessionStorage.getItem("index") &&
            !window.sessionStorage.getItem("num")
        ) {
            let index = window.sessionStorage.setItem(
                "index",
                this.$route.query.index
            );
            let num = window.sessionStorage.setItem(
                "num",
                this.$route.query.num
            );
        }
        // 获取用户
        let user = window.sessionStorage.getItem("login_user");
        let username = window.sessionStorage.getItem("username");
        // 我的推广
        that.$post("person/index/tuiGuang",{
            user: user
        }).then(res=>{
            // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
            if (res == -1 || res == -2) {
                that.common.isOnline(that, res);
                return;
            }
            // 推广链接
            that.tgdz = window.location.href.split("#")[0] + "#/register?id="+window.sessionStorage.getItem("username");
            // 下级代理
            that.subUser = res.son;
            console.log(that.subUser);
            
        }).catch(err=>{
            console.log(err)
        })
        // 银行交易 手动余额获取
        that.$post("person/index/userinfo",{
            user: user
        }).then(res=>{
            // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
            if (res == -1 || res == -2) {
                that.common.isOnline(that, res);
                return;
            }
            // that.tradingNav = res
            that.myAccount = res; //我的账户 平台游戏及余额
            // 默认 银行交易的 总余额为传过来的值
            that.bankBalance[0].money = that.myAccount.summoney.money; //自动余额总余额
            that.allbalance = that.myAccount.summoney.money; //手动余额总余额
            // 银行交易 额度转换 手动转换 左侧列表、
            // 把对象重新变成字符串 在变成对象 达到不影响原对象的目的
            that.limitLeft = JSON.parse(JSON.stringify(res));
            // 删除对象赋予的总余额
            delete that.limitLeft.summoney;

            that.$nextTick(function() {
                //银行交易 额度转换 转入转出 默认让转入的现金余额被选中
                let shiftTo = that.$refs.shiftTo;
                let i = shiftTo.options.length - 1;
                shiftTo.options[i].selected = true;
            });
        }).catch(err=>{
            console.log(err)
        })
        // 银行交易 线上存款 最小提现额度
        that.$post("person/index/minMoney",{
            user: user
        }).then(res=>{
            // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
            if (res == -1 || res == -2) {
                that.common.isOnline(that, res);
                return;
            }
            // 最小充值额度
            that.min_wx_money = res.wxlimit; //微信
            that.min_zfb_money = res.zfblimit; //支付宝
            that.bank_card_List = res.bank; //银行卡充值的 列表
        }).catch(err=>{
            console.log(err)
        })

        // 页面所有数据
        that.$post("person",{
            user: user
        }).then(res=>{
            // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
            if (res == -1 || res == -2) {
                that.common.isOnline(that, res);
                return;
            }

            that.newMsg = res.latestNews.info; //系统消息 未读消息
            that.notice = res.notice; //游戏公告
            that.correspondence = res.money.info; //往来记录
            that.tradingNav = res.game; //交易记录的 投注记录
            that.historyMsg = res.history.info; //历史消息
            that.untreated = res.npersonmess.info; //未处理反馈
            that.processed = res.personmess.info; //已处理反馈
            that.realname = res.realname; //真实姓名

            // 获取IM所有的子数组
            let IM2 = that.tradingNav.Im.sub[2].info;
            let IM101 = that.tradingNav.Im.sub[101].info;
            let IM102 = that.tradingNav.Im.sub[102].info;
            let IM201 = that.tradingNav.Im.sub[201].info;
            // 获取IM所有的子数组 切换页
            let IM2Page = that.tradingNav.Im.sub[2].page;
            let IM101Page = that.tradingNav.Im.sub[101].page;
            let IM102Page = that.tradingNav.Im.sub[102].page;
            let IM201Page = that.tradingNav.Im.sub[201].page;
            // 把子数组合并成对象 然后添加进tradingNav
            that.tradingNav.IM2 = { name: "IM2", IM2, IM2Page };
            that.tradingNav.IM101 = { name: "IM101", IM101, IM101Page };
            that.tradingNav.IM102 = { name: "IM102", IM102, IM102Page };
            that.tradingNav.IM201 = { name: "IM201", IM201, IM201Page };

            // 交易记录 投注记录的所有列表
            that.AG = that.tradingNav.Ag.sub.info;
            that.MG = that.tradingNav.Mg.sub.info;
            that.CQ9 = that.tradingNav.Cq9.sub.info;
            that.GD = that.tradingNav.Gd.sub.info;
            that.IM2 = that.tradingNav.IM2.IM2;
            that.IM101 = that.tradingNav.IM101.IM101;
            that.IM102 = that.tradingNav.IM102.IM102;
            that.IM201 = that.tradingNav.IM201.IM201;

            that.noReadPage = res.latestNews.page; //系统消息 未读消息

            that.historyPage = res.history.page; //历史记录的切换页数据
            that.correspondencePage = res.money.page; //往来记录的切换页数据
            that.historyPage = res.history.page; //历史记录的切换页数据
            that.AGPage = that.tradingNav.Ag.sub.page; //AG的切换页
            that.page = that.AGPage;
            that.MGPage = that.tradingNav.Mg.sub.page; //MG的切换页
            that.CQ9Page = that.tradingNav.Cq9.sub.page; //CQ9的切换页
            that.GDPage = that.tradingNav.Gd.sub.page; //GD的切换页
            that.IM2Page = that.tradingNav.IM2.IM2Page; //IM切换页
            that.IM101Page = that.tradingNav.IM101.IM101Page; //IM切换页
            that.IM102Page = that.tradingNav.IM102.IM102Page; //IM切换页
            that.IM201Page = that.tradingNav.IM201.IM201Page; //IM切换页
            that.untreatedPage = res.npersonmess.page; //未处理反馈切换页
            that.processedPage = res.personmess.page; //已处理反馈切换页

            // 删除IM对象
            delete that.tradingNav.Im;
            that.$nextTick(function() {
                that.tableShow();
                // 我的推广 添加下级 注册事件
                that.reg();
                // 如果点击的是未读消息 则把未读消息变成已读消息
                if (window.sessionStorage.getItem("index") == 5) {
                    that.$post("person/index/messUpdate",{
                        user: user,
                        typed: 1
                    }).then(res_2=>{
                        // 如果res_2为-1 则表示账号在别处登录 -2则表示登陆超时
                        if (res_2 == -1 || res_2 == -2) {
                            that.common.isOnline(that, res_2);
                            return;
                        }
                    }).catch(err=>{
                        console.log(err)
                        console.log("转换已读消息失败！");
                    })
                }
            });
        }).catch(err=>{
            console.log(err)
        })
        
    },
    mounted() {
        // 获取用户名
        let that = this;
        let user = window.sessionStorage.getItem("login_user");
        let username = window.sessionStorage.getItem("username");
        this.username = username;
        // 我的账户 绑定银行卡事件
        this.bankReg();
        // 交易记录和往来记录的查询时间
        let betRecodeStartTime = this.$refs.betRecodeStartTime, //交易记录 时间查询的input
            betRecodeEndTime = this.$refs.betRecodeEndTime, //交易记录 时间查询的input
            andRecodeStartTime = this.$refs.andRecodeStartTime, //往来记录 时间查询的input
            andRecodeEndTime = this.$refs.andRecodeEndTime; //往来记录 时间查询的input
        //得到当前时间
        let date_now = new Date();
        //得到当前年份
        let year = date_now.getFullYear();
        let month =
            date_now.getMonth() + 1 < 10
                ? "0" + (date_now.getMonth() + 1)
                : date_now.getMonth() + 1;
        //得到当前日子（多少号）
        let date =
            date_now.getDate() < 10
                ? "0" + date_now.getDate()
                : date_now.getDate();
        //设置input标签的默认时间为当前时间
        this.startTime = year + "-" + month + "-" + date;
        this.endTime = year + "-" + month + "-" + date;
        // 交易记录和往来记录的查询时间
        betRecodeStartTime.value = this.startTime;
        betRecodeEndTime.value = this.endTime;
        andRecodeStartTime.value = this.startTime;
        andRecodeEndTime.value = this.endTime;
        // 最小查询时间为7天前
        let dateAll1 = date_now.getTime() - 7 * 24 * 3600 * 1000; //获取当前日期到七天前的毫秒数
        let dateAll2 = new Date(dateAll1);
        let date1 = dateAll2.getFullYear();
        let date2 =
            dateAll2.getMonth() + 1 < 10
                ? "0" + (dateAll2.getMonth() + 1)
                : dateAll2.getMonth() + 1;
        let date3 =
            dateAll2.getDate() < 10
                ? "0" + dateAll2.getDate()
                : dateAll2.getDate();
        this.minTime = date1 + "-" + date2 + "-" + date3;

        // 判断点击的是哪一个链接 则对应的选项显示
        let index = window.sessionStorage.getItem("index");
        let num = window.sessionStorage.getItem("num");
        // 获取左侧导航的li 和 对应的右侧 内容区域的div
        let liArr = [],
            rightArr = [];
        liArr.push(
            this.$refs.li1,
            this.$refs.li2,
            this.$refs.li3,
            this.$refs.li4,
            this.$refs.li5,
            this.$refs.li6,
            this.$refs.li7
        );
        rightArr.push(
            this.$refs.rightBox1,
            this.$refs.rightBox2,
            this.$refs.rightBox3,
            this.$refs.rightBox4,
            this.$refs.rightBox5,
            this.$refs.rightBox6,
            this.$refs.rightBox7
        );
        let rightLiArr = rightArr[index - 1].querySelectorAll("#MNav li"); //获取进入页面时 对应右侧内容的头部导航（li）

        // 默认所有的li和a以及右部分内容 消失
        liArr.forEach((item, index) => {
            item.onclick = function() {
                let contentBox = rightArr[index].querySelectorAll("#mmaindata");
                // 获取当前右侧box 的头部导航（li）
                rightLiArr = [...rightArr[index].querySelectorAll("#MNav li")];
                // 点击时 让所有的先清空
                for (let i = 0; i < liArr.length; i++) {
                    liArr[i].style.background = "none";
                    liArr[i].children[0].style.color = "#d3d3d3";
                    rightArr[i].style.display = "none";
                }
                // 当前的左侧导航 和 右侧导航 box添加对应的样式
                item.style.background = "#e4c07e";
                item.children[0].style.color = "#000";
                rightArr[index].style.display = "block";

                rightLiArr.forEach((newitem, newindex) => {
                    num =
                        window.sessionStorage.getItem("num") == 0
                            ? window.sessionStorage.getItem("num")
                            : 0;
                    // 默认导航的li背景颜色不存在
                    newitem.style.background = "none";
                    contentBox[newindex].style.display = "none";
                    // 默认给第一个添加背景色 并且显示内容
                    rightLiArr[num].style.background = "#1d1d1d";
                    contentBox[num].style.display = "block";
                    newitem.onclick = function() {
                        // 点击时清空所有的背景色 和 显示的内容
                        for (let k = 0; k < rightLiArr.length; k++) {
                            contentBox[k].style.display = "none";
                            rightLiArr[k].style.background = "none";
                        }
                        // 点击当前的添加背景色和内容
                        newitem.style.background = "#1d1d1d";
                        contentBox[newindex].style.display = "block";
                    };
                });

                // index = 4时  把未读消息变成已读消息
                if (index == 4) {
                    that.$post("person/index/messUpdate",{
                        user: user,
                        typed: 1
                    }).then(res=>{})
                    .catch(err=>{
                        console.log(err)
                    })
                }
                // 每次点击之后 把当前点击的索引值 添加进session 刷新时读取session的索引值
                window.sessionStorage.setItem("index", index + 1);
                window.sessionStorage.setItem("num", 0);
            };
        });
        // 默认进入页面时  自身点击一次
        liArr[index - 1].onclick();
        // 右上角时间的定时器
        function timer() {
            let vWeek,
                vWeek_s,
                vDay,
                date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();
            vWeek = [
                "星期天",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六"
            ];
            // 分钟 小于10的时候 自动加0
            if (minutes < 10) {
                minutes = "0" + minutes;
            } else {
                minutes = minutes;
            }
            // 秒 小于10的时候 自动加0
            if (seconds < 10) {
                seconds = "0" + seconds;
            } else {
                seconds = seconds;
            }
            vWeek_s = vWeek[date.getDay()];
            that.$refs.time.innerHTML =
                year +
                "/" +
                month +
                "/" +
                day +
                "/" +
                "\t" +
                hours +
                ":" +
                minutes +
                ":" +
                seconds +
                "\t" +
                vWeek_s;
        }
        window.timerLive = setInterval(timer, 1000);
        // 右上角时间的定时器 结束

        // 我的账户 安全设置 修改登录密码 密码强度检测
        let aStr = ["弱", "中", "强", "非常强"];
        let tipsSpan1 = this.$refs.tipsSpan1,
            tipsSpan2 = this.$refs.tipsSpan2,
            tipsSpan3 = this.$refs.tipsSpan3,
            tipsSpan4 = this.$refs.tipsSpan4,
            ztys = this.$refs.ztys,
            hzts = this.$refs.hzts;
        function checkStrong(val) {
            let modes = 0;
            if (val.length < 6) return 0;
            if (/\d/.test(val)) modes++; //数字
            if (/[a-z]/.test(val)) modes++; //小写
            if (/[A-Z]/.test(val)) modes++; //大写
            if (/\W/.test(val)) modes++; //特殊字符
            if (val.length > 12) return 4;
            return modes;
        }
        this.$refs.password2.onkeyup = function() {
            let val = this.value;
            let num = checkStrong(val);
            switch (num) {
                case 0:
                    // 所有的span背景色默认
                    tipsSpan1.style.background = "#808080";
                    tipsSpan2.style.background = "#808080";
                    tipsSpan3.style.background = "#808080";
                    tipsSpan4.style.background = "#808080";
                    ztys.style.color = "#808080";
                    hzts.innerHTML = "--";
                    break;
                case 1:
                    // 第一个背景色改变
                    tipsSpan1.style.background = "#ff6060";
                    // 其他默认
                    tipsSpan2.style.background = "#808080";
                    tipsSpan3.style.background = "#808080";
                    tipsSpan4.style.background = "#808080";
                    // 密码强度改变
                    ztys.style.color = "#ff6060";
                    hzts.innerHTML = aStr[num - 1];
                    break;

                case 2:
                    // 第一、二个背景色改变
                    tipsSpan1.style.background = "#fca658";
                    tipsSpan2.style.background = "#fca658";
                    // 其他默认
                    tipsSpan3.style.background = "#808080";
                    tipsSpan4.style.background = "#808080";
                    // 密码强度改变
                    ztys.style.color = "#fca658";
                    hzts.innerHTML = aStr[num - 1];
                    break;
                case 3:
                    // 第一、二、三个背景色改变
                    tipsSpan1.style.background = "#00a4aa";
                    tipsSpan2.style.background = "#00a4aa";
                    tipsSpan3.style.background = "#00a4aa";
                    // 其他默认
                    tipsSpan4.style.background = "#808080";
                    // 密码强度改变
                    ztys.style.color = "#00a4aa";
                    hzts.innerHTML = aStr[num - 1];
                    break;

                case 4:
                    // 全部改变背景色
                    tipsSpan1.style.background = "#00a4aa";
                    tipsSpan2.style.background = "#00a4aa";
                    tipsSpan3.style.background = "#00a4aa";
                    tipsSpan4.style.background = "#00a4aa";
                    // 密码强度改变
                    ztys.style.color = "#00a4aa";
                    hzts.innerHTML = aStr[num - 1];
                    break;
                default:
                    break;
            }
        };
    },

    destroyed() {
        // 清除定时器
        window.clearInterval(window.timerLive);
        // html加背景颜色
        document.getElementsByTagName("html")[0].classList.remove("forgetBg");
        // 清空session的index和num
        window.sessionStorage.removeItem("index");
        window.sessionStorage.removeItem("num");
    },
    activated() {
        let that = this;
        let user = window.sessionStorage.getItem("login_user");
        that.$get("index/user/updateUser",{
            user: user
        }).then(res=>{;
            // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
            if (res == -1 || res == -2) {
                that.common.isOnline(that, res);
                return;
            }
            that.safeBankList = res.bankcard; //银行卡
            // 银行卡 加密
            that.safeBankList.forEach((item, index) => {
                var reg = /^(\d{4})\d+(\d{4})$/;
                if(item.bankcard){
                    item.bankcard = item.bankcard.replace(
                        reg,
                        "$1**********$2"
                    );
                }
            });

            // 开始渲染
            let newList = that.$refs.newList; //获取支付宝 电话 QQ的输入框
            newList[0].value = res.alipaynum ? res.alipaynum : ""; //支付宝
            newList[1].value = res.phone ? res.phone : ""; //手机号
            newList[2].value = res.qq ? res.qq : ""; //QQ
            newList[3].value = res.wx ? res.wx : ""; //微信

            if (newList[0].value) {
                newList[0].setAttribute("disabled", true);
                newList[0].parentNode.children[2].style.display = "none";
            }
            if (newList[1].value) {
                newList[1].setAttribute("disabled", true);
                newList[1].parentNode.children[2].style.display = "none";
            }
            if (newList[2].value) {
                newList[2].setAttribute("disabled", true);
                newList[2].parentNode.children[2].style.display = "none";
            }
            if (newList[3].value) {
                newList[3].setAttribute("disabled", true);
                newList[3].parentNode.children[2].style.display = "none";
            }
        }).catch(err=>{
            console.log(err)
        })
    }
};
</script>
<style scoped>
@import "./../css/main.css";
/* 头部 线上存款图片 */
#MABank {
    background: url("../../static/images/memberCenter/cunkuan.png") no-repeat
        100% 100%;
}
.AllWrap {
    font-size: 13px;
}

/* 我的账户 安全中心 */
.safeCenter {
    padding: 0 20px;
}
.safeCenter h3 {
    padding: 10px 0;
}
.safeCenter h3 i {
    margin: 0 10px;
    border: 3px solid #ccb07e;
    border-radius: 10px;
}
.safeCenter ul {
    padding: 20px 40px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
}
.safeCenter ul li {
    margin: 10px 0;
}
.safeCenter li span {
    display: inline-block;
    width: 10%;
    text-align: right;
}

.safeCenter ul li input {
    padding: 5px;
    width: 25%;
    background-color: #fff;
    border: 1px solid #aaa;
}

.safeCenter strong {
    padding: 5px 10px;
    background-color: #00949e;
    border-radius: 6px;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
}
.safeCenter strong:last-child {
    background-color: red;
}

.safeCenter p {
    margin: 5px 40px;
    color: red;
}

/* 我的账户 绑定银行卡 */
.bingBankCard ul {
    margin-bottom: 20px;
}
.bingBankCard strong:last-child {
    margin: 0 80px;
    padding: 10px 100px;
    background-color: #00949e;
}
.bingBankCard p {
    display: inline-block;
    margin: 0 10px;
}

/* 线上支付 支付框 开始 */
.bank_title_red{
    color: red;
    border: 1px solid red;
    border-radius: 5px;
}
.payPop {
    padding: 30px 0;
    width: 100%;
    height: 200px;
}
.payPop > div {
    position: relative;
    top: 0;
    padding: 50px 100px;
    width: 600px;
    margin: 0 auto;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
}
.payPop > div p {
    margin: 0 auto;
    padding: 10px 30px;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
.payPop > div #img {
    text-align: center;
}
.payPop > div input[type="button"] {
    margin: 20px 0px;
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #eee;
    color: #000;
}
.payPop > div input[type="button"]:hover {
    background-color: skyblue;
    color: #fff;
}
.payPop > div i {
    position: absolute;
    top: 0;
    right: 0;
    font-style: normal;
    padding: 5px 10px;
    font-size: 18px;
    cursor: pointer;
}
.cashierWrapper > ul {
    width: 100%;
}
.cashierWrapper > ul li {
    float: left;
    margin: 20px 14px;
    padding: 10px 0;
    width: 20%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    background-color: #14b438 !important;
}
.cashierWrapper > ul li:nth-of-type(2) {
    background-color: #00adf1 !important;
}
.cashierWrapper > ul li:nth-of-type(3) {
    background-color: #dd524d !important;
}
.cashierWrapper > ul li:nth-of-type(4) {
    background-color: #b955d9 !important;
}
.cashierWrapper > ul li:nth-of-type(5) {
    background-color: #d65a26 !important;
}
.cashierWrapper > ul li:nth-of-type(6) {
    background-color: #bc3031 !important;
}
.cashierWrapper > ul li:nth-of-type(7) {
    background-color: #4d78d7 !important;
}
.cashierWrapper > ul li:nth-of-type(8) {
    background-color: #e2534f !important;
}
.cashierWrapper > ul li img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
}

.mcontent .delete {
    padding: 3px 5px;
}

/* 银行卡支付框 */
.payPop > .bank_card_wrap{
    padding: 30px 100px;
}
.bankcard_nav div{
    margin-bottom: 10px;
}
.bankcard_nav .bankcard_title{
    font-size: 16px;
}
.bankcard_nav div span{
    padding: 3px 5px;
}
.page-tab-container > div div,
.bankcard_content div{
    padding: 5px 0;
    border-bottom: 1px solid #ddd;
}
.page-tab-container span,
.bankcard_content span{
    display: block;
    float: left;
    width: 15%;
}
.page-tab-container strong,
.bankcard_content strong{
    font-style: normal;
    font-weight: normal;
}
.page-tab-container input,
.bankcard_content input,
.bankcard_content select{
    width: 200px;
}
.bank_tips{
    display: block;
    color: red;
}

/* 线上支付 支付框 结束 */
/* 未处理反馈 新增消息弹出框 开始 */
.newMessage > div {
    position: fixed;
    top: 40%;
    left: 42%;
    width: 400px;
    margin: 0 auto;
    background: #eee;
    padding: 10px;
}
.newMessage > div .title {
    padding: 5px 10px;
    color: #fff;
    background-color: red;
    border-radius: 10px;
    font-size: 14px;
}
.newMessage > div p {
    padding: 5px 10px;
}
.newMessage > div textarea {
    width: 100%;
    font-size: 14px;
    margin-bottom: 20px;
}
.newMessage > div .title i {
    padding: 0 5px;
    float: right;
    font-style: normal;
    color: #ddd;
    cursor: pointer;
}
.newMessage > div .flr {
    text-align: right;
}
.newMessage > div .flr button {
    padding: 4px 10px;
    margin: 0 5px;
    outline: none;
    border: 1px solid #ccc;
    background-color: red;
    color: #fff;
    font-weight: bold;
}
/* 历史留言 新增消息弹出框 结束 */

/* 交易记录 表格列表 */
#mamain3 .titleList {
    display: none;
}
.listButton {
    padding: 20px 0;
    text-align: center;
}
.listButton b {
    padding: 3px 5px;
    font-weight: normal;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
}
.listButton span {
    padding: 3px 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #000;
}
.listButton i {
    font-style: normal;
}

/* 我的推广 */

/* 下级管理 */

.code {
    padding: 4px 10px;
    border: 1px solid #ddd;
    font-style: normal;
}
#mamain8 table {
    margin: 20px 0;
    width: 100%;
}
#mamain8 table th {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #eee;
}
#mamain8 table td {
    padding: 10px 0;
    border: 1px solid #ddd;
    text-align: center;
}
.content1 td ul {
    padding: 10px;
}
.content1 td li {
    float: left;
    margin: 5px 25px 5px 0;
}

/* 默认设置 */
.content2 td {
    padding: 10px;
}
.content2 td button {
    padding: 3px 10px;
    border-radius: 6px;
    background: #ddd;
    outline: none;
    border: 1px solid #aaa;
}
/* 推广地址 */
#noShow {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
#mamain8 .content3 th {
    color: #3a8ddd;
    background-color: #e4f7fe;
}
.content3 td {
    padding: 10px;
}
.content3 td i {
    padding: 0;
    border: none;
}
.content3 td > .yellow {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-left: 15px;
    padding: 3px 8px;
    cursor: pointer;
}

/* 添加下级 */
.content4 {
    padding: 30px 20px 10px 30px;
}
.content4 li {
    margin: 10px 0;
    height: 30px;
    line-height: 30px;
}
.content4 div {
    display: inline-block;
}
.content4 p {
    display: inline-block;
}
.content4 input {
    padding: 4px 15px;
}
#mmaindata > button {
    padding: 8px 30px;
    margin-left: 135px;
    border: none;
    border: 1px solid #aaa;
    border-radius: 5px;
    outline: none;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}

/* 推广说明 */
.content5 {
    padding: 30px 20px;
}
.content5 > p {
    padding: 5px;
    font-size: 20px;
    color: red;
}
.content5 > p:nth-last-child(1) {
    font-size: 14px;
}
.content5 li {
    list-style: decimal;
    margin: 5px 0 0 20px;
}
.content5 td {
    padding: 6px 0px;
}
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
