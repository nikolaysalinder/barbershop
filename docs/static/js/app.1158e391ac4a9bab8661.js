webpackJsonp([0],{"3QOw":function(t,e){},"9Twp":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{app:this.isIndex},attrs:{id:"app"}},[e("app-header",{attrs:{isIndex:this.isIndex}}),this._v(" "),e("main",{staticClass:"container clearfix"},[e("router-view")],1),this._v(" "),e("app-footer")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App",computed:{isIndex:function(){return"Index"===this.$route.name}}},i,!1,function(t){n("uS7J")},null,null).exports,r=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("app-index-logo"),t._v(" "),n("app-features"),t._v(" "),n("app-index-content",[n("div",{staticClass:"index-content-left",attrs:{slot:"index-content-left"},slot:"index-content-left"},[n("h2",{staticClass:"index-content-title"},[t._v("Новости")]),t._v(" "),n("ul",{staticClass:"news-preview"},[n("li",[n("p",[t._v("\n            Нам наконец завезли ягермайстер!\n            Теперь Вы можете пропустить стаканчик во время стрижки\n          ")]),t._v(" "),n("time",{attrs:{datetime:"2016-01-11"}},[t._v("11 января")])]),t._v(" "),n("li",[n("p",[t._v("\n            В нашей команде пополнение,\n            Борис «Бритва» Стригунец, обладатель множества\n            титулов и наград пополнил наши стройные ряды\n          ")]),t._v(" "),n("time",{attrs:{datetime:"2016-01-18"}},[t._v("18 января")])])]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"#"}},[t._v("Все новости")])]),t._v(" "),n("div",{staticClass:"index-content-right",attrs:{slot:"index-content-right"},slot:"index-content-right"},[n("h2",{staticClass:"index-content-title"},[t._v("Фотогалерея")]),t._v(" "),n("app-gallery")],1)]),t._v(" "),n("app-index-content",[n("div",{staticClass:"index-content-left",attrs:{slot:"index-content-left"},slot:"index-content-left"},[n("div",{attrs:{id:"index-contacts"}},[n("h2",{staticClass:"index-content-title"},[t._v("Контактная информация")]),t._v(" "),n("p",{staticClass:"index-content-contacts"},[t._v("\n          Барбершоп «Бородинский»"),n("br"),t._v("\n          адрес: г. Санкт-Петербург, Б. Конюшенная,д. 19/8"),n("br"),t._v("\n          телефон: +7 (495) 666-02-66\n        ")]),t._v(" "),n("p",{staticClass:"index-content-open"},[t._v("\n          Время работы:"),n("br"),t._v("\n          Пн—Пт: с 10:00 до 22:00"),n("br"),t._v("\n          Сб—Вс: с 10:00 до 19:00\n        ")]),t._v(" "),n("a",{staticClass:"btn btn-map",attrs:{href:"#"}},[t._v("Как проехать")]),t._v(" "),n("a",{staticClass:"btn btn-feedback",attrs:{href:"#"}},[t._v("Обратная связь")])])]),t._v(" "),n("div",{staticClass:"index-content-right",attrs:{slot:"index-content-right"},slot:"index-content-right"},[n("app-index-signing")],1)])],1)},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{}}},o,!1,function(t){n("XcGi")},null,null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"price"}})},staticRenderFns:[]};var p=n("VU/8")({data:function(){return{}}},l,!1,function(t){n("9Twp")},null,null).exports;a.a.use(r.a);var d=new r.a({routes:[{path:"/",name:"Index",component:c},{path:"/price",name:"Price",component:p}]}),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"main-header"},[a("div",{staticClass:"container clearfix"},[a("nav",{staticClass:"main-navigation"},[a("transition-group",{staticClass:"top-navigation",attrs:{tag:"ul",name:"slide-fade"}},t._l(t.links,function(e){return a("router-link",{key:e.path,class:[e.hide&&t.isIndex?"hide":""],attrs:{to:e.path,tag:"li",exact:""}},[a("a",{class:[e.hide&&t.isIndex?"hide":""]},[t._v("\n            "+t._s(e.text)+"\n            "),"/"!=e.path||t.isIndex?t._e():a("img",{attrs:{src:n("S/kC"),alt:"Барбершоп Бородински"}})])])}))],1),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-block"},[e("a",{attrs:{href:"#"}},[this._v("Вход")])])}]};var u=n("VU/8")({props:["isIndex"],data:function(){return{links:[{path:"/",text:"",hide:!0},{path:"/informations",text:"Информация",hide:!1},{path:"/news",text:"Новости",hide:!1},{path:"/price",text:"Прайс-лист",hide:!1},{path:"/shop",text:"Магазин",hide:!1},{path:"/contacts",text:"Контакты",hide:!1}]}},methods:{}},v,!1,function(t){n("gP/T")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-logo clearfix"},[e("img",{attrs:{src:n("cGpH"),alt:"Барбершоп «Бородинский»"}})])}]};var f=n("VU/8")({data:function(){return{}}},m,!1,function(t){n("3QOw")},null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"features clearfix"},[n("div",{staticClass:"features-item"},[n("b",[t._v("Быстро")]),t._v(" "),n("p",[t._v("\n          Мы делаем свою работу быстро! Два часа"),n("br"),t._v("\n          пролетят незаметно и Вы — счастливый"),n("br"),t._v("\n          обладатель стильной стрижки-минутки!\n        ")])]),t._v(" "),n("div",{staticClass:"features-item"},[n("b",[t._v("Круто")]),t._v(" "),n("p",[t._v("\n          Забудьте, как Вы стриглись раньше."),n("br"),t._v("\n          Мы сделаем из Вас звезду футбола или кино!"),n("br"),t._v("\n          Во всяком случае внешне.\n        ")])]),t._v(" "),n("div",{staticClass:"features-item"},[n("b",[t._v("Дорого")]),t._v(" "),n("p",[t._v("\n          Наши мастера — профессионалы своего дела  и"),n("br"),t._v("\n          не могут стоить дешево. К тому же, разве цена"),n("br"),t._v("\n          не дает определеный статус?\n        ")])])])}]};var _=n("VU/8")({data:function(){return{}}},h,!1,function(t){n("l8pi")},null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"index-content clearfix"},[this._t("index-content-left"),this._v(" "),this._t("index-content-right")],2)},staticRenderFns:[]};var g=n("VU/8")({data:function(){return{}}},x,!1,function(t){n("Ngvy")},"data-v-c133b458",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"main-footer"},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"footer-contacts"},[n("p",{staticClass:"footer-adress"},[t._v("\n        Барбершоп «Бородинский»"),n("br"),t._v("\n        адрес: г. Санкт-Петербург,ул. Б.Конюшенная, д. 19/8"),n("br"),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("Как нас найти?")]),n("br"),t._v("\n        телефон: +7 (495) 666-02-66\n      ")])]),t._v(" "),n("div",{staticClass:"footer-socials"},[n("p",[t._v("Давайте дружить!")]),t._v(" "),n("a",{staticClass:"social-btn social-vk",attrs:{href:"https://vk.com/nikolay.salinder"}},[t._v("Вконтакте")]),t._v(" "),n("a",{staticClass:"social-btn social-fb",attrs:{href:"https://www.facebook.com/nikolay.salinder/"}},[t._v("Facebook")]),t._v(" "),n("a",{staticClass:"social-btn social-in",attrs:{href:"https://www.instagram.com/nikolaysalinder/"}},[t._v("Instagram")])]),t._v(" "),n("div",{staticClass:"footer-developer"},[n("p",[t._v("Разработано:")]),t._v(" "),n("a",{staticClass:"developer",attrs:{href:"http://www.nikolaysalinder.ru"}},[t._v("NikolaySalinder.ru")])])])])}]};var C=n("VU/8")({data:function(){return{}}},b,!1,function(t){n("rDzH")},null,null).exports,A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"gallery"},[n("figure",[n("transition",{attrs:{name:"fade"}},[n("img",{attrs:{src:t.imgSource,alt:"Фото галерея",height:"164",width:"286"}})])],1),t._v(" "),n("button",{staticClass:"btn btn-gallery-prev",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.prevImage(e)}}},[t._v("Назад")]),t._v(" "),n("button",{staticClass:"btn btn-gallery-next",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.nextImage(e)}}},[t._v("Вперед")])])])},staticRenderFns:[]};var y=n("VU/8")({data:function(){return{index:0,images:["./static/img/gallery-1.jpg","./static/img/gallery-2.jpg","./static/img/gallery-3.jpg","./static/img/gallery-4.jpg"]}},computed:{imgSource:function(){return this.images[this.index]}},methods:{nextImage:function(){this.index+=1,this.index>3&&(this.index=0)},prevImage:function(){this.index-=1,this.index<0&&(this.index=3)}}},A,!1,function(t){n("eMeW")},null,null).exports,R={data:function(){return{isSend:!1,appointment:{date:"",time:"",name:"",phone:""}}},methods:{sendForm:function(){var t=this;this.isSend=!0,setTimeout(function(){t.isSend=!1,t.appointment.date="",t.appointment.time="",t.appointment.name="",t.appointment.phone=""},6e3)}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isSend?t._e():n("div",{key:"notSend",staticClass:"index-signing"},[n("h2",{staticClass:"index-content-title"},[t._v("Записаться")]),t._v(" "),n("p",{staticClass:"index-signing-text"},[t._v("\n        Укажите желаемую дату и время и мы свяжемся\n        с вами для подтверждения брони\n      ")]),t._v(" "),n("form",{staticClass:"appointment-form",attrs:{action:"",method:"post"}},[n("label",{attrs:{for:"form-date"}},[t._v("Дата")]),t._v(" "),n("label",{attrs:{for:"form-time"}},[t._v("Время")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointment.date,expression:"appointment.date"}],attrs:{id:"form-date",name:"date",type:"text",placeholder:"11.11.11",required:""},domProps:{value:t.appointment.date},on:{input:function(e){e.target.composing||t.$set(t.appointment,"date",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointment.time,expression:"appointment.time"}],attrs:{id:"form-time",name:"time",type:"text",placeholder:"11:12",required:""},domProps:{value:t.appointment.time},on:{input:function(e){e.target.composing||t.$set(t.appointment,"time",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:"form-name"}},[t._v("Ваше имя")]),t._v(" "),n("label",{attrs:{for:"form-phone"}},[t._v("Телефон")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointment.name,expression:"appointment.name"}],attrs:{id:"form-name",name:"name",type:"text",placeholder:"Борода",required:""},domProps:{value:t.appointment.name},on:{input:function(e){e.target.composing||t.$set(t.appointment,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.appointment.phone,expression:"appointment.phone"}],attrs:{id:"form-phone",name:"phone",type:"text",placeholder:"8 911 111 11 11",required:""},domProps:{value:t.appointment.phone},on:{input:function(e){e.target.composing||t.$set(t.appointment,"phone",e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-sign",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.sendForm(e)}}},[t._v("Отправить")])])]),t._v(" "),t.isSend?n("div",{key:"send",staticClass:"index-signing-send"},[n("h2",[t._v("Здравствуйте, "+t._s(t.appointment.name))]),t._v(" "),n("p",[t._v("Вы предварительно записаны "+t._s(t.appointment.date)),n("br"),t._v("\n        в "+t._s(t.appointment.time)+"!"),n("br"),t._v("\n        Ваш номер "+t._s(t.appointment.phone)),n("br"),t._v("\n        Наш менеджер свяжется с Вами в ближайшее время."),n("br"),n("br"),t._v("\n        Бородатого дня!\n      ")])]):t._e()])],1)},staticRenderFns:[]};var S=n("VU/8")(R,E,!1,function(t){n("YZkG")},null,null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-login-overlay"},[e("div",{staticClass:"modal-login"},[e("button",{staticClass:"modal-content-close",attrs:{type:"button",title:"Закрыть"}},[this._v("Закрыть")])])])])},staticRenderFns:[]};var k=n("VU/8")({data:function(){return{}}},F,!1,function(t){n("zulk")},null,null).exports;a.a.component("app-header",u),a.a.component("app-index-logo",f),a.a.component("app-features",_),a.a.component("app-index-content",g),a.a.component("app-footer",C),a.a.component("app-gallery",y),a.a.component("app-index-signing",S),a.a.component("app-index",c),a.a.component("app-price",p),a.a.component("app-modal-login",k),a.a.config.productionTip=!1,new a.a({el:"#app",router:d,components:{App:s},template:"<App/>"})},Ngvy:function(t,e){},"S/kC":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAAYCAMAAADDPFMrAAAAAXNSR0IB2cksfwAAAuJQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////kevE9AAAAPZ0Uk5TACaKt5o1c/z/SSmAIxcqVXwQosXC0wSc3wgJ4qVi4EURMv5U8ay6H+1OsEHuMAHEwB72cVGy+SSLWafdOpOXJ30gjBv1yJuQcA+8GrU9CuMveW4GMYSegRhGUDdEg3Iz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"},XcGi:function(t,e){},YZkG:function(t,e){},cGpH:function(t,e,n){t.exports=n.p+"static/img/index-logo.f7390fb.png"},eMeW:function(t,e){},"gP/T":function(t,e){},l8pi:function(t,e){},rDzH:function(t,e){},uS7J:function(t,e){},zulk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1158e391ac4a9bab8661.js.map