<template>
  <div class="hello">

    <!--<div>
      <div class="sidebar" >
        <ul class="sidebar-menu ">`
          <template v-for="(item ,index) in menulist">
            <li :class="currentUrl === item.menuUrl ? 'active':''">
              <template v-if="item.menuUrl">
                <router-link :to="item.menuUrl" @click.native="toggleName=''">
                  <i :class="['fzicon',item.menuIcon]"></i>
                  <span>{{item.menuName}}</span>
                </router-link>
              </template>
              <template v-else-if="item.menuSubLink">
                <a href="javascript:;" @click="isToggle(item.menuName,item.defaultActive)">
                  <i :class="['fzicon',item.menuIcon]"></i>
                  <span>{{item.menuName}}</span>
                  <i class="trangle" :class="[config.iconfont, (item.menuName === toggleName) || item.defaultActive? config.icon_expand: config.icon_collapse]">
                  </i>
                </a>
                <transition name="sliderToggle" mode="out-in">
                  <ul class="tree-menu" v-show="item.menuName === toggleName || item.defaultActive">
                    <li v-for="(subitem,subindex) in item.menuSubLink" :key="subitem" :class="currentUrl === subitem.menuUrl ? 'active':''">
                      <router-link :to="subitem.menuUrl">
                        <i :class="subitem.menuIcon"></i>
                        <span>{{subitem.menuName}}</span>
                      </router-link>
                    </li>
                  </ul>
                </transition>
              </template>
            </li>
          </template>
        </ul>
      </div>
    </div>-->

    <div id="sidebar">
      <iframe id="iframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <!-- 无序列表实现菜单项 -->
      <ul>
        <li id="prof" class="item">
          <span><i class="glyphicon glyphicon-user"></i></span>
          <!--<div>智能巡航</div>-->
          <div>三维操作</div>
        </li>
        <li id="asset" class="item">
          <span><i class="glyphicon glyphicon-usd"></i></span>
          <div>天眼追踪</div>
        </li>
        <li id="brand" class="item">
          <span><i class="glyphicon glyphicon-heart"></i></span>
          <div>智能运维</div>
        </li>
        <li id="broadcast" class="item">
          <span><i class="glyphicon glyphicon-bell"></i></span>
          <div>出警日志</div>
        </li>
        <li id="foot" class="item">
          <span><i class="glyphicon glyphicon-eye-open"></i></span>
          <div>全时监控</div>
        </li>
        <li id="calendar" class="item">
          <span><i class="glyphicon glyphicon-time"></i></span>
          <div>统计数据</div>
        </li>
      </ul>
      <div id='closeBar'>
        <span class="glyphicon glyphicon-remove"></span>
      </div>
    </div>
    <div id="sidebar_second">

    </div>
    <div id="prof-content" class="nav-content">
      <iframe id="iframe" allowtransparency="true" src="about:blank" frameborder="0" marginheight="0" marginwidth="0" style="position:absolute;visibility:inherit; top:0px;left:0px;width:100%; height:100%;z-index:-1; opacity: 0;background:transparent;">
      </iframe>
      <ul>
        <li id="prof_second" class="item">
          <span><i class="glyphicon glyphicon-user"></i></span>
          <!--<div>智能巡航</div>-->
          <div>三维操作</div>
        </li>
        <li id="asset_second" class="item">
          <span><i class="glyphicon glyphicon-usd"></i></span>
          <div>天眼追踪</div>
        </li>
        <li id="brand_second" class="item">
          <span><i class="glyphicon glyphicon-heart"></i></span>
          <div>智能运维</div>
        </li>
        <li id="broadcast_second" class="item">
          <span><i class="glyphicon glyphicon-bell"></i></span>
          <div>出警日志</div>
        </li>
        <li id="foot_second" class="item">
          <span><i class="glyphicon glyphicon-eye-open"></i></span>
          <div>全时监控</div>
        </li>
        <li id="calendar_second" class="item">
          <span><i class="glyphicon glyphicon-time"></i></span>
          <div>统计数据</div>
        </li>
      </ul>
    </div>
    <div id="asset-content" class="nav-content">
      <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div>
        资产
      </div>
    </div>
    <div id="brand-content" class="nav-content">
      <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div>
        品牌
      </div>
    </div>
    <div id="broadcast-content" class="nav-content">
      <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div>
        品牌
      </div>
    </div>
    <div id="foot-content" class="nav-content">
      <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div>
        看过
      </div>
    </div>
    <div id="calendar-content" class="nav-content">
      <div class="nav-con-close">
        <i class="glyphicon glyphicon-chevron-left"></i>
      </div>
      <div>
        日历
      </div>
    </div>


  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    name: 'home',
    components: {  },
    data () {

      return {

      }
    },
    created () {

    },
    mounted () {
      this.test();
    },
    methods: {
      test () {
        /*使用块模式--立即执行的匿名函数*/
        //所有声明的变量在构造函数内部，不会向windows添加任何属性
        /*
         构造函数的基本规范：
         1、构造函数的第一个字母是大写的，与其他函数区分开来
         2、调用构造函数的时候需要用new，不然会创建全局变量
         */
        var Menubar = function(){
          this.el = document.querySelector('#sidebar ul'); //菜单项的DOM元素通过css的querySelctor查找得到
          this.state = 'allClosed';//初始状态时，allClosed，当打开某一个时，则为hasOpened
          console.log('this.el',this.el)
          this.el.addEventListener('click',function(e){
            //7.1阻止冒泡事件向上传播，这样点击菜单项，只响应菜单项事件，无关sidebar
            e.stopPropagation();
          });
          var self = this;
          var currentOpendMenuContent = null;
          //7.2点击菜单项添加监听事件
          this.menuList = document.querySelectorAll('#sidebar ul > li');
          for( var i=0; i<this.menuList.length;i++){
            this.menuList[i].addEventListener('mouseover',function(e){
              //找到相应的菜单项的内容区域
              var menuContentEl = document.getElementById(e.currentTarget.id + '-content' );
              /*
               7.2-1：没有打开菜单项，打开响应的菜单项
               7.2-2：有打开的菜单项，关闭该菜单项再打开响应的菜单项
               */
              if(self.state === 'allClosed'){
                console.log( '打开' + menuContentEl.id);
                /*9.1菜单项打开的动画效果*/
                //先设置菜单栏的高和左边的位置
                menuContentEl.style.top = '0px';
                menuContentEl.style.left = '-85px';
                menuContentEl.classList.add('menuContent-move-right');
                self.state = 'hasOpened';
                self.currentOpendMenuContent = menuContentEl;
              }else{
                console.log('关闭' + self.currentOpendMenuContent.id);
                /*9.2菜单栏关闭的动画效果*/
                self.currentOpendMenuContent.className = 'nav-content';
                self.currentOpendMenuContent.style.top = '100px';
                self.currentOpendMenuContent.style.left = '0px';
                self.currentOpendMenuContent.classList.add('menuContent-move-left')
                console.log( '打开' + menuContentEl.id);
                menuContentEl.className = "nav-content"
                menuContentEl.style.top = '250px';
                menuContentEl.style.left = '0px';
                menuContentEl.classList.add('menuContent-move-up');
                self.state = 'hasOpened';
                self.currentOpendMenuContent = menuContentEl;
              }
            });
          }
          /*10、关闭按钮的样式*/
          this.menuContentList = document.querySelectorAll('.nav-content >div.nav-con-close');
          for(i=0;i<this.menuContentList.length;i++){
            this.menuContentList[i].addEventListener('click', function(e){
              //要关闭菜单内容项，所以要先得到菜单内容项
              var menuContent = e.currentTarget.parentNode;
              menuContent.className = "nav-content";
              menuContent.style.top = '100px';
              menuContent.style.left = '0px';
              menuContent.classList.add('menuContent-move-left');
              this.state = 'allClosed';
            });
          }
        };
        /*1、使用构造函数创建sidebar对象 ，
         实例化该对象，向内提供属性eId、closeId*/
        var Sidebar = function(eId,closeBarId){
          /*2、定义对象的状态和属性和方法*/
          this.state = 'opened';
          /*4、继续完成构造函数
           4.1、完成对象的初始化,获取所需要的DOM元素
           4.2、在构造函数的关闭按钮中增加事件响应函数
           {借助Javascript的事件的冒泡传播机制:使用向上冒泡的机制来传播,在'sidebar的div上能监听closebar按钮的事件响应'}
           */
          this.el = document.getElementById(eId || 'sidebar'); //在参数中，需要传入默认的id以防不提供参数
          this.closeBarEl = document.getElementById(closeBarId || 'closeBar');
          /*4.3、在el元素上面调用事件函数*/
          var self = this;
          /*
           修改事件函数内的this指向回Sidebar对象有两种方法:
           1、修改函数的上下文(比较复杂)
           2、javascript的特性--闭包
           this指向构造函数返回的对象，则指向下方 new sidebar返回的对象，
           闭包原理，再在事件响应函数中调用该变量
           */
          /*7、在sidebar构造函数中，需要将Menubar函数作为一个属性传进*/
          this.menubar = new Menubar();
          this.el.addEventListener("click",function(event){
            if(event.target !== self.el){
              self.triggerSwitch(); //代表打开和关闭的统一函数名称
            }
          });

        };
        /*3、声明sidebar的两个行为
         对象的行为添加在构造函数的原型链上*/
        Sidebar.prototype.close = function(){
          console.log('关闭sidebar');
          /*8、增加sidebar和关闭按钮的动画效果*/
          this.menubar.currentOpendMenuContent.classList.add('menuContent-move-left');
          this.el.className = 'sidebar-move-left';
          this.closeBarEl.className = 'closeBar-move-right';
          this.closeBarEl.style.left = '100px';
          this.state = 'closed';
        };
        Sidebar.prototype.open =  function(){
          console.log('打开sidebar');
          /* 9、增加sidebar打开和关闭按钮向左移动的动画效果*/
          //9.1需要先将sidebar的位置定位到上次关闭的位置
          this.el.style.left ='-100px';
          this.el.className = 'sidebar-move-right';
          this.closeBarEl.style.left = '0px';
          this.closeBarEl.className = 'closeBar-move-left';
          this.state = 'opened';
        };
        /*5、增加triggerSwich()函数*/
        Sidebar.prototype.triggerSwitch = function(){
          if(this.state === 'opened'){
            this.close();
          }else{
            this.open();
          }
        };
        /*6、验证构造函数的成果
         6.1在close函数中console.log输出值来验证
         6.2增加test单元测试，单元测试一直伴随代码存在*/
        var sidebar = new Sidebar();
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
    z-index:18;
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
    bottom:80px;
    width:35px;
    text-align: center;
    cursor:pointer;
  }
  .nav-content{
    width:300px;
    position:fixed;/*会让元素脱离普通流，不占据空间*/
    min-height:100%;
    margin-top: 80px;
    margin-left: 200px;
    border:1px solid #ccc;
    background-color: #cccccc;
    opacity:0;
    z-index:16;
  }
  .nav-con-close{
    position: absolute;/*相对于最近的“positioned”祖先元素一个“positioned”元素是指position 值不是 static 的元素*/
    top:5px;
    right:5px;
    cursor: pointer;
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

  .menuContent-move-right {
    -webkit-animation-name: mmr;
    -moz-animation-name: mmr;
    -o-animation-name: mmr;
    animation-name: mmr;
    -webkit-animation-duration: .5s;
    -moz-animation-duration: .5s;
    -o-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  @keyframes mmr{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
      transform: translateX(200px);
    }
  }

  .menuContent-move-left {
    -webkit-animation-name: mml;
    -moz-animation-name: mml;
    -o-animation-name: mml;
    animation-name: mml;
    -webkit-animation-duration: .5s;
    -moz-animation-duration: .5s;
    -o-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes mml{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
      -webkit-transform: translateX(-300px);
      transform: translateX(-300px);
    }
  }

  @keyframes mml{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
      transform: translateX(-300px);
    }
  }

  .menuContent-move-up {
    -webkit-animation-name: mmu;
    -moz-animation-name: mmu;
    -o-animation-name: mmu;
    animation-name: mmu;
    -webkit-animation-duration: .5s;
    -moz-animation-duration: .5s;
    -o-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -o-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  @-webkit-keyframes mmu{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
      -webkit-transform: translateY(-250px);
      transform: translateY(-250px);
    }
  }

  @keyframes mmu{
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
      transform: translateY(-250px);
    }
  }
</style>
