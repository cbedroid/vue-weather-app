(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-weather-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"031a":function(t,e,a){"use strict";var n=a("3fa0"),r=a.n(n);r.a},"0782":function(t,e,a){"use strict";var n=a("22f9"),r=a.n(n);r.a},"11be":function(t,e,a){},"22f9":function(t,e,a){},"3fa0":function(t,e,a){},"43c3":function(t,e,a){"use strict";var n=a("5f0a"),r=a.n(n);r.a},4837:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",class:t.bg_image?t.bg_image:"",attrs:{id:"main_app"}},[a("div",{staticClass:"overlay py-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-10"},[a("main",{staticClass:"pt-3 border-success"},[a("h1",{staticClass:"text-light font-weight-bold"},[t._v(" Weather App ")]),a("WeatherApp",{attrs:{weather:t.weather}})],1)])])])])])},i=[],s=(a("4160"),a("159b"),a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container my-2"},[a("div",{staticClass:"weather-app p-2"},[a("Search",{on:{click:function(t){t.preventDefault()},setWeather:t.getWeather}}),a("div",{staticClass:"border-top w-100 d-block my-3"}),a("div",{staticClass:"weather-details mt-2  px-2 row "},[a("div",{staticClass:"col-sm-5 col-md-6 col-lg-6  "},[a("Location",{attrs:{location:this.weather.location||{},error:t.error}})],1),a("div",{staticClass:"col-sm-7 col-md-6 col-lg-6   "},[a("Forecast",{attrs:{temperature:this.weather.temperature,condition:this.weather.condition}})],1)]),a("WeeklyWeather",{attrs:{dailyforecast:this.weather.daily}})],1)])}),o=[],c=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-container mx-auto w-100 text-left pl-2"},[a("div",{staticClass:"place text-left",style:{backgroundImage:"url('"+t.state_image+"')"}},[a("div",{staticClass:"city d-flex align-content-baseline text-weight-600",class:t.error?"error":""},[a("span",{staticClass:"label",class:t.error?"hidden":""},[t._v(" "+t._s(t.error?"":"City: ")+" ")]),a("div",{staticClass:"content ml-1"},[t._v(" "+t._s(t.location.city?t.capitalized(t.location.city):"Your City")+" ")])]),a("div",{staticClass:"state d-flex align-content-baseline",class:t.error?"error":""},[a("span",{staticClass:"label",class:t.error?"hidden":""},[t._v(t._s(t.error?"":"State: ")+" ")]),a("div",{staticClass:"content ml-1"},[t._v(" "+t._s(t.location.state?t.location.state.toUpperCase().trim():"Your State")+" ")])])])])}),u=[],l=(a("a15b"),a("d81d"),a("fb6a"),a("1276"),{name:"Location",props:{location:{type:[Object,String],required:!0},error:{type:Boolean,reuired:!1}},computed:{state_image:function(){var t=this.location.image||"";return t}},methods:{capitalized:function(t){return"string"!==typeof t?t:t.split(" ").map((function(t){return t[0].toUpperCase()+t.slice(1)})).join(" ")}}}),h=l,d=(a("5e44"),a("2877")),p=Object(d["a"])(h,c,u,!1,null,"2ced22f9",null),m=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-container my-3 mx-4 p-2 "},[a("b-input-group",{staticClass:"mx-auto bg-light text-center w-100",attrs:{size:"small",id:"search-wrapper"}},[a("b-input-group-prepend",{staticClass:"icon-wrapper text-dark",attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search",id:"search_icon","aria-hidden":"true"}})],1),a("b-form-input",{staticClass:"text-center text-dark",attrs:{type:"text",name:"search_input",id:"search_input",placeholder:"City,State"},on:{keypress:t.setSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)},v=[],g={name:"Search",data:function(){return{search:""}},methods:{setSearch:function(t){if("Enter"==t.key&&0!==this.search.length){var e={location:this.search};return this.$emit("setWeather",this.search),this.search="",e}}}},y=g,w=(a("0782"),Object(d["a"])(y,f,v,!1,null,null,null)),b=w.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forecast-main w-100 mx-auto"},[a("div",{staticClass:"date-container"},[a("h3",{staticClass:"date"},[t._v(" "+t._s(t.current_date)+" ")])]),a("div",{staticClass:"forecast-container text-left  "},[a("div",{staticClass:"forecast-condition  "},[a("div",{staticClass:"forecast-icon-wrapper"},[a("b-img",{attrs:{"blank-color":"#777",src:t.forecast_icon,alt:"forecast icon"}})],1),a("div",{staticClass:"temp mb-2"},[a("span",{staticClass:"label"},[a("b-icon",{staticClass:"mr-4",attrs:{icon:"thermometer-half",scale:"1.8",variant:t.current_temperature<75?"primary":"danger"}})],1),a("span",{staticClass:"content"},[t._v(t._s(t.current_temperature||"unknown")+" "+t._s(t.current_temperature?"°":"")+" ")])]),a("div",{staticClass:"condition mb-2"},[a("span",{staticClass:"label "}),a("b-icon",{staticClass:"mr-3",attrs:{icon:"cloud-fill",scale:"1.8","shift-h":"-7"}}),a("span",{staticClass:"content"},[t._v(t._s(t.current_condition||"unknown"))])],1)])])])},k=[],C=(a("99af"),{name:"Forecast",props:{temperature:{type:Object,required:!0},condition:{type:Object,required:!0}},data:function(){return{dtemp:"80"}},computed:{current_date:function(){var t=(new Date).getTime();return this.convertDate(t)},current_temperature:function(){var t=this.temperature?Math.round(this.temperature.temp):"unknown";return t},current_condition:function(){var t=this.condition?this.condition.main:"unknown";return t},current_description:function(){var t=this.condition?this.condition.decsciption:"unknown";return t},forecast_icon:function(){var t="";try{t=this.condition["icon"]||"01d"}catch(e){t="01d"}return"http://openweathermap.org/img/wn/".concat(t,"@2x.png")}},methods:{convertDate:function(t){if(void 0!==t){var e=new Date(t),a=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=n[e.getDay()],i=e.getDate(),s=a[e.getMonth()],o=e.getFullYear();return"".concat(r,", ").concat(s," ").concat(i,", ").concat(o)}}}}),x=C,j=(a("c12d"),Object(d["a"])(x,_,k,!1,null,null,null)),O=j.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-3 container ",attrs:{id:"weather-week_main"}},[a("ul",{staticClass:"weather-week-list p-0  row justify-content-center"},t._l(t.dailyforecast,(function(e){return a("li",{key:e.dt||0,staticClass:"list-item mx-1 col-12 col-sm-3 col-md-2 ",class:t.isDayTime?"day-theme":"night-theme",on:{mouseover:t.normalFalse,mouseleave:t.normalTrue}},[a("div",{staticClass:"item-wrapper  w-100"},[a("div",{staticClass:"daytime text-primary "},[a("p",{staticClass:" d-block px-4 w-100"},[t._v(" "+t._s(t.getDay(e.dt))+" ")])]),a("div",{staticClass:"content"},[a("b-img",{attrs:{"blank-color":"#777",src:t.forecast_icon(e.weather[0]["icon"]),alt:"forecast icon"}}),a("div",{staticClass:"temp"},[a("b-icon",{attrs:{icon:"thermometer",variant:t.get_temp(e["temp"])<75?"primary":"danger"}}),t._v(" "+t._s(t.get_temp(e["temp"]))+" ° ")],1),a("div",{staticClass:"condition"},[t._v(" "+t._s(e["weather"][0]["main"])+" ")])],1)])])})),0)])},S=[],D=(a("5319"),{name:"WeeklyWeather",components:{},props:{dailyforecast:{type:[Object,Array],required:!0}},data:function(){return{normal:!0}},computed:{isDayTime:function(){var t=6,e=18,a=(new Date).getTime();return t<a>e?this.normal:!this.normal}},methods:{normalFalse:function(){this.normal=!1},normalTrue:function(){this.normal=!0},get_temp:function(t){var e=this.isDayTime?"day":"night";return Math.round(t[e])},getDay:function(t){var e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=new Date(1e3*t).getDay();return e[a]||"N/A"},forecast_icon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"01",e=this.isDayTime?"d":"n";return t=t?t.replace(/[nd]/g,""):"","http://openweathermap.org/img/wn/".concat(t).concat(e,".png")}}}),R=D,T=(a("031a"),Object(d["a"])(R,W,S,!1,null,"3076a2a8",null)),A=T.exports,E={name:"WeatherApp",components:{Search:b,Location:m,Forecast:O,WeeklyWeather:A},props:{weather:{type:Object,required:!0}},data:function(){return{error:!1}},computed:{getTime:function(){return this.weather.time||{timenow:(new Date).getTime(),sunrise:null,sunset:null}}},methods:{getWeather:function(t){var e=this;this.error=!1;var a={location:t},n=this.weather.getWeather(a),r=this.weather;n.then((function(t){if(0==r.data||200!==t["cod"])return e.setResultFailed();e.search=e.weather.city}))},setResultFailed:function(){this.error=!0,this.weather["location"]={},this.weather.location["city"]="Error:",this.weather.location["state"]=this.weather.results.error.msg,this.weather.condition={},this.weather.temperature={}}}},F=E,M=(a("f712"),Object(d["a"])(F,s,o,!1,null,"c25f4a76",null)),z=M.exports,$=(a("4de4"),a("d3b7"),a("466d"),a("498a"),a("96cf"),a("1da1")),q=a("5530"),P=a("d4ec"),L=a("bee2"),J={al:"alabama",ak:"alaska",az:"arizona",ar:"arkansas",ca:"california",co:"colorado",ct:"connecticut",de:"delaware",fl:"florida",ga:"georgia",hi:"hawaii",id:"idaho",il:"illinois",in:"indiana",ia:"iowa",ks:"kansas",ky:"kentucky",la:"louisiana",me:"maine",md:"maryland",ma:"massachusetts",mi:"michigan",mn:"minnesota",ms:"mississippi",mo:"missouri",mt:"montana",ne:"nebraska",nv:"nevada",nh:"new hampshire",nj:"new jersey",nm:"new mexico",ny:"new york",nc:"north carolina",nd:"north dakota",oh:"ohio",ok:"oklahoma",or:"oregon",pa:"pennsylvania",ri:"rhode island",sc:"south carolina",sd:"south dakota",tn:"tennessee",tx:"texas",ut:"utah",vt:"vermont",va:"virginia",wa:"washington",wv:"west virginia",wi:"wisconsin",wy:"wyoming"};function N(t){var e=J[t.toLowerCase()];if(e)return e=e.split(" ").map((function(t){return t[0].toUpperCase()+t.slice(1)})).join("-"),"https://gisgeography.com/wp-content/uploads/2020/06/".concat(e,"-Outline.png")}String.prototype.format=function(){var t=0,e=arguments;return this.replace(/{}/g,(function(){return"undefined"!=typeof e[t]?e[t++]:""}))};var U=function(){function t(){Object(P["a"])(this,t),this.results={success:!0,data:{},error:{}},this.api_key="0a1a3249d7430e197854ac5857e90fd7",this._location="new york,NY",this.unit="imperial",this.city="",this.state="",this.condition={},this.temperature={},this.time,this.daily=[]}return Object(L["a"])(t,[{key:"observeResults",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a={success:t,data:{},error:{}};a["success"]=t,1==t?(this.results["error"]={},a["data"]=e):(this.results["data"]={},a["error"]=e),this.results=Object(q["a"])(Object(q["a"])({},this.results),a)}},{key:"resetResults",value:function(){this.results=Object(q["a"])(Object(q["a"])({},this.results),{success:!0,error:{},data:{}})}},{key:"validateSearch",value:function(){var t=this.location.match(/(\w*)*[\W]*/gi).filter((function(t){return t})),e=t.slice(0,-1).join("").replace(/\W/g," ").trim()+","+t.slice(-1)[0].trim(),a=t.slice(-1)[0].trim(),n=e.trim().split(",")[0];return a&&n?(a=a.toUpperCase(),a.length>2?(console.log("state Error",2),void this.observeResults(!1,{code:2,msg:"State can not be more than two characters"})):(console.log("\nCity: ".concat(n,"\tState: ").concat(a)),this.city=e.split(",")[0]||"N/A",this.state=e.split(",")[1]||"N/A",e)):(this.observeResults(!1,{code:1,msg:"A state must be enter along with a city"}),void console.log("city state Error",1))}},{key:"fetchWeather",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"setData",value:function(){var t=this.results.data;try{!0===this.results.success&&(this.location=t?{city:this.city,state:this.state,image:N(this.state)}:{},this.condition=t.weather[0]||{},this.temperature=t.main||{},this.time={timenow:t.dt,sunrise:t.sys.sunrise,sunset:t.sys.sunset})}catch(e){console.log("Error setData failed")}}},{key:"getWeather",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getCurrentWeather(e);case 2:return a=t.sent,a&&(n=a["coord"],this.weeklyWeather(n)),this.setData(),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getCurrentWeather",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.clear(),void 0===e&&"undefined"===e){t.next=14;break}if(this.resetResults(),this.location=e.location,this.validateSearch()){t.next=7;break}return console.log("invalid Search"),t.abrupt("return",this.results);case 7:return a="https://api.openweathermap.org/data/2.5/weather?q=".concat(this.location,",US&units=").concat(this.unit,"&appid=").concat(this.api_key),t.next=10,this.fetchWeather(a);case 10:n=t.sent,console.log("Weather Results",n);try{"404"==n["cod"]||n["code"]?this.observeResults(!1,{code:+n.cod,msg:n.message}):this.observeResults(!0,n)}catch(r){this.observeResults(!1,n)}return t.abrupt("return",n);case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"weeklyWeather",value:function(){var t=Object($["a"])(regeneratorRuntime.mark((function t(e){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.lat,"&lon=").concat(e.lon,"&units=").concat(this.unit,"&exclude=hourly,minutely&appid=").concat(this.api_key),t.next=3,this.fetchWeather(a);case 3:n=t.sent,console.log("Weekly forecast",n),r=n["daily"],this.daily=r?r.slice(1):r;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"location",get:function(){return this._location},set:function(t){this._location=t}}]),t}(),Y=U,I={name:"App",components:{WeatherApp:z},data:function(){return{weather:new Y,tester:""}},computed:{bg_image:function(){var t=this.weather["condition"],e="none";if(t){var a=t.id,n=this.bgImageList;n.forEach((function(t,r){var i=r>1?r-1:r,s=r<=n.length?r+1:r-1;try{n[i]["id"]<=a<=n[s]["id"]&&(e=n[r].image)}catch(o){}}))}return e},bgImageList:function(){return[{id:200,image:"thunder"},{id:300,image:"drizzle"},{id:500,image:"rain"},{id:600,image:"snow"},{id:700,image:"mist"},{id:710,image:"smoke"},{id:720,image:"haze"},{id:730,image:"dust"},{id:740,image:"fog"},{id:750,image:"sand"},{id:760,image:"dust"},{id:762,image:"ash"},{id:770,image:"squall"},{id:780,image:"tornado"},{id:800,image:"clear"},{id:801,image:"mist"}]}}},B=I,G=(a("43c3"),Object(d["a"])(B,r,i,!1,null,"2a7a15c6",null)),H=G.exports,K=(a("8a71"),a("5f5b")),Q=a("b1e0");n["default"].use(K["a"]),n["default"].use(Q["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(H)}}).$mount("#app")},"5e44":function(t,e,a){"use strict";var n=a("e3c9"),r=a.n(n);r.a},"5f0a":function(t,e,a){},"8a71":function(t,e,a){},c12d:function(t,e,a){"use strict";var n=a("4837"),r=a.n(n);r.a},e3c9:function(t,e,a){},f712:function(t,e,a){"use strict";var n=a("11be"),r=a.n(n);r.a}});
//# sourceMappingURL=app.4439ce89.js.map