(function(t){function e(e){for(var r,i,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.bg_class,attrs:{id:"app"}},[a("main",[a("h1",{staticClass:"title text-center"},[t._v("Weather App")]),a("div",{staticClass:"search-tray"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"search_input",type:"text",placeholder:"City, State"},domProps:{value:t.search},on:{keypress:t.getWeather,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),"undefined"!==typeof t.weather.main?a("div",{staticClass:"weather-container"},[a("div",{staticClass:"location-tray"},[a("div",{attrs:{id:"location"}},[t._v(" "+t._s(t.weather.name)+", "+t._s(this.state)+" "+t._s(t.weather.sys.country)+" ")]),a("div",{attrs:{id:"date"}},[t._v(t._s(t.createDate()))])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-9"},[a("div",{staticClass:"temperature-tray py-3"},[a("div",{staticClass:"temp"},[a("span",[t._v(t._s(Math.round(t.weather.main.temp)))]),t._v(" °F ")]),a("div",{staticClass:"forecast"},[t._v(t._s(t.weather.weather[0].main))])])])])]):a("div",{staticClass:"weather-container"},[t._m(0),t._m(1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"location-tray"},[a("div",{attrs:{id:"location"}},[t._v("Your City, Your State")]),a("div",{attrs:{id:"date"}},[t._v("Sunday Nov 9, 2020")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-6 offset-col-3"},[a("div",{staticClass:"temperature-tray py-3"},[a("div",{staticClass:"temp"},[t._v("70 °")]),a("div",{staticClass:"forecast"},[t._v("Cloudy")])])])])}],i=(a("99af"),a("4de4"),a("caad6"),a("a15b"),a("fb6a"),a("4fad"),a("d3b7"),a("ac1f"),a("2532"),a("466d"),a("5319"),a("841c"),a("498a"),a("3835")),c={name:"App",data:function(){return{bg_class:"cloudy",title:"Weather App",search:"",location:"",weather:{},state:"",temp:"",api_key:"0a1a3249d7430e197854ac5857e90fd7",search_key:"GRDZEYnvxLBdzMBlPPO7HYX2znnfAxfA"}},methods:{setBackgroundImage:function(){var t,e={cloudy:"cloudy",sunny:"sunny",rain:"raining",thunder:"thundering",snow:"snowing"};if(void 0!==this.weather||"undefined"!==this.weather)for(var a=0,r=Object.entries(e);a<r.length;a++){var n=Object(i["a"])(r[a],2),s=n[0],c=n[1];c.includes(this.weather.weather[0].main.toLowerCase())&&(t=s)}console.log({bg_class:t}),this.bg_class=t||"cloudy"},resetSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"City, State",e=document.getElementById("search_input");e.setAttribute("placeholder",t),e.value="",this.search=""},validate_city_state:function(){var t=this.search.match(/(\w*)*[\W]*/gi).filter((function(t){return t})),e=t.slice(0,-1).join("").replace(/\W/g," ").trim()+","+t.slice(-1)[0].trim(),a=t.slice(-1)[0].trim();return a?(this.state=a.toUpperCase(),console.log("Cleaned city and state",e)):this.resetSearch("A state must be enter along with a city"),a.length>2&&this.resetSearch("State code must be only two letter. EX: CA"),e},createDate:function(){var t=new Date,e=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=a[t.getDay()],n=t.getDate(),s=e[t.getMonth()],i=t.getFullYear();return"".concat(r," ").concat(s," ").concat(n," ").concat(i)},getWeather:function(t){var e=this;if("Enter"==t.key){var a=this.validate_city_state(),r="imperial",n="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",US&units=").concat(r,"&appid=").concat(this.api_key);console.log({weather_url:n}),fetch(n).then((function(t){return t.json()})).then((function(t){console.log({data:t}),e.weather=t,console.log("condition",e.weather.weather[0].main),e.setBackgroundImage(),e.resetSearch()})).catch((function(t){e.resetSearch("Opps, that city was not found"),console.log("Error",t)}))}}}},o=c,l=(a("034f"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,null,null),d=u.exports;a("4989"),a("8a71");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,a){},"8a71":function(t,e,a){}});
//# sourceMappingURL=app.120425a7.js.map