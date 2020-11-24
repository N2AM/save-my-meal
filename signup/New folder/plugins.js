// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function(a){a.expr[":"].icontains=function(j,h,i){return c(a(j).text(),i[3])};a.expr[":"].aicontains=function(j,h,i){return c(a(j).data("normalizedText")||a(j).text(),i[3])};function c(h,i){return h.toUpperCase().indexOf(i.toUpperCase())>-1}function d(i){var h=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];a.each(h,function(){i=i.replace(this.re,this.ch)});return i}function b(i){var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var k="(?:"+Object.keys(h).join("|")+")",m=new RegExp(k),j=new RegExp(k,"g"),l=i==null?"":""+i;return m.test(l)?l.replace(j,function(n){return h[n]}):l}var g=function(i,j,h){if(h){h.stopPropagation();h.preventDefault()}this.$element=a(i);this.$newElement=null;this.$button=null;this.$menu=null;this.$lis=null;this.options=j;if(this.options.title===null){this.options.title=this.$element.attr("title")}this.val=g.prototype.val;this.render=g.prototype.render;this.refresh=g.prototype.refresh;this.setStyle=g.prototype.setStyle;this.selectAll=g.prototype.selectAll;this.deselectAll=g.prototype.deselectAll;this.destroy=g.prototype.remove;this.remove=g.prototype.remove;this.show=g.prototype.show;this.hide=g.prototype.hide;this.init()};g.VERSION="1.6.3";g.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results match",countSelectedText:function(h,i){return(h==1)?"{0} item selected":"{0} items selected"},maxOptionsText:function(i,j){var h=[];h[0]=(i==1)?"Limit reached ({n} item max)":"Limit reached ({n} items max)";h[1]=(j==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)";return h},selectAllText:"Select All",deselectAllText:"Deselect All",multipleSeparator:", ",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false,searchAccentInsensitive:false};g.prototype={constructor:g,init:function(){var i=this,h=this.$element.attr("id");this.$element.hide();this.multiple=this.$element.prop("multiple");this.autofocus=this.$element.prop("autofocus");this.$newElement=this.createView();this.$element.after(this.$newElement);this.$menu=this.$newElement.find("> .dropdown-menu");this.$button=this.$newElement.find("> button");this.$searchbox=this.$newElement.find("input");if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")}if(typeof h!=="undefined"){this.$button.attr("data-id",h);a('label[for="'+h+'"]').click(function(j){j.preventDefault();i.$button.focus()})}this.checkDisabled();this.clickListener();if(this.options.liveSearch){this.liveSearchListener()}this.render();this.liHeight();this.setStyle();this.setWidth();if(this.options.container){this.selectPosition()}this.$menu.data("this",this);this.$newElement.data("this",this);if(this.options.mobile){this.mobile()}},createDropdown:function(){var n=this.multiple?" show-tick":"",m=this.$element.parent().hasClass("input-group")?" input-group-btn":"",i=this.autofocus?" autofocus":"",j=this.$element.parents().hasClass("form-group-lg")?" btn-lg":(this.$element.parents().hasClass("form-group-sm")?" btn-sm":"");var l=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";var o=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>':"";var h=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">'+this.options.selectAllText+'</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">'+this.options.deselectAllText+"</button></div></div>":"";var k='<div class="btn-group bootstrap-select'+n+m+'"><button type="button" class="btn dropdown-toggle selectpicker'+j+'" data-toggle="dropdown"'+i+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+l+o+h+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';return a(k)},createView:function(){var h=this.createDropdown();var i=this.createLi();h.find("ul").append(i);return h},reloadLi:function(){this.destroyLi();var h=this.createLi();this.$menu.find("ul").append(h)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var l=this,h=[],k=0;var j=function(n,o,m){return"<li"+(typeof m!=="undefined"?' class="'+m+'"':"")+(typeof o!=="undefined"|null===o?' data-original-index="'+o+'"':"")+">"+n+"</li>"};var i=function(q,m,n,p){var o=d(b(q));return'<a tabindex="0"'+(typeof m!=="undefined"?' class="'+m+'"':"")+(typeof n!=="undefined"?' style="'+n+'"':"")+(typeof p!=="undefined"?'data-optgroup="'+p+'"':"")+' data-normalized-text="'+o+'">'+q+'<span class="'+l.options.iconBase+" "+l.options.tickIcon+' check-mark"></span></a>'};this.$element.find("option").each(function(){var m=a(this);var u=m.attr("class")||"",p=m.attr("style"),w=m.data("content")?m.data("content"):m.html(),v=typeof m.data("subtext")!=="undefined"?'<small class="muted text-muted">'+m.data("subtext")+"</small>":"",n=typeof m.data("icon")!=="undefined"?'<span class="'+l.options.iconBase+" "+m.data("icon")+'"></span> ':"",q=m.is(":disabled")||m.parent().is(":disabled"),o=m[0].index;if(n!==""&&q){n="<span>"+n+"</span>"}if(!m.data("content")){w=n+'<span class="text">'+w+v+"</span>"}if(l.options.hideDisabled&&q){return}if(m.parent().is("optgroup")&&m.data("divider")!==true){if(m.index()===0){k+=1;var r=m.parent().attr("label");var t=typeof m.parent().data("subtext")!=="undefined"?'<small class="muted text-muted">'+m.parent().data("subtext")+"</small>":"";var s=m.parent().data("icon")?'<span class="'+l.options.iconBase+" "+m.parent().data("icon")+'"></span> ':"";r=s+'<span class="text">'+r+t+"</span>";if(o!==0&&h.length>0){h.push(j("",null,"divider"))}h.push(j(r,null,"dropdown-header"))}h.push(j(i(w,"opt "+u,p,k),o))}else{if(m.data("divider")===true){h.push(j("",o,"divider"))}else{if(m.data("hidden")===true){h.push(j(i(w,u,p),o,"hide is-hidden"))}else{h.push(j(i(w,u,p),o))}}}});if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return a(h.join(""))},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")}return this.$lis},render:function(o){var k=this;if(o!==false){this.$element.find("option").each(function(p){k.setDisabled(p,a(this).is(":disabled")||a(this).parent().is(":disabled"));k.setSelected(p,a(this).is(":selected"))})}this.tabIndex();var i=this.options.hideDisabled?":not([disabled])":"";var j=this.$element.find("option:selected"+i).map(function(){var p=a(this);var q=p.data("icon")&&k.options.showIcon?'<i class="'+k.options.iconBase+" "+p.data("icon")+'"></i> ':"";var r;if(k.options.showSubtext&&p.attr("data-subtext")&&!k.multiple){r=' <small class="muted text-muted">'+p.data("subtext")+"</small>"}else{r=""}if(p.data("content")&&k.options.showContent){return p.data("content")}else{if(typeof p.attr("title")!=="undefined"){return p.attr("title")}else{return q+p.html()+r}}}).toArray();var l=!this.multiple?j[0]:j.join(this.options.multipleSeparator);if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");if((h.length>1&&j.length>h[1])||(h.length==1&&j.length>=2)){i=this.options.hideDisabled?", [disabled]":"";var m=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+i).length,n=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(j.length,m):this.options.countSelectedText;l=n.replace("{0}",j.length.toString()).replace("{1}",m.toString())}}this.options.title=this.$element.attr("title");if(this.options.selectedTextFormat=="static"){l=this.options.title}if(!l){l=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText}this.$button.attr("title",b(l));this.$newElement.find(".filter-option").html(l)},setStyle:function(j,i){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi,""))}var h=j?j:this.options.style;if(i=="add"){this.$button.addClass(h)}else{if(i=="remove"){this.$button.removeClass(h)}else{this.$button.removeClass(this.options.style);this.$button.addClass(h)}}},liHeight:function(){if(this.options.size===false){return}var i=this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus",false).end().appendTo("body"),h=i.addClass("open").find("> .dropdown-menu"),l=h.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),k=this.options.header?h.find(".popover-title").outerHeight():0,m=this.options.liveSearch?h.find(".bs-searchbox").outerHeight():0,j=this.options.actionsBox?h.find(".bs-actionsbox").outerHeight():0;i.remove();this.$newElement.data("liHeight",l).data("headerHeight",k).data("searchHeight",m).data("actionsHeight",j)},setSize:function(){this.findLis();var A=this,o=this.$menu,r=o.find(".inner"),x=this.$newElement.outerHeight(),n=this.$newElement.data("liHeight"),m=this.$newElement.data("headerHeight"),w=this.$newElement.data("searchHeight"),i=this.$newElement.data("actionsHeight"),j=this.$lis.filter(".divider").outerHeight(true),s=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"))+parseInt(o.css("border-top-width"))+parseInt(o.css("border-bottom-width")),t=this.options.hideDisabled?", .disabled":"",h=a(window),p=s+parseInt(o.css("margin-top"))+parseInt(o.css("margin-bottom"))+2,q,z,y,v=function(){z=A.$newElement.offset().top-h.scrollTop();y=h.height()-z-x};v();if(this.options.header){o.css("padding-top",0)}if(this.options.size=="auto"){var l=function(){var C,B=A.$lis.not(".hide");v();q=y-p;if(A.options.dropupAuto){A.$newElement.toggleClass("dropup",(z>y)&&((q-p)<o.height()))}if(A.$newElement.hasClass("dropup")){q=z-p}if((B.length+B.filter(".dropdown-header").length)>3){C=n*3+p-2}else{C=0}o.css({"max-height":q+"px",overflow:"hidden","min-height":C+m+w+i+"px"});r.css({"max-height":q-m-w-i-s+"px","overflow-y":"auto","min-height":Math.max(C-s,0)+"px"})};l();this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",l);a(window).off("resize.getSize").on("resize.getSize",l);a(window).off("scroll.getSize").on("scroll.getSize",l)}else{if(this.options.size&&this.options.size!="auto"&&o.find("li"+t).length>this.options.size){var u=this.$lis.not(".divider"+t).find(" > *").slice(0,this.options.size).last().parent().index();var k=this.$lis.slice(0,u+1).filter(".divider").length;q=n*this.options.size+k*j+s;if(A.options.dropupAuto){this.$newElement.toggleClass("dropup",(z>y)&&(q<o.height()))}o.css({"max-height":q+m+w+i+"px",overflow:"hidden"});r.css({"max-height":q-s+"px","overflow-y":"auto"})}}},setWidth:function(){if(this.options.width=="auto"){this.$menu.css("min-width","0");var i=this.$newElement.clone().appendTo("body");var j=i.find("> .dropdown-menu").css("width");var h=i.css("width","auto").find("> button").css("width");i.remove();this.$newElement.css("width",Math.max(parseInt(j),parseInt(h))+"px")}else{if(this.options.width=="fit"){this.$menu.css("min-width","");this.$newElement.css("width","").addClass("fit-width")}else{if(this.options.width){this.$menu.css("min-width","");this.$newElement.css("width",this.options.width)}else{this.$menu.css("min-width","");this.$newElement.css("width","")}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")}},selectPosition:function(){var m=this,j="<div />",h=a(j),l,i,k=function(n){h.addClass(n.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",n.hasClass("dropup"));l=n.offset();i=n.hasClass("dropup")?0:n[0].offsetHeight;h.css({top:l.top+i,left:l.left,width:n[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){if(m.isDisabled()){return}k(a(this));h.appendTo(m.options.container);h.toggleClass("open",!a(this).hasClass("open"));h.append(m.$menu)});a(window).resize(function(){k(m.$newElement)});a(window).on("scroll",function(){k(m.$newElement)});a("html").on("click",function(n){if(a(n.target).closest(m.$newElement).length<1){h.removeClass("open")}})},setSelected:function(h,i){this.findLis();this.$lis.filter('[data-original-index="'+h+'"]').toggleClass("selected",i)},setDisabled:function(i,h){this.findLis();if(h){this.$lis.filter('[data-original-index="'+i+'"]').addClass("disabled").find("a").attr("href","#").attr("tabindex",-1)}else{this.$lis.filter('[data-original-index="'+i+'"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var h=this;if(this.isDisabled()){this.$button.addClass("disabled").attr("tabindex",-1)}else{if(this.$button.hasClass("disabled")){this.$button.removeClass("disabled")}if(this.$button.attr("tabindex")==-1){if(!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")}}}this.$button.click(function(){return !h.isDisabled()})},tabIndex:function(){if(this.$element.is("[tabindex]")){this.$element.data("tabindex",this.$element.attr("tabindex"));this.$button.attr("tabindex",this.$element.data("tabindex"))}},clickListener:function(){var h=this;this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(i){i.stopPropagation()});this.$newElement.on("click",function(){h.setSize();if(!h.options.liveSearch&&!h.multiple){setTimeout(function(){h.$menu.find(".selected a").focus()},10)}});this.$menu.on("click","li a",function(o){var m=a(this),n=m.parent().data("originalIndex"),y=h.$element.val(),x=h.$element.prop("selectedIndex");if(h.multiple){o.stopPropagation()}o.preventDefault();if(!h.isDisabled()&&!m.parent().hasClass("disabled")){var l=h.$element.find("option"),k=l.eq(n),z=k.prop("selected"),j=k.parent("optgroup"),p=h.options.maxOptions,r=j.data("maxOptions")||false;if(!h.multiple){l.prop("selected",false);k.prop("selected",true);h.$menu.find(".selected").removeClass("selected");h.setSelected(n,true)}else{k.prop("selected",!z);h.setSelected(n,!z);m.blur();if((p!==false)||(r!==false)){var s=p<l.filter(":selected").length,t=r<j.find("option:selected").length;if((p&&s)||(r&&t)){if(p&&p==1){l.prop("selected",false);k.prop("selected",true);h.$menu.find(".selected").removeClass("selected");h.setSelected(n,true)}else{if(r&&r==1){j.find("option:selected").prop("selected",false);k.prop("selected",true);var w=m.data("optgroup");h.$menu.find(".selected").has('a[data-optgroup="'+w+'"]').removeClass("selected");h.setSelected(n,true)}else{var q=(typeof h.options.maxOptionsText==="function")?h.options.maxOptionsText(p,r):h.options.maxOptionsText,u=q[0].replace("{n}",p),v=q[1].replace("{n}",r),i=a('<div class="notify"></div>');if(q[2]){u=u.replace("{var}",q[2][p>1?0:1]);v=v.replace("{var}",q[2][r>1?0:1])}k.prop("selected",false);h.$menu.append(i);if(p&&s){i.append(a("<div>"+u+"</div>"));h.$element.trigger("maxReached.bs.select")}if(r&&t){i.append(a("<div>"+v+"</div>"));h.$element.trigger("maxReachedGrp.bs.select")}setTimeout(function(){h.setSelected(n,false)},10);i.delay(750).fadeOut(300,function(){a(this).remove()})}}}}}if(!h.multiple){h.$button.focus()}else{if(h.options.liveSearch){h.$searchbox.focus()}}if((y!=h.$element.val()&&h.multiple)||(x!=h.$element.prop("selectedIndex")&&!h.multiple)){h.$element.change()}}});this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(i){if(i.target==this){i.preventDefault();i.stopPropagation();if(!h.options.liveSearch){h.$button.focus()}else{h.$searchbox.focus()}}});this.$menu.on("click","li.divider, li.dropdown-header",function(i){i.preventDefault();i.stopPropagation();if(!h.options.liveSearch){h.$button.focus()}else{h.$searchbox.focus()}});this.$menu.on("click",".popover-title .close",function(){h.$button.focus()});this.$searchbox.on("click",function(i){i.stopPropagation()});this.$menu.on("click",".actions-btn",function(i){if(h.options.liveSearch){h.$searchbox.focus()}else{h.$button.focus()}i.preventDefault();i.stopPropagation();if(a(this).is(".bs-select-all")){h.selectAll()}else{h.deselectAll()}h.$element.change()});this.$element.change(function(){h.render(false)})},liveSearchListener:function(){var i=this,h=a('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){i.$menu.find(".active").removeClass("active");if(!!i.$searchbox.val()){i.$searchbox.val("");i.$lis.not(".is-hidden").removeClass("hide");if(!!h.parent().length){h.remove()}}if(!i.multiple){i.$menu.find(".selected").addClass("active")}setTimeout(function(){i.$searchbox.focus()},10)});this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(j){j.stopPropagation()});this.$searchbox.on("input propertychange",function(){if(i.$searchbox.val()){if(i.options.searchAccentInsensitive){i.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains("+d(i.$searchbox.val())+")").parent().addClass("hide")}else{i.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains("+i.$searchbox.val()+")").parent().addClass("hide")}if(!i.$menu.find("li").filter(":visible:not(.no-results)").length){if(!!h.parent().length){h.remove()}h.html(i.options.noneResultsText+' "'+b(i.$searchbox.val())+'"').show();i.$menu.find("li").last().after(h)}else{if(!!h.parent().length){h.remove()}}}else{i.$lis.not(".is-hidden").removeClass("hide");if(!!h.parent().length){h.remove()}}i.$menu.find("li.active").removeClass("active");i.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus();a(this).focus()})},val:function(h){if(typeof h!=="undefined"){this.$element.val(h);this.render();return this.$element}else{return this.$element.val()}},selectAll:function(){this.findLis();this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()},deselectAll:function(){this.findLis();this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()},keydown:function(l){var j=a(this),i=(j.is("input"))?j.parent().parent():j.parent(),h,x=i.data("this"),n,s,m,r,u,t,v,o,p={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(x.options.liveSearch){i=j.parent().parent()}if(x.options.container){i=x.$menu}h=a("[role=menu] li a",i);o=x.$menu.parent().hasClass("open");if(!o&&/([0-9]|[A-z])/.test(String.fromCharCode(l.keyCode))){if(!x.options.container){x.setSize();x.$menu.parent().addClass("open");o=true}else{x.$newElement.trigger("click")}x.$searchbox.focus()}if(x.options.liveSearch){if(/(^9$|27)/.test(l.keyCode.toString(10))&&o&&x.$menu.find(".active").length===0){l.preventDefault();x.$menu.parent().removeClass("open");x.$button.focus()}h=a("[role=menu] li:not(.divider):not(.dropdown-header):visible",i);if(!j.val()&&!/(38|40)/.test(l.keyCode.toString(10))){if(h.filter(".active").length===0){if(x.options.searchAccentInsensitive){h=x.$newElement.find("li").filter(":aicontains("+d(p[l.keyCode])+")")}else{h=x.$newElement.find("li").filter(":icontains("+p[l.keyCode]+")")}}}}if(!h.length){return}if(/(38|40)/.test(l.keyCode.toString(10))){n=h.index(h.filter(":focus"));m=h.parent(":not(.disabled):visible").first().index();r=h.parent(":not(.disabled):visible").last().index();s=h.eq(n).parent().nextAll(":not(.disabled):visible").eq(0).index();u=h.eq(n).parent().prevAll(":not(.disabled):visible").eq(0).index();t=h.eq(s).parent().prevAll(":not(.disabled):visible").eq(0).index();if(x.options.liveSearch){h.each(function(y){if(a(this).is(":not(.disabled)")){a(this).data("index",y)}});n=h.index(h.filter(".active"));m=h.filter(":not(.disabled):visible").first().data("index");r=h.filter(":not(.disabled):visible").last().data("index");s=h.eq(n).nextAll(":not(.disabled):visible").eq(0).data("index");u=h.eq(n).prevAll(":not(.disabled):visible").eq(0).data("index");t=h.eq(s).prevAll(":not(.disabled):visible").eq(0).data("index")}v=j.data("prevIndex");if(l.keyCode==38){if(x.options.liveSearch){n-=1}if(n!=t&&n>u){n=u}if(n<m){n=m}if(n==v){n=r}}if(l.keyCode==40){if(x.options.liveSearch){n+=1}if(n==-1){n=0}if(n!=t&&n<s){n=s}if(n>r){n=r}if(n==v){n=m}}j.data("prevIndex",n);if(!x.options.liveSearch){h.eq(n).focus()}else{l.preventDefault();if(!j.is(".dropdown-toggle")){h.removeClass("active");h.eq(n).addClass("active").find("a").focus();j.focus()}}}else{if(!j.is("input")){var q=[],k,w;h.each(function(){if(a(this).parent().is(":not(.disabled)")){if(a.trim(a(this).text().toLowerCase()).substring(0,1)==p[l.keyCode]){q.push(a(this).parent().index())}}});k=a(document).data("keycount");k++;a(document).data("keycount",k);w=a.trim(a(":focus").text().toLowerCase()).substring(0,1);if(w!=p[l.keyCode]){k=1;a(document).data("keycount",k)}else{if(k>=q.length){a(document).data("keycount",0);if(k>q.length){k=1}}}h.eq(q[k-1]).focus()}}if((/(13|32)/.test(l.keyCode.toString(10))||(/(^9$)/.test(l.keyCode.toString(10))&&x.options.selectOnTab))&&o){if(!/(32)/.test(l.keyCode.toString(10))){l.preventDefault()}if(!x.options.liveSearch){a(":focus").click()}else{if(!/(32)/.test(l.keyCode.toString(10))){x.$menu.find(".active a").click();j.focus()}}a(document).data("keycount",0)}if((/(^9$|27)/.test(l.keyCode.toString(10))&&o&&(x.multiple||x.options.liveSearch))||(/(27)/.test(l.keyCode.toString(10))&&!o)){x.$menu.parent().removeClass("open");x.$button.focus()}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement);if(this.options.container){this.$menu.hide()}},refresh:function(){this.$lis=null;this.reloadLi();this.render();this.setWidth();this.setStyle();this.checkDisabled();this.liHeight()},update:function(){this.reloadLi();this.setWidth();this.setStyle();this.checkDisabled();this.liHeight()},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove();this.$element.remove()}};function f(l,k){var i=arguments;var h=l,l=i[0],k=i[1];[].shift.apply(i);if(typeof l=="undefined"){l=h}var m;var j=this.each(function(){var n=a(this);if(n.is("select")){var p=n.data("selectpicker"),r=typeof l=="object"&&l;if(!p){var o=a.extend({},g.DEFAULTS,a.fn.selectpicker.defaults||{},n.data(),r);n.data("selectpicker",(p=new g(this,o,k)))}else{if(r){for(var q in r){if(r.hasOwnProperty(q)){p.options[q]=r[q]}}}}if(typeof l=="string"){if(p[l] instanceof Function){m=p[l].apply(p,i)}else{m=p.options[l]}}}});if(typeof m!=="undefined"){return m}else{return j}}var e=a.fn.selectpicker;a.fn.selectpicker=f;a.fn.selectpicker.Constructor=g;a.fn.selectpicker.noConflict=function(){a.fn.selectpicker=e;return this};a(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",g.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",function(h){h.stopPropagation()});a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var h=a(this);f.call(h,h.data())})})})(jQuery);
/*---- DateTimePicker ----*/
//! moment.js
//! version : 2.8.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.8.1',
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn("Deprecation warning: " + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty('toString')) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty('valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, "moment()." + name  + "(period, number) is deprecated. Please use moment()." + name + "(number, period).");
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = config._locale.isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === "boolean") {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i);
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === "boolean") {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && input.hasOwnProperty('_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        "moment.lang is deprecated. Use moment.locale instead.",
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== "undefined") {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        "moment.langData is deprecated. Use moment.localeData instead.",
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null &&  obj.hasOwnProperty('_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.zone(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.zone(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.add(this._d.getTimezoneOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = units || 'ms';
            return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._d.getTimezoneOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.subtract(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            if (key === undefined) {
                return this._locale._abbr;
            } else {
                this._locale = moment.localeData(key);
                return this;
            }
        },

        lang : deprecate(
            "moment().lang() is deprecated. Use moment().localeData() instead.",
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    this._locale = moment.localeData(key);
                    return this;
                }
            }
        ),

        localeData : function () {
            return this._locale;
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            days = this._days + this._milliseconds / 864e5;
            if (units === 'month' || units === 'year') {
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                days += yearsToDays(this._months / 12);
                switch (units) {
                    case 'week': return days / 7;
                    case 'day': return days;
                    case 'hour': return days * 24;
                    case 'minute': return days * 24 * 60;
                    case 'second': return days * 24 * 60 * 60;
                    case 'millisecond': return days * 24 * 60 * 60 * 1000;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            "toIsoString() is deprecated. Please use toISOString() instead " +
            "(notice the capitals)",
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === 'function' && define.amd) {
        define('moment', function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
/*
//! version : 3.1.3
=========================================================
bootstrap-datetimepicker.js
https://github.com/Eonasdan/bootstrap-datetimepicker
=========================================================
The MIT License (MIT)

Copyright (c) 2014 Jonathan Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
;(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('moment'));
    }
    else {
        // Neither AMD or CommonJS used. Use global variables.
        if (!jQuery) {
            throw new Error('bootstrap-datetimepicker requires jQuery to be loaded first');
        }
        if (!moment) {
            throw new Error('bootstrap-datetimepicker requires moment.js to be loaded first');
        }
        factory(root.jQuery, moment);
    }
}(this, function ($, moment) {
    'use strict';
    if (typeof moment === 'undefined') {
        throw new Error('momentjs is required');
    }

    var dpgId = 0,

    DateTimePicker = function (element, options) {
        var defaults = $.fn.datetimepicker.defaults,

            icons = {
                time: 'glyphicon glyphicon-time',
                date: 'glyphicon glyphicon-calendar',
                up: 'glyphicon glyphicon-chevron-up',
                down: 'glyphicon glyphicon-chevron-down'
            },

            picker = this,
            errored = false,
            dDate,

        init = function () {
            var icon = false, localeData, rInterval;
            picker.options = $.extend({}, defaults, options);
            picker.options.icons = $.extend({}, icons, picker.options.icons);

            picker.element = $(element);

            dataToOptions();

            if (!(picker.options.pickTime || picker.options.pickDate)) {
                throw new Error('Must choose at least one picker');
            }

            picker.id = dpgId++;
            moment.locale(picker.options.language);
            picker.date = moment();
            picker.unset = false;
            picker.isInput = picker.element.is('input');
            picker.component = false;

            if (picker.element.hasClass('input-group')) {
                if (picker.element.find('.datepickerbutton').size() === 0) {//in case there is more then one 'input-group-addon' Issue #48
                    picker.component = picker.element.find('[class^="input-group-"]');
                }
                else {
                    picker.component = picker.element.find('.datepickerbutton');
                }
            }
            picker.format = picker.options.format;

            localeData = moment().localeData();

            if (!picker.format) {
                picker.format = (picker.options.pickDate ? localeData.longDateFormat('L') : '');
                if (picker.options.pickDate && picker.options.pickTime) {
                    picker.format += ' ';
                }
                picker.format += (picker.options.pickTime ? localeData.longDateFormat('LT') : '');
                if (picker.options.useSeconds) {
                    if (localeData.longDateFormat('LT').indexOf(' A') !== -1) {
                        picker.format = picker.format.split(' A')[0] + ':ss A';
                    }
                    else {
                        picker.format += ':ss';
                    }
                }
            }
            picker.use24hours = (picker.format.toLowerCase().indexOf('a') < 0 && picker.format.indexOf('h') < 0);

            if (picker.component) {
                icon = picker.component.find('span');
            }

            if (picker.options.pickTime) {
                if (icon) {
                    icon.addClass(picker.options.icons.time);
                }
            }
            if (picker.options.pickDate) {
                if (icon) {
                    icon.removeClass(picker.options.icons.time);
                    icon.addClass(picker.options.icons.date);
                }
            }

            picker.options.widgetParent =
                typeof picker.options.widgetParent === 'string' && picker.options.widgetParent ||
                picker.element.parents().filter(function () {
                    return 'scroll' === $(this).css('overflow-y');
                }).get(0) ||
                'body';

            picker.widget = $(getTemplate()).appendTo(picker.options.widgetParent);

            picker.minViewMode = picker.options.minViewMode || 0;
            if (typeof picker.minViewMode === 'string') {
                switch (picker.minViewMode) {
                    case 'months':
                        picker.minViewMode = 1;
                        break;
                    case 'years':
                        picker.minViewMode = 2;
                        break;
                    default:
                        picker.minViewMode = 0;
                        break;
                }
            }
            picker.viewMode = picker.options.viewMode || 0;
            if (typeof picker.viewMode === 'string') {
                switch (picker.viewMode) {
                    case 'months':
                        picker.viewMode = 1;
                        break;
                    case 'years':
                        picker.viewMode = 2;
                        break;
                    default:
                        picker.viewMode = 0;
                        break;
                }
            }

            picker.viewMode = Math.max(picker.viewMode, picker.minViewMode);

            picker.options.disabledDates = indexGivenDates(picker.options.disabledDates);
            picker.options.enabledDates = indexGivenDates(picker.options.enabledDates);

            picker.startViewMode = picker.viewMode;
            picker.setMinDate(picker.options.minDate);
            picker.setMaxDate(picker.options.maxDate);
            fillDow();
            fillMonths();
            fillHours();
            fillMinutes();
            fillSeconds();
            update();
            showMode();
            if (!getPickerInput().prop('disabled')) {
                attachDatePickerEvents();
            }
            if (picker.options.defaultDate !== '' && getPickerInput().val() === '') {
                picker.setValue(picker.options.defaultDate);
            }
            if (picker.options.minuteStepping !== 1) {
                rInterval = picker.options.minuteStepping;
                picker.date.minutes((Math.round(picker.date.minutes() / rInterval) * rInterval) % 60).seconds(0);
            }
        },

        getPickerInput = function () {
            var input;

            if (picker.isInput) {
                return picker.element;
            }
            input = picker.element.find('.datepickerinput');
            if (input.size() === 0) {
                input = picker.element.find('input');
            }
            else if (!input.is('input')) {
                throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
            }
            return input;
        },

        dataToOptions = function () {
            var eData;
            if (picker.element.is('input')) {
                eData = picker.element.data();
            }
            else {
                eData = picker.element.find('input').data();
            }
            if (eData.dateFormat !== undefined) {
                picker.options.format = eData.dateFormat;
            }
            if (eData.datePickdate !== undefined) {
                picker.options.pickDate = eData.datePickdate;
            }
            if (eData.datePicktime !== undefined) {
                picker.options.pickTime = eData.datePicktime;
            }
            if (eData.dateUseminutes !== undefined) {
                picker.options.useMinutes = eData.dateUseminutes;
            }
            if (eData.dateUseseconds !== undefined) {
                picker.options.useSeconds = eData.dateUseseconds;
            }
            if (eData.dateUsecurrent !== undefined) {
                picker.options.useCurrent = eData.dateUsecurrent;
            }
            if (eData.calendarWeeks !== undefined) {
                picker.options.calendarWeeks = eData.calendarWeeks;
            }
            if (eData.dateMinutestepping !== undefined) {
                picker.options.minuteStepping = eData.dateMinutestepping;
            }
            if (eData.dateMindate !== undefined) {
                picker.options.minDate = eData.dateMindate;
            }
            if (eData.dateMaxdate !== undefined) {
                picker.options.maxDate = eData.dateMaxdate;
            }
            if (eData.dateShowtoday !== undefined) {
                picker.options.showToday = eData.dateShowtoday;
            }
            if (eData.dateCollapse !== undefined) {
                picker.options.collapse = eData.dateCollapse;
            }
            if (eData.dateLanguage !== undefined) {
                picker.options.language = eData.dateLanguage;
            }
            if (eData.dateDefaultdate !== undefined) {
                picker.options.defaultDate = eData.dateDefaultdate;
            }
            if (eData.dateDisableddates !== undefined) {
                picker.options.disabledDates = eData.dateDisableddates;
            }
            if (eData.dateEnableddates !== undefined) {
                picker.options.enabledDates = eData.dateEnableddates;
            }
            if (eData.dateIcons !== undefined) {
                picker.options.icons = eData.dateIcons;
            }
            if (eData.dateUsestrict !== undefined) {
                picker.options.useStrict = eData.dateUsestrict;
            }
            if (eData.dateDirection !== undefined) {
                picker.options.direction = eData.dateDirection;
            }
            if (eData.dateSidebyside !== undefined) {
                picker.options.sideBySide = eData.dateSidebyside;
            }
            if (eData.dateDaysofweekdisabled !== undefined) {
                picker.options.daysOfWeekDisabled = eData.dateDaysofweekdisabled;
            }
        },

        place = function () {
            var position = 'absolute',
                offset = picker.component ? picker.component.offset() : picker.element.offset(),
                $window = $(window),
                placePosition;

            picker.width = picker.component ? picker.component.outerWidth() : picker.element.outerWidth();
            offset.top = offset.top + picker.element.outerHeight();

            if (picker.options.direction === 'up') {
                placePosition = 'top';
            } else if (picker.options.direction === 'bottom') {
                placePosition = 'bottom';
            } else if (picker.options.direction === 'auto') {
                if (offset.top + picker.widget.height() > $window.height() + $window.scrollTop() && picker.widget.height() + picker.element.outerHeight() < offset.top) {
                    placePosition = 'top';
                } else {
                    placePosition = 'bottom';
                }
            }
            if (placePosition === 'top') {
                offset.bottom = $window.height() - offset.top + picker.element.outerHeight() + 3;
                picker.widget.addClass('top').removeClass('bottom');
            } else {
                offset.top += 1;
                picker.widget.addClass('bottom').removeClass('top');
            }

            if (picker.options.width !== undefined) {
                picker.widget.width(picker.options.width);
            }

            if (picker.options.orientation === 'left') {
                picker.widget.addClass('left-oriented');
                offset.left = offset.left - picker.widget.width() + 20;
            }

            if (isInFixed()) {
                position = 'fixed';
                offset.top -= $window.scrollTop();
                offset.left -= $window.scrollLeft();
            }

            if ($window.width() < offset.left + picker.widget.outerWidth()) {
                offset.right = $window.width() - offset.left - picker.width;
                offset.left = 'auto';
                picker.widget.addClass('pull-right');
            } else {
                offset.right = 'auto';
                picker.widget.removeClass('pull-right');
            }

            if (placePosition === 'top') {
                picker.widget.css({
                    position: position,
                    bottom: offset.bottom,
                    top: 'auto',
                    left: offset.left,
                    right: offset.right
                });
            } else {
                picker.widget.css({
                    position: position,
                    top: offset.top,
                    bottom: 'auto',
                    left: offset.left,
                    right: offset.right
                });
            }
        },

        notifyChange = function (oldDate, eventType) {
            if (moment(picker.date).isSame(moment(oldDate)) && !errored) {
                return;
            }
            errored = false;
            picker.element.trigger({
                type: 'dp.change',
                date: moment(picker.date),
                oldDate: moment(oldDate)
            });

            if (eventType !== 'change') {
                picker.element.change();
            }
        },

        notifyError = function (date) {
            errored = true;
            picker.element.trigger({
                type: 'dp.error',
                date: moment(date, picker.format, picker.options.useStrict)
            });
        },

        update = function (newDate) {
            moment.locale(picker.options.language);
            var dateStr = newDate;
            if (!dateStr) {
                dateStr = getPickerInput().val();
                if (dateStr) {
                    picker.date = moment(dateStr, picker.format, picker.options.useStrict);
                }
                if (!picker.date) {
                    picker.date = moment();
                }
            }
            picker.viewDate = moment(picker.date).startOf('month');
            fillDate();
            fillTime();
        },

        fillDow = function () {
            moment.locale(picker.options.language);
            var html = $('<tr>'), weekdaysMin = moment.weekdaysMin(), i;
            if (picker.options.calendarWeeks === true) {
                html.append('<th class="cw">#</th>');
            }
            if (moment().localeData()._week.dow === 0) { // starts on Sunday
                for (i = 0; i < 7; i++) {
                    html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
                }
            } else {
                for (i = 1; i < 8; i++) {
                    if (i === 7) {
                        html.append('<th class="dow">' + weekdaysMin[0] + '</th>');
                    } else {
                        html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
                    }
                }
            }
            picker.widget.find('.datepicker-days thead').append(html);
        },

        fillMonths = function () {
            moment.locale(picker.options.language);
            var html = '', i, monthsShort = moment.monthsShort();
            for (i = 0; i < 12; i++) {
                html += '<span class="month">' + monthsShort[i] + '</span>';
            }
            picker.widget.find('.datepicker-months td').append(html);
        },

        fillDate = function () {
            if (!picker.options.pickDate) {
                return;
            }
            moment.locale(picker.options.language);
            var year = picker.viewDate.year(),
                month = picker.viewDate.month(),
                startYear = picker.options.minDate.year(),
                startMonth = picker.options.minDate.month(),
                endYear = picker.options.maxDate.year(),
                endMonth = picker.options.maxDate.month(),
                currentDate,
                prevMonth, nextMonth, html = [], row, clsName, i, days, yearCont, currentYear, months = moment.months();

            picker.widget.find('.datepicker-days').find('.disabled').removeClass('disabled');
            picker.widget.find('.datepicker-months').find('.disabled').removeClass('disabled');
            picker.widget.find('.datepicker-years').find('.disabled').removeClass('disabled');

            picker.widget.find('.datepicker-days th:eq(1)').text(
                months[month] + ' ' + year);

            prevMonth = moment(picker.viewDate, picker.format, picker.options.useStrict).subtract(1, 'months');
            days = prevMonth.daysInMonth();
            prevMonth.date(days).startOf('week');
            if ((year === startYear && month <= startMonth) || year < startYear) {
                picker.widget.find('.datepicker-days th:eq(0)').addClass('disabled');
            }
            if ((year === endYear && month >= endMonth) || year > endYear) {
                picker.widget.find('.datepicker-days th:eq(2)').addClass('disabled');
            }

            nextMonth = moment(prevMonth).add(42, 'd');
            while (prevMonth.isBefore(nextMonth)) {
                if (prevMonth.weekday() === moment().startOf('week').weekday()) {
                    row = $('<tr>');
                    html.push(row);
                    if (picker.options.calendarWeeks === true) {
                        row.append('<td class="cw">' + prevMonth.week() + '</td>');
                    }
                }
                clsName = '';
                if (prevMonth.year() < year || (prevMonth.year() === year && prevMonth.month() < month)) {
                    clsName += ' old';
                } else if (prevMonth.year() > year || (prevMonth.year() === year && prevMonth.month() > month)) {
                    clsName += ' new';
                }
                if (prevMonth.isSame(moment({y: picker.date.year(), M: picker.date.month(), d: picker.date.date()}))) {
                    clsName += ' active';
                }
                if (isInDisableDates(prevMonth, 'day') || !isInEnableDates(prevMonth)) {
                    clsName += ' disabled';
                }
                if (picker.options.showToday === true) {
                    if (prevMonth.isSame(moment(), 'day')) {
                        clsName += ' today';
                    }
                }
                if (picker.options.daysOfWeekDisabled) {
                    for (i = 0; i < picker.options.daysOfWeekDisabled.length; i++) {
                        if (prevMonth.day() === picker.options.daysOfWeekDisabled[i]) {
                            clsName += ' disabled';
                            break;
                        }
                    }
                }
                row.append('<td class="day' + clsName + '">' + prevMonth.date() + '</td>');

                currentDate = prevMonth.date();
                prevMonth.add(1, 'd');

                if (currentDate === prevMonth.date()) {
                    prevMonth.add(1, 'd');
                }
            }
            picker.widget.find('.datepicker-days tbody').empty().append(html);
            currentYear = picker.date.year();
            months = picker.widget.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
            if (currentYear === year) {
                months.eq(picker.date.month()).addClass('active');
            }
            if (year - 1 < startYear) {
                picker.widget.find('.datepicker-months th:eq(0)').addClass('disabled');
            }
            if (year + 1 > endYear) {
                picker.widget.find('.datepicker-months th:eq(2)').addClass('disabled');
            }
            for (i = 0; i < 12; i++) {
                if ((year === startYear && startMonth > i) || (year < startYear)) {
                    $(months[i]).addClass('disabled');
                } else if ((year === endYear && endMonth < i) || (year > endYear)) {
                    $(months[i]).addClass('disabled');
                }
            }

            html = '';
            year = parseInt(year / 10, 10) * 10;
            yearCont = picker.widget.find('.datepicker-years').find(
                'th:eq(1)').text(year + '-' + (year + 9)).parents('table').find('td');
            picker.widget.find('.datepicker-years').find('th').removeClass('disabled');
            if (startYear > year) {
                picker.widget.find('.datepicker-years').find('th:eq(0)').addClass('disabled');
            }
            if (endYear < year + 9) {
                picker.widget.find('.datepicker-years').find('th:eq(2)').addClass('disabled');
            }
            year -= 1;
            for (i = -1; i < 11; i++) {
                html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + ((year < startYear || year > endYear) ? ' disabled' : '') + '">' + year + '</span>';
                year += 1;
            }
            yearCont.html(html);
        },

        fillHours = function () {
            moment.locale(picker.options.language);
            var table = picker.widget.find('.timepicker .timepicker-hours table'), html = '', current, i, j;
            table.parent().hide();
            if (picker.use24hours) {
                current = 0;
                for (i = 0; i < 6; i += 1) {
                    html += '<tr>';
                    for (j = 0; j < 4; j += 1) {
                        html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
                        current++;
                    }
                    html += '</tr>';
                }
            }
            else {
                current = 1;
                for (i = 0; i < 3; i += 1) {
                    html += '<tr>';
                    for (j = 0; j < 4; j += 1) {
                        html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
                        current++;
                    }
                    html += '</tr>';
                }
            }
            table.html(html);
        },

        fillMinutes = function () {
            var table = picker.widget.find('.timepicker .timepicker-minutes table'), html = '', current = 0, i, j, step = picker.options.minuteStepping;
            table.parent().hide();
            if (step === 1)  {
                step = 5;
            }
            for (i = 0; i < Math.ceil(60 / step / 4) ; i++) {
                html += '<tr>';
                for (j = 0; j < 4; j += 1) {
                    if (current < 60) {
                        html += '<td class="minute">' + padLeft(current.toString()) + '</td>';
                        current += step;
                    } else {
                        html += '<td></td>';
                    }
                }
                html += '</tr>';
            }
            table.html(html);
        },

        fillSeconds = function () {
            var table = picker.widget.find('.timepicker .timepicker-seconds table'), html = '', current = 0, i, j;
            table.parent().hide();
            for (i = 0; i < 3; i++) {
                html += '<tr>';
                for (j = 0; j < 4; j += 1) {
                    html += '<td class="second">' + padLeft(current.toString()) + '</td>';
                    current += 5;
                }
                html += '</tr>';
            }
            table.html(html);
        },

        fillTime = function () {
            if (!picker.date) {
                return;
            }
            var timeComponents = picker.widget.find('.timepicker span[data-time-component]'),
                hour = picker.date.hours(),
                period = picker.date.format('A');
            if (!picker.use24hours) {
                if (hour === 0) {
                    hour = 12;
                } else if (hour !== 12) {
                    hour = hour % 12;
                }
                picker.widget.find('.timepicker [data-action=togglePeriod]').text(period);
            }
            timeComponents.filter('[data-time-component=hours]').text(padLeft(hour));
            timeComponents.filter('[data-time-component=minutes]').text(padLeft(picker.date.minutes()));
            timeComponents.filter('[data-time-component=seconds]').text(padLeft(picker.date.second()));
        },

        click = function (e) {
            e.stopPropagation();
            e.preventDefault();
            picker.unset = false;
            var target = $(e.target).closest('span, td, th'), month, year, step, day, oldDate = moment(picker.date);
            if (target.length === 1) {
                if (!target.is('.disabled')) {
                    switch (target[0].nodeName.toLowerCase()) {
                        case 'th':
                            switch (target[0].className) {
                                case 'picker-switch':
                                    showMode(1);
                                    break;
                                case 'prev':
                                case 'next':
                                    step = dpGlobal.modes[picker.viewMode].navStep;
                                    if (target[0].className === 'prev') {
                                        step = step * -1;
                                    }
                                    picker.viewDate.add(step, dpGlobal.modes[picker.viewMode].navFnc);
                                    fillDate();
                                    break;
                            }
                            break;
                        case 'span':
                            if (target.is('.month')) {
                                month = target.parent().find('span').index(target);
                                picker.viewDate.month(month);
                            } else {
                                year = parseInt(target.text(), 10) || 0;
                                picker.viewDate.year(year);
                            }
                            if (picker.viewMode === picker.minViewMode) {
                                picker.date = moment({
                                    y: picker.viewDate.year(),
                                    M: picker.viewDate.month(),
                                    d: picker.viewDate.date(),
                                    h: picker.date.hours(),
                                    m: picker.date.minutes(),
                                    s: picker.date.seconds()
                                });
                                set();
                                notifyChange(oldDate, e.type);
                            }
                            showMode(-1);
                            fillDate();
                            break;
                        case 'td':
                            if (target.is('.day')) {
                                day = parseInt(target.text(), 10) || 1;
                                month = picker.viewDate.month();
                                year = picker.viewDate.year();
                                if (target.is('.old')) {
                                    if (month === 0) {
                                        month = 11;
                                        year -= 1;
                                    } else {
                                        month -= 1;
                                    }
                                } else if (target.is('.new')) {
                                    if (month === 11) {
                                        month = 0;
                                        year += 1;
                                    } else {
                                        month += 1;
                                    }
                                }
                                picker.date = moment({
                                    y: year,
                                    M: month,
                                    d: day,
                                    h: picker.date.hours(),
                                    m: picker.date.minutes(),
                                    s: picker.date.seconds()
                                }
                                );
                                picker.viewDate = moment({
                                    y: year, M: month, d: Math.min(28, day)
                                });
                                fillDate();
                                set();
                                notifyChange(oldDate, e.type);
                            }
                            break;
                    }
                }
            }
        },

        actions = {
            incrementHours: function () {
                checkDate('add', 'hours', 1);
            },

            incrementMinutes: function () {
                checkDate('add', 'minutes', picker.options.minuteStepping);
            },

            incrementSeconds: function () {
                checkDate('add', 'seconds', 1);
            },

            decrementHours: function () {
                checkDate('subtract', 'hours', 1);
            },

            decrementMinutes: function () {
                checkDate('subtract', 'minutes', picker.options.minuteStepping);
            },

            decrementSeconds: function () {
                checkDate('subtract', 'seconds', 1);
            },

            togglePeriod: function () {
                var hour = picker.date.hours();
                if (hour >= 12) {
                    hour -= 12;
                } else {
                    hour += 12;
                }
                picker.date.hours(hour);
            },

            showPicker: function () {
                picker.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                picker.widget.find('.timepicker .timepicker-picker').show();
            },

            showHours: function () {
                picker.widget.find('.timepicker .timepicker-picker').hide();
                picker.widget.find('.timepicker .timepicker-hours').show();
            },

            showMinutes: function () {
                picker.widget.find('.timepicker .timepicker-picker').hide();
                picker.widget.find('.timepicker .timepicker-minutes').show();
            },

            showSeconds: function () {
                picker.widget.find('.timepicker .timepicker-picker').hide();
                picker.widget.find('.timepicker .timepicker-seconds').show();
            },

            selectHour: function (e) {
                var hour = parseInt($(e.target).text(), 10);
                if (!picker.use24hours) {
                    if (picker.date.hours() >= 12) {
                        if (hour !== 12) {
                            hour += 12;
                        }
                    } else {
                        if (hour === 12) {
                            hour = 0;
                        }
                    }
                }
                picker.date.hours(hour);
                actions.showPicker.call(picker);
            },

            selectMinute: function (e) {
                picker.date.minutes(parseInt($(e.target).text(), 10));
                actions.showPicker.call(picker);
            },

            selectSecond: function (e) {
                picker.date.seconds(parseInt($(e.target).text(), 10));
                actions.showPicker.call(picker);
            }
        },

        doAction = function (e) {
            var oldDate = moment(picker.date),
                action = $(e.currentTarget).data('action'),
                rv = actions[action].apply(picker, arguments);
            stopEvent(e);
            if (!picker.date) {
                picker.date = moment({y: 1970});
            }
            set();
            fillTime();
            notifyChange(oldDate, e.type);
            return rv;
        },

        stopEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        },

        keydown = function (e) {
            if (e.keyCode === 27) { // allow escape to hide picker
                picker.hide();
            }
        },

        change = function (e) {
            moment.locale(picker.options.language);
            var input = $(e.target), oldDate = moment(picker.date), newDate = moment(input.val(), picker.format, picker.options.useStrict);
            if (newDate.isValid() && !isInDisableDates(newDate) && isInEnableDates(newDate)) {
                update();
                picker.setValue(newDate);
                notifyChange(oldDate, e.type);
                set();
            }
            else {
                picker.viewDate = oldDate;
                picker.unset = true;
                notifyChange(oldDate, e.type);
                notifyError(newDate);
            }
        },

        showMode = function (dir) {
            if (dir) {
                picker.viewMode = Math.max(picker.minViewMode, Math.min(2, picker.viewMode + dir));
            }
            picker.widget.find('.datepicker > div').hide().filter('.datepicker-' + dpGlobal.modes[picker.viewMode].clsName).show();
        },

        attachDatePickerEvents = function () {
            var $this, $parent, expanded, closed, collapseData;
            picker.widget.on('click', '.datepicker *', $.proxy(click, this)); // this handles date picker clicks
            picker.widget.on('click', '[data-action]', $.proxy(doAction, this)); // this handles time picker clicks
            picker.widget.on('mousedown', $.proxy(stopEvent, this));
            picker.element.on('keydown', $.proxy(keydown, this));
            if (picker.options.pickDate && picker.options.pickTime) {
                picker.widget.on('click.togglePicker', '.accordion-toggle', function (e) {
                    e.stopPropagation();
                    $this = $(this);
                    $parent = $this.closest('ul');
                    expanded = $parent.find('.in');
                    closed = $parent.find('.collapse:not(.in)');

                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        expanded.collapse('hide');
                        closed.collapse('show');
                        $this.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
                        if (picker.component) {
                            picker.component.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
                        }
                    }
                });
            }
            if (picker.isInput) {
                picker.element.on({
                    'click': $.proxy(picker.show, this),
                    'focus': $.proxy(picker.show, this),
                    'change': $.proxy(change, this),
                    'blur': $.proxy(picker.hide, this)
                });
            } else {
                picker.element.on({
                    'change': $.proxy(change, this)
                }, 'input');
                if (picker.component) {
                    picker.component.on('click', $.proxy(picker.show, this));
                    picker.component.on('mousedown', $.proxy(stopEvent, this));
                } else {
                    picker.element.on('click', $.proxy(picker.show, this));
                }
            }
        },

        attachDatePickerGlobalEvents = function () {
            $(window).on(
                'resize.datetimepicker' + picker.id, $.proxy(place, this));
            if (!picker.isInput) {
                $(document).on(
                    'mousedown.datetimepicker' + picker.id, $.proxy(picker.hide, this));
            }
        },

        detachDatePickerEvents = function () {
            picker.widget.off('click', '.datepicker *', picker.click);
            picker.widget.off('click', '[data-action]');
            picker.widget.off('mousedown', picker.stopEvent);
            if (picker.options.pickDate && picker.options.pickTime) {
                picker.widget.off('click.togglePicker');
            }
            if (picker.isInput) {
                picker.element.off({
                    'focus': picker.show,
                    'change': change,
                    'click': picker.show,
                    'blur' : picker.hide
                });
            } else {
                picker.element.off({
                    'change': change
                }, 'input');
                if (picker.component) {
                    picker.component.off('click', picker.show);
                    picker.component.off('mousedown', picker.stopEvent);
                } else {
                    picker.element.off('click', picker.show);
                }
            }
        },

        detachDatePickerGlobalEvents = function () {
            $(window).off('resize.datetimepicker' + picker.id);
            if (!picker.isInput) {
                $(document).off('mousedown.datetimepicker' + picker.id);
            }
        },

        isInFixed = function () {
            if (picker.element) {
                var parents = picker.element.parents(), inFixed = false, i;
                for (i = 0; i < parents.length; i++) {
                    if ($(parents[i]).css('position') === 'fixed') {
                        inFixed = true;
                        break;
                    }
                }
                return inFixed;
            } else {
                return false;
            }
        },

        set = function () {
            moment.locale(picker.options.language);
            var formatted = '';
            if (!picker.unset) {
                formatted = moment(picker.date).format(picker.format);
            }
            getPickerInput().val(formatted);
            picker.element.data('date', formatted);
            if (!picker.options.pickTime) {
                picker.hide();
            }
        },

        checkDate = function (direction, unit, amount) {
            moment.locale(picker.options.language);
            var newDate;
            if (direction === 'add') {
                newDate = moment(picker.date);
                if (newDate.hours() === 23) {
                    newDate.add(amount, unit);
                }
                newDate.add(amount, unit);
            }
            else {
                newDate = moment(picker.date).subtract(amount, unit);
            }
            if (isInDisableDates(moment(newDate.subtract(amount, unit))) || isInDisableDates(newDate)) {
                notifyError(newDate.format(picker.format));
                return;
            }

            if (direction === 'add') {
                picker.date.add(amount, unit);
            }
            else {
                picker.date.subtract(amount, unit);
            }
            picker.unset = false;
        },

        isInDisableDates = function (date, timeUnit) {
            moment.locale(picker.options.language);
            var maxDate = moment(picker.options.maxDate, picker.format, picker.options.useStrict),
                minDate = moment(picker.options.minDate, picker.format, picker.options.useStrict);

            if (timeUnit) {
                maxDate = maxDate.endOf(timeUnit);
                minDate = minDate.startOf(timeUnit);
            }

            if (date.isAfter(maxDate) || date.isBefore(minDate)) {
                return true;
            }
            if (picker.options.disabledDates === false) {
                return false;
            }
            return picker.options.disabledDates[date.format('YYYY-MM-DD')] === true;
        },
        isInEnableDates = function (date) {
            moment.locale(picker.options.language);
            if (picker.options.enabledDates === false) {
                return true;
            }
            return picker.options.enabledDates[date.format('YYYY-MM-DD')] === true;
        },

        indexGivenDates = function (givenDatesArray) {
            // Store given enabledDates and disabledDates as keys.
            // This way we can check their existence in O(1) time instead of looping through whole array.
            // (for example: picker.options.enabledDates['2014-02-27'] === true)
            var givenDatesIndexed = {}, givenDatesCount = 0, i;
            for (i = 0; i < givenDatesArray.length; i++) {
                if (moment.isMoment(givenDatesArray[i]) || givenDatesArray[i] instanceof Date) {
                    dDate = moment(givenDatesArray[i]);
                } else {
                    dDate = moment(givenDatesArray[i], picker.format, picker.options.useStrict);
                }
                if (dDate.isValid()) {
                    givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                    givenDatesCount++;
                }
            }
            if (givenDatesCount > 0) {
                return givenDatesIndexed;
            }
            return false;
        },

        padLeft = function (string) {
            string = string.toString();
            if (string.length >= 2) {
                return string;
            }
            return '0' + string;
        },

        getTemplate = function () {
            var
                headTemplate =
                        '<thead>' +
                            '<tr>' +
                                '<th class="prev">&lsaquo;</th><th colspan="' + (picker.options.calendarWeeks ? '6' : '5') + '" class="picker-switch"></th><th class="next">&rsaquo;</th>' +
                            '</tr>' +
                        '</thead>',
                contTemplate =
                        '<tbody><tr><td colspan="' + (picker.options.calendarWeeks ? '8' : '7') + '"></td></tr></tbody>',
                template = '<div class="datepicker-days">' +
                    '<table class="table-condensed">' + headTemplate + '<tbody></tbody></table>' +
                '</div>' +
                '<div class="datepicker-months">' +
                    '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' +
                '</div>' +
                '<div class="datepicker-years">' +
                    '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' +
                '</div>',
                ret = '';
            if (picker.options.pickDate && picker.options.pickTime) {
                ret = '<div class="bootstrap-datetimepicker-widget' + (picker.options.sideBySide ? ' timepicker-sbs' : '') + (picker.use24hours ? ' usetwentyfour' : '') + ' dropdown-menu" style="z-index:9999 !important;">';
                if (picker.options.sideBySide) {
                    ret += '<div class="row">' +
                       '<div class="col-sm-6 datepicker">' + template + '</div>' +
                       '<div class="col-sm-6 timepicker">' + tpGlobal.getTemplate() + '</div>' +
                     '</div>';
                } else {
                    ret += '<ul class="list-unstyled">' +
                        '<li' + (picker.options.collapse ? ' class="collapse in"' : '') + '>' +
                            '<div class="datepicker">' + template + '</div>' +
                        '</li>' +
                        '<li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="' + picker.options.icons.time + '"></span></a></li>' +
                        '<li' + (picker.options.collapse ? ' class="collapse"' : '') + '>' +
                            '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' +
                        '</li>' +
                   '</ul>';
                }
                ret += '</div>';
                return ret;
            }
            if (picker.options.pickTime) {
                return (
                    '<div class="bootstrap-datetimepicker-widget dropdown-menu">' +
                        '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' +
                    '</div>'
                );
            }
            return (
                '<div class="bootstrap-datetimepicker-widget dropdown-menu">' +
                    '<div class="datepicker">' + template + '</div>' +
                '</div>'
            );
        },

        dpGlobal = {
            modes: [
                {
                    clsName: 'days',
                    navFnc: 'month',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'year',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'year',
                    navStep: 10
                }
            ]
        },

        tpGlobal = {
            hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
            minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
            secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
        };

        tpGlobal.getTemplate = function () {
            return (
                '<div class="timepicker-picker">' +
                    '<table class="table-condensed">' +
                        '<tr>' +
                            '<td><a href="#" class="btn" data-action="incrementHours"><span class="' + picker.options.icons.up + '"></span></a></td>' +
                            '<td class="separator"></td>' +
                            '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + picker.options.icons.up + '"></span></a>' : '') + '</td>' +
                            (picker.options.useSeconds ?
                                '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + picker.options.icons.up + '"></span></a></td>' : '') +
                            (picker.use24hours ? '' : '<td class="separator"></td>') +
                        '</tr>' +
                        '<tr>' +
                            '<td>' + tpGlobal.hourTemplate + '</td> ' +
                            '<td class="separator">:</td>' +
                            '<td>' + (picker.options.useMinutes ? tpGlobal.minuteTemplate : '<span class="timepicker-minute">00</span>') + '</td> ' +
                            (picker.options.useSeconds ?
                                '<td class="separator">:</td><td>' + tpGlobal.secondTemplate + '</td>' : '') +
                            (picker.use24hours ? '' : '<td class="separator"></td>' +
                            '<td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') +
                        '</tr>' +
                        '<tr>' +
                            '<td><a href="#" class="btn" data-action="decrementHours"><span class="' + picker.options.icons.down + '"></span></a></td>' +
                            '<td class="separator"></td>' +
                            '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + picker.options.icons.down + '"></span></a>' : '') + '</td>' +
                            (picker.options.useSeconds ?
                                '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + picker.options.icons.down + '"></span></a></td>' : '') +
                            (picker.use24hours ? '' : '<td class="separator"></td>') +
                        '</tr>' +
                    '</table>' +
                '</div>' +
                '<div class="timepicker-hours" data-action="selectHour">' +
                    '<table class="table-condensed"></table>' +
                '</div>' +
                '<div class="timepicker-minutes" data-action="selectMinute">' +
                    '<table class="table-condensed"></table>' +
                '</div>' +
                (picker.options.useSeconds ?
                    '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : '')
            );
        };

        picker.destroy = function () {
            detachDatePickerEvents();
            detachDatePickerGlobalEvents();
            picker.widget.remove();
            picker.element.removeData('DateTimePicker');
            if (picker.component) {
                picker.component.removeData('DateTimePicker');
            }
        };

        picker.show = function (e) {
            if (getPickerInput().prop('disabled')) {
                return;
            }
            if (picker.options.useCurrent) {
                if (getPickerInput().val() === '') {
                    if (picker.options.minuteStepping !== 1) {
                        var mDate = moment(),
                        rInterval = picker.options.minuteStepping;
                        mDate.minutes((Math.round(mDate.minutes() / rInterval) * rInterval) % 60).seconds(0);
                        picker.setValue(mDate.format(picker.format));
                    } else {
                        picker.setValue(moment().format(picker.format));
                    }
                    notifyChange('', e.type);
                }
            }
            // if this is a click event on the input field and picker is already open don't hide it
            if (e && e.type === 'click' && picker.isInput && picker.widget.hasClass('picker-open')) {
                return;
            }
            if (picker.widget.hasClass('picker-open')) {
                picker.widget.hide();
                picker.widget.removeClass('picker-open');
            }
            else {
                picker.widget.show();
                picker.widget.addClass('picker-open');
            }
            picker.height = picker.component ? picker.component.outerHeight() : picker.element.outerHeight();
            place();
            picker.element.trigger({
                type: 'dp.show',
                date: moment(picker.date)
            });
            attachDatePickerGlobalEvents();
            if (e) {
                stopEvent(e);
            }
        };

        picker.disable = function () {
            var input = getPickerInput();
            if (input.prop('disabled')) {
                return;
            }
            input.prop('disabled', true);
            detachDatePickerEvents();
        };

        picker.enable = function () {
            var input = getPickerInput();
            if (!input.prop('disabled')) {
                return;
            }
            input.prop('disabled', false);
            attachDatePickerEvents();
        };

        picker.hide = function () {
            // Ignore event if in the middle of a picker transition
            var collapse = picker.widget.find('.collapse'), i, collapseData;
            for (i = 0; i < collapse.length; i++) {
                collapseData = collapse.eq(i).data('collapse');
                if (collapseData && collapseData.transitioning) {
                    return;
                }
            }
            picker.widget.hide();
            picker.widget.removeClass('picker-open');
            picker.viewMode = picker.startViewMode;
            showMode();
            picker.element.trigger({
                type: 'dp.hide',
                date: moment(picker.date)
            });
            detachDatePickerGlobalEvents();
        };

        picker.setValue = function (newDate) {
            moment.locale(picker.options.language);
            if (!newDate) {
                picker.unset = true;
                set();
            } else {
                picker.unset = false;
            }
            if (!moment.isMoment(newDate)) {
                newDate = (newDate instanceof Date) ? moment(newDate) : moment(newDate, picker.format, picker.options.useStrict);
            } else {
                newDate = newDate.locale(picker.options.language);
            }
            if (newDate.isValid()) {
                picker.date = newDate;
                set();
                picker.viewDate = moment({y: picker.date.year(), M: picker.date.month()});
                fillDate();
                fillTime();
            }
            else {
                notifyError(newDate);
            }
        };

        picker.getDate = function () {
            if (picker.unset) {
                return null;
            }
            return moment(picker.date);
        };

        picker.setDate = function (date) {
            var oldDate = moment(picker.date);
            if (!date) {
                picker.setValue(null);
            } else {
                picker.setValue(date);
            }
            notifyChange(oldDate, 'function');
        };

        picker.setDisabledDates = function (dates) {
            picker.options.disabledDates = indexGivenDates(dates);
            if (picker.viewDate) {
                update();
            }
        };

        picker.setEnabledDates = function (dates) {
            picker.options.enabledDates = indexGivenDates(dates);
            if (picker.viewDate) {
                update();
            }
        };

        picker.setMaxDate = function (date) {
            if (date === undefined) {
                return;
            }
            if (moment.isMoment(date) || date instanceof Date) {
                picker.options.maxDate = moment(date);
            } else {
                picker.options.maxDate = moment(date, picker.format, picker.options.useStrict);
            }
            if (picker.viewDate) {
                update();
            }
        };

        picker.setMinDate = function (date) {
            if (date === undefined) {
                return;
            }
            if (moment.isMoment(date) || date instanceof Date) {
                picker.options.minDate = moment(date);
            } else {
                picker.options.minDate = moment(date, picker.format, picker.options.useStrict);
            }
            if (picker.viewDate) {
                update();
            }
        };

        init();
    };

    $.fn.datetimepicker = function (options) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('DateTimePicker');
            if (!data) {
                $this.data('DateTimePicker', new DateTimePicker(this, options));
            }
        });
    };

    $.fn.datetimepicker.defaults = {
        format: false,
        pickDate: true,
        pickTime: true,
        useMinutes: true,
        useSeconds: false,
        useCurrent: true,
        calendarWeeks: false,
        minuteStepping: 1,
        minDate: moment({y: 1900}),
        maxDate: moment().add(100, 'y'),
        showToday: true,
        collapse: true,
        language: moment.locale(),
        defaultDate: '',
        disabledDates: false,
        enabledDates: false,
        icons: {},
        useStrict: false,
        direction: 'auto',
        sideBySide: false,
        daysOfWeekDisabled: [],
        widgetParent: false
    };
}));

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);
/*!
 * @copyright &copy; Kartik Visweswaran, Krajee.com, 2014
 * @version 3.0.0
 *
 * A simple yet powerful JQuery star rating plugin that allows rendering
 * fractional star ratings and supports Right to Left (RTL) input.
 * 
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */!function(e){var a=0,t=5,n=.5,r=function(a,t){return"undefined"==typeof a||null===a||void 0===a||a==[]||""===a||t&&""===e.trim(a)},l=function(e,a,t){var n=r(e.data(a))?e.attr(a):e.data(a);return n?n:t[a]},i=function(e){var a=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return a?Math.max(0,(a[1]?a[1].length:0)-(a[2]?+a[2]:0)):0},s=function(e,a){return parseFloat(e.toFixed(a))},o=function(a,t){this.$element=e(a),this.init(t)};o.prototype={constructor:o,_parseAttr:function(e,i){var s=this,o=s.$element;if("range"===o.attr("type")||"number"===o.attr("type")){var c=l(o,e,i),p=n;"min"===e?p=a:"max"===e?p=t:"step"===e&&(p=n);var u=r(c)?p:c;return parseFloat(u)}return parseFloat(i[e])},listen:function(){var a=this;a.$rating.on("click",function(e){if(!a.inactive){var t=e.pageX-a.$rating.offset().left;a.setStars(t),a.$element.trigger("change"),a.$element.trigger("rating.change",[a.$element.val(),a.$caption.html()]),a.starClicked=!0}}),a.$rating.on("mousemove",function(e){if(a.hoverEnabled&&!a.inactive){a.starClicked=!1;var t=e.pageX-a.$rating.offset().left,n=a.calculate(t);a.toggleHover(n),a.$element.trigger("rating.hover",[n.val,n.caption,"stars"])}}),a.$rating.on("mouseleave",function(){if(a.hoverEnabled&&!a.inactive&&!a.starClicked){var e=a.cache;a.toggleHover(e),a.$element.trigger("rating.hoverleave",["stars"])}}),a.$clear.on("mousemove",function(){if(a.hoverEnabled&&!a.inactive&&a.hoverOnClear){a.clearClicked=!1;var e,t='<span class="'+a.clearCaptionClass+'">'+a.clearCaption+"</span>",n=a.clearValue,r=a.getWidthFromValue(n);e={caption:t,width:r,val:n},a.toggleHover(e),a.$element.trigger("rating.hover",[n,t,"clear"])}}),a.$clear.on("mouseleave",function(){if(a.hoverEnabled&&!a.inactive&&!a.clearClicked&&a.hoverOnClear){var e=a.cache;a.toggleHover(e),a.$element.trigger("rating.hoverleave",["clear"])}}),a.$clear.on("click",function(){a.inactive||(a.clear(),a.clearClicked=!0)}),e(a.$element[0].form).on("reset",function(){a.inactive||a.reset()})},initSlider:function(e){var l=this;r(l.$element.val())&&l.$element.val(0),l.initialValue=l.$element.val(),l.min="undefined"!=typeof e.min?e.min:l._parseAttr("min",e),l.max="undefined"!=typeof e.max?e.max:l._parseAttr("max",e),l.step="undefined"!=typeof e.step?e.step:l._parseAttr("step",e),(isNaN(l.min)||r(l.min))&&(l.min=a),(isNaN(l.max)||r(l.max))&&(l.max=t),(isNaN(l.step)||r(l.step)||0==l.step)&&(l.step=n),l.diff=l.max-l.min},init:function(a){var t=this;t.options=a,t.hoverEnabled=a.hoverEnabled,t.hoverChangeCaption=a.hoverChangeCaption,t.hoverChangeStars=a.hoverChangeStars,t.hoverOnClear=a.hoverOnClear,t.starClicked=!1,t.clearClicked=!1,t.initSlider(a),t.checkDisabled(),$element=t.$element,t.containerClass=a.containerClass,t.glyphicon=a.glyphicon;var n=t.glyphicon?"î€†":"â˜…";t.symbol=r(a.symbol)?n:a.symbol,t.rtl=a.rtl||t.$element.attr("dir"),t.rtl&&t.$element.attr("dir","rtl"),t.showClear=a.showClear,t.showCaption=a.showCaption,t.size=a.size,t.stars=a.stars,t.defaultCaption=a.defaultCaption,t.starCaptions=a.starCaptions,t.starCaptionClasses=a.starCaptionClasses,t.clearButton=a.clearButton,t.clearButtonTitle=a.clearButtonTitle,t.clearButtonBaseClass=r(a.clearButtonBaseClass)?"clear-rating":a.clearButtonBaseClass,t.clearButtonActiveClass=r(a.clearButtonActiveClass)?"clear-rating-active":a.clearButtonActiveClass,t.clearCaption=a.clearCaption,t.clearCaptionClass=a.clearCaptionClass,t.clearValue=r(a.clearValue)?t.min:a.clearValue,t.$element.removeClass("form-control").addClass("form-control"),t.$clearElement=r(a.clearElement)?null:e(a.clearElement),t.$captionElement=r(a.captionElement)?null:e(a.captionElement),"undefined"==typeof t.$rating&&"undefined"==typeof t.$container&&(t.$rating=e(document.createElement("div")).html('<div class="rating-stars"></div>'),t.$container=e(document.createElement("div")),t.$container.before(t.$rating),t.$container.append(t.$rating),t.$element.before(t.$container).appendTo(t.$rating)),t.$stars=t.$rating.find(".rating-stars"),t.generateRating(),t.$clear=r(t.$clearElement)?t.$container.find("."+t.clearButtonBaseClass):t.$clearElement,t.$caption=r(t.$captionElement)?t.$container.find(".caption"):t.$captionElement,t.setStars(),t.$element.hide(),t.listen(),t.showClear&&t.$clear.attr({"class":t.getClearClass()}),t.cache={caption:t.$caption.html(),width:t.$stars.width(),val:t.$element.val()},t.$element.removeClass("rating-loading")},checkDisabled:function(){var e=this;e.disabled=l(e.$element,"disabled",e.options),e.readonly=l(e.$element,"readonly",e.options),e.inactive=e.disabled||e.readonly},getClearClass:function(){return this.clearButtonBaseClass+" "+(this.inactive?"":this.clearButtonActiveClass)},generateRating:function(){var e=this,a=e.renderClear(),t=e.renderCaption(),n=e.rtl?"rating-container-rtl":"rating-container",l=e.getStars();n+=e.glyphicon?"î€†"==e.symbol?" rating-gly-star":" rating-gly":" rating-uni",e.$rating.attr("class",n),e.$rating.attr("data-content",l),e.$stars.attr("data-content",l);var n=e.rtl?"star-rating-rtl":"star-rating";e.$container.attr("class",n+" rating-"+e.size),e.inactive?e.$container.removeClass("rating-active").addClass("rating-disabled"):e.$container.removeClass("rating-disabled").addClass("rating-active"),"undefined"==typeof e.$caption&&"undefined"==typeof e.$clear&&(e.rtl?e.$container.prepend(t).append(a):e.$container.prepend(a).append(t)),r(e.containerClass)||e.$container.removeClass(e.containerClass).addClass(e.containerClass)},getStars:function(){for(var e=this,a=e.stars,t="",n=1;a>=n;n++)t+=e.symbol;return t},renderClear:function(){var e=this;if(!e.showClear)return"";var a=e.getClearClass();return r(e.$clearElement)?'<div class="'+a+'" title="'+e.clearButtonTitle+'">'+e.clearButton+"</div>":(e.$clearElement.removeClass(a).addClass(a).attr({title:e.clearButtonTitle}),e.$clearElement.html(e.clearButton),"")},renderCaption:function(){var e=this,a=e.$element.val();if(!e.showCaption)return"";var t=e.fetchCaption(a);return r(e.$captionElement)?'<div class="caption">'+t+"</div>":(e.$captionElement.removeClass("caption").addClass("caption").attr({title:e.clearCaption}),e.$captionElement.html(t),"")},fetchCaption:function(e){var a,t,n=this,l=parseFloat(e);if(a="function"==typeof n.starCaptionClasses?r(n.starCaptionClasses(l))?n.clearCaptionClass:n.starCaptionClasses(l):r(n.starCaptionClasses[l])?n.clearCaptionClass:n.starCaptionClasses[l],"function"==typeof n.starCaptions)var t=r(n.starCaptions(l))?n.defaultCaption.replace(/\{rating\}/g,l):n.starCaptions(l);else var t=r(n.starCaptions[l])?n.defaultCaption.replace(/\{rating\}/g,l):n.starCaptions[l];var i=l==n.clearValue?n.clearCaption:t;return'<span class="'+a+'">'+i+"</span>"},getWidthFromValue:function(e){{var a=this,t=a.min,n=a.max;a.step}return t>=e||t==n?0:e>=n?100:100*(e-t)/(n-t)},getValueFromPosition:function(e){var a,t,n=this,r=i(n.step),l=n.$rating.width();return a=e/l,t=n.rtl?n.min+Math.floor(n.diff*a/n.step)*n.step:n.min+Math.ceil(n.diff*a/n.step)*n.step,t<n.min?t=n.min:t>n.max&&(t=n.max),t=s(parseFloat(t),r),n.rtl&&(t=n.max-t),t},toggleHover:function(e){var a=this;if(a.hoverChangeCaption){var t=e.val<=a.clearValue?a.fetchCaption(a.clearValue):e.caption;a.$caption.html(t)}if(a.hoverChangeStars){var n=a.getWidthFromValue(a.clearValue),r=e.val<=a.clearValue?a.rtl?100-n+"%":n+"%":e.width;a.$stars.css("width",r)}},calculate:function(e){var a=this,t=r(a.$element.val())?0:a.$element.val(),n=arguments.length?a.getValueFromPosition(e):t,l=a.fetchCaption(n),i=a.getWidthFromValue(n);return a.rtl&&(i=100-i),i+="%",{caption:l,width:i,val:n}},setStars:function(e){var a=this,t=arguments.length?a.calculate(e):a.calculate();a.$element.val(t.val),a.$stars.css("width",t.width),a.$caption.html(t.caption),a.cache=t},clear:function(){var e=this,a='<span class="'+e.clearCaptionClass+'">'+e.clearCaption+"</span>";e.$stars.removeClass("rated"),e.inactive||e.$caption.html(a),e.$element.val(e.clearValue),e.setStars(),e.$element.trigger("rating.clear")},reset:function(){var e=this;e.$element.val(e.initialValue),e.setStars(),e.$element.trigger("rating.reset")},update:function(e){if(arguments.length>0){var a=this;a.$element.val(e),a.setStars()}},refresh:function(a){var t=this;if(arguments.length){t.init(e.extend(t.options,a)),t.showClear?t.$clear.show():t.$clear.hide(),t.showCaption?t.$caption.show():t.$caption.hide()}}},e.fn.rating=function(a){var t=Array.apply(null,arguments);return t.shift(),this.each(function(){var n=e(this),r=n.data("rating"),l="object"==typeof a&&a;r||n.data("rating",r=new o(this,e.extend({},e.fn.rating.defaults,l,e(this).data()))),"string"==typeof a&&r[a].apply(r,t)})},e.fn.rating.defaults={stars:5,glyphicon:!0,symbol:null,disabled:!1,readonly:!1,rtl:!1,size:"md",showClear:!0,showCaption:!0,defaultCaption:"{rating} Stars",starCaptions:{.5:"Half Star",1:"One Star",1.5:"One & Half Star",2:"Two Stars",2.5:"Two & Half Stars",3:"Three Stars",3.5:"Three & Half Stars",4:"Four Stars",4.5:"Four & Half Stars",5:"Five Stars"},starCaptionClasses:{.5:"label label-danger",1:"label label-danger",1.5:"label label-warning",2:"label label-warning",2.5:"label label-info",3:"label label-info",3.5:"label label-primary",4:"label label-primary",4.5:"label label-success",5:"label label-success"},clearButton:'<i class="glyphicon glyphicon-minus-sign"></i>',clearButtonTitle:"Clear",clearButtonBaseClass:"clear-rating",clearButtonActiveClass:"clear-rating-active",clearCaption:"Not Rated",clearCaptionClass:"label label-default",clearValue:null,captionElement:null,clearElement:null,containerClass:null,hoverEnabled:!0,hoverChangeCaption:!0,hoverChangeStars:!0,hoverOnClear:!0},e("input.rating").addClass("rating-loading"),e(document).ready(function(){var a=e("input.rating"),t=Object.keys(a).length;t>0&&a.rating()})}(jQuery);

 /*---- elastisilde ----*/
(function(a,l,k){var e=false;var g=3000;var b=a.event,c,j;c=b.special.debouncedresize={setup:function(){a(this).on("resize",c.handler)},teardown:function(){a(this).off("resize",c.handler)},handler:function(p,q){var n=this,m=arguments,o=function(){p.type="debouncedresize";b.dispatch.apply(n,m)};if(j){clearTimeout(j)}q?o():j=setTimeout(o,c.threshold)},threshold:150};var f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";a.fn.imagesLoaded=function(p){var n=this,q=a.isFunction(a.Deferred)?a.Deferred():0,s=a.isFunction(q.notify),m=n.find("img").add(n.filter("img")),u=[],v=[],o=[];if(a.isPlainObject(p)){a.each(p,function(w,x){if(w==="callback"){p=x}else{if(q){q[w](x)}}})}function r(){var x=a(v),w=a(o);if(q){if(o.length){q.reject(m,x,w)}else{q.resolve(m)}}if(a.isFunction(p)){p.call(n,m,x,w)}}function t(w,x){if(w.src===f||a.inArray(w,u)!==-1){return}u.push(w);if(x){o.push(w)}else{v.push(w)}a.data(w,"imagesLoaded",{isBroken:x,src:w.src});if(s){q.notifyWith(a(w),[x,m,a(v),a(o)])}if(m.length===u.length){setTimeout(r);m.unbind(".imagesLoaded")}}if(!m.length){r()}else{m.bind("load.imagesLoaded error.imagesLoaded",function(w){t(w.target,w.type==="error")}).each(function(y,x){var z=x.src;var w=a.data(x,"imagesLoaded");if(w&&w.src===z){t(x,w.isBroken);return}if(x.complete&&x.naturalWidth!==k){t(x,x.naturalWidth===0||x.naturalHeight===0);return}if(x.readyState||x.complete){x.src=f;x.src=z}})}return q?q.promise(n):n};var d=a(l),i=l.Modernizr;a.Elastislide=function(n,m){this.$el=a(m);this._init(n)};a.Elastislide.defaults={orientation:"horizontal",speed:500,easing:"ease-in-out",minItems:3,imgSizeItemSelector:"img",start:0,onClick:function(m,o,n){return false},onReady:function(){return false},onBeforeSlide:function(){return false},onAfterSlide:function(){return false}};a.Elastislide.prototype={_init:function(m){this.options=a.extend(true,{},a.Elastislide.defaults,m);var n=this,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=o[i.prefixed("transition")];this.support=i.csstransitions&&i.csstransforms;this.current=this.options.start;this.isSliding=false;this.$items=this.$el.children("li");this.itemsCount=this.$items.length;if(this.itemsCount===0){return false}this._validate();this.$items.detach();this.$el.empty();this.$el.append(this.$items);this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-'+this.options.orientation+'"></div>');this.hasTransition=false;this.hasTransitionTimeout=setTimeout(function(){n._addTransition()},100);this.$el.imagesLoaded(function(){n.$el.show();n._layout();n._configure();if(n.hasTransition){n._removeTransition();n._slideToItem(n.current);n.$el.on(n.transEndEventName,function(){n.$el.off(n.transEndEventName);n._setWrapperSize();n._addTransition();n._initEvents()})}else{clearTimeout(n.hasTransitionTimeout);n._setWrapperSize();n._initEvents();n._slideToItem(n.current);setTimeout(function(){n._addTransition()},25)}n.options.onReady()})},_validate:function(){if(this.options.minItems instanceof Function){this._minItemsFn=this.options.minItems;this.options.minItems=this.options.minItems(document.documentElement.clientWidth)}if(this.options.speed<0){this.options.speed=500}if(this.options.minItems<1||this.options.minItems>this.itemsCount){this.options.minItems=1}if(this.options.start<0||this.options.start>this.itemsCount-1){this.options.start=0}if(this.options.orientation!="horizontal"&&this.options.orientation!="vertical"){this.options.orientation="horizontal"}},_layout:function(){this.$el.wrap('<div class="elastislide-carousel"></div>');this.$carousel=this.$el.parent();this.$wrapper=this.$carousel.parent().removeClass("elastislide-loading");var m=this.$items.find(this.options.imgSizeItemSelector).first();this.imgSize={width:m.outerWidth(true),height:m.outerHeight(true)};this._setItemsSize();this.options.orientation==="horizontal"?this.$el.css("max-height",this.imgSize.height):this.$el.css("height",this.options.minItems*this.imgSize.height);this._addControls()},_addTransition:function(){if(this.support){this.$el.css("transition","all "+this.options.speed+"ms "+this.options.easing)}this.hasTransition=true},_removeTransition:function(){if(this.support){this.$el.css("transition","all 0s")}this.hasTransition=false},_addControls:function(){var m=this;this.$navigation=a('<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>').appendTo(this.$wrapper);this.$navPrev=this.$navigation.find("span.elastislide-prev").on("mousedown.elastislide",function(n){m._slide("next");return false});this.$navNext=this.$navigation.find("span.elastislide-next").on("mousedown.elastislide",function(n){m._slide("prev");return false})},_setItemsSize:function(){var m=this.options.orientation==="horizontal"?(Math.floor(this.$carousel.width()/this.options.minItems)*100)/this.$carousel.width():100;this.$items.css({width:m+"%","max-width":this.imgSize.width,"max-height":this.imgSize.height});if(this.options.orientation==="vertical"){this.$wrapper.css("max-width",this.imgSize.width+parseInt(this.$wrapper.css("padding-left"))+parseInt(this.$wrapper.css("padding-right")))}},_setWrapperSize:function(){if(this.options.orientation==="vertical"){this.$wrapper.css({height:this.options.minItems*this.imgSize.height+parseInt(this.$wrapper.css("padding-top"))+parseInt(this.$wrapper.css("padding-bottom"))})}},_configure:function(){this.fitCount=this.options.orientation==="horizontal"?this.$carousel.width()<this.options.minItems*this.imgSize.width?this.options.minItems:Math.floor(this.$carousel.width()/this.imgSize.width):this.$carousel.height()<this.options.minItems*this.imgSize.height?this.options.minItems:Math.floor(this.$carousel.height()/this.imgSize.height)},_initEvents:function(){var n=this;if(e){var p=0;var m=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true);var o=this.itemsCount*m;var q=this.options.orientation==="horizontal"?this.$carousel.width():this.$carousel.height();l.setInterval(function(){if(o>p+q){n._slide("next");p+=q}else{n._slideTo(0);p=0}},g)}d.on("debouncedresize.elastislide",function(){if(n._minItemsFn){n.options.minItems=n._minItemsFn(document.documentElement.clientWidth)}n._setItemsSize();n._configure();n._slideToItem(n.current)});this.$el.on(this.transEndEventName,function(){n._onEndTransition()});if(this.options.orientation==="horizontal"){this.$el.on({swipeleft:function(){n._slide("next")},swiperight:function(){n._slide("prev")}})}else{this.$el.on({swipeup:function(){n._slide("next")},swipedown:function(){n._slide("prev")}})}this.$el.on("click.elastislide","li",function(s){var r=a(this);n.options.onClick(r,r.index(),s)})},_destroy:function(m){this.$el.off(this.transEndEventName).off("swipeleft swiperight swipeup swipedown .elastislide");d.off(".elastislide");this.$el.css({"max-height":"none",transition:"none"}).unwrap(this.$carousel).unwrap(this.$wrapper);this.$items.css({width:"auto","max-width":"none","max-height":"none"});this.$navigation.remove();this.$wrapper.remove();if(m){m.call()}},_toggleControls:function(m,n){if(n){(m==="prev")?this.$navNext.show():this.$navPrev.show()}else{(m==="prev")?this.$navNext.hide():this.$navPrev.hide()}},_slide:function(n,u){if(this.isSliding){return false}this.options.onBeforeSlide();this.isSliding=true;var q=this,t=this.translation||0,p=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true),s=this.itemsCount*p,v=this.options.orientation==="horizontal"?this.$carousel.width():this.$carousel.height();if(u===k){var m=this.fitCount*p;if(m<0){return false}if(n==="next"&&s-(Math.abs(t)+m)<v){m=s-(Math.abs(t)+v);this._toggleControls("next",false);this._toggleControls("prev",true)}else{if(n==="prev"&&Math.abs(t)-m<0){m=Math.abs(t);this._toggleControls("next",true);this._toggleControls("prev",false)}else{var o=n==="next"?Math.abs(t)+Math.abs(m):Math.abs(t)-Math.abs(m);o>0?this._toggleControls("prev",true):this._toggleControls("prev",false);o<s-v?this._toggleControls("next",true):this._toggleControls("next",false)}}u=n==="next"?t-m:t+m}else{var m=Math.abs(u);if(Math.max(s,v)-m<v){u=-(Math.max(s,v)-v)}m>0?this._toggleControls("prev",true):this._toggleControls("prev",false);Math.max(s,v)-v>m?this._toggleControls("next",true):this._toggleControls("next",false)}this.translation=u;if(t===u){this._onEndTransition();return false}if(this.support){if(this.options.orientation==="horizontal"){this.$el.css("-webkit-transform","translateX("+-u+"px)");this.$el.css("-o-transform","translateX("+-u+"px)");this.$el.css("-ms-transform","translateX("+-u+"px)");this.$el.css("-moz-transform","translateX("+-u+"px)");this.$el.css("transform","translateX("+-u+"px)")}else{this.$el.css("-webkit-transform","translateY("+u+"px)");this.$el.css("-o-transform","translateY("+u+"px)");this.$el.css("-ms-transform","translateY("+u+"px)");this.$el.css("-moz-transform","translateY("+u+"px)");this.$el.css("transform","translateY("+u+"px)")}}else{a.fn.applyStyle=this.hasTransition?a.fn.animate:a.fn.css;var r=this.options.orientation==="horizontal"?{left:u}:{top:u};this.$el.stop().applyStyle(r,a.extend(true,[],{duration:this.options.speed,complete:function(){q._onEndTransition()}}))}if(!this.hasTransition){this._onEndTransition()}},_onEndTransition:function(){this.isSliding=false;this.options.onAfterSlide()},_slideTo:function(o){var o=o||this.current,q=Math.abs(this.translation)||0,n=this.options.orientation==="horizontal"?this.$items.outerWidth(true):this.$items.outerHeight(true),p=q+this.$carousel.width(),m=Math.abs(o*n);if(m+n>p||m<q){this._slideToItem(o)}},_slideToItem:function(n){var m=this.options.orientation==="horizontal"?n*this.$items.outerWidth(true):n*this.$items.outerHeight(true);this._slide("",-m)},add:function(n){var p=this,o=this.current,m=this.$items.eq(this.current);this.$items=this.$el.children("li");this.itemsCount=this.$items.length;this.current=m.index();this._setItemsSize();this._configure();this._removeTransition();o<this.current?this._slideToItem(this.current):this._slide("next",this.translation);setTimeout(function(){p._addTransition()},25);if(n){n.call()}},setCurrent:function(n,m){this.current=n;this._slideTo();if(m){m.call()}},next:function(){this._slide("next")},previous:function(){this._slide("prev")},slideStart:function(){this._slideTo(0)},slideEnd:function(){this._slideTo(this.itemsCount-1)},destroy:function(m){this._destroy(m)}};var h=function(m){if(l.console){l.console.error(m)}};a.fn.elastislide=function(n){if(typeof n==="string"){var m=Array.prototype.slice.call(arguments,1);this.each(function(){var o=a.data(this,"elastislide");if(!o){h("cannot call methods on elastislide prior to initialization; attempted to call method '"+n+"'");return}if(!a.isFunction(o[n])||n.charAt(0)==="_"){h("no such method '"+n+"' for elastislide self");return}o[n].apply(o,m)})}else{this.each(function(){var o=a.data(this,"elastislide");if(o){o._init()}else{o=a.data(this,"elastislide",new a.Elastislide(n,this))}})}return self}})(jQuery,window);