<template>
  <div class="home" >

    <div class="title-content">
      <!--<iframe id="iframe_menu" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>-->
      <div style="height: 56px;display: flex;align-items: center;">
        <img src="../../static/setting/logo1.png" alt="" width="28" height="28" style="display:inline-block;margin-left: 21px;">
        <div class="title-word">全时空智慧交通综合平台</div>
        <el-input placeholder="" v-model="searchInput" class="input-with-select" style="width:508px;height:30px;line-height: 26px; margin-left: 26px;border-radius:4px;">
          <el-select v-model="selectType" slot="prepend" placeholder="快速定位" class="type-info">
            <el-option label="快速定位" value="1"></el-option>
            <el-option label="快速查找" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="quickPosition"></el-button>
        </el-input>
      </div>
      <div style="height: 56px;display: flex;align-items: center;color:rgba(184,191,209,1);">
        <div style="font-size:20px;margin-right: 12px;">深圳市</div>
        <div style="font-size:20px;margin-right: 30px;">{{ nowTime | formatDate  }}</div>
        <img src="../../static/setting/tou.jpg" alt="" width="30" height="30" style="border-radius: 15px;">
        <div style="font-size:18px;">韩鹏鹏</div>
        <img src="../../static/setting/user_up.png" alt="" width="15" height="15" style="margin-right: 30px;cursor: pointer;">
        <!--<el-badge is-dot>
          <img src="../../static/setting/alarm.png" alt="" width="25" height="25" style="margin-right: 30px;">
        </el-badge>-->
        <el-badge :value="1" :max="10" class="item" :hidden="hideBadge">
          <img src="../../static/setting/alarm.png" alt="" width="25" height="25" style="margin-right: 30px;cursor: pointer;" @click="clickAlarm">
        </el-badge>
        <img src="../../static/setting/question.png" alt="" width="25" height="25" style="margin-right: 30px;cursor: pointer;">
        <img src="../../static/setting/setting.png" alt="" width="25" height="25" style="margin-right: 30px;cursor: pointer;">
        <el-badge :value="1" :max="10" class="item">
          <img src="../../static/setting/email.png" alt="" width="25" height="25" style="margin-right: 30px;cursor: pointer;">
        </el-badge>
      </div>
    </div>

    <div style="width: 100%;height: 100%;margin-left:60px;margin-top:56px;position:fixed;z-index: 0;">
      <!--<object id="CmCaptureOcx" style="width: 100%; height:100%;"classid="clsid:3CA842C5-9B56-4329-A7CA-35CA77C7128D">123</object>-->
      <object id="TE" classid="clsid:3a4f9192-65a8-11d5-85c1-0001023952c1" style="width: 100%; height: 100%;opacity: 0.1"></object>
      <object id="sgworld" classid="CLSID:3a4f91b1-65a8-11d5-85c1-0001023952c1" style="visibility: hidden; height: 0;"></object>
      <div v-show="navigate" id="TE3DWindowNavMapDiv" style="width: 240px; height: 185px; position: absolute; right: 15px; bottom: 8px; z-index: 999;">
        <div id="NavigationMapDiv" style="width: 240px; height: 185px; position: absolute; right: 2px; bottom: 8px; z-index: 999;">
          <object id="NavigationMap" classid="CLSID:3a4f9194-65a8-11d5-85c1-0001023952c1" width="100%" height="100%">
          </object>
        </div>
      </div>
    </div>
    <div class="left-menu" style="z-index: 200">
      <ul style="width: 60px;height: 400px;display: flex;align-items: center;flex-direction: column;justify-content: space-between" @click="showMenuInfo = true">
        <li style="width: 100%;background:rgba(62,68,79,1);text-align: center;"><img class="icon_menu" src="../../static/icon_menu/open1.png" alt="" ></li>
        <li><img class="icon_menu" src="../../static/icon_menu/operate1.png" alt="" ></li>
        <li><img class="icon_menu" src="../../static/icon_menu/oversee1.png" alt="" ></li>
        <li><img class="icon_menu" src="../../static/icon_menu/maintenance1.png" alt="" ></li>
        <li><img class="icon_menu" src="../../static/icon_menu/pipeline1.png" alt="" ></li>
        <li><img class="icon_menu" src="../../static/icon_menu/data1.png" alt="" ></li>
        <li><img class="icon_menu" src="../../static/icon_menu/system1.png" alt="" ></li>
      </ul>
      <!--<div style="position: absolute;"></div>-->
    </div>
    <div v-if="showMenuInfo" class="left-menu-content" style="z-index: 500;margin-left:0px;">
      <iframe id="iframe_menu" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>
      <div style="width: 100%;background:rgba(62,68,79,1);text-align: center;" @click="showMenuInfo = false">
        <img class="icon_menu" src="../../static/icon_menu/close.png" alt="" >
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        background-color="rgba(48,54,66,1)"
        text-color="#fff">
        <el-submenu index="1">
          <template slot="title">
            <img class="icon_menu icon_menu_pos" src="../../static/icon_menu/operate1.png" alt="" >
            <span>三维操作</span>
          </template>
          <el-menu-item-group>
            <el-submenu index="1-1">
              <template slot="title">查询统计</template>
              <el-menu-item index="1-1-1">快速查询定位</el-menu-item>
              <el-menu-item index="1-1-2">条件查询</el-menu-item>
              <el-menu-item index="1-1-3">拓扑查询</el-menu-item>
              <el-menu-item index="1-1-4">空间定位</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2">书签管理</el-menu-item>
            <el-menu-item index="1-3">路径漫游</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">视图工具</template>
              <el-menu-item index="1-4-1">透明控制</el-menu-item>
              <el-menu-item index="1-4-2">三维标注</el-menu-item>
              <el-menu-item index="1-4-3">鹰眼导航</el-menu-item>
              <el-menu-item index="1-4-4">地下场景</el-menu-item>
              <el-menu-item index="1-4-5">清除图形</el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <template slot="title">测量工具</template>
              <el-menu-item index="1-4-1">水平距离测量</el-menu-item>
              <el-menu-item index="1-4-2">空间距离测量</el-menu-item>
              <el-menu-item index="1-4-3">面积测量</el-menu-item>
              <el-menu-item index="1-4-4">高程测量</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-6">标注管理</el-menu-item>
            <el-menu-item index="1-7">地图场景导出</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <img class="icon_menu icon_menu_pos" src="../../static/icon_menu/oversee1.png" alt="" >
            <span slot="title">时空监视</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">视频查询</el-menu-item>
            <el-menu-item index="2-2">云图防控联动</el-menu-item>
            <el-menu-item index="2-3">视频投影设置</el-menu-item>
            <el-menu-item index="2-4">视域分析</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <img class="icon_menu icon_menu_pos" src="../../static/icon_menu/maintenance1.png" alt="" >
            <span slot="title">智能运维</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">设备异常监控</el-menu-item>
            <el-menu-item index="3-2">设备维护追踪</el-menu-item>
            <el-menu-item index="3-3">运维数据统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <img class="icon_menu icon_menu_pos" src="../../static/icon_menu/pipeline1.png" alt="" >
            <span slot="title">管线分析</span>
          </template>
          <el-menu-item-group>
            <el-submenu index="4-1">
              <template slot="title">管线检测</template>
              <el-menu-item index="4-1-1">水平净距分析</el-menu-item>
              <el-menu-item index="4-1-2">垂直净距分析</el-menu-item>
              <el-menu-item index="4-1-3">碰撞检测</el-menu-item>
              <el-menu-item index="4-1-4">查询规则库</el-menu-item>
            </el-submenu>
            <el-submenu index="4-2">
              <template slot="title">综合分析</template>
              <el-menu-item index="4-2-1">断面分析</el-menu-item>
              <el-menu-item index="4-2-2">爆管分析</el-menu-item>
              <el-menu-item index="4-2-3">缓冲分析</el-menu-item>
              <el-menu-item index="4-2-4">地面开挖</el-menu-item>
            </el-submenu>
            <el-submenu index="4-3">
              <template slot="title">数据更新</template>
              <el-menu-item index="4-3-1">管线生成</el-menu-item>
              <el-menu-item index="4-3-2">导入数据</el-menu-item>
              <el-menu-item index="4-3-3">导出数据</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <img class="icon_menu icon_menu_pos" src="../../static/icon_menu/data1.png" alt="" >
            <span slot="title">数据报表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">运维专题</el-menu-item>
            <el-menu-item index="5-2">定制化专题</el-menu-item>
            <el-menu-item index="5-3">通用数据展示</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <img class="icon_menu icon_menu_pos" src="../../static/icon_menu/system1.png" alt="" >
            <span slot="title">系统管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">用户管理</el-menu-item>
            <el-menu-item index="6-2">权限管理</el-menu-item>
            <el-menu-item index="6-3">圆形符号管理</el-menu-item>
            <el-menu-item index="6-4">操作日志管理</el-menu-item>
            <el-menu-item index="6-5">系统异常管理</el-menu-item>
            <el-menu-item index="6-6">数据库备份</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>

    <div v-show="showMsg" style="width: 325px;height: 624px;position: absolute;right: 86px;top: 56px;z-index: 200;" v-drag>
      <iframe id="noticeIframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <Message></Message>
    </div>

    <div v-show="showOpacity" v-dragTool style="position: absolute;left: 40%;top: 20%;width: 500px;height: 200px;z-index: 100" class="tool">
      <iframe id="opacityM" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <div class="word_sty" style="width: 100%;height: 50px;line-height: 50px;text-align: center; background: #ccc;">
        <span>设置场景透明度</span>
        <i class="el-icon-circle-close" style="position: absolute;right: 2px;top: 3px;cursor: pointer" @click="closeOpacity"></i>
      </div>
      <div style="width: 100%;height: 150px;background: #ffffff"></div>
      <div style="width: 90%;height: auto;position: absolute;left: 5%;top: 80px;">
        <div class="block">
          <el-slider
            v-model="sliderValue"
            @change="changeOpacity"
            show-input="true">
          </el-slider>
        </div>
      </div>
      <div style="width: 100%;height: auto;position: absolute;left: 5%;top: 140px;">
        <div style="display: inline-block;margin-right: 100px">
          <el-button type="primary" round @click="clickOpacity">确定</el-button>
        </div>
        <el-button type="primary" round @click="recoverOpacity">还原</el-button>
      </div>
    </div>

    <!--三维标注-->
    <div v-show="show3DTagging" v-dragTool style="position: absolute;left: 40%;top: 20%;width: 500px;height: 500px;border: 1px solid #ccc;z-index: 100" class="tool">
      <iframe id="create3DTag" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <Create3DTag @closeTags="closeTag"></Create3DTag>
    </div>

    <!--路径漫游-->
    <div v-show="showPathRoaming" v-dragTool style="position: absolute;left: 36%;top: 30%;width: 500px;height: 500px;border: 1px solid #ccc;z-index: 100" class="tool">
      <iframe id="pathRoaming" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <PathRoaming @closePathR="closePathRoaming"></PathRoaming>
    </div>

    <!--书签管理-->
    <div v-show="showBookmark" v-dragTool style="position: absolute;left: 36%;top: 30%;width: 500px;height: 500px;border: 1px solid #ccc;z-index: 100" class="tool">
      <iframe id="bookmark" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <Bookmark @closeBookM="closeBookmark"></Bookmark>
    </div>

    <!--标注管理-->
    <div v-show="showTagManage" v-dragTool style="position: absolute;left: 36%;top: 30%;width: 500px;height: 500px;border: 1px solid #ccc;z-index: 100" class="tool">
      <iframe id="tagManage" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <TagManage @closeTagM="closeTagManage" :dialog="showTagManage"></TagManage>
    </div>

    <!--通知-->
    <!--<div id="noticeHover" style="width:10px;height:100px;position: absolute;right: 5px;bottom: 10px;background: #282F35;display: inline-block; z-index: 200" @mouseenter="showNotices()" @mouseleave="hideNotices()">
      <iframe id="tt" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
    </div>
    <div v-show="showNotice" style="z-index: 100" class="notice">
      <iframe id="noticeIframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <Notice></Notice>
    </div>-->

  </div>
</template>
<style scoped>
  .title-content {
    width:100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    font-family:Microsoft Yahei;
    font-weight:500;
    background:rgba(35,39,48,1);
    box-shadow:0px 1px 1px 0px rgba(0,0,0,0.75);
    position: absolute;
    left:0;
    top:0;
    z-index:999;
  }
  .title-word {
    width:220px;
    height:28px;
    font-size:20px;
    color:rgba(255,255,255,1);
    line-height:28px;
    display: inline-block;
    margin-left: 14px;
  }
  .type-info {
    width:108px;
    height:20px;
    font-size:14px;
    color:rgba(102,102,102,1);
    line-height:20px;
  }
  .left-menu {
    position: fixed;
    width: 60px;
    min-height: 100%;
    margin-top: 56px;
    background:rgba(48,54,66,1);
    box-shadow:1px 0px 2px 1px rgba(0,0,0,0.4);
  }
  .left-menu ul li{
    cursor: pointer;
  }
  .left-menu-content {
    position: fixed;
    width: 184px;
    min-height: 100%;
    margin-top: 56px;
    background:rgba(48,54,66,1);
    box-shadow:1px 0px 2px 1px rgba(0,0,0,0.4);
  }
  .icon_menu {
    width: 30px;
    height: 30px;
  }
  .icon_menu_pos {
    margin-right: 14px;
    margin-left: -4px;
  }
  .notice {
    width:400px;
    background-color: #282F35;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    box-shadow: 2px 0px 2px #000000;
    margin-left: 80%;
    margin-top: 50px;
    border-top: 1px solid #ffffff;
  }
</style>
<style>
  .word_sty {
    font-size: 20px;
    font-family: Microsoft Yahei;
    font-weight: 500;
    color: #ffffff;
    display:inline-block;
  }
  .el-input__inner {
    height: 30px;
    border-right: 0;
  }
  .el-input-group__append {
    border: 0;
    background: #ffffff;
  }
  .el-submenu__title {
    font-size: 18px;
    /*color:rgba(255,255,255,1);*/
  }
  .el-submenu .el-menu-item {
    min-width: 184px;
    /*color:rgba(184,191,209,1);*/
  }
  .el-submenu .is-opened div{
    font-size: 16px;
  }
  .el-badge__content.is-fixed {
    top: 5px;
    right: 42px;
    padding: 0;
    height: 10px;
    line-height: 8px;
    background:rgba(254,105,121,1);
  }
  /*.el-badge__content.is-fixed.is-dot {
    top: 6px;
    right: 42px;
  }*/
</style>

<script type="text/ECMAScript-6">
  import leftSidebar from '../components/leftSidebar';
  import Create3DTag from '../components/create3DTagging';
  import PathRoaming from '../components/pathRoaming'; //路径漫游
  import Bookmark from '../components/bookmark'; //书签管理
  import TagManage from '../components/tagManage';//标注管理
  import Notice from '../components/notice';//通知
  import Message from './message/device';//通知
  import { setOpcity, HorizontalDistance, AerialDistance, TerrinArea, VertialDistance, undergroundModel, printMap } from '../assets/operate3D';
  export default {
    name: 'HelloWorld',
    components: { leftSidebar, Create3DTag, PathRoaming, Bookmark, TagManage, Notice,Message },
    data () {
      return {
        searchInput: '',
        selectType: '',
        showMenuInfo: false,
        hideBadge: false,
        showMsg: false,
        date: new Date(),
        nowTime: '',
        state: 'open',
        showOpacity: false,
        show3DTagging: false,
        showPathRoaming: false,
        showBookmark: false,
        showTagManage: false,
        showNotice: true,
        sliderValue: 100,
        undergroundModelFlag: false,
        navigate: false,
        flag: false
      }
    },
    filters: {
      formatDate:function () {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        hour.toString().length < 2 ? hour = '0' + hour : hour;
        minute.toString().length < 2 ? minute = '0' + minute : minute;
        second.toString().length < 2 ? second = '0' + second : second;
        let currentdate = year + '年' + month +  '月' + strDate +  '日' + ' ' + hour + ':' + minute + ':' + second;
        return currentdate;
      }
    },
    watch: {
    },
    created () {

    },
    computed: {
      "nowTime" : function() {
        return this.date;
      }
    },
    mounted(){
      var flyPath = "D:\\sz\\sz.FLY";
      sgworld.Project.Open(flyPath);
      sgworld.AttachEvent("OnLButtonClicked", this.Mouse_OnLButtonClicked);
      sgworld.AttachEvent("OnFrame", this.Tool_OnFrame);
      console.log($('#TE'))
      $('.tool_icon').css('opacity',0);
      $('.img_tooltrigger').css('opacity',0);
      let _this = this; //声明一个变量指向vue实例this,保证作用域一致
      this.timer = setInterval(function() {
        _this.nowTime = new Date();
      }, 1000);
    },
    directives:{
      // 自定义指令的名字
      drag:{
        // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
        /*inserted(el){
          var $div = el;
          var style = {
            position: "absolute",
            left: "0",
            top: "0"
          }
          for(var k in style){
            $div.style[k] = style[k];//设置关键css
          }
          $div.onmousedown = function(e){//鼠标按键按下
            e = e || window.event;
            var x = e.clientX - $div.offsetLeft;//鼠标到左上角的距离信息, 固定不变
            var y = e.clientY - $div.offsetTop;
            document.onmousemove = function(e){//鼠标移动
              e = e || window.event;
              var L = e.clientX - x;
              var T = e.clientY - y;
              var pW = document.documentElement.clientWidth;//页面宽度
              var pH = document.documentElement.clientHeight;
              var divW = $div.offsetWidth;//Dom宽度
              var divH = $div.offsetHeight;
              // 范围限定
              if(L < 0){
                L = 0;
              }
              if(T < 0){
                T = 0;
              }
              if(L > pW - divW){
                L = pW - divW;
              }
              if(T > pH - divH){
                T = pH - divH;
              }
              // 范围限定 end
              $div.style.left = L + "px";
              $div.style.top = T + "px";
            };
            document.onmouseup = function(e){//鼠标按键松开
              document.onmousemove = null;
            };
          };
          console.log( 'inserted', el);
        },*/
        inserted(el) {
          console.log("el",el)
          var oDiv= el;
          oDiv.onmousedown=function(ev){
            ev.preventDefault();
            $(".circle_tool").css("cursor", "move");
            var pW = document.documentElement.clientWidth;//页面宽度
            var pH = document.documentElement.clientHeight;
            var divW = oDiv.offsetWidth;//Dom宽度
            var divH = oDiv.offsetHeight;
            var disX=ev.clientX-oDiv.offsetLeft;
            var disY=ev.clientY-oDiv.offsetTop;

            document.onmousemove=function(ev){
              var l=ev.clientX-disX;
              var t=ev.clientY-disY;
              // 范围限定
              if(l < 0){
                l = 0;
              }
              if(t < 0){
                t = 0;
              }
              if(l > pW - divW){
                l = pW - divW;
              }
              if(t > pH - divH){
                t = pH - divH;
              }
              //console.log(pH,divH,t)
              oDiv.style.left=l+'px';
              oDiv.style.top=t+'px';
            };
            document.onmouseup=function(){
              $(".circle_tool").css("cursor", "default");
              document.onmousemove=null;
              document.onmouseup=null;
            };
          };
        },
        // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
        bind(){
          console.log( 'bind' );
        },
        // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
        // 指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
        update(){
          console.log( 'update' );
        },
        // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
        componentUpdated(){
          console.log( 'componentUpdated' );
        },
        // 只调用一次，指令与元素解绑时调用。
        unbind(){
          console.log( 'unbind' );
        }
      },
      dragTool:{
        // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
        /*inserted(el){
         var $div = el;
         var style = {
         position: "absolute",
         left: "0",
         top: "0"
         }
         for(var k in style){
         $div.style[k] = style[k];//设置关键css
         }
         $div.onmousedown = function(e){//鼠标按键按下
         e = e || window.event;
         var x = e.clientX - $div.offsetLeft;//鼠标到左上角的距离信息, 固定不变
         var y = e.clientY - $div.offsetTop;
         document.onmousemove = function(e){//鼠标移动
         e = e || window.event;
         var L = e.clientX - x;
         var T = e.clientY - y;
         var pW = document.documentElement.clientWidth;//页面宽度
         var pH = document.documentElement.clientHeight;
         var divW = $div.offsetWidth;//Dom宽度
         var divH = $div.offsetHeight;
         // 范围限定
         if(L < 0){
         L = 0;
         }
         if(T < 0){
         T = 0;
         }
         if(L > pW - divW){
         L = pW - divW;
         }
         if(T > pH - divH){
         T = pH - divH;
         }
         // 范围限定 end
         $div.style.left = L + "px";
         $div.style.top = T + "px";
         };
         document.onmouseup = function(e){//鼠标按键松开
         document.onmousemove = null;
         };
         };
         console.log( 'inserted', el);
         },*/
        inserted(el) {
          //console.log("el",el)
          var oDiv= el;
          oDiv.onmousedown=function(ev){
            //ev.preventDefault();
            var pW = document.documentElement.clientWidth;//页面宽度
            var pH = document.documentElement.clientHeight;
            var divW = oDiv.offsetWidth;//Dom宽度
            var divH = oDiv.offsetHeight;
            var disX=ev.clientX-oDiv.offsetLeft;
            var disY=ev.clientY-oDiv.offsetTop;
            //console.log('disX',disX,disY)
            if (disY < 50) {
              $(".tool").css("cursor", "move");
              document.onmousemove=function(ev){
                var l=ev.clientX-disX;
                var t=ev.clientY-disY;
                // 范围限定
                if(l < 0){
                  l = 0;
                }
                if(t < 0){
                  t = 0;
                }
                if(l > pW - divW){
                  l = pW - divW;
                }
                if(t > pH - divH){
                  t = pH - divH;
                }
                //console.log(pH,divH,t)
                oDiv.style.left=l+'px';
                oDiv.style.top=t+'px';
              };
              document.onmouseup=function(){
                $(".circle_tool").css("cursor", "default");
                document.onmousemove=null;
                document.onmouseup=null;
              };
            } else {
              $(".tool").css("cursor", "default");
              //return true;
            }
          };
        },
        // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
        bind(){
          //console.log( 'bind' );
        },
        // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
        // 指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
        update(){
          //console.log( 'update' );
        },
        // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
        componentUpdated(){
          //console.log( 'componentUpdated' );
        },
        // 只调用一次，指令与元素解绑时调用。
        unbind(){
          //console.log( 'unbind' );
        }
      },
      over:{
        // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
        /*inserted(el){
         var $div = el;
         var style = {
         position: "absolute",
         left: "0",
         top: "0"
         }
         for(var k in style){
         $div.style[k] = style[k];//设置关键css
         }
         $div.onmousedown = function(e){//鼠标按键按下
         e = e || window.event;
         var x = e.clientX - $div.offsetLeft;//鼠标到左上角的距离信息, 固定不变
         var y = e.clientY - $div.offsetTop;
         document.onmousemove = function(e){//鼠标移动
         e = e || window.event;
         var L = e.clientX - x;
         var T = e.clientY - y;
         var pW = document.documentElement.clientWidth;//页面宽度
         var pH = document.documentElement.clientHeight;
         var divW = $div.offsetWidth;//Dom宽度
         var divH = $div.offsetHeight;
         // 范围限定
         if(L < 0){
         L = 0;
         }
         if(T < 0){
         T = 0;
         }
         if(L > pW - divW){
         L = pW - divW;
         }
         if(T > pH - divH){
         T = pH - divH;
         }
         // 范围限定 end
         $div.style.left = L + "px";
         $div.style.top = T + "px";
         };
         document.onmouseup = function(e){//鼠标按键松开
         document.onmousemove = null;
         };
         };
         console.log( 'inserted', el);
         },*/
        inserted(el) {
          //console.log("el",el)
          var oDiv= el;
          oDiv.onmousedown=function(ev){
            ev.preventDefault();
            $(".circle_tool").css("cursor", "move");
            var pW = document.documentElement.clientWidth;//页面宽度
            var pH = document.documentElement.clientHeight;
            var divW = oDiv.offsetWidth;//Dom宽度
            var divH = oDiv.offsetHeight;
            var disX=ev.clientX-oDiv.offsetLeft;
            var disY=ev.clientY-oDiv.offsetTop;

            document.onmousemove=function(ev){
              var l=ev.clientX-disX;
              var t=ev.clientY-disY;
              // 范围限定
              if(l < 0){
                l = 0;
              }
              if(t < 0){
                t = 0;
              }
              if(l < pW - divW){
                l = 0;
              }
              if(t > pH - divH){
                t = 0;
              }
              //console.log(pH,divH,t)
              oDiv.style.left=l+'px';
              oDiv.style.top=t+'px';
            };
            document.onmouseup=function(){
              $(".circle_tool").css("cursor", "default");
              document.onmousemove=null;
              document.onmouseup=null;
            };
          };
        },
        // 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
        bind(){
          //console.log( 'bind' );
        },
        // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。
        // 指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
        update(){
          //console.log( 'update' );
        },
        // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
        componentUpdated(){
          //console.log( 'componentUpdated' );
        },
        // 只调用一次，指令与元素解绑时调用。
        unbind(){
          //console.log( 'unbind' );
        }

      }
    },
    /*directive('drag',function(){
      var oDiv=this.el;
      oDiv.onmousedown=function(ev){
        var disX=ev.clientX-oDiv.offsetLeft;
        var disY=ev.clientY-oDiv.offsetTop;

        document.onmousemove=function(ev){
          var l=ev.clientX-disX;
          var t=ev.clientY-disY;
          oDiv.style.left=l+'px';
          oDiv.style.top=t+'px';
        };
        document.onmouseup=function(){
          document.onmousemove=null;
          document.onmouseup=null;
        };
      };
    }),*/
  methods: {
    quickPosition () {
      alert(1)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickAlarm () {
      this.showMsg = !this.showMsg;
    },
    getNowTime() {
      let seperator1 = "-";
      let year = this.date.getFullYear();
      let month = this.date.getMonth() + 1;
      let strDate = this.date.getDate();
      let hour = this.date.getHours();
      let minute = this.date.getMinutes();
      let second = this.date.getSeconds();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      hour.toString().length < 2 ? hour = '0' + hour : hour;
      minute.toString().length < 2 ? minute = '0' + minute : minute;
      second.toString().length < 2 ? second = '0' + second : second;
      let currentdate = year + '年' + month +  '月' + strDate +  '日' + ' ' + hour + ':' + minute + ':' + second;
      //let currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    prevent (ev) {
      //console.log(ev)
      ev.preventDefault();
    },
    showNotices () {
      this.showNotice = true;
      console.log($('#noticeHover'))
      //document.getElementById('noticeHover').style.display = 'block';
    },
    hideNotices () {
      let _this = this;
      //document.getElementById('noticeHover').style.display = 'none';
      let time = setTimeout(function () {
        _this.showNotice = false;
      },3000);
    },
    viewTools (ev) {
      if (ev.target.innerHTML == "透明控制") {
        this.showOpacity = true;
      }
      if (ev.target.innerHTML == "三维标注") {
        this.show3DTagging = true;
      }
      if (ev.target.innerHTML == "地下场景") {
        if (!this.undergroundModelFlag) {
          this.undergroundModelFlag = true;
          undergroundModel(true);
        } else {
          this.undergroundModelFlag = false;
          undergroundModel(false);
        }
      }
      if (ev.target.innerHTML == "鹰眼导航") {
        if (!this.navigate) {
          this.navigate = true;
        } else {
          this.navigate = false;
        }
      }
    },
    distanceTools (ev) {
      if (ev.target.innerHTML == "水平距离测量") {
        HorizontalDistance();
      }
      if (ev.target.innerHTML == "空间距离测量") {
        AerialDistance();
      }
      if (ev.target.innerHTML == "面积测量") {
        TerrinArea();
      }
      if (ev.target.innerHTML == "高程测量") {
        VertialDistance();
      }
    },
    threeDimensional (ev) {
      if (ev.target.innerHTML == "书签管理") {
        this.showBookmark = true;
      }
      if (ev.target.innerHTML == "路径漫游") {
        this.showPathRoaming = true;
      }
      if (ev.target.innerHTML == "标注管理") {
        this.showTagManage = true;
      }
      if (ev.target.innerHTML == "地图场景导出") {
        printMap();
      }
    },
    closeOpacity () {
      this.showOpacity = false;
    },
    clickOpacity () {
      let opacity = this.sliderValue/100
      setOpcity(opacity);
    },
    recoverOpacity () {
      this.sliderValue = 100;
      setOpcity(1);
    },
    changeOpacity (val) {
      setOpcity(val/100);
    },
    closeTag (data) {
      if (data == 'close') {
        this.show3DTagging = false;
      }
    },
    closePathRoaming (data) {
      if (data == 'close') {
        this.showPathRoaming = false;
      }
    },
    closeBookmark (data) {
      if (data == 'close') {
        this.showBookmark = false;
      }
    },
    closeTagManage (data) {
      if (data == 'close') {
        this.showTagManage = false;
      }
    },
      showTool () {
        $('.tool_icon').css('opacity',1);
        $('.img_tooltrigger').css('opacity',0.3);
      },
      hideTool () {
        $('.tool_icon').css('opacity',0);
        $('.img_tooltrigger').css('opacity',0);
      },
      dragInit(id){
        var $div = document.getElementById(id);
        var style = {
          position: "absolute",
          left: "0",
          top: "0"
        }
        for(var k in style){
          $div.style[k] = style[k];//设置关键css
        }
        $div.onmousedown = function(e){//鼠标按键按下
          e = e || window.event;
          var x = e.clientX - $div.offsetLeft;//鼠标到左上角的距离信息, 固定不变
          var y = e.clientY - $div.offsetTop;
          document.onmousemove = function(e){//鼠标移动
            e = e || window.event;
            var L = e.clientX - x;
            var T = e.clientY - y;
            var pW = document.documentElement.clientWidth;//页面宽度
            var pH = document.documentElement.clientHeight;
            var divW = $div.offsetWidth;//Dom宽度
            var divH = $div.offsetHeight;
            // 范围限定
            if(L < 0){
              L = 0;
            }
            if(T < 0){
              T = 0;
            }
            if(L > pW - divW){
              L = pW - divW;
            }
            if(T > pH - divH){
              T = pH - divH;
            }
            // 范围限定 end
            $div.style.left = L + "px";
            $div.style.top = T + "px";
          };
          document.onmouseup = function(e){//鼠标按键松开
            document.onmousemove = null;
          };
        };
      },
      Tool_OnFrame() {
        var MouseInfo = sgworld.Window.GetMouseInfo();
        if ( (sgworld.Window.Rect.Height - 70) < MouseInfo.Y && (sgworld.Window.Rect.Height - 20) > MouseInfo.Y && 1500 < MouseInfo.X && MouseInfo.X < 1910 ) {
          if(!this.flag){
            sgworld.Window.SetInputMode(1,"D:\\sz\\Link_Hnd.cur",1) ;
          }
          this.flag = true;
        }else{
          if(this.flag){
            sgworld.Window.SetInputMode(0);
          }
          this.flag = false;
        }
      },
      Mouse_OnLButtonClicked(Flags, X, Y){
        var MouseInfo = sgworld.Window.GetMouseInfo();
        alert("q")
        if ( (sgworld.Window.Rect.Height - 70) < MouseInfo.Y && (sgworld.Window.Rect.Height - 20) > MouseInfo.Y && 1500 < MouseInfo.X && MouseInfo.X < 1910 ) {
          alert("w")
          if(MouseInfo.X < 1555){ alert("1");}
          else if(MouseInfo.X < 1615){ alert("2")}
          else if(MouseInfo.X < 1675){ alert("3")}
          else if(MouseInfo.X < 1735){ alert("4")}
          else if(MouseInfo.X < 1795){ alert("5")}
          else if(MouseInfo.X < 1855){ alert("6")}
          else {alert("7");}
        }
      }
    }
  }
</script>


