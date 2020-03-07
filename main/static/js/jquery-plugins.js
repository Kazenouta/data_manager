$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name] !== undefined) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

$.fn.reloadGrid = function(page, rowNum, param) {
	this.jqGrid('setGridParam', {
        mtype: 'POST',
		datatype:'json',
        postData: param, //发送数据  
        page: page,
        rowNum: rowNum
    }).trigger("reloadGrid"); //重新载入 
};

$.extend($.jgrid.defaults, {
    recordtext: "{0} - {1}\u3000共 {2} 条", // 共字前是全角空格
    emptyrecords: "无数据显示",
    loadtext: "读取中...",
    savetext: "Saving...",
    pgtext : " {0} 共 {1} 页",
    pgfirst : "First Page",
    pglast : "Last Page",
    pgnext : "Next Page",
    pgprev : "Previous Page",
    pgrecs : "Records per Page",
    showhide: "Toggle Expand Collapse Grid",
    // mobile
    pagerCaption : "Grid::Page Settings",
    pageText : "Page:",
    recordPage : "Records per Page",
    nomorerecs : "No more records...",
});
// 修改toFixed方法,扩展四舍五入时失去精度问题
Number.prototype.toFixed = function(d) {
    var s=this+"";
    if(!d){
       d=0;
    }
    if(s.indexOf(".")==-1){
      s+=".";
      s+=new Array(d+1).join("0");
    }
      
  if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0,"+ (d+1) +"})?)\\d*$").test(s)){
      var s="0"+ RegExp.$2, pm=RegExp.$1, a=RegExp.$3.length, b=true;
      if (a==d+2){
          a=s.match(/\d/g); 
          if (parseInt(a[a.length-1])>4){
              for(var i=a.length-2; i>=0; i--) {
                  a[i] = parseInt(a[i])+1;
                  if(a[i]==10){
                      a[i]=0; 
                      b=i!=1;
                  }else{
                      break;
                  }
              }
          }
          s=a.join("").replace(new RegExp("(\\d+)(\\d{"+d+"})\\d$"),"$1.$2");
      }
      if(b){
          s=s.substr(1);
      }
      return (pm+s).replace(/\.$/, "");
  } 
      return this+"";
        
  }; 