(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"6/WI":function(t,a,r){"use strict";r("CGd9")},CGd9:function(t,a,r){var e=r("mgBE");"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(e,n);e.locals&&(t.exports=e.locals)},OIjt:function(t,a,r){"use strict";var e={components:{BAvatar:r("6KOa").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},n=(r("aXPh"),r("KHd+")),o=Object(n.a)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"toastification"},[r("div",{staticClass:"d-flex align-items-start"},[r("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[r("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),r("div",{staticClass:"d-flex flex-grow-1"},[r("div",[t.title?r("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?r("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),r("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(a){return t.$emit("close-toast")}}},[t.hideClose?t._e():r("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"4ea3ad0d",null);a.a=o.exports},OOfG:function(t,a,r){"use strict";var e={components:{BImg:r("SRip").a},data:function(){return{sideImg:"/images/logo/logo.png"}},computed:{imgUrl:function(){return this.sideImg}}},n=r("KHd+"),o=Object(n.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);a.a=o.exports},Pjvv:function(t,a,r){"use strict";r.d(a,"b",(function(){return e})),r.d(a,"a",(function(){return n}));var e={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}},n={data:function(){return{confirmPasswordFieldType:"password"}},methods:{toggleConfirmPasswordVisibility:function(){this.confirmPasswordFieldType="password"===this.confirmPasswordFieldType?"text":"password"}}}},U586:function(t,a,r){(a=r("JPst")(!1)).push([t.i,".toastification-close-icon[data-v-4ea3ad0d], .toastification-title[data-v-4ea3ad0d] {\n  line-height: 26px;\n}\n.toastification-title[data-v-4ea3ad0d] {\n  color: inherit;\n}",""]),t.exports=a},"V/34":function(t,a,r){var e=r("U586");"string"==typeof e&&(e=[[t.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(e,n);e.locals&&(t.exports=e.locals)},WkvD:function(t,a,r){"use strict";r.r(a);var e=r("rePB"),n=(r("oVuX"),r("e7F3")),o=r("Pjvv"),i=r("OOfG"),s=r("oVt+"),l=r("sove"),d=r("qlm0"),p=r("SRip"),u=r("Ed67"),A=r("GUe+"),c=r("giZP"),g=r("R5cT"),m=r("XhI9"),f=r("zMAm"),h=r("SWgu"),w=r("1uQM"),v=r("AeMN"),b=r("iFoa"),C=r("tvh2"),x=r("OIjt"),I={components:{VuexyLogo:i.a,BRow:s.a,BCol:l.a,BLink:d.a,BImg:p.a,BForm:u.a,BButton:A.a,BFormGroup:c.a,BFormInput:g.a,BInputGroup:m.a,BInputGroupAppend:f.a,BCardTitle:h.a,BCardText:w.a,BSpinner:v.a,ValidationProvider:n.b,ValidationObserver:n.a},mixins:[o.b,o.a],data:function(){var t;return t={loading:!1,disabled:!1,token:null,email:"",password:"",state_password:null,password_error:"",password_confirmation:"",state_password_confirmation:null,password_confirmation_error:"",sideImg:"/images/pages/bg_login.png",logoImg:"/images/logo/logo.png",required:b.b},Object(e.a)(t,"email",b.a),Object(e.a)(t,"email_state",null),Object(e.a)(t,"email_error",""),Object(e.a)(t,"app",C.a.state.appConfig.app),t},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},confirmPasswordToggleIcon:function(){return"password"===this.confirmPasswordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return this.sideImg}},created:function(){this.token=this.$route.params.token,this.token&&(this.disabled=!0,this.getEmail())},methods:{getEmail:function(){var t=this;this.$http.post("/auth/get-email",{token:this.token}).then((function(a){var r=a.data;t.email=r.email}))},validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(a){a&&(t.loading=!0,t.token?t.$http.post("/auth/reset-password",{email:t.email,password:t.password,password_confirmation:t.password_confirmation,token:t.token}).then((function(a){t.loading=!1;var r=a.data;t.email_state=null,t.email_error="",t.state_password=null,t.password_error="",t.state_password_confirmation=null,t.password_confirmation_error="",r.errors?(t.email_state=!r.errors.email&&null,t.email_error=r.errors.email?r.errors.email.join(", "):"",t.state_password=!r.errors.password&&null,t.password_error=r.errors.password?r.errors.password.join(", "):"",t.state_password_confirmation=!r.errors.password_confirmation&&null,t.password_confirmation_error=r.errors.password_confirmation?r.errors.password_confirmation.join(", "):""):t.$toast({component:x.a,props:{title:r.title,icon:"EditIcon",variant:r.status}})})):t.$http.post("/auth/forget-password",{email:t.email}).then((function(a){t.loading=!1;var r=a.data;t.email_state=null,t.email_error="",r.errors?(t.email_state=!r.errors.email&&null,t.email_error=r.errors.email?r.errors.email.join(", "):""):t.$toast({component:x.a,props:{title:"Kami telah mengirimkan tautan reset password melalui email Anda!",icon:"EditIcon",variant:"success"}})})))}))}}},B=(r("6/WI"),r("KHd+")),_=Object(B.a)(I,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"auth-wrapper auth-v2"},[r("b-row",{staticClass:"auth-inner m-0"},[r("b-link",{staticClass:"brand-logo"},[r("vuexy-logo"),t._v(" "),r("h2",{staticClass:"brand-text text-dark ml-1"},[t._v("\n        "+t._s(t.app.name)+"\n      ")])],1),t._v(" "),r("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[r("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[r("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Forgot password V2"}})],1)]),t._v(" "),r("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[r("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[r("b-card-title",{staticClass:"mb-1"},[t._v("\n          Lupa Password? 🔒\n        ")]),t._v(" "),t.token?r("b-card-text",{staticClass:"mb-2"},[t._v("\n          Silahkan masukkan password baru Anda!\n        ")]):r("b-card-text",{staticClass:"mb-2"},[t._v("\n          Masukkan email Anda dan kami akan mengirimkan instruksi untuk mengatur ulang password Anda\n        ")]),t._v(" "),r("validation-observer",{ref:"simpleRules"},[r("b-form",{staticClass:"auth-forgot-password-form mt-2",on:{submit:function(a){return a.preventDefault(),t.validationForm(a)}}},[r("b-form-group",{attrs:{label:"Email","label-for":"email"}},[r("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){a.errors;return[r("b-form-input",{attrs:{id:"email",state:t.email_state,name:"email",placeholder:"Email Valid",disabled:t.disabled},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),t._v(" "),t.email_error?r("small",{staticClass:"text-danger"},[t._v(t._s(t.email_error))]):t._e()]}}])})],1),t._v(" "),t.token?[r("b-form-group",{attrs:{label:"Password","label-for":"password"}},[r("validation-provider",{attrs:{name:"password",vid:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){a.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:t.state_password?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"password",state:t.state_password,type:t.passwordFieldType,name:"password",placeholder:"Password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),t._v(" "),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),t._v(" "),t.password_error?r("small",{staticClass:"text-danger"},[t._v(t._s(t.password_error))]):t._e()]}}],null,!1,4198316198)})],1),t._v(" "),r("b-form-group",{attrs:{label:"Konfirmasi Password","label-for":"password_confirmation"}},[r("validation-provider",{attrs:{name:"password_confirmation",vid:"password_confirmation",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){a.errors;return[r("b-input-group",{staticClass:"input-group-merge",class:t.state_password_confirmation?"is-invalid":null},[r("b-form-input",{staticClass:"form-control-merge",attrs:{id:"password_confirmation",state:t.state_password_confirmation,type:t.confirmPasswordFieldType,name:"password_confirmation",placeholder:"Konfirmasi Password"},model:{value:t.password_confirmation,callback:function(a){t.password_confirmation=a},expression:"password_confirmation"}}),t._v(" "),r("b-input-group-append",{attrs:{"is-text":""}},[r("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.confirmPasswordToggleIcon},on:{click:t.toggleConfirmPasswordVisibility}})],1)],1),t._v(" "),t.password_confirmation_error?r("small",{staticClass:"text-danger"},[t._v(t._s(t.password_confirmation_error))]):t._e()]}}],null,!1,3137944325)})],1)]:t._e(),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary",block:"",disabled:t.loading}},[r("b-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{small:"",type:"grow"}}),t._v(" "),t.token?r("span",[t._v("Simpan")]):r("span",[t._v("Kirim Link Reset")])],1)],2)],1),t._v(" "),r("p",{staticClass:"text-center mt-2"},[r("b-link",{attrs:{to:{name:"auth-login"}}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),t._v(" Kembali ke laman login\n          ")],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=_.exports},aXPh:function(t,a,r){"use strict";r("V/34")},iFoa:function(t,a,r){"use strict";r.d(a,"b",(function(){return s})),r.d(a,"a",(function(){return l}));var e=r("e7F3"),n=r("TJPC"),o=r("1NcB"),i=r("JZPS"),s=(r("rB9j"),r("ALS0"),Object(e.c)("required",n.l)),l=Object(e.c)("email",n.g);Object(e.c)("min",n.j),Object(e.c)("confirmed",n.e),Object(e.c)("regex",n.k),Object(e.c)("between",n.d),Object(e.c)("alpha",n.a),Object(e.c)("integer",n.h),Object(e.c)("digits",n.f),Object(e.c)("alpha-dash",n.b),Object(e.c)("alpha-num",n.c),Object(e.c)("length",n.i),Object(e.c)("positive",{validate:function(t){return t>=0},message:"Please enter positive number!"}),Object(e.c)("credit-card",{validate:function(t){return/^(?:3[47][0-9]{13})$/.test(t)},message:"It is not valid credit card!"}),Object(e.c)("password",{validate:function(t){return/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(t)},message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"}),Object(e.c)("url",{validate:function(t){if(null==t||0===t.length)return!0;return/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(t)},message:"URL is invalid"});Object(e.d)({en:{messages:i.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:o.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},mgBE:function(t,a,r){(a=r("JPst")(!1)).push([t.i,'.auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: " ";\n  position: absolute;\n  top: -54px;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:before {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before {\n  left: -46px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before {\n  right: -46px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: " ";\n  position: absolute;\n  bottom: -55px;\n  z-index: -1;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:after {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after {\n  right: -75px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after {\n  left: -75px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  z-index: 1;\n}\n[dir] .auth-wrapper.auth-v2 .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n  right: 2rem;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n}\n[dir] .auth-wrapper .brand-logo {\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n[dir] .auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-left: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n[dir] .auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n[dir] .dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n[dir] .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n[dir] .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n[dir] .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n    left: 0;\n    padding-left: 1.5rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n    right: 0;\n    padding-right: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}',""]),t.exports=a},oVuX:function(t,a,r){"use strict";var e=r("I+eb"),n=r("4zBA"),o=r("RK3t"),i=r("/GqU"),s=r("pkCn"),l=n([].join),d=o!=Object,p=s("join",",");e({target:"Array",proto:!0,forced:d||!p},{join:function(t){return l(i(this),void 0===t?",":t)}})}}]);