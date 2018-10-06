<template>
  <div class="home">

    <div style="width:100%;height: 50px;background: #282F35;margin-bottom:0px;text-align: left;line-height: 50px;position: absolute;left:0;top:0;z-index:999">
      <iframe id="iframe_menu" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>
      <img src="../../static/setting/earth_30x30-01.png" alt="" style="display:inline-block;width:30px;height: 30px;margin: 16px 10px 0px 7px;float:left">
      <div style="font-size: 20px;font-family: Microsoft Yahei; font-weight: 700; color: #cccccc;letter-spacing: 3px;display:inline-block;">全时空智慧交通综合平台</div>
      <!--<div style="font-size: 16px;font-family: Microsoft Yahei; font-weight: 900; color: #ffffff;letter-spacing: 3px;display:inline-block;float: right;margin-right: 7px">{{ dateFormat }}</div>-->
      <el-input placeholder="输入目的地快速定位" v-model="inputSearch" style="display: inline-block;width: 500px;margin-left: 80px;"><i slot="suffix" class="el-input__icon el-icon-search" @click="quickPosition"></i></el-input>
      <div style="display: inline-block;font-size: 20px;font-family: Microsoft Yahei;font-weight: 500; color: #ffffff;letter-spacing: 3px;float: right;margin-right:94px;">
        <span style="display: inline-block;">深圳市</span>
        <span>{{ nowTime | formatDate  }}</span>
        <span style="display: inline-block;width: 1px;height: 50px;background: #ffffff;margin: 0 10px 0 20px;"><span style="opacity: 0;">|</span></span>
        <img src="../../static/setting/question.png" alt="" style="display:inline-block;width:24px;height: 24px;">
        <span style="display: inline-block;width: 1px;height: 50px;background: #ffffff;margin: 0 10px;"><span style="opacity: 0;">|</span></span>
        <img src="../../static/setting/set.png" alt="" style="display:inline-block;width:24px;height: 24px;">
        <span style="display: inline-block;width: 1px;height: 50px;background: #ffffff;margin: 0 10px;"><span style="opacity: 0;">|</span></span>
        <img src="../../static/setting/email.png" alt="" style="display:inline-block;width:24px;height: 24px;">
        <span style="display: inline-block;width: 1px;height: 50px;background: #ffffff;margin: 0 10px;"><span style="opacity: 0;">|</span></span>
        <img src="../../static/setting/login.png" alt="" style="display:inline-block;width:24px;height: 24px;">
        <span style="display: inline-block;font-size: 14px;font-family: Microsoft Yahei;font-weight: 500; color: #ffffff;letter-spacing: 3px;">韩梅梅</span>
      </div>
    </div>

    <div style="width: 100%;height: 100%;position:fixed;z-index: 0;">
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

    <!--<leftSidebar></leftSidebar>-->
    <!--<div id="white" v-over style="width:150px;position:fixed;min-height: 100%;z-index:18;">
      <iframe id="iframe_silde" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>
      <div id="sidebar" style="z-index:18;">
        <ul @mouseover.prevent='showSidebarSecond' style="z-index:18;">
          <li id="prof" class="item">三维操作</li>
          <li id="asset" class="item">时空监视</li>
          <li id="brand" class="item">智能运维</li>
          <li id="broadcast" class="item">管线分析</li>
          <li id="foot" class="item">大数据显示</li>
          <li id="calendar" class="item">系统管理</li>
        </ul>
        <div id='closeBar' @click="closeButton">
          <iframe id="iframe_close" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
          </iframe>
          <span class="glyphicon glyphicon-remove"></span>
        </div>
      </div>
    </div>-->
    <div id="sidebar" v-over style="z-index:18;">
      <ul @mouseover.prevent='showSidebarSecond' style="z-index:18;">
        <li id="prof" class="item">三维操作</li>
        <li id="asset" class="item">时空监视</li>
        <li id="brand" class="item">智能运维</li>
        <li id="broadcast" class="item">管线分析</li>
        <li id="foot" class="item">数据报表</li>
        <li id="calendar" class="item">系统管理</li>
      </ul>
      <iframe id="iframe_silde" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>
      <div id='closeBar' @click="closeButton">
        <iframe id="iframe_close" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
        </iframe>
        <span class="glyphicon glyphicon-remove"></span>
      </div>
    </div>

    <div id="sidebar_second_item1" v-over style="z-index:16;">
      <iframe id="iframe1" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>
      <ul @mouseover.prevent='showSidebarThird1' @click="threeDimensional" style="z-index:16;">
        <li class="item">查询统计</li>
        <li class="item">书签管理</li>
        <li class="item">路径漫游</li>
        <li class="item">视图工具</li>
        <li class="item">测量工具</li>
        <li class="item">标注管理</li>
        <li class="item">地图场景导出</li>
      </ul>
    </div>
    <div id="sidebar_second_item1_third1" v-over style="z-index:14;">
      <iframe id="iframe1_third1" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">快速查询定位</li>
        <li class="item">条件查询</li>
        <li class="item">拓扑查询</li>
        <li class="item">空间定位</li>
      </ul>
    </div>
    <div id="sidebar_second_item1_third2" v-over style="z-index:14;">
      <iframe id="iframe1_third2" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul @click="viewTools">
        <li class="item">透明控制</li>
        <li class="item">三维标注</li>
        <li class="item">鹰眼导航</li>
        <li class="item">地下场景</li>
        <li class="item">清除图形</li>
      </ul>
    </div>
    <div id="sidebar_second_item1_third3" v-over style="z-index:14;">
      <iframe id="iframe1_third3" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul @click="distanceTools">
        <li class="item">水平距离测量</li>
        <li class="item">空间距离测量</li>
        <li class="item">面积测量</li>
        <li class="item">高程测量</li>
      </ul>
    </div>

    <div id="sidebar_second_item2" v-over style="z-index:16;">
      <iframe id="iframe2" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">视频查询</li>
        <li class="item">云图防控联动</li>
        <li class="item">视频投影设置</li>
        <li class="item">视域分析</li>
      </ul>
    </div>
    <div id="sidebar_second_item3" v-over style="z-index:16;">
      <iframe id="iframe3" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">设备异常监控</li>
        <li class="item">设备维护追踪</li>
        <li class="item">运维数据统计</li>
      </ul>
    </div>
    <div id="sidebar_second_item4" v-over style="z-index:16;">
      <iframe id="iframe4" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul @mouseover.prevent='showSidebarThird2' style="z-index:16;">
        <li class="item">管线检测</li>
        <li class="item">综合分析</li>
        <li class="item">数据更新</li>
      </ul>
    </div>
    <div id="sidebar_second_item4_third1" v-over style="z-index:14;">
      <iframe id="iframe4_third1" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">水平净距分析</li>
        <li class="item">垂直净距分析</li>
        <li class="item">碰撞检测</li>
        <li class="item">查询规则库</li>
      </ul>
    </div>
    <div id="sidebar_second_item4_third2" v-over style="z-index:14;">
      <iframe id="iframe4_third2" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">断面分析</li>
        <li class="item">爆管分析</li>
        <li class="item">缓冲分析</li>
        <li class="item">地面开挖</li>
      </ul>
    </div>
    <div id="sidebar_second_item4_third3" v-over style="z-index:14;">
      <iframe id="iframe4_third3" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">管线生成</li>
        <li class="item">导入数据</li>
        <li class="item">导出数据</li>
      </ul>
    </div>

    <div id="sidebar_second_item5" v-over style="z-index:16;">
      <iframe id="iframe5" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">运维专题</li>
        <li class="item">定制化专题</li>
        <li class="item">通用数据展示</li>
      </ul>
    </div>
    <div id="sidebar_second_item6" v-over style="z-index:16;">
      <iframe id="iframe6" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li class="item">用户管理</li>
        <li class="item">权限管理</li>
        <li class="item">圆形符号管理</li>
        <li class="item">操作日志管理</li>
        <li class="item">系统异常管理</li>
        <li class="item">数据库备份</li>
      </ul>
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
    <div id="noticeHover" style="width:10px;height:100px;position: absolute;right: 5px;bottom: 10px;background: #282F35;display: inline-block; z-index: 200" @mouseenter="showNotices()" @mouseleave="hideNotices()">
      <iframe id="tt" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
    </div>
    <div v-show="showNotice" style="z-index: 100" class="notice">
      <iframe id="noticeIframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <Notice></Notice>
    </div>

    <!--<div v-drag style="width:50px;height:50px;position: absolute;left: 0;top :0;background: red">123</div>-->

    <!--<div class="circle_tool" v-drag @mouseover="showTool" @mouseout="hideTool" style="z-index: 20;">
      <iframe id="iframe_tool" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background-color:transparent;">
      </iframe>
      <img class="img_tooltrigger" src="../../static/img_tooltrigger.png" alt="" style="width: 260px;height: 260px;opacity: 0;border-radius: 130px">
      <div class="tool_init">
        <img src="../../static/bg_blackcircle.png" alt="">
        <div class="tool_setting">
          <img src="../../static/setting.png" alt="">
        </div>
      </div>
      <div class="tool_icon">
        <div class="btn_toolkit_compass">
          <img src="../../static/btn_toolkit_compass.png" alt="">
        </div>
        <div class="btn_toolkit_compass_hover">
          <img src="../../static/btn_toolkit_compass_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_zoomout">
          <img src="../../static/btn_toolkit_zoomout.png" alt="">
        </div>
        <div class="btn_toolkit_zoomout_hover">
          <img src="../../static/btn_toolkit_zoomout_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_measure">
          <img src="../../static/btn_toolkit_measure.png" alt="">
        </div>
        <div class="btn_toolkit_measure_hover">
          <img src="../../static/btn_toolkit_measure_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_layer">
          <img src="../../static/btn_toolkit_layer.png" alt="">
        </div>
        <div class="btn_toolkit_layer_hover">
          <img src="../../static/btn_toolkit_layer_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_zoomin">
          <img src="../../static/btn_toolkit_zoomin.png" alt="">
        </div>
        <div class="btn_toolkit_zoomin_hover">
          <img src="../../static/btn_toolkit_zoomin_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_2d3d">
          <img src="../../static/btn_toolkit_2d3d.png" alt="">
        </div>
        <div class="btn_toolkit_2d3d_hover">
          <img src="../../static/btn_toolkit_2d3d_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_sketch">
          <img src="../../static/btn_toolkit_sketch.png" alt="">
        </div>
        <div class="btn_toolkit_sketch_hover">
          <img src="../../static/btn_toolkit_sketch_mouseOver.png" alt="">
        </div>
        <div class="btn_toolkit_favourite">
          <img src="../../static/btn_toolkit_favourite.png" alt="">
        </div>
        <div class="btn_toolkit_favourite_hover">
          <img src="../../static/btn_toolkit_favourite_mouseOver.png" alt="">
        </div>
      </div>
    </div>-->

  </div>
</template>
<style>
  .circle_tool{
    position: absolute;
    left: 300px;
    top: 500px;
    width: 260px;
    height: 260px;
    display: inline-block;
  }
  .tool_init {
    position: absolute;
    left: 70px;
    top: 70px;
    opacity: 0.85;
    width: 180px;
    height: 180px;
    display: inline-block;
  }
  .tool_setting {
    position: absolute;
    left: 30px;
    top: 30px;
    display: inline-block;
  }
  .tool_icon {
    display: inline-block;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
  }
  .tool_icon div{
    display: inline-block;
  }
  .btn_toolkit_compass {
    position: relative;
    left: 4px;
    top: 100px;
    opacity: 1;
  }
  .btn_toolkit_compass_hover {
    position: relative;
    left: -60px;
    top: 100px;
    opacity: 0;
  }
  .btn_toolkit_zoomout {
    position: relative;
    left: -30px;
    top: 5px;
  }
  .btn_toolkit_zoomout_hover {
    position: relative;
    left: -94px;
    top: 5px;
    opacity: 0;
  }
  .btn_toolkit_measure {
    position: relative;
    left: 188px;
    top: 40px;
  }
  .btn_toolkit_measure_hover {
    position: relative;
    left: 124px;
    top: 40px;
    opacity: 0;
  }
  .btn_toolkit_layer {
    position: relative;
    left: -30px;
    top: 130px;
  }
  .btn_toolkit_layer_hover {
    position: relative;
    left: -94px;
    top: 130px;
    opacity: 0;
  }
  .btn_toolkit_zoomin {
    position: relative;
    left: 30px;
    top: -90px;
    opacity: 1;
  }
  .btn_toolkit_zoomin_hover {
    position: relative;
    left: -34px;
    top: -90px;
    opacity: 0;
  }
  .btn_toolkit_2d3d {
    position: relative;
    left: 34px;
    top: -88px;
    opacity: 1;
  }
  .btn_toolkit_2d3d_hover {
    position: relative;
    left: -30px;
    top: -88px;
    opacity: 0;
  }
  .btn_toolkit_sketch {
    position: relative;
    left: 36px;
    top: -16px;
    opacity: 1;
  }
  .btn_toolkit_sketch_hover {
    position: relative;
    left: -28px;
    top: -16px;
    opacity: 0;
  }
  .btn_toolkit_favourite {
    position: relative;
    left: 36px;
    top: -16px;
    opacity: 1;
  }
  .btn_toolkit_favourite_hover {
    position: relative;
    left: -28px;
    top: -16px;
    opacity: 0;
  }
</style>

<style scoped lang="scss">
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

  #sidebar{
    width:150px;
    background-color: #282F35;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    box-shadow: 2px 0px 2px #000000;
    /*opacity: 0.85;*/
  }
  ul{
    list-style-type: none;
    padding:0px;
    margin-top:0px;
  }
  #sidebar .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    color: #ffffff;
    font-size:24px;
    font-family: 'Microsoft YaHei';
    text-align:center;
    margin:0;
    cursor: pointer;
    border-bottom: 1px solid #60676d;
  }
  #sidebar .item:hover{
    background: #A4B6C1;
  }
  #sidebar .item div{
    display: inline-block;
  }
  #closeBar{
    position:absolute;
    left: 10px;
    bottom:10px;
    width:16px;
    height: 16px;
    text-align: center;
    cursor:pointer;
  }
  #sidebar_second_item1 {
    width:150px;
    margin-left: 100px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item1 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item1 .item:hover{
    background:#A4B6C1;
  }

  #sidebar_second_item2 {
    width:150px;
    margin-left: 100px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item2 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item2 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item3 {
    width:150px;
    margin-left: 100px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item3 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item3 .item:hover{
    background:#A4B6C1;
  }

  #sidebar_second_item4 {
    width:150px;
    margin-left: 100px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item4 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item4 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item5 {
    width:150px;
    margin-left: 100px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item5 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item5 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item6 {
    width:150px;
    margin-left: 100px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item6 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item6 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item1_third1 {
    width:150px;
    margin-left: 250px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item1_third1 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item1_third1 .item:hover{
    background:#A4B6C1;
  }

  #sidebar_second_item1_third2 {
    width:150px;
    margin-left: 250px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item1_third2 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item1_third2 .item:hover{
    background:#A4B6C1;
  }

  #sidebar_second_item1_third3 {
    width:150px;
    margin-left: 250px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item1_third3 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item1_third3 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item4_third1 {
    width:150px;
    margin-left: 250px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item4_third1 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item4_third1 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item4_third2 {
    width:150px;
    margin-left: 250px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item4_third2 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item4_third2 .item:hover{
    background: #A4B6C1;
  }

  #sidebar_second_item4_third3 {
    width:150px;
    margin-left: 250px;
    background-color: #000000;
    margin-top: 50px;
    padding-top:10px;
    position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
    min-height: 100%;
    z-index:16;
    display: none;
    opacity: 1;
    box-shadow: 2px 0px 2px #000000;
  }
  #sidebar_second_item4_third3 .item{
    width:150px;
    height: 70px;
    line-height: 70px;
    font-size:20px;
    font-family: 'Microsoft YaHei';
    color: #ffffff;
    text-align:center;
    margin:0px;
    cursor: pointer;
    border-bottom: 1px solid #ffffff;
  }
  #sidebar_second_item4_third3 .item:hover{
    background: #A4B6C1;
  }

  /* sidebar向左移动的动画属性 animation样式 */
  .sidebar-move-left {
    -webkit-animation-name: sml;
    -moz-animation-name: sml;
    -o-animation-name: sml;
    animation-name: sml;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  /* 关键帧的动画效果 */
  @-webkit-keyframes sml{
    from{

    }
    to{
      -webkit-transform: translateX(-150px);
    }
  }
  @keyframes sml{
    from{

    }
    to{
      -webkit-transform: translateX(-150px);
      transform: translateX(-150px);
    }
  }

  /* sidebar向右打开的动画效果 */
  .sidebar-move-right{
    -webkit-animation-name: smr;
    -moz-animation-name: smr;
    -o-animation-name: smr;
    animation-name: smr;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

  }
  @keyframes smr{
    from{

    }
    to{
      transform: translateX(0px);
    }
  }
  /* 关闭按钮向右移动的动画属性 */
  .closeBar-move-right{
    -webkit-animation-name: sl;
    -moz-animation-name: sl;
    -o-animation-name: sl;
    animation-name: sl;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  @-webkit-keyframes sl{
    from{

    }
    to{
      -webkit-transform: translateX(0px) rotate(405deg) scale(1.5);
    }
  }
  @keyframes sl{
    from{

    }
    to{
      -webkit-transform: translateX(150px) rotate(405deg) scale(1.5);
      transform: translateX(150px) rotate(405deg) scale(1.5);
    }
  }
  /* 关闭按钮向左移动的动画属性 */
  .closeBar-move-left {
    -webkit-animation-name: sr;
    -moz-animation-name: sr;
    -o-animation-name: sr;
    animation-name: sr;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes sr{
    from{
      transform : scale(1.5);
      -webkit-transform : scale(1.5);
    }
    to{
      transform: translateX(0px)  scale(1)  rotate(-405deg);
      -webkit-transform: translateX(0px)  scale(1)  rotate(-405deg);
    }
  }
  @keyframes sr{
    from{
      -webkit-transform : scale(1.5);
      transform : scale(1.5);
    }
    to{
      -webkit-transform: translateX(0px) scale(1) rotate(-405deg);
      transform: translateX(0px) scale(1) rotate(-405deg);
    }
  }

  /* sidebar_second_item1向右打开的动画效果 */
  .sidebar_second_item1-move-right{
    -webkit-animation-name: ssmr;
    -moz-animation-name: ssmr;
    -o-animation-name: ssmr;
    animation-name: ssmr;
    -webkit-animation-duration: 0.5s;
    -moz-animation-duration: 0.5s;
    -o-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-iteration-count: 0.5;
    -moz-animation-iteration-count: 0.5;
    -ms-animation-iteration-count: 0.5;
    -o-animation-iteration-count: 0.5;
    animation-iteration-count: 0.5;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

  }
  @keyframes ssmr{
    from{

    }
    to{
      transform: translateX(60px);
    }
  }
  /* sidebar_second_item1向左移动的动画属性 animation样式 */
  .sidebar_second_item1-move-left {
    -webkit-animation-name: ssml;
    -moz-animation-name: ssml;
    -o-animation-name: ssml;
    animation-name: ssml;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  /* 关键帧的动画效果 */
  @-webkit-keyframes ssml{
    from{

    }
    to{
      -webkit-transform: translateX(-150px);
    }
  }
  @keyframes ssml{
    from{

    }
    to{
      -webkit-transform: translateX(-150px);
      transform: translateX(-150px);
    }
  }
</style>

<style>
  .word_sty {
    font-size: 20px;
    font-family: Microsoft Yahei;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 3px;
    display:inline-block;
  }
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
</style>

<script type="text/ECMAScript-6">
  import leftSidebar from '../components/leftSidebar';
  import Create3DTag from '../components/create3DTagging';
  import PathRoaming from '../components/pathRoaming'; //路径漫游
  import Bookmark from '../components/bookmark'; //书签管理
  import TagManage from '../components/tagManage';//标注管理
  import Notice from '../components/notice';//通知
  import { setOpcity, HorizontalDistance, AerialDistance, TerrinArea, VertialDistance, undergroundModel, printMap } from '../assets/operate3D';
  export default {
    name: 'HelloWorld',
    components: { leftSidebar, Create3DTag, PathRoaming, Bookmark, TagManage, Notice },
    data () {
      return {
        inputSearch: '',
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
      showSidebarSecond (event) {
        //console.log(event.target.innerText.length, event.target.innerText == '三维操作', '三维操作'.length);
        let el_item1 = document.getElementById('sidebar_second_item1');
        let el_item2 = document.getElementById('sidebar_second_item2');
        let el_item3 = document.getElementById('sidebar_second_item3');
        let el_item4 = document.getElementById('sidebar_second_item4');
        let el_item5 = document.getElementById('sidebar_second_item5');
        let el_item6 = document.getElementById('sidebar_second_item6');
        let el_item1_third1 = document.getElementById('sidebar_second_item1_third1');
        let el_item1_third2 = document.getElementById('sidebar_second_item1_third2');
        let el_item1_third3 = document.getElementById('sidebar_second_item1_third3');
        let el_item4_third1 = document.getElementById('sidebar_second_item4_third1');
        let el_item4_third2 = document.getElementById('sidebar_second_item4_third2');
        let el_item4_third3 = document.getElementById('sidebar_second_item4_third3');
        if (event.target.innerText == '三维操作') {
          el_item1.style.display = 'block';
          el_item1.className = 'sidebar_second_item1-move-right';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          el_item4.style.display = 'none';
          el_item5.style.display = 'none';
          el_item6.style.display = 'none';
        } else if(event.target.innerText == '时空监视') {
          el_item2.style.display = 'block';
          el_item2.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item3.style.display = 'none';
          el_item4.style.display = 'none';
          el_item5.style.display = 'none';
          el_item6.style.display = 'none';
        } else if(event.target.innerText == '智能运维') {
          el_item3.style.display = 'block';
          el_item3.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item4.style.display = 'none';
          el_item5.style.display = 'none';
          el_item6.style.display = 'none';
        } else if(event.target.innerText == '管线分析') {
          el_item4.style.display = 'block';
          el_item4.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          el_item5.style.display = 'none';
          el_item6.style.display = 'none';
        } else if(event.target.innerText == '数据报表') {
          el_item5.style.display = 'block';
          el_item5.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          el_item4.style.display = 'none';
          el_item6.style.display = 'none';
        } else if(event.target.innerText == '系统管理') {
          el_item6.style.display = 'block';
          el_item6.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          el_item4.style.display = 'none';
          el_item5.style.display = 'none';
        } else {
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          el_item4.style.display = 'none';
          el_item5.style.display = 'none';
          el_item6.style.display = 'none';
          //el_item1.className = 'sidebar_second_item1-move-left';
        }
        if (el_item1.style.display == 'none') {
          el_item1_third1.style.display = 'none';
          el_item1_third2.style.display = 'none';
          el_item1_third3.style.display = 'none';
        }
        if (el_item4.style.display == 'none') {
          el_item4_third1.style.display = 'none';
          el_item4_third2.style.display = 'none';
          el_item4_third3.style.display = 'none';
        }
      },
      showSidebarThird1 (event) {
        //console.log(event.target.innerText.length, event.target.innerText == '三维操作', '三维操作'.length);
        let el_item1 = document.getElementById('sidebar_second_item1_third1');
        let el_item2 = document.getElementById('sidebar_second_item1_third2');
        let el_item3 = document.getElementById('sidebar_second_item1_third3');
        if (event.target.innerText == '查询统计') {
          el_item1.style.display = 'block';
          el_item1.className = 'sidebar_second_item1-move-right';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
        } else if(event.target.innerText == '视图工具') {
          el_item2.style.display = 'block';
          el_item2.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item3.style.display = 'none';
        } else if(event.target.innerText == '测量工具') {
          el_item3.style.display = 'block';
          el_item3.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
        } else {
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          //el_item1.className = 'sidebar_second_item1-move-left';
        }
      },
      showSidebarThird2 (event) {
        //console.log(event.target.innerText.length, event.target.innerText == '三维操作', '三维操作'.length);
        let el_item1 = document.getElementById('sidebar_second_item4_third1');
        let el_item2 = document.getElementById('sidebar_second_item4_third2');
        let el_item3 = document.getElementById('sidebar_second_item4_third3');
        if (event.target.innerText == '管线检测') {
          el_item1.style.display = 'block';
          el_item1.className = 'sidebar_second_item1-move-right';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
        } else if(event.target.innerText == '综合分析') {
          el_item2.style.display = 'block';
          el_item2.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item3.style.display = 'none';
        } else if(event.target.innerText == '数据更新') {
          el_item3.style.display = 'block';
          el_item3.className = 'sidebar_second_item1-move-right';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
        } else {
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          //el_item1.className = 'sidebar_second_item1-move-left';
        }
      },
      hideSidebarSecond (event) {
        //console.log('hide',event)
        this.sidebar_seconds = false;
        //console.log('this.sidebar_seconds',this.sidebar_seconds)
      },
      closeButton () {
        let el = document.getElementById('sidebar');
        let closeBar = document.getElementById('closeBar');
        let el_item1 = document.getElementById('sidebar_second_item1');
        let el_item1_third1 = document.getElementById('sidebar_second_item1_third1');
        let el_item1_third2 = document.getElementById('sidebar_second_item1_third2');
        let el_item1_third3 = document.getElementById('sidebar_second_item1_third3');
        let el_item2 = document.getElementById('sidebar_second_item2');
        let el_item3 = document.getElementById('sidebar_second_item3');
        let el_item4 = document.getElementById('sidebar_second_item4');
        let el_item4_third1 = document.getElementById('sidebar_second_item4_third1');
        let el_item4_third2 = document.getElementById('sidebar_second_item4_third2');
        let el_item4_third3 = document.getElementById('sidebar_second_item4_third3');
        let el_item5 = document.getElementById('sidebar_second_item5');
        let el_item6 = document.getElementById('sidebar_second_item6');
        if (this.state == 'open') {
          el.className = 'sidebar-move-left';
          closeBar.className = 'closeBar-move-right';
          closeBar.style.left = '0px';
          el_item1.style.display = 'none';
          el_item2.style.display = 'none';
          el_item3.style.display = 'none';
          el_item4.style.display = 'none';
          el_item5.style.display = 'none';
          el_item6.style.display = 'none';
          el_item1_third1.style.display = 'none';
          el_item1_third2.style.display = 'none';
          el_item1_third3.style.display = 'none';
          el_item4_third1.style.display = 'none';
          el_item4_third2.style.display = 'none';
          el_item4_third3.style.display = 'none';
          this.state = 'close';
        } else {
          el.className = 'sidebar-move-right';
          el.style.left ='0px';
          closeBar.className = 'closeBar-move-left';
          closeBar.style.left = '10px';
          this.state = 'open';
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


