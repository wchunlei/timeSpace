<template>
  <div class="hello">
    <div class="word_sty" style="width: 100%;height: 50px;line-height: 50px;text-align: center; background: #ccc;">
      <span>标注管理窗口</span>
      <i class="el-icon-circle-close" style="position: absolute;right: 2px;top: 3px;cursor: pointer" @click="closeTagManage"></i>
    </div>
    <el-table :data="tableData" height="400" style="width: 100%;overflow-y:auto;" @cell-mouse-enter="handleMouseEnter"@cell-mouse-leave="handleMouseOut" @row-dblclick="mark">
      <el-table-column label="序号" width="80" align="center" prop="id">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标注名称" width="180" align="center" prop="name">
        <template slot-scope="scope">
          <!--<span style="margin-left: 10px">{{ scope.row.name }}</span>-->
          <el-input v-model="scope.row.name" placeholder="请输入内容" :disabled="disabled"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" size="small" @click="addPath">添加</el-button>
  </div>
</template>

<script type="text/ECMAScript-6">
  import { flytoTagging } from '../assets/operate3D';
  export default {
    props: [ "dialog" ],
    data() {
      return {
        flag: 'close',
        disabled: true,
        tableData: []
      }
    },
    created () {
      this.getAllTags();
    },
    watch: {
      "dialog" (newval,oldval) {
        if (newval) {
          this.getAllTags();
        }
      }
    },
    methods: {
      closeTagManage () {
        this.$emit('closeTagM',this.flag);
      },
      addPath () {

      },
      mark (row, column, cell, event) {
        flytoTagging(row);
      },
      getAllTags () {
        let data = {
          query: '',
          page: 1,
          limit: 10000
        }
        let _this = this;
        $.ajax({
          url : 'http://10.0.10.70:8080/qsk/org/view-label_find.do',
          type : 'POST',
          data: data,
          dataType: "json",
          success : function(res) {
            console.log('resaaa',res.data);
            _this.tableData = res.data;
            return true;
          },
          error : function(err) {
            console.log('err',err)
            return false;
          }
        });
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        let _this = this;
        this.$confirm('确认删除？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = {
            ids: row.id
          }
          $.ajax({
            url : 'http://10.0.10.70:8080/qsk/org/view-labelremove.do',
            type : 'POST',
            data :  data,
            dataType: "json",
            success : function(res) {
              console.log('resdel',res);
              _this.getAllTags();
            },
            error : function(err) {
              console.log('err',err)
            }
          });
          row.splice(index, 1);
          this.$message({
            message: '操作成功',
            type: 'success'
          });
        }).catch(() => {

        });
      },
      handleMouseEnter (row, column, cell, event){
        //this.disabled = false;
      },
      handleMouseOut (row, column, cell, event){
        //this.disabled = true;
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
