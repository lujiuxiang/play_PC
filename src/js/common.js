export default {
    noData(that) {
        that.$post("index/index/isonline")
            .then(res => {
                if (res == 1) {
                    that.$router.push({
                        name: 'noData'
                    });
                    return
                }
            }).catch(err => {
                console.log(err);
            })
    },
    // 异地登录之后重新登录 或者登陆超时重新登录
    isOnline(that, num) {
        window.sessionStorage.clear()
        if (num == -1) {
            alert("您的账号在另一处登录！请重新登录！")
        } else if (num == -2) {
            alert("登陆超时，请重新登录！")
        }
        that.$router.push({
            name: 'index'
        });
        // 第一次弹窗之后把当前函数清空 然后刷新页面
        this.isOnline = function() {}
        setTimeout(() => {
            window.location.reload()
        }, 300)
    },
    // 公共js -- 进入游戏
    goin(a, b, c, that) {
        let loading = document.getElementById("loading");
        // a --> gamename ; b --> gamecode ; c --> moneycode;
        //如果gamename不存在 则此次点击为客服中心 需要跳转
        if (a == null) {
            window.open(b, "_blank")
            return
        }
        // 如果gamename不为null 则是正常游戏 继续执行
        if (window.sessionStorage.getItem("login_user")) {
            let user = window.sessionStorage.getItem("login_user")
            let win = window.open() // 跳转游戏链接 新窗口
            loading.style.display = 'block';
            that.$post("game/game/index", {
                user: user,
                game: a,
                gamecode: b,
                moneycode: c
            }).then(res => {
                // 如果res为-1 则表示账号在别处登录 -2则表示登陆超时
                if (res == -1 || res == -2) {
                    win.close()
                    setTimeout(() => {
                        that.common.isOnline(that, res);
                    }, 300)
                    return;
                }
                if (res.Code && res.Code != 0) {
                    // 跳转游戏链接 新窗口关闭
                    win.close()
                    loading.style.display = "none";

                    setTimeout(() => {
                        alert(res.Message)
                    }, 50);
                    return
                }
                // 跳转游戏链接 新窗口
                win.location = res
                loading.style.display = "none";
            }).catch(err => {
                // 跳转游戏链接 新窗口关闭
                win.close();
                loading.style.display = "none";
                console.log(err);
            })
        } else if (!window.sessionStorage.getItem("login_user") && window.sessionStorage.getItem("username")) {
            let user = window.sessionStorage.getItem("username");
            let win = window.open() // 跳转游戏链接 新窗口
            loading.style.display = 'block';
            // axios 请求
            that.$post("game/game/index", {
                user: user,
                game: a,
                gamecode: b,
                moneycode: c
            }).then(res => {
                if (res.Code && res.Code != 0) {
                    // 跳转游戏链接 新窗口关闭
                    win.close()
                    loading.style.display = "none";
                    setTimeout(() => {
                        alert(res.Message)
                    }, 50);
                    return
                }
                // 跳转游戏链接 新窗口
                win.location = res
                loading.style.display = "none";
            }).catch(err => {
                // 跳转游戏链接 新窗口关闭
                win.close();
                loading.style.display = "none";
                console.log(err);
            })
        } else {
            let gamesloginWrap = document.getElementsByClassName('gamesloginWrap')[0];
            gamesloginWrap.style.display = 'block';
        }
    },
}