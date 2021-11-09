/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
/**
 * Created by hacfin005 on 2018/11/22.
 */
/**
 * Created by hacfin005 on 2018/11/22.
 */

var portal = $_cloud_config.$clouds_parse('portal');
var admin = $_cloud_config.$clouds_parse('admin');
var baseUrl = portal.api_url;
var company = $_cloud_config.$company;
var g_loading = []
export {
    baseUrl,
    portal,
    admin,
    company,
    g_loading
}