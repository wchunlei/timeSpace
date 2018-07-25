<template>
  <div class="home">

    <div style="width:100%;height: 80px;background: rgb(39, 45, 60);margin-bottom:0px;text-align: left;line-height: 80px">
      <img src="../../static/logo.png" alt="" style="display:inline-block;width:124px;height: 42px;margin: 16px 10px 0px 7px;float:left">
      <div style="font-size: 30px;font-family: Microsoft Yahei; font-weight: 900; color: #ffffff;letter-spacing: 3px;display:inline-block;">深圳市企业态势分析系统</div>
      <!--<div style="font-size: 16px;font-family: Microsoft Yahei; font-weight: 900; color: #ffffff;letter-spacing: 3px;display:inline-block;float: right;margin-right: 7px">{{ dateFormat }}</div>-->
    </div>

    <div style="width: 200px;position: absolute;left: 0;top: 80px;z-index: 18;">
      <leftSidebar></leftSidebar>
    </div>

    <!--<div v-drag style="width:50px;height:50px;position: absolute;left: 0;top :0;background: red">123</div>-->

    <div style="width: 100%;height: 845px;z-index: 9;">
      <!--<object id="CmCaptureOcx" style="width: 100%; height:100%;"classid="clsid:3CA842C5-9B56-4329-A7CA-35CA77C7128D">123</object>-->
      <object id="TE" classid="clsid:3a4f9192-65a8-11d5-85c1-0001023952c1" style="width: 100%; height: 100%;opacity: 0.1"></object>
      <object id="sgworld" classid="CLSID:3a4f91b1-65a8-11d5-85c1-0001023952c1" style="visibility: hidden; height: 0;"></object>
    </div>
    <div class="circle_tool" v-drag @mouseover="showTool" @mouseout="hideTool" style="z-index: 20;border-radius: 130px">
      <iframe id="iframe_tool" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
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
    </div>

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

<script type="text/ECMAScript-6">
  import leftSidebar from '../components/leftSidebar';
  export default {
    name: 'HelloWorld',
    components: { leftSidebar },
    data () {
      return {

      }
    },
    watch: {
    },
    created () {
    },
    mounted(){
      var flyPath = "D:\\sz\\sz.FLY";
      sgworld.Project.Open(flyPath);
      console.log($('#TE'))
      $('.tool_icon').css('opacity',0);
      $('.img_tooltrigger').css('opacity',0);
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #myChart {
    /*background: #ccc;*/
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  /*li {
    display: inline-block;
    margin: 0 10px;
  }*/
  a {
    color: #42b983;
  }
  .select {
    margin-bottom: 20px;
    text-align: left;
  }
  .select-info {

  }
  .select-info-option {
    /*background: red;*/
  }
  #container #containers {
    /*opacity: 0.9;*/
    /*border: 10px solid rgba(17, 17, 36, 0.5)*/
    /*display: inline-block;*/
  }
  .stop {
    animation-play-state: paused;
  }
  .slider {
    width:400px;
    height:150px;
    /*border: 1px solid red;*/
    display: inline-block;
    /*margin-top:10px;*/
  }
  /*.sliderLeft {
    width:407px;
    height:900px;
    opacity: 0.9;
    z-index: 1;
    display: inline-flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    float: left;
    position: relative;
    margin-top:7px;
    margin-bottom: 7px;
    margin-left: 7px;
  }
  .sliderRight {
    width:407px;
    height:900px;
    opacity: 0.9;
    z-index: 0;
    display: inline-flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    float: right;
    position: relative;
    margin-top:7px;
    margin-bottom: 7px;
    margin-left: 7px;
  }*/

</style>

<style>
  .highcharts-credits {
    display: none;
  }
  @media screen and (min-height:900px)and (max-height: 1000px) {
    .sliderLeft {
      width:407px;
      height:860px;
      opacity: 0.9;
      z-index: 1;
      display: inline-flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      float: left;
      position: relative;
      margin-top:7px;
      margin-bottom: 7px;
      margin-left: 7px;
    }
    .sliderRight {
      width:407px;
      height:860px;
      opacity: 0.9;
      z-index: 0;
      display: inline-flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      float: right;
      position: relative;
      margin-top:7px;
      margin-bottom: 7px;
      margin-left: 7px;
    }
  }
  @media screen and (min-height:1000px)and (max-height: 1080px) {
    .sliderLeft {
      width:407px;
      height:900px;
      opacity: 0.9;
      z-index: 1;
      display: inline-flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      float: left;
      position: relative;
      margin-top:7px;
      margin-bottom: 7px;
      margin-left: 7px;
    }
    .sliderRight {
      width:407px;
      height:900px;
      opacity: 0.9;
      z-index: 0;
      display: inline-flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      float: right;
      position: relative;
      margin-top:7px;
      margin-bottom: 7px;
      margin-left: 7px;
    }
  }
  @media screen and (min-height: 1080px) {
    .sliderLeft {
      width:407px;
      height:950px;
      opacity: 0.9;
      z-index: 1;
      display: inline-flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      float: left;
      position: relative;
      margin-top:7px;
      margin-bottom: 7px;
      margin-left: 7px;
    }
    .sliderRight {
      width:407px;
      height:950px;
      opacity: 0.9;
      z-index: 0;
      display: inline-flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-between;
      float: right;
      position: relative;
      margin-top:7px;
      margin-bottom: 7px;
      margin-left: 7px;
    }
  }
</style>
