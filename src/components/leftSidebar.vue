<template>
    <div class="hello">

        <div id="sidebar" style="z-index:18;">
          <iframe id="iframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
          </iframe>
          <!-- 无序列表实现菜单项 -->
          <ul @mouseover.prevent='showSidebarSecond'>
              <li id="prof" class="item">三维操作</li>
              <li id="asset" class="item">时空监视</li>
              <li id="brand" class="item">智能运维</li>
              <li id="broadcast" class="item">管线分析</li>
              <li id="foot" class="item">大数据显示</li>
              <li id="calendar" class="item">系统管理</li>
          </ul>
          <div id='closeBar' @click="closeButton">
            <iframe id="iframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
            </iframe>
              <span class="glyphicon glyphicon-remove"></span>
          </div>
        </div>
      <div id="sidebar_second_item1">
        <iframe id="iframe1" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
        </iframe>
        <!-- 无序列表实现菜单项 -->
        <ul @mouseover='showSidebarThird'>
          <li class="item">
            <span><i class="glyphicon glyphicon-user"></i></span>
            <!--<div>智能巡航</div>-->
            <div>查询统计</div>
          </li>
          <li class="item">
            <span><i class="glyphicon glyphicon-usd"></i></span>
            <div>书签管理</div>
          </li>
          <li class="item">
            <span><i class="glyphicon glyphicon-heart"></i></span>
            <div>路径漫游</div>
          </li>
          <li class="item">
            <span><i class="glyphicon glyphicon-bell"></i></span>
            <div>视图工具</div>
          </li>
          <li class="item">
            <span><i class="glyphicon glyphicon-eye-open"></i></span>
            <div>测量工具</div>
          </li>
          <li class="item">
            <span><i class="glyphicon glyphicon-time"></i></span>
            <div>标注管理</div>
          </li>
          <li class="item">
            <span><i class="glyphicon glyphicon-time"></i></span>
            <div>地图场景导出</div>
          </li>
        </ul>
      </div>

    </div>
</template>

<script type="text/ECMAScript-6">
    export default {
        name: 'home',
        components: {  },
        data () {

            return {
              sidebar_seconds: false,
              state: 'open'
            }
        },
        created () {

        },
        mounted () {

        },
        methods: {
          showSidebarSecond (event) {
            console.log(event.target.innerText.length, event.target.innerText == '三维操作', '三维操作'.length);
            let el_item1 = document.getElementById('sidebar_second_item1');
            if (event.target.innerText == '三维操作') {
              el_item1.style.display = 'block';
              el_item1.className = 'sidebar_second_item1-move-right';
              console.log(el_item1)
            } else if(event.target.innerText == '时空监视') {

            } else {
              el_item1.style.display = 'none';
              //el_item1.className = 'sidebar_second_item1-move-left';
            }
          },
          hideSidebarSecond (event) {
            console.log('hide',event)
            this.sidebar_seconds = false;
            console.log('this.sidebar_seconds',this.sidebar_seconds)
          },
          closeButton () {
            let el = document.getElementById('sidebar');
            let closeBar = document.getElementById('closeBar');
            if (this.state == 'open') {
              el.className = 'sidebar-move-left';
              closeBar.className = 'closeBar-move-right';
              closeBar.style.left = '100px';
              this.state = 'close';
            } else {
              el.className = 'sidebar-move-right';
              el.style.left ='-100px';
              closeBar.className = 'closeBar-move-left';
              closeBar.style.left = '10px';
              this.state = 'open';
            }
          }
        }
    }

</script>

<style scoped lang="scss">

    #sidebar{
        width:200px;
        background-color: #ccc;
        padding-top:10px;
        position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
        min-height: 100%;
    }
    ul{
        list-style-type: none;
        padding:0px;
        margin-top:0px;

    }
    #sidebar .item{
        width:200px;
        height: 50px;
        line-height: 50px;
        font-size:16px;
        font-family: 'Microsoft YaHei';
        text-align:center;
        margin-top:30px;
        cursor: pointer;
    }
    #sidebar .item:hover{
        background:royalblue;
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
      width:200px;
      margin-left: 100px;
      background-color: #ccc;
      padding-top:10px;
      position:fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位*/
      min-height: 100%;
      z-index:16;
      display: none;
    }
    #sidebar_second_item1 .item{
      width:200px;
      height: 50px;
      line-height: 50px;
      font-size:16px;
      font-family: 'Microsoft YaHei';
      text-align:center;
      margin-top:30px;
      cursor: pointer;
    }
    #sidebar_second_item1 .item:hover{
      background:royalblue;
    }
    #sidebar_second_item1 .item div{
      display: inline-block;
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
        -webkit-transform: translateX(-200px);
      }
    }
    @keyframes sml{
      from{

      }
      to{
        -webkit-transform: translateX(-200px);
        transform: translateX(-200px);
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
        transform: translateX(100px);
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
        -webkit-transform: translateX(200px) rotate(405deg) scale(1.5);
        transform: translateX(200px) rotate(405deg) scale(1.5);
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
    @keyframes ssmr{
      from{

      }
      to{
        transform: translateX(100px);
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
        -webkit-transform: translateX(-200px);
      }
    }
    @keyframes ssml{
      from{

      }
      to{
        -webkit-transform: translateX(-200px);
        transform: translateX(-200px);
      }
    }
</style>
