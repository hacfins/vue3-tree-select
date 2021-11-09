/**
 * Created by hacfin005 on 2018/11/22.
 */
var $_cloud_config = {
    $product:"v2",
    $version: "2.5.0",
    $clouds : [
        {
            code       : 'portal',
            name       : "用户中心",
            keywords   : "",
            description: "用户登录注册找回密码的平台，用于其它系统的登陆",
            api_url    : "http://192.168.123.22:8213",
            ui_url     : "http://192.168.123.90:8217",
            logo       : "",
            display    : 1
        },

        {
            code       : 'admin',
            name       : "学院",
            keywords   : "",
            description: "公开课为各行业培训场景而生。满足教育线上培训、企业内训、客户产品培训等各行业多场景应用,让培训学习更有价值",
            api_url    : "http://192.168.123.22:8253",
            ui_url     : "http://192.168.123.90:8257",
            logo       : "",
            display    : 1
        },
        {
            code       : 'live',
            name       : "直播服务器",
            keywords   : "",
            description: "",
            api_url    : "http://192.168.123.22:8631",
            ui_url     : "http://192.168.123.90:8638",
            logo       : "",
            display    : 0
        },
        {
            code       : 'conference',
            name       : "互动服务器",
            keywords   : "",
            description: "",
            api_url    : "https://conference-test.bogo365.net:3004",
            ui_url     : "http://39.107.112.100:3001",
            logo       : "",
            display    : 0
        },
        {
            code       : 'interact',
            name       : "消息服务器",
            keywords   : "",
            description: "",
            api_url    : "ws://192.168.123.22:2346",
            ui_url     : "",
            logo       : "",
            display    : 0
        },
    ],
    $company: {
        website    : "播谷网",
        keywords   : "华科飞扬",
        description: "",
        owner      : "北京华科飞扬科技股份公司",
        owner_url  : "http://hacfin.com/",
        icp        : "京ICP备09019116号-3",
        icp_url:"https://beian.miit.gov.cn/#/Integrated/recordQuery",
        contact    : {
            phone   : "",
            email   : "",
            contact : "",
            location: "",
        },
        feedback   : {
            api_url: "",
        }
    },
    $clouds_parse:function(key){
        var curSys = {};
        this.$clouds.forEach(function(item,i){
            if(item.code == key){
                curSys = item;
            }
        })
        return curSys;

    },
    $show_list:function(self){
        var menuList = [];
        this.$clouds.forEach(function(item,i){
            if(item.display == 1 && item.code != self && item.code != 'account'){
                menuList.push(item)
            }
        })
        return menuList;
    },
};