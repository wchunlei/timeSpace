<template>
  <div class="hello">
    <div style="width: 100%;height: 60px;line-height: 60px;">
      <!--<img src="../../static/setting/alarm1.png" alt="" style="display:inline-block;width:30px;height: 30px;background: #282F35">-->
      <span class="word_sty">通知</span>
    </div>
    <el-tabs type="border-card" style="background: #282F35">
      <el-tab-pane label="待处理">
        <div class="word_sty_notice" style="background: #999999;opacity: 0.85;border-radius: 10px;">
          <div style="width: 360px;height:80px;">
            <!--<img src="../../static/setting/btn_cameraicon.png" alt="" style="display:inline-block;width:50px;height: 50px;margin: -24px 0 0 10px;">-->
            <div style="display: inline-block; ">
              <ul style="margin:10px 0 0 -20px;">
                <li class="describe" style="font-size: 18px;">设备异常</li>
                <li class="describe" style="font-size: 10px;">2018 年 7月 1日 18:00:00</li>
                <li class="describe" style="font-size: 10px;">新洲路与福田一路交汇处</li>
              </ul>
            </div>
            <div style="display: inline-block;color:#FFFF79;margin-left: 80px;">
              <span>待处理</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="处理中">
        <div class="word_sty_notice" style="background: #999999;opacity: 0.85;border-radius: 10px;">
          <div style="width: 360px;height:80px;">
            <!--<img src="../../static/setting/btn_cameraicon.png" alt="" style="display:inline-block;width:50px;height: 50px;margin: -24px 0 0 10px;">-->
            <div style="display: inline-block; ">
              <ul style="margin:10px 0 0 -20px;">
                <li class="describe" style="font-size: 18px;">设备异常</li>
                <li class="describe" style="font-size: 10px;">2018 年 7月 1日 18:00:00</li>
                <li class="describe" style="font-size: 10px;">新洲路与福田一路交汇处</li>
              </ul>
            </div>
            <div style="display: inline-block;color:#FFFF79;margin-left: 80px;">
              <span>处理中</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已处理">
        <div class="word_sty_notice" style="background: #999999;opacity: 0.85;border-radius: 10px;">
          <div style="width: 360px;height:80px;">
            <!--<img src="../../static/setting/btn_cameraicon.png" alt="" style="display:inline-block;width:50px;height: 50px;margin: -24px 0 0 10px;">-->
            <div style="display: inline-block; ">
              <ul style="margin:10px 0 0 -20px;">
                <li class="describe" style="font-size: 18px;">设备异常</li>
                <li class="describe" style="font-size: 10px;">2018 年 7月 1日 18:00:00</li>
                <li class="describe" style="font-size: 10px;">新洲路与福田一路交汇处</li>
              </ul>
            </div>
            <div style="display: inline-block;color:#FFFF79;margin-left: 80px;">
              <span>已处理</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    props: [ "dialog" ],
    data() {
      return {
      }
    },
    created () {

    },
    watch: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .word_sty {
    font-size: 16px;
    font-family: Microsoft Yahei;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 3px;
    display:inline-block;
  }
  .word_sty_notice {
    font-size: 12px;
    font-family: Microsoft Yahei;
    font-weight: 500;
    color: #ffffff;
    display:inline-block;
  }
  .describe {
    list-style: none;
  }
</style>
<style>
  .el-tabs__nav-scroll {
    background: #333333;
    opacity: 0.85;
    border-top: 1px solid  #333333;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background: #999999;
    opacity: 0.85;
    color: #ffffff;
  }
</style>
