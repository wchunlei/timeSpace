//设置透明度
export function setOpcity(opcity){
  sgworld.Terrain.Opacity=opcity;
}
//三维标注
var taggingObj;
export function create3DTagging(obj){
  taggingObj = obj;
  if(taggingObj.imgURL==""&&taggingObj.text==""){
    alert('提示','图片和文本不能同时为空！');
    return false;
  }
  if(taggingObj.textSize==""){
    textSize=13;
  }
  if(taggingObj.tagHeight==""){
    alert('提示','图标高度不能为空！');
    return false;
  }
  var pid = sgworld.ProjectTree.FindItem("地图图标");
  if (pid <= 0 || pid == "") {
    pid = sgworld.ProjectTree.CreateGroup("地图图标");
  }
  // 设置鼠标的样式
  sgworld.Window.SetInputMode(1);
  // 绑定鼠标左键按下事件
  sgworld.AttachEvent("OnLButtonDown", tagLButtonDown);
  // 绑定鼠标右键松开事件
  sgworld.AttachEvent("OnLButtonUp", tagLButtonUp);

}
export function tagLButtonDown(Flags, X, Y) {
  var tagText = taggingObj.text;
  var textSize = taggingObj.textSize;
  var tagHeight = taggingObj.textHeight;

  var CursorCoord = sgworld.Window.pixelToWorld(X, Y);
  if (CursorCoord == null)
    return false;
  var pos = CursorCoord.Position;
  pos.Altitude = tagHeight;
  pos.Distance=10000;
  var pid = sgworld.ProjectTree.FindItem("地图图标");
  var LabelStyle=sgworld.Creator.CreateLabelStyle(0);
  LabelStyle.FontSize=textSize;
  LabelStyle.TextColor.FromHTMLColor(taggingObj.color);
  LabelStyle.LineToGround = true;
  LabelStyle.Scale = 1;
  var myDate = new Date();
  var shi = myDate.getHours();
  var fen = myDate.getMinutes();
  var miao = myDate.getSeconds();
  if(shi < 10)
    shi = "0"+shi;
  if(fen < 10)
    fen = "0"+fen;
  if(miao < 10)
    miao = "0"+miao;
  var textName = taggingObj.text + shi+""+fen+""+miao+"_"+myDate.getMilliseconds();
  var c1 = sgworld.Creator.CreateLabel(pos, tagText, taggingObj.imgUrl, LabelStyle, pid,textName );
  c1.Style.TextOnImage = true;
  c1.Style.TextAlignment = "Top";
  let _this = this;
  var data = {x:pos.X,y:pos.Y,height:tagHeight,text:tagText,color:taggingObj.color,textsize:textSize,imgurl:taggingObj.imgUrl,name:tagText};
  $.ajax({
    url : 'http://10.0.10.70:8080/qsk/org/view-labelSave.do',
    type : 'POST',
    data: data,
    dataType: "json",
    success : function(res) {
      console.log('resall',res.data);
      return true;
    },
    error : function(err) {
      console.log('err',err)
      return false;
    }
  });
}
export function tagLButtonUp(Flags, X, Y){
  //var sgworld = CreateSGObj();
  // 设置鼠标的样式
  sgworld.Window.SetInputMode(0);
  // 绑定鼠标左键按下事件
  sgworld.DetachEvent("OnLButtonDown", tagLButtonDown);
  // 绑定鼠标右键松开事件
  sgworld.DetachEvent("OnLButtonUp", tagLButtonUp);
}
export function flytoTagging(obj){
  var pos = sgworld.Creator.CreatePosition(obj.x,obj.y,obj.height,0,0,0,0,300);
  sgworld.Navigate.FlyTo(pos);
  var pid = sgworld.ProjectTree.FindItem("地图图标");
  if (pid <= 0 || pid == "") {
    pid = sgworld.ProjectTree.CreateGroup("地图图标");
  }
  var objId = sgworld.ProjectTree.FindItem("地图图标\\" + obj.name);
  if(objId <= 0|| objId == "")
  {
    var LabelStyle=sgworld.Creator.CreateLabelStyle(0);
    LabelStyle.FontSize=obj.textsize;
    LabelStyle.TextColor.FromHTMLColor(obj.color);
    LabelStyle.LineToGround = true;
    LabelStyle.Scale = 1;
    var c1 = sgworld.Creator.CreateLabel(pos, obj.tagText, obj.imgurl, LabelStyle, pid,obj.name );
    c1.Style.TextOnImage = true;
    c1.Style.TextAlignment = "Top";
  }

}
//清除图形
export function deleteGroupChildItem()
{
  var groupId = sgworld.ProjectTree.FindItem("临时目录");
  if(groupId > 0)
  {
    var oneChildItemId = sgworld.ProjectTree.GetNextItem(groupId, 11);
    if (oneChildItemId > 0)
    {
      do {
        var nextItemId = sgworld.ProjectTree.GetNextItem(oneChildItemId, 13);
        if(nextItemId > 0)
        {
          sgworld.ProjectTree.DeleteItem(nextItemId);
        }
      }
      while (nextItemId > 0);

    }
  }
}
//地下场景
export function undergroundModel(flag) {
  if(flag && !sgworld.Command.IsChecked(1027,0)){
    sgworld.Command.Execute(1027, 0);
  }
  else if(!flag && sgworld.Command.IsChecked(1027,0))
  {
    sgworld.Command.Execute(1027, 0);
  }
}
//水平距离测量
export function HorizontalDistance(){
  sgworld.Command.Execute(1034,0);
}
//空间距离测量
export function AerialDistance(){
  sgworld.Command.Execute(1035,0);
}
//面积测量
export function TerrinArea(){
  sgworld.Command.Execute(1165,0);
}
//高程测量
export function VertialDistance(){
  sgworld.Command.Execute(1036,0);
}
//添加路径漫游
var lineObj = null;
var lineGroupId = "";
var fns;
export function createljmy(fn) {
  //var sgworld = CreateSGObj();
  fns = fn;
  try {
    var tempId = sgworld.ProjectTree.FindItem("临时图层");
    if(tempId <= 0 || tempId == null)
      tempId = sgworld.ProjectTree.CreateGroup("临时图层");
    lineGroupId = sgworld.ProjectTree.FindItem("临时图层\\路径漫游");
    if(lineGroupId <= 0 || lineGroupId == null)
      lineGroupId = sgworld.ProjectTree.CreateGroup("路径漫游",tempId);
    sgworld.Window.SetInputMode(1);
    sgworld.AttachEvent("OnLButtonDown", DrawPath_LButtonDown);
    sgworld.AttachEvent("OnRButtonUp", DrawPath_RButtonUp);
    sgworld.AttachEvent("OnFrame", DrawPath_OnFrame);
  }
  catch (e) {

  }
}
//添加漫游路径左键点击事件
export function DrawPath_LButtonDown(Flags, X, Y) {
  //var sgworld = CreateSGObj();
  var CursorCoord = sgworld.Window.pixelToWorld(X, Y);
  if (CursorCoord == null)
    return false;
  if (lineObj == null) {
    var myGeometry = sgworld.Creator.GeometryCreator.CreateLineStringGeometry([CursorCoord.Position.x, CursorCoord.Position.y, 0, CursorCoord.Position.x, CursorCoord.Position.y, 0])

    lineObj = sgworld.Creator.CreatePolyline(myGeometry, sgworld.Creator.CreateColor(0, 255, 0, 1), 2, lineGroupId, "line");
    lineObj.LineStyle.Width = -2;
    lineObj.Geometry.StartEdit();
  }
  else {
    if (lineObj != null) {
      lineObj.Geometry.Points.Item(lineObj.Geometry.Points.count - 1).X = CursorCoord.Position.x;
      lineObj.Geometry.Points.Item(lineObj.Geometry.Points.count - 1).Y = CursorCoord.Position.y;
      lineObj.Geometry.Points.Item(lineObj.Geometry.Points.count - 1).Z = 0;
      lineObj.Geometry.Points.AddPoint(CursorCoord.Position.x, CursorCoord.Position.y, 0);
    }
  }
  return true;
}
//添加漫游路径右键点击事件
export function DrawPath_RButtonUp(Flags, X, Y) {
  //var sgworld = CreateSGObj();
  if (lineObj == null || lineObj.Geometry.Points.count <= 2) {
    Reset1();
    return false;
  }
  lineObj.Geometry.Points.DeletePoint(lineObj.Geometry.Points.count - 1);
  lineObj.Geometry.EndEdit();
  CreateFlyPath();
  Reset1();
  return true;
}
//添加漫游路径绘制事件
export function DrawPath_OnFrame() {
  if (lineObj != null) {
    try {
      //var sgworld = CreateSGObj();
      var mouseInfo = sgworld.Window.GetMouseInfo()
      var CursorCoord = sgworld.Window.pixelToWorld(mouseInfo.X, mouseInfo.Y);
      if (CursorCoord == null)
        return false;
      lineObj.Geometry.Points.Item(lineObj.Geometry.Points.count - 1).X = CursorCoord.Position.x;
      lineObj.Geometry.Points.Item(lineObj.Geometry.Points.count - 1).Y = CursorCoord.Position.y;
      lineObj.Geometry.Points.Item(lineObj.Geometry.Points.count - 1).Z = 0;
    }
    catch (e) { }
  }
}
//移除漫游路径相关事件
export function Reset1() {
  //var sgworld = CreateSGObj();
  try {
    sgworld.DetachEvent("OnLButtonDown", DrawPath_LButtonDown);
    sgworld.DetachEvent("OnRButtonUp", DrawPath_RButtonUp);
    sgworld.DetachEvent("OnFrame", DrawPath_OnFrame);
    if (lineObj != null) {
      sgworld.Creator.DeleteObject(lineObj.ID);
      lineObj = null;
    }
  }
  catch (e) {
  }
  sgworld.Window.SetInputMode(0);
}
//创建漫游路径动态对象
var tmpID;
export function CreateFlyPath() {
  let _this = this;
  console.log('this',this)
  try{
    //var sgworld = CreateSGObj();
    if (lineObj != null && lineGroupId != "") {
      var myDate = new Date();
      var shi = myDate.getHours();
      var fen = myDate.getMinutes();
      var miao = myDate.getSeconds();
      if(shi < 10)
        shi = "0"+shi;
      if(fen < 10)
        fen = "0"+fen;
      if(miao < 10)
        miao = "0"+miao;
      var createDynamicName =  "漫游路径_" + shi+""+fen+""+miao+"_"+myDate.getMilliseconds();
      var flyObject = sgworld.Creator.CreateDynamicObject(0, 1, 1, "", 100, 0, lineGroupId, createDynamicName);
      var arrx = "";
      var arry = "";
      for (var k = 0; k < lineObj.Geometry.Points.count; k++) {
        var a = sgworld.Creator.CreateRouteWaypoint(lineObj.Geometry.Points.Item(k).X, lineObj.Geometry.Points.Item(k).Y, 0, 27.8, 0, 0, 0,-1);
        flyObject.Waypoints.AddWaypoint(a);
        arrx += lineObj.Geometry.Points.Item(k).X + ",";
        arry += lineObj.Geometry.Points.Item(k).Y + ",";
      }
      flyObject.CircularRoute = false;
      flyObject.TurnSpeed = 400;
      flyObject.RestartRoute(0);
      tmpID = flyObject.ID;
      //sgworld.Navigate.FlyTo(tmpID);
      setTimeout( function(){
        sgworld.Navigate.FlyTo(tmpID);
      },500);
      jQuery.ajax({
        url : 'http://10.0.10.70:8080/qsk/org/view-luJingSave.do',
        type : 'POST',
        data : {
          name : createDynamicName,
          x : arrx,
          y : arry,
          yaw : 0
        },
        success : function(data) {
          fns();
        },
        error : function(response, options) {

        }
      });
    }
  }
  catch(e){
    alert(e.message);
  }
}
//定位到漫游飞行
export function flyToDTPath(){
  sgworld.Navigate.FlyTo(tmpID);
}
//开始漫游并定位
export function flytoMYPath(record){
  var tempId = sgworld.ProjectTree.FindItem("临时图层");
  if(tempId <= 0 || tempId == null)
    tempId = sgworld.ProjectTree.CreateGroup("临时图层");
  lineGroupId = sgworld.ProjectTree.FindItem("临时图层\\路径漫游");
  if(lineGroupId <= 0 || lineGroupId == null)
    lineGroupId = sgworld.ProjectTree.CreateGroup("路径漫游",tempId);

  try {
    var arrx = new Array();
    arrx = record.x.split(",");
    var arry = new Array();
    arry = record.y.split(",");
    var waypointDirection = 0;
    var firstPosition = sgworld.Creator.CreatePosition(arrx[0], arry[0], 0);
    var secondPosition = sgworld.Creator.CreatePosition(arrx[1], arry[1], 0);
    firstPosition = firstPosition.AimTo(secondPosition);
    var createDynamicName =  record.name;
    var flightObject = sgworld.ProjectTree.FindItem("路径漫游\\"+createDynamicName);
    if(flightObject == null || flightObject <= 0){
      flightObject = sgworld.Creator.CreateDynamicObject(0, 1, 1, "", 100, 0, lineGroupId, createDynamicName);
      for (var k = 0; k < arrx.length; k++) {

        var a = sgworld.Creator.CreateRouteWaypoint(arrx[k], arry[k], 0, 27.8, 0, 0, 0, 0, 0, "");
        flightObject.Waypoints.AddWaypoint(a);
      }
      flightObject.CircularRoute = false;
      flightObject.TurnSpeed = 400;
      sgworld.Navigate.FlyTo(flightObject);
    }else{
      sgworld.ProjectTree.GetObject(flightObject).RestartRoute(0);
      sgworld.Navigate.FlyTo(flightObject);
    }

  }
  catch (e)
  {
    console.log(e)
  }


}
//获取所有漫游路径
export function getFlyPath(){
  jQuery.ajax({
    url : '../org/view-lujing_findpos.do',
    type : 'POST',
    dataType:"json",
    success : function(data) {
      return data.result;
    },
    error : function(response, options) {
      return null;
    }
  });
}
//更新漫游路径到数据库
export function updateFlyPath(obj){
  jQuery.ajax({
    url : '../org/view-luJingSave.do',
    type : 'POST',
    data : {
      name : obj.name,
      x : obj.x,
      y : obj.y,
      yaw : 0
    },
    success : function(data) {
      return true;
    },
    error : function(response, options) {
      return false;
    }
  });
}
//添加视点
export function addView(name){
  var p = sgworld.Navigate.GetPosition(0);
  return {
    name : name,
    posx : p.X,
    posy : p.Y,
    posz : p.Altitude,
    posyaw : p.Yaw,
    pospitch : p.Pitch,
    posroll : p.Roll,
    posdistance : p.Distance
  };
}
//更新视点
export function updateView(p){
  jQuery.ajax({
    url : '../org/view-save.do',
    type : 'POST',
    data :  {
      //name : view_addname,
      posx : p.X,
      posy : p.Y,
      posz : p.Altitude,
      posyaw : p.Yaw,
      pospitch : p.Pitch,
      posroll : p.Roll,
      posdistance : p.Distance
    },
    success : function(form, action) {
      return true;

    },
    error : function(response, options) {
      return false;
    }
  });
}
//验证视点是否存在
export function view_name_validate(view_name){

  jQuery.ajax({
    url : '../org/view-view_name_validate.do',
    type : 'POST',
    data : {
      view_name : view_name
    },
    dataType:"json",
    success : function(data) {
      if(data.result.length == 0)
      {
        return true;
      }
      else
      {
        return false;
      }
    },
    error : function(response, options) {
      Ext.Msg.alert("异常！");
    }
  });
}
//获取所有视点
export function getViews(){
  jQuery.ajax({
    url : '../org/view-view_findpos.do',
    type : 'POST',
    dataType:"json",
    success : function(data) {
      return data.result;
    },
    error : function(response, options) {
      return null;
    }
  });
}
export function flytoView(posObj){
  var pos = sgworld.Creator.CreatePosition(posObj.posx,posObj.posy,posObj.posz,0,posObj.posyaw,posObj.pospitch,posObj.posroll,posObj.posdistance);
  sgworld.Navigate.FlyTo(pos);
}
//地图打印
export function printMap() {
  sgworld.Command.Execute(1067, 0);
}
