<template>
  <div class="hello">
    <div class="block">
      <el-slider
        v-model="sliderValue"
        :format-tooltip="formatTooltip"
        show-input="true">
      </el-slider>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">

  export default {
    data() {
      return {
        sliderValue: 0
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
