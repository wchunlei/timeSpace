<template>
  <div class="hello">
    <div>
      <div class="word_sty" style="width: 100%;height: 50px;line-height: 50px;text-align: center; background: #ccc;">
        <span>三维标注窗口</span>
        <i class="el-icon-circle-close" style="position: absolute;right: 2px;top: 3px;cursor: pointer" @click="closeTagging"></i>
      </div>
      <div style="background: #fff;width: 100%;height: 450px;padding: 30px 0 0 80px">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
          <el-form-item label="文本描述" prop="text" style="width: 300px">
            <el-input v-model="ruleForm.text"></el-input>
          </el-form-item>

          <el-form-item label="字体颜色" prop="color">
            <el-color-picker v-model="ruleForm.color"></el-color-picker>
          </el-form-item>

          <el-form-item label="字体大小" prop="textSize" style="width: 300px">
            <el-input v-model.number="ruleForm.textSize"></el-input>
          </el-form-item>

          <el-form-item label="标注图片" prop="imgURL">
            <el-button type="primary" size="mini" round>选择图片</el-button>
            <img :src="ruleForm.imgUrl" alt="">
          </el-form-item>

          <el-form-item label="标注高度" prop="textHeight" style="width: 300px">
            <el-input v-model="ruleForm.textHeight"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ECMAScript-6">
  import { create3DTagging } from '../assets/operate3D';
  export default {
    data() {
      return {
        flag: 'close',
        ruleForm: {
          text: '',
          color: '#409EFF',
          textSize: '',
          imgUrl: 'http://10.0.10.70:8080/qsk/bj/html5/img/Icons/Letters/Letter-A.gif',
          textHeight: ''
        },
        rules: {
          /*text: [
            { required: true, message: '请输入文本描述', trigger: 'blur' }
          ],
          color: [
            { required: true, message: '请选择颜色', trigger: 'change' }
          ],
          textSize: [
            { required: true, message: '请输入字体大小', trigger: 'blur' }
          ],
          imgURL: [
            { required: true, message: '请选择标记图片', trigger: 'blur' }
          ],
          textHeight: [
            { required: true, message: '请输入标注高度', trigger: 'change' }
          ]*/
        }
      }
    },
    methods: {
      closeTagging () {
        this.$emit('closeTags',this.flag);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let obj = {
              text: this.ruleForm.text,
              color: this.ruleForm.color,
              textSize: this.ruleForm.textSize,
              imgUrl: this.ruleForm.imgUrl,
              textHeight: this.ruleForm.textHeight
            };
            console.log('obj',obj)
            create3DTagging(obj);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .word_sty {
    font-size: 16px;
    font-family: Microsoft Yahei;
    font-weight: 700;
    color: #666666;
    letter-spacing: 3px;
    display:inline-block;
  }
</style>
