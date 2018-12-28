<template>
    <div class="index">
       <div id="fgPg-wrap" class="fgpw-wrap">
            <div class="lock-pic-wrap">
                <div class="lock-line motion"></div>
            </div>
            <div class="txt-wrap">
                <div class="pw-info-wrap">
                    <div class="pw-st-title">忘记密码</div>
                    <div class="pw-input-wrap clearfix">
                        <p class="pw-unit pw-unit-user">
                            <input ref="user" type="text" id="fg_account" autocomplete="off" tabindex="1" maxlength="12" placeholder="会员账号">
                        </p>
                        
                        <p class="pw-unit pw-unit-wdpw">
                            <input ref="pass" type="password" id="fg_accPws" autocomplete="off" tabindex="2" maxlength="4" placeholder="取款密码">
                        </p>
                    </div>
                </div>
                <div id="JS-tips-wrap" class="pw-tips-wrap">
                    <span>★会员账号及取款密码核对正确后,系统即自动发送邮件至会员资料内所设置之E-MAIL信箱!! </span>
                </div>
                <div class="pw-submit-wap">
                    <button id="js-btn-submit" class="fgpw-submit" tabindex="4" @click="gosubmit">确认送出</button>
                </div>
                
            </div>
        </div>

    </div>

</template>

<script>
import "./../css/common.css";

export default {
    name: "index",
    data() {
        return {
        };
    },
    created() {
        let that = this;
        this.common.noData(that);
        document.getElementsByTagName("html")[0].classList.add("forgetBg")
    },
    methods: { 
        gosubmit(){
            let user = this.$refs.user;
            let pass = this.$refs.pass;
            if(user.value === ""){
                alert("请输入会员账号！")
                return
            }
            if(pass.value === ""){
                alert("请输入取款密码！")
                return
            }
            this.$post("person/index/resetPass",{
                user: user.value,
                qkpass: pass.value
            }).then(res=>{
                if(res === -1 ){
                    alert("此账号今日找回次数已达到上限！")
                }else if(res === 1){
                    user.value = "";
                    pass.value = "";
                    alert("找回成功！新密码和用户名相同，请及时修改！")
                }else if(res === 0){
                    alert("取款密码错误！")
                }
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    destroyed() {
        document.getElementsByTagName("html")[0].classList.remove("forgetBg")        
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    @import "../css/forgetPwd.css";
</style>
