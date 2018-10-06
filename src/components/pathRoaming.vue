<template>
  <div class="hello">
    <div class="word_sty" style="width: 100%;height: 50px;line-height: 50px;text-align: center; background: #ccc;">
      <span>路径漫游窗口</span>
      <i class="el-icon-circle-close" style="position: absolute;right: 2px;top: 3px;cursor: pointer" @click="closePathRoam"></i>
    </div>
    <el-table :data="tableData" height="400" style="width: 100%;overflow-y:auto;" @cell-mouse-enter="handleMouseEnter"@cell-mouse-leave="handleMouseOut" @row-dblclick="flyToPath">
      <el-table-column label="序号" width="80" align="center" prop="id">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="路径名称" width="180" align="center" prop="name">
        <template slot-scope="scope">
          <!--<span style="margin-left: 10px">{{ scope.row.name }}</span>-->
          <el-input v-model="scope.row.name" placeholder="请输入内容" :disabled="disabled"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <!--<el-button size="mini"  @click.native.prevent="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <!--<el-button size="mini" v-if="scope.row.status!='编辑'" @click.native.prevent="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" size="small" @click="addPath">添加</el-button>
  </div>
</template>

<script type="text/ECMAScript-6">
  import { createljmy, flytoMYPath } from '../assets/operate3D';
  export default {
    data() {
      return {
        flag: 'close',
        disabled: true,
        tableData: []
      }
    },
    created () {
      console.log("this.$store",this.$store)
      this.getAllPath();
    },
    watch: {
      "pathFlags" (newval,oldval) {
        alert(newval)
      }
    },
    methods: {
      closePathRoam () {
        this.$emit('closePathR',this.flag);
      },
      addPath () {
        createljmy(this.getAllPath);
        /*let date = new Date();
        let _this = this;
        let year=date.getFullYear(),
          month=date.getMonth()+ 1,
          day=date.getDate(),
          hour=date.getHours(),
          minutes=date.getMinutes(),
          seconds=date.getSeconds();
        //let dateString=year+'-'+month+'-'+day+' '+hour+':'+minutes;
        //let dateString='书签'+(month>=10?+month:"0"+month)+"-"+(day>=10? day :'0'+day)+' '+(hour>=10?+hour:"0"+hour)+':'+(minutes>=10?+minutes:"0"+minutes)+':'+(seconds>=10?+seconds:"0"+seconds);
        let dateString='书签_'+(month>=10?+month:"0"+month)+(day>=10? day :'0'+day)+(hour>=10?+hour:"0"+hour)+(minutes>=10?+minutes:"0"+minutes)+(seconds>=10?+seconds:"0"+seconds);
        /!*this.$http.post('/qsk/org/view-save.do',{
         data: data
         }).then(response => {
         console.log('response',response);
         })
         .catch(function (response) {
         console.log(response);
         });*!/
        $.ajax({
          url : 'http://10.0.10.70:8080/qsk/org/view-save.do',
          type : 'POST',
          data :  data,
          dataType: "json",
          success : function(res) {
            console.log('res',res.code);
            if (res.code == 200) {
              _this.getAllPath();
              alert("添加 " + dateString + " 成功!" )
              /!*_this.$message({
               showClose: true,
               message: '恭喜你，这是一条成功消息',
               type: 'success'
               });*!/
            }
            return true;
          },
          error : function(err) {
            console.log('err',err)
            return false;
          }
        });*/
      },
      flyToPath (row, event) {
        flytoMYPath(row);
      },
      getAllPath () {
        let data = {
          query: '',
          page: 1,
          limit: 10000
        }
        let _this = this;
        $.ajax({
          url : 'http://10.0.10.70:8080/qsk/org/view-lujing_findpos.do',
          type : 'POST',
          data: data,
          dataType: "json",
          success : function(res) {
            console.log('resall',res.data);
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
        this.disabled = false;
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
          url : 'http://10.0.10.70:8080/qsk/org/view-lujingremove.do',
          type : 'POST',
          data :  data,
          dataType: "json",
          success : function(res) {
            console.log('resdel',res);
            _this.getAllPath();
            return true;
          },
          error : function(err) {
            console.log('err',err)
            return false;
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
