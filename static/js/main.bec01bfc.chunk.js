(this.webpackJsonpcoviddashboard=this.webpackJsonpcoviddashboard||[]).push([[0],{56:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(20),r=c.n(i),d=(c(56),c(24),c(0)),l=function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row mt-5 ",children:[Object(d.jsx)("div",{className:"col-md-6 mt-3",children:Object(d.jsx)("div",{class:"card  text-center",style:{backgroundColor:"rgb(194, 160, 160)",boxShadow:"rgb(52, 224, 30) 0 .125rem 1rem",borderRadius:"1rem",borderColor:"rgb(52, 224, 30)"},children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",style:{color:"rgb(52, 224, 30)"},children:"Card title"}),Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"}),Object(d.jsx)("p",{class:"card-text",children:"Some quick example text to build on."})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-3",children:Object(d.jsx)("div",{class:"card text-center",style:{borderColor:"rgb(52, 224, 30)"},children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"}),Object(d.jsx)("p",{class:"card-text",children:"Some quick example text to build on."})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-3",children:Object(d.jsx)("div",{class:"card text-center",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"}),Object(d.jsx)("p",{class:"card-text",children:"Some quick example text to build on."})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-3",children:Object(d.jsx)("div",{class:"card text-center",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h5",{class:"card-title",children:"Card title"}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"}),Object(d.jsx)("p",{class:"card-text",children:"Some quick example text to build on."})]})})})]})})},n=c(93),o=c(91),j=c(92),b=c(23),h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(n.a,{bg:"primary",fixed:"top",variant:"dark",expand:"lg",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(n.a.Brand,{href:"#home",style:{fontFamily:"Oswald",fontWeight:500,color:"rgb(52, 224, 30)"},children:"COVID 19"}),Object(d.jsx)(n.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(n.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(j.a,{className:"me-auto",children:[Object(d.jsx)(b.b,{className:"nav-link",style:{fontFamily:"Oswald",fontWeight:500},to:"/india",children:"Home"}),Object(d.jsx)(b.b,{className:"nav-link",to:"/world",children:"World"}),Object(d.jsx)(b.b,{className:"nav-link",to:"/vaccine",children:"Vaccine"})]})})]})})})},x=c(15),m=c(16),O=c(19),u=c(18),v=c(17),f=c.n(v),p=function(e){Object(O.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(x.a)(this,c),(e=t.call(this)).state={data:[]},e}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://disease.sh/v3/covid-19/countries").then((function(t){console.log(t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"  mb-5 text-center",children:"Covid cases Worldwide "}),Object(d.jsx)("h3",{className:"  mt-5 text-center",children:"Covid cases Worldwide "}),Object(d.jsx)("div",{className:"container-fluid mt-5",children:Object(d.jsx)("div",{className:"table-responsive ",children:Object(d.jsxs)("table",{className:"table table-hover table-bordered ",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"text-center",children:[Object(d.jsx)("th",{children:"Country"}),Object(d.jsx)("th",{children:"Total cases"}),Object(d.jsx)("th",{children:"Active"}),Object(d.jsx)("th",{children:"Recovered"}),Object(d.jsx)("th",{children:"Death"})]})}),Object(d.jsx)("tbody",{children:this.state.data.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.country}),Object(d.jsx)("td",{className:"text-end",children:e.cases}),Object(d.jsx)("td",{className:"text-end",children:e.cases}),Object(d.jsx)("td",{className:"text-end",children:e.cases}),Object(d.jsx)("td",{className:"text-end",children:e.cases})]})}))})]})})})]})}}]),c}(s.Component),y=c(3),g=(c(85),c(86),function(e){Object(O.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(x.a)(this,c),(s=t.call(this,e)).state={StateData:[]},s}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://www.mygov.in/sites/default/files/covid/covid_state_counts_ver1.json",{mode:"cors"}).then((function(t){console.log(t.data),e.setState({StateData:t.data})}))}},{key:"render",value:function(){var e=this.state.StateData.as_on;return console.log(e),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"live-indicator-wrapper",children:[Object(d.jsx)("div",{className:"pulse",children:"    "}),Object(d.jsxs)("span",{children:["Last Updated:",e," "]})]})})}}]),c}(s.Component)),N=function(e){Object(O.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(x.a)(this,c),(e=t.call(this)).state={StateData:[]},e}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://www.mohfw.gov.in/data/datanew.json").then((function(t){console.log(t.data);var c=t.data;e.setState({StateData:c})}))}},{key:"render",value:function(){var e=this.state.StateData[1];if(null==e)return null;var t=this.state.StateData.filter((function(e,t){return t<36}));return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container-fluid mt-5",children:[Object(d.jsx)("div",{className:" mt-2",children:"  "}),Object(d.jsxs)("div",{className:"row mt-3 ",children:[Object(d.jsx)(g,{}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card  text-center",style:{boxShadow:"#4db5ff 0 .125rem 0.8rem",borderRadius:"1rem",borderColor:"rgb(52, 224, 30)"},children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{class:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400,color:"rgb(52, 224, 30)"},children:"Total Cases"}),Object(d.jsx)("h1",{class:"card-title",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData[36].new_positive}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card text-center",style:Object(y.a)({borderColor:"rgb(52, 224, 30)",boxShadow:"#dc3545 0 .125rem 0.8rem",borderRadius:"1rem"},"borderColor","rgb(52, 224, 30)"),children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{className:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400},children:"Active Cases"}),Object(d.jsx)("h1",{class:"card-title ",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData[36].new_active}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card text-center",style:Object(y.a)({borderColor:"rgb(52, 224, 30)",boxShadow:"#4cd97a 0 .125rem 0.8rem",borderRadius:"1rem"},"borderColor","rgb(52, 224, 30)"),children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{className:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400},children:"Active Cases"}),Object(d.jsx)("h1",{class:"card-title ",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData[36].new_active}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card text-center",style:Object(y.a)({borderColor:"rgb(52, 224, 30)",boxShadow:"#ffc107 0 .125rem 0.8rem",borderRadius:"1rem"},"borderColor","rgb(52, 224, 30)"),children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{className:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400},children:"Active Cases"}),Object(d.jsx)("h1",{class:"card-title ",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData[36].new_active}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})})]}),Object(d.jsx)("div",{className:"table-responsive mt-4 ",children:Object(d.jsxs)("table",{className:"table table-hover table-bordered",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"text-center",children:[Object(d.jsx)("th",{children:"Country"}),Object(d.jsx)("th",{children:"Total cases"}),Object(d.jsx)("th",{children:"New Cases"}),Object(d.jsx)("th",{children:"Recovered"}),Object(d.jsx)("th",{children:"Death"})]})}),Object(d.jsx)("tbody",{children:this.state.StateData.filter((function(e,t){return t<36})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.state_name}),Object(d.jsx)("td",{className:"text-end",children:e.new_positive}),Object(d.jsx)("td",{className:"text-end",children:parseInt(e.new_positive)-parseInt(e.positive)}),Object(d.jsx)("td",{className:"text-end",children:e.new_positive}),Object(d.jsx)("td",{className:"text-end",children:e.new_death})]})}))})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"hahhdhd"}),t.reduce((function(e,t){return parseInt(e.new_positive)>parseInt(t.new_positive)?e:t})).new_positive,t.reduce((function(e,t){return parseInt(e.new_positive)>parseInt(t.new_positive)?e:t})).state_name,e.new_active,Object(d.jsx)("br",{}),t.reduce((function(e,t){return parseInt(e.new_death)>parseInt(t.new_death)?e:t})).new_death,t.reduce((function(e,t){return parseInt(e.new_death)>parseInt(t.new_death)?e:t})).state_name,t.reduce((function(e,t){return e.new_positive-e.positive>t.new_positive-t.positive?e:t})).state_name,t.reduce((function(e,t){return e.new_positive-e.positive>t.new_positive-t.positive?e:t})).new_positive-t.reduce((function(e,t){return e.new_positive-e.positive>t.new_positive-t.positive?e:t})).positive]})]})})}}]),c}(s.Component),C=c(51),w=c.n(C),S=function(e){Object(O.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(x.a)(this,c),(e=t.call(this)).state={StateData:[]},e}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports").then((function(t){console.log(t.data);var c=t.data;e.setState({StateData:c})}))}},{key:"render",value:function(){if(null==this.state.StateData.getBeneficiariesGroupBy)return null;var e=this.state.StateData.getBeneficiariesGroupBy.reduce((function(e,t){return e+t.totally_vaccinated}),0),t=this.state.StateData.timestamp;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container-fluid mt-5",children:[Object(d.jsxs)("div",{className:"row mt-5 ",children:[Object(d.jsxs)("div",{className:"live-indicator-wrapper",children:[Object(d.jsx)("div",{className:"pulse",children:"    "}),Object(d.jsxs)("span",{children:["Last Updated: ",w()(t).format(" h:mm a , MMMM Do YYYY")]})]}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card  text-center",style:{boxShadow:"#4db5ff 0 .125rem 0.8rem",borderRadius:"1rem",borderColor:"rgb(52, 224, 30)"},children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{class:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400,color:"rgb(52, 224, 30)"},children:"Total Vaccinations"}),Object(d.jsx)("h1",{class:"card-title",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData.topBlock.vaccination.total}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card text-center",style:Object(y.a)({borderColor:"rgb(52, 224, 30)",boxShadow:"#dc3545 0 .125rem 0.8rem",borderRadius:"1rem"},"borderColor","rgb(52, 224, 30)"),children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{className:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400},children:"Dose 1"}),Object(d.jsx)("h1",{class:"card-title ",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData.topBlock.vaccination.tot_dose_1}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card text-center",style:Object(y.a)({borderColor:"rgb(52, 224, 30)",boxShadow:"#4cd97a 0 .125rem 0.8rem",borderRadius:"1rem"},"borderColor","rgb(52, 224, 30)"),children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{className:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400},children:"Dose 2"}),Object(d.jsx)("h1",{class:"card-title ",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData.topBlock.vaccination.tot_dose_2}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})}),Object(d.jsx)("div",{className:"col-md-6 mt-4",children:Object(d.jsx)("div",{class:"card text-center",style:Object(y.a)({borderColor:"rgb(52, 224, 30)",boxShadow:"#ffc107 0 .125rem 0.8rem",borderRadius:"1rem"},"borderColor","rgb(52, 224, 30)"),children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h4",{className:"card-title mb-5",style:{fontFamily:"Rubik",fontWeight:400},children:"Today Vaccination"}),Object(d.jsx)("h1",{class:"card-title ",style:{fontFamily:"Rubik",fontWeight:700,fontSize:"3rem"},children:this.state.StateData.topBlock.vaccination.today}),Object(d.jsx)("h6",{class:"card-subtitle mb-2 text-muted",children:"Card subtitle"})]})})})]}),Object(d.jsx)("div",{className:"table-responsive mt-4 ",children:Object(d.jsxs)("table",{"data-":!0,className:"table table-hover table-bordered",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"text-center",children:[Object(d.jsx)("th",{children:"STATE/UT"}),Object(d.jsx)("th",{children:"TOTAL VACCINATIONS"}),Object(d.jsx)("th",{children:"PARTIALLY VACCINATED"}),Object(d.jsx)("th",{children:"FULLY VACCINATED"}),Object(d.jsx)("th",{children:"VACCINATION TODAY"})]})}),Object(d.jsx)("tbody",{children:this.state.StateData.getBeneficiariesGroupBy.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.state_name}),Object(d.jsx)("td",{className:"text-end",children:e.total}),Object(d.jsx)("td",{className:"text-end",children:e.partial_vaccinated}),Object(d.jsx)("td",{className:"text-end",children:e.totally_vaccinated}),Object(d.jsx)("td",{className:"text-end",children:e.today})]},t)}))})]})}),"gggh",e]})})}}]),c}(s.Component),_=c(4);var k=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(_.c,{children:[Object(d.jsxs)(_.a,{exact:!0,path:"/",children:[Object(d.jsx)(l,{}),Object(d.jsx)(N,{})]}),Object(d.jsx)(_.a,{path:"/india",children:Object(d.jsx)(N,{})}),Object(d.jsx)(_.a,{path:"/world",children:Object(d.jsx)(p,{})}),Object(d.jsx)(_.a,{path:"/vaccine",children:Object(d.jsx)(S,{})})]})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),D()}},[[88,1,2]]]);
//# sourceMappingURL=main.bec01bfc.chunk.js.map