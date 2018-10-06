<template>
  <div class="hello">
    <div class="msg-all">
      <div class="msg-title">
        <div style="height: 28px;cursor: pointer;" :class="showUnderline?colorWhite:color" @click="clickDevice">设备故障<hr v-show="showUnderline" style="height: 2px;margin-top: 0px;"></div>
        <div style="height: 28px;cursor: pointer;" :class="!showUnderline?colorWhite:color" @click="clickTraffic">交通事件<hr v-show="!showUnderline" style="height: 2px;margin-top: 0px;"></div>
      </div>
      <div class="msg-content">
        <ul v-for="item in dataList">
          <li style="margin-bottom: 10px;margin-left: 8px;">
            <div class="item-content" style="display: flex;align-items: center;justify-content: flex-start;">
              <img src="../../../static/msg_icon/camera.png" alt="" style="margin-left: 8px;margin-right: 10px;background:rgba(83,88,122,1);border-radius: 46px;">
              <div>
                <div style="width: 216px;display: flex;justify-content: space-between">{{ item.name }} <div style="display: inline-block;color:rgba(79,118,208,1);">待处理</div></div>
                <div>{{ item.time }}</div>
                <div>{{ item.address }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    props: [ "dialog" ],
    data() {
      return {
        showUnderline: true,
        colorWhite: 'color-white',
        color: 'color',
        dataList: [{
          type: '1',
          name: '设备异常',
          time: '2018年7月1日',
          address: '新洲路与深大路交汇处'
        },{
          type: '1',
          name: '设备异常',
          time: '2018年7月1日',
          address: '新洲路与深大路交汇处'
        }]
      }
    },
    created () {

    },
    watch: {

    },
    methods: {
      clickDevice () {
        this.showUnderline = !this.showUnderline;
      },
      clickTraffic () {
        this.showUnderline = !this.showUnderline;
      }
    }
  }
</script>

<style scoped>
  .msg-all {
    width:325px;
    height:750px;
    background:rgba(48,54,66,1);
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
    border-radius:4px;
    font-family:Microsoft Yahei;
    font-weight:500;
  }
  .msg-title {
    height: 60px;
    font-size:18px;
    color:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .msg-content {
    width: 290px;
    height: 400px;
  }
  .msg-content ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .item-content {
    width:290px;
    height:82px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
    border-radius:2px;
  }
  .color-white {
    color:rgba(255,255,255,1);
  }
  .color {
    color:rgba(184,191,209,1);
  }
</style>
