(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Pz4Q:function(e,t,o){"use strict";o.r(t);var i=o("Valr"),n=o("mrSG"),r=o("h2Ha"),d=o("CqG3"),c=o("Wcq6"),a=o("6blF"),s=o("TYT/"),l=function(){function e(e){this.firestore=e,this.loggedInUser=JSON.parse(localStorage.getItem("currentUser")),this.ref=c.firestore().collection("todo")}return e.prototype.getTODOS=function(e){return this.firestore.collection("todo",(function(t){return t.orderBy("createdDate","desc").where("uid","==",e)})).snapshotChanges()},e.prototype.createTodo=function(e){var t=this;return new a.a((function(o){t.ref.add(e).then((function(e){o.next({data:e})}))}))},e.prototype.updateTODO=function(e,t){var o=this;return new a.a((function(i){o.ref.doc(e).set(t).then((function(){i.next()}))}))},e.prototype.deleteTodo=function(e){return this.ref.doc(e).delete()},e.\u0275fac=function(t){return new(t||e)(s.hc(d.AngularFirestore))},e.\u0275prov=s.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),b=o("QJY3"),p=o("VNr4"),u=o("MnXN"),m=o("qT8p"),f=o("DUip");function g(e,t){1&e&&(s.Zb(0,"div"),s.Vc(1,"Title is required"),s.Yb())}function h(e,t){if(1&e&&(s.Zb(0,"div",77),s.Tc(1,g,2,0,"div",78),s.Yb()),2&e){var o=s.nc(2);s.Eb(1),s.uc("ngIf",o.add.title.errors.required)}}function v(e,t){1&e&&(s.Zb(0,"div"),s.Vc(1,"Description is required"),s.Yb())}function Y(e,t){if(1&e&&(s.Zb(0,"div",77),s.Tc(1,v,2,0,"div",78),s.Yb()),2&e){var o=s.nc(2);s.Eb(1),s.uc("ngIf",o.add.description.errors.required)}}var Z=function(e){return{"is-invalid":e}};function y(e,t){if(1&e){var o=s.ac();s.Zb(0,"form",51),s.lc("ngSubmit",(function(){return s.Lc(o),s.nc().onSubmit()})),s.Zb(1,"div",52),s.Zb(2,"h5",53),s.Vc(3,"Add New Task"),s.Yb(),s.Zb(4,"button",54),s.lc("click",(function(){return s.Lc(o),s.nc().dismissModal()})),s.Zb(5,"span",55),s.Vc(6,"\xd7"),s.Yb(),s.Yb(),s.Yb(),s.Zb(7,"div",56),s.Zb(8,"div",57),s.Ub(9,"input",58),s.Tc(10,h,2,1,"div",59),s.Yb(),s.Zb(11,"div",57),s.Zb(12,"select",60),s.lc("change",(function(e){return s.Lc(o),s.nc().getSelectedTODOTypeText(e)})),s.Zb(13,"option",61),s.Vc(14,"Select Tag"),s.Yb(),s.Zb(15,"option",62),s.Vc(16,"Project"),s.Yb(),s.Zb(17,"option",63),s.Vc(18,"Product"),s.Yb(),s.Zb(19,"option",64),s.Vc(20,"Bug"),s.Yb(),s.Zb(21,"option",65),s.Vc(22,"API"),s.Yb(),s.Zb(23,"option",66),s.Vc(24,"UI"),s.Yb(),s.Yb(),s.Yb(),s.Zb(25,"div",67),s.Zb(26,"div",68),s.Ub(27,"i",69),s.Yb(),s.Ub(28,"input",70),s.Tc(29,Y,2,1,"div",59),s.Zb(30,"div",71),s.Ub(31,"i",69),s.Yb(),s.Yb(),s.Yb(),s.Zb(32,"div",72),s.Zb(33,"div",73),s.Zb(34,"button",74),s.Ub(35,"i",75),s.Zb(36,"span",76),s.Vc(37,"Add New"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()}if(2&e){var i=s.nc();s.uc("formGroup",i.todo),s.Eb(9),s.uc("ngClass",s.zc(5,Z,i.submitted&&i.add.title.errors)),s.Eb(1),s.uc("ngIf",i.submitted&&i.add.title.errors),s.Eb(18),s.uc("ngClass",s.zc(7,Z,i.submitted&&i.add.description.errors)),s.Eb(1),s.uc("ngIf",i.submitted&&i.add.description.errors)}}function T(e,t){1&e&&(s.Zb(0,"div"),s.Vc(1,"Title is required"),s.Yb())}function O(e,t){if(1&e&&(s.Zb(0,"div",77),s.Tc(1,T,2,0,"div",78),s.Yb()),2&e){var o=s.nc(2);s.Eb(1),s.uc("ngIf",o.update.title.errors.required)}}function C(e,t){1&e&&(s.Zb(0,"div"),s.Vc(1,"Description is required"),s.Yb())}function D(e,t){if(1&e&&(s.Zb(0,"div",77),s.Tc(1,C,2,0,"div",78),s.Yb()),2&e){var o=s.nc(2);s.Eb(1),s.uc("ngIf",o.update.description.errors.required)}}function U(e,t){if(1&e){var o=s.ac();s.Zb(0,"form",51),s.lc("ngSubmit",(function(){s.Lc(o);var e=s.nc();return e.onUpdate(e.selectedItem.id,e.todo.value)})),s.Zb(1,"div",52),s.Zb(2,"h5",53),s.Vc(3,"Edit Task"),s.Yb(),s.Zb(4,"button",54),s.lc("click",(function(){return s.Lc(o),s.nc().dismissModal()})),s.Zb(5,"span",55),s.Vc(6,"\xd7"),s.Yb(),s.Yb(),s.Yb(),s.Zb(7,"div",56),s.Zb(8,"div",57),s.Ub(9,"input",79),s.Tc(10,O,2,1,"div",59),s.Yb(),s.Zb(11,"div",57),s.Zb(12,"select",80),s.lc("change",(function(e){return s.Lc(o),s.nc().getSelectedTODOTypeText(e)})),s.Zb(13,"option",61),s.Vc(14,"Select Tag"),s.Yb(),s.Zb(15,"option",62),s.Vc(16,"Project"),s.Yb(),s.Zb(17,"option",63),s.Vc(18,"Product"),s.Yb(),s.Zb(19,"option",64),s.Vc(20,"Bug"),s.Yb(),s.Zb(21,"option",65),s.Vc(22,"API"),s.Yb(),s.Zb(23,"option",66),s.Vc(24,"UI"),s.Yb(),s.Yb(),s.Yb(),s.Zb(25,"div",67),s.Zb(26,"div",68),s.Ub(27,"i",69),s.Yb(),s.Ub(28,"input",81),s.Tc(29,D,2,1,"div",59),s.Zb(30,"div",71),s.Ub(31,"i",69),s.Yb(),s.Yb(),s.Yb(),s.Zb(32,"div",72),s.Zb(33,"div",73),s.Zb(34,"button",82),s.Ub(35,"i",75),s.Zb(36,"span",76),s.Vc(37,"Update"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()}if(2&e){var i=s.nc();s.uc("formGroup",i.todo),s.Eb(9),s.uc("ngClass",s.zc(5,Z,i.submitted&&i.update.title.errors)),s.Eb(1),s.uc("ngIf",i.submitted&&i.update.title.errors),s.Eb(18),s.uc("ngClass",s.zc(7,Z,i.submitted&&i.update.description.errors)),s.Eb(1),s.uc("ngIf",i.submitted&&i.update.description.errors)}}function w(e,t){1&e&&(s.Zb(0,"div",83),s.Zb(1,"div",84),s.Zb(2,"div",85),s.Ub(3,"div"),s.Ub(4,"div"),s.Ub(5,"div"),s.Ub(6,"div"),s.Ub(7,"div"),s.Ub(8,"div"),s.Ub(9,"div"),s.Ub(10,"div"),s.Yb(),s.Yb(),s.Yb())}var V=function(e){return{completed:e}};function I(e,t){if(1&e){var o=s.ac();s.Zb(0,"div",92),s.Zb(1,"div",93),s.Zb(2,"input",94),s.lc("change",(function(e){s.Lc(o);var i=t.$implicit;return s.nc(2).completeTODO(i,e)})),s.Yb(),s.Ub(3,"label",95),s.Yb(),s.Zb(4,"div",90),s.Zb(5,"div",91),s.Vc(6),s.Zb(7,"div",96),s.Zb(8,"span"),s.Vc(9),s.Yb(),s.Zb(10,"a",97),s.lc("click",(function(){s.Lc(o);var e=t.$implicit,i=s.nc(2),n=s.Ic(16);return i.editModal(n,e)})),s.Ub(11,"i",98),s.Yb(),s.Zb(12,"a",99),s.lc("click",(function(){s.Lc(o);var e=t.$implicit;return s.nc(2).onDelete(e.id)})),s.Ub(13,"i",100),s.Yb(),s.Yb(),s.Yb(),s.Zb(14,"span",101),s.Vc(15),s.Yb(),s.Yb(),s.Yb()}if(2&e){var i=t.$implicit,n=t.index;s.uc("ngClass",s.zc(10,V,i.completed)),s.Eb(2),s.wc("id","todo-item-done",n,""),s.uc("checked",i.completed),s.Eb(1),s.wc("for","todo-item-done",n,""),s.Eb(3),s.Xc(" ",i.title," "),s.Eb(2),s.Hb("mr-2 badge badge-",i.type,""),s.Eb(1),s.Wc(i.badge),s.Eb(6),s.Wc(i.description)}}function x(e,t){if(1&e&&(s.Zb(0,"form",86),s.Zb(1,"div",87),s.Tc(2,I,16,12,"div",88),s.Zb(3,"div",89),s.Zb(4,"div",90),s.Zb(5,"div",91),s.Vc(6," No items found "),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()),2&e){var o=s.nc();s.Eb(2),s.uc("ngForOf",o.todos)}}var P=function(){function e(e,t,i,n,r,d){this.modal=e,this.formBuilder=t,this._renderer=i,this.firebaseService=n,this.firestore=r,this.toastr=d,this.initialData=o("oxVz"),this.demoUserEmail="john@pixinvent.com",this.submitted=!1,this.todoDisplayList=[],this.todoTitle="",this.todoDescription="",this.selectedTodoTypeText="",this.selectedTodoTypeValue="",this.isShown=!0,this.completedTodo=!1,this.loader=!0,this.loggedInUser=JSON.parse(localStorage.getItem("currentUser")),this.config={}}return e.prototype.ngOnInit=function(){var e=this;this.loader=!0,this.resetForm(),this.todos=[],this.loggedInUser.email===this.demoUserEmail?this.getDemoAccTodos().then((function(t){0===t.length?e.addDemoAccountTodos().then((function(t){t&&e.loadTodos()})):e.loadTodos()})):this.loadTodos(),this.todo=this.formBuilder.group({title:["",b.G.required],type:[""],description:["",b.G.required]}),this.todo=this.formBuilder.group({title:["",b.G.required],type:[""],description:["",b.G.required]})},e.prototype.loadTodos=function(){var e=this;this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe((function(t){e.todos=t.map((function(e){return Object(n.__assign)(Object(n.__assign)({},e.payload.doc.data()),{id:e.payload.doc.id})})),e.temp=e.todos,e.loader=!1}))},Object.defineProperty(e.prototype,"add",{get:function(){return this.todo.controls},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"update",{get:function(){return this.todo.controls},enumerable:!0,configurable:!0}),e.prototype.resetForm=function(e){null!=e&&e.resetForm()},e.prototype.addDemoAccountTodos=function(){var e=this;return new Promise((function(t,o){for(var i=[],n=0;n<e.initialData.length;n++){var r=e.firestore.collection("todo").add({title:e.initialData[n].title,description:e.initialData[n].description,badge:e.initialData[n].badge,type:e.initialData[n].type,completed:e.initialData[n].completed,isDeleted:e.initialData[n].isDeleted,createdDate:new Date,uid:e.loggedInUser.uid});i.push(r)}Object(p.a)(i).subscribe((function(e){t(!0)}))}))},e.prototype.getDemoAccTodos=function(){var e=this;return new Promise((function(t,o){e.firebaseService.getTODOS(e.loggedInUser.uid).subscribe((function(e){t(e)}))}))},e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.todo.invalid||this.todo.valid&&(this.todo.setValue({uid:this.loggedInUser.uid,title:this.todo.value.title,description:this.todo.value.description,type:this.selectedTodoTypeValue,completed:!1,isDeleted:!1,createdDate:new Date,badge:this.selectedTodoTypeText}),this.firebaseService.createTodo(this.todo.value).subscribe((function(t){e.toastr.success("Added","Todo Created Successfully.",{timeOut:500,closeButton:!0})}),(function(t){e.toastr.error("Error","Add Todo Error.",{timeOut:500,closeButton:!0})})),this.dismissModal(),this.submitted=!1)},e.prototype.onUpdate=function(e,t){var o=this;this.submitted=!0,this.todo.invalid||this.todo.valid&&(this.todo.setValue({uid:this.loggedInUser.uid,title:t.title,description:t.description,type:this.selectedTodoTypeValue,completed:t.completed,isDeleted:!1,createdDate:this.selectedItem.createdDate,badge:this.selectedTodoTypeText}),this.firebaseService.updateTODO(e,this.todo.value).subscribe((function(e){o.toastr.success("Update","Todo Updated Successfully.",{timeOut:500,closeButton:!0})}),(function(e){o.toastr.error("Error","Todo Update Error!",{timeOut:500,closeButton:!0})})),this.dismissModal(),this.submitted=!1)},e.prototype.onDelete=function(e){var t=this;this.firebaseService.deleteTodo(e).then((function(e){t.toastr.success("Deleted","Todo Deleted Successfully!",{timeOut:500,closeButton:!0})}),(function(e){t.toastr.error("Error","Todo Delete Error!",{timeOut:500,closeButton:!0})}))},e.prototype.search=function(e){var t=e.currentTarget.value;this.todos=""!==t?this.todos.filter((function(e){if(e&&t)return e.title.toLowerCase().indexOf(t.toLowerCase())>-1||e.description.toLowerCase().indexOf(t.toLowerCase())>-1})):this.temp},e.prototype.open=function(e){this.selectedTodoTypeValue="",this.selectedTodoTypeText="",this.resetForm(),this.todo=this.formBuilder.group({uid:this.loggedInUser.uid,title:"",description:"",type:"",completed:!1,isDeleted:!1,createdDate:new Date,badge:""}),this.modal.open(e)},e.prototype.editModal=function(e,t){this.resetForm(),this.selectedItem=t,this.todo=this.formBuilder.group({uid:this.loggedInUser.uid,title:this.selectedItem.title,description:this.selectedItem.description,type:this.selectedItem.type,completed:t.completed,isDeleted:!1,badge:this.selectedItem.badge,createdDate:t.createdDate}),this.modal.open(e)},e.prototype.getSelectedTODOTypeText=function(e){this.selectedTodoTypeText=e.target.options[e.target.options.selectedIndex].text,this.selectedTodoTypeValue=e.target.options[e.target.options.selectedIndex].value},e.prototype.completeTODO=function(e){var t=this;e.completed=!e.completed,this.todo=this.formBuilder.group({uid:this.loggedInUser.uid,title:e.title,description:e.description,type:e.type,completed:e.completed,isDeleted:e.isDeleted,createdDate:e.createdDate,badge:e.badge}),this.firebaseService.updateTODO(e.id,this.todo.value).subscribe((function(e){t.toastr.success("Success",!0===t.todo.value.completed?"Todo Completed.":"Todo Updated.",{timeOut:500,closeButton:!0})}),(function(e){t.toastr.error("Error","Something went wrong!",{timeOut:500,closeButton:!0})}))},e.prototype.dismissModal=function(){this.modal.dismissAll(this.resetForm)},e.prototype.sidebar=function(e){var t=document.getElementById("sidebar-left"),o=document.getElementById("content-overlay");"feather ft-menu font-large-1"===e.currentTarget.className&&(this._renderer.addClass(t,"show"),this._renderer.addClass(o,"show"))},e.prototype.contentOverlay=function(e){var t=document.getElementById("sidebar-left"),o=document.getElementById("content-overlay");"content-overlay show"===e.currentTarget.className&&(this._renderer.removeClass(t,"show"),this._renderer.removeClass(o,"show"))},e.\u0275fac=function(t){return new(t||e)(s.Tb(u.r),s.Tb(b.g),s.Tb(s.F),s.Tb(l),s.Tb(d.AngularFirestore),s.Tb(m.c))},e.\u0275cmp=s.Nb({type:e,selectors:[["app-todo"]],viewQuery:function(e,t){var o;1&e&&(s.cd(r.a,!0),s.Rc(r.b,!0)),2&e&&(s.Hc(o=s.mc())&&(t.componentRef=o.first),s.Hc(o=s.mc())&&(t.directiveRef=o.first))},decls:115,vars:4,consts:[[1,"app-content","content","todo"],["id","sidebar-left","fxFlex","auto",1,"sidebar-left",3,"perfectScrollbar"],[1,"sidebar"],[1,"sidebar-content","sidebar-todo"],[1,"card"],[1,"card-body"],[1,"form-group","form-group-compose","text-center"],["type","button",1,"btn","btn-info","btn-block",3,"click"],["id","AddTaskModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"todo-form"],["content",""],["editContent",""],[1,"text-muted","text-bold-500","my-1"],[1,"list-group","list-group-messages"],[1,"list-group-item","list-group-item-action","border-0",3,"routerLink"],[1,"icon-home","mr-1"],[1,"icon-list","mr-1"],[1,"badge","badge-secondary","badge-pill","float-right"],[1,"icon-bell","mr-1"],[1,"badge","badge-danger","badge-pill","float-right"],[1,"icon-screen-desktop","mr-1"],[1,"icon-star","mr-1"],[1,"icon-energy","mr-1"],[1,"icon-clock","mr-1"],[1,"icon-calendar","mr-1"],[1,"icon-check","mr-1"],[1,"icon-close","mr-1"],[1,"feather","ft-circle","mr-1","warning"],[1,"badge","badge-warning","badge-pill","float-right"],[1,"feather","ft-circle","mr-1","secondary"],[1,"feather","ft-circle","mr-1","primary"],[1,"badge","badge-primary","badge-pill","float-right"],[1,"feather","ft-circle","mr-1","success"],[1,"badge","badge-success","badge-pill","float-right"],[1,"feather","ft-circle","mr-1","danger"],[1,"content-right"],[1,"content-wrapper"],[1,"content-header","row","mb-1"],[1,"content-body"],["id","content-overlay",1,"content-overlay",3,"click"],[1,"card","todo-details","rounded-0"],[1,"sidebar-toggle","d-block","d-lg-none"],[1,"feather","ft-menu","font-large-1",3,"click"],[1,"search"],["id","basic-search","type","text","name","search","placeholder","Search here...",1,"basic-search",3,"keyup"],[1,"feather","ficon","ft-search"],["fxFlex","auto",1,"card-content",3,"perfectScrollbar"],["class","loader-wrapper",4,"ngIf"],["id","form-todo-list",4,"ngIf"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form-group","col-12"],["type","text","id","new-todo-item","formControlName","title","name","title","placeholder","Todo Title","required","",1,"new-todo-item","form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["id","todo-select","formControlName","type","name","type",1,"custom-select","form-control",3,"change"],["value","","selected",""],["value","warning"],["value","secondary"],["value","primary"],["value","success"],["value","danger"],[1,"form-group","position-relative","has-icon-left","col-12"],[1,"form-control-position"],[1,"icon-emoticon-smile"],["type","text","id","new-todo-desc","formControlName","description","name","description","placeholder","Todo Description","required","",1,"new-todo-desc","form-control",3,"ngClass"],[1,"form-control-position","control-position-right"],[1,"modal-footer"],[1,"form-group","position-relative","has-icon-left","mb-0"],["id","add-todo-item","type","submit",1,"btn","btn-info","add-todo-item"],[1,"la","la-paper-plane-o","d-lg-none"],[1,"d-none","d-lg-block"],[1,"invalid-feedback"],[4,"ngIf"],["type","text","id","edit-todo-item","formControlName","title","name","title","placeholder","Todo Title","required","",1,"edit-todo-item","form-control",3,"ngClass"],["id","todo-select","placeholder","Select Tag","formControlName","type","name","type",1,"custom-select","form-control",3,"change"],["type","text","id","edit-todo-desc","formControlName","description","name","description","placeholder","Todo Description","required","",1,"edit-todo-desc","form-control",3,"ngClass"],["type","submit","id","edit-todo-item","data-dismiss","modal",1,"btn","btn-info","edit-todo-item"],[1,"loader-wrapper"],[1,"loader-container"],[1,"ball-spin-fade-loader","loader-blue"],["id","form-todo-list"],["id","todo-list",1,"todo-list","media-list","media-bordered"],["class","todo-item media",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-item","no-result","text-center","media","no-items"],[1,"media-body"],[1,"todo-title"],[1,"todo-item","media",3,"ngClass"],[1,"media-left","custom-control","custom-checkbox","pr-1"],["type","checkbox","name","todo-item-done",1,"todo-item-done","custom-control-input",3,"checked","id","change"],[1,"custom-control-label",3,"for"],[1,"float-right"],[1,"mr-1","todo-item-edit",3,"routerLink","click"],[1,"la","la-edit"],[1,"todo-item-delete",3,"routerLink","click"],[1,"la","la-trash"],[1,"todo-desc"]],template:function(e,t){if(1&e){var o=s.ac();s.Zb(0,"div",0),s.Zb(1,"div",1),s.Zb(2,"div",2),s.Zb(3,"div",3),s.Zb(4,"div",4),s.Zb(5,"div",5),s.Zb(6,"div",6),s.Zb(7,"button",7),s.lc("click",(function(){s.Lc(o);var e=s.Ic(14);return t.open(e)})),s.Vc(8," Add Task "),s.Yb(),s.Zb(9,"div",8),s.Zb(10,"div",9),s.Zb(11,"div",10),s.Zb(12,"section",11),s.Tc(13,y,38,9,"ng-template",null,12,s.Uc),s.Tc(15,U,38,9,"ng-template",null,13,s.Uc),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(17,"h6",14),s.Vc(18,"Messages"),s.Yb(),s.Zb(19,"div",15),s.Zb(20,"a",16),s.Ub(21,"i",17),s.Zb(22,"span"),s.Vc(23,"Home"),s.Yb(),s.Yb(),s.Zb(24,"a",16),s.Ub(25,"i",18),s.Zb(26,"span"),s.Vc(27,"My Tasks"),s.Yb(),s.Zb(28,"span",19),s.Vc(29,"8"),s.Yb(),s.Yb(),s.Zb(30,"a",16),s.Ub(31,"i",20),s.Zb(32,"span"),s.Vc(33,"Inbox"),s.Yb(),s.Zb(34,"span",21),s.Vc(35,"3"),s.Yb(),s.Yb(),s.Zb(36,"a",16),s.Ub(37,"i",22),s.Zb(38,"span"),s.Vc(39,"Dashboard"),s.Yb(),s.Yb(),s.Yb(),s.Zb(40,"h6",14),s.Vc(41,"Filters"),s.Yb(),s.Zb(42,"div",15),s.Zb(43,"a",16),s.Ub(44,"i",23),s.Zb(45,"span"),s.Vc(46,"Starred"),s.Yb(),s.Yb(),s.Zb(47,"a",16),s.Ub(48,"i",24),s.Zb(49,"span"),s.Vc(50,"Priority"),s.Yb(),s.Yb(),s.Zb(51,"a",16),s.Ub(52,"i",25),s.Zb(53,"span"),s.Vc(54,"Scheduled"),s.Yb(),s.Yb(),s.Zb(55,"a",16),s.Ub(56,"i",26),s.Zb(57,"span"),s.Vc(58,"Today"),s.Yb(),s.Yb(),s.Zb(59,"a",16),s.Ub(60,"i",27),s.Zb(61,"span"),s.Vc(62,"Completed"),s.Yb(),s.Yb(),s.Zb(63,"a",16),s.Ub(64,"i",28),s.Zb(65,"span"),s.Vc(66,"Deleted"),s.Yb(),s.Yb(),s.Yb(),s.Zb(67,"h6",14),s.Vc(68,"Tags"),s.Yb(),s.Zb(69,"div",15),s.Zb(70,"a",16),s.Ub(71,"i",29),s.Zb(72,"span"),s.Vc(73," Project "),s.Yb(),s.Zb(74,"span",30),s.Vc(75,"5"),s.Yb(),s.Yb(),s.Zb(76,"a",16),s.Ub(77,"i",31),s.Zb(78,"span"),s.Vc(79," Product "),s.Yb(),s.Zb(80,"span",19),s.Vc(81,"1"),s.Yb(),s.Yb(),s.Zb(82,"a",16),s.Ub(83,"i",32),s.Zb(84,"span"),s.Vc(85," Bug "),s.Yb(),s.Zb(86,"span",33),s.Vc(87,"2"),s.Yb(),s.Yb(),s.Zb(88,"a",16),s.Ub(89,"i",34),s.Zb(90,"span"),s.Vc(91," API "),s.Yb(),s.Zb(92,"span",35),s.Vc(93,"3"),s.Yb(),s.Yb(),s.Zb(94,"a",16),s.Ub(95,"i",36),s.Zb(96,"span"),s.Vc(97," UI "),s.Yb(),s.Zb(98,"span",21),s.Vc(99,"1"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(100,"div",37),s.Zb(101,"div",38),s.Ub(102,"div",39),s.Zb(103,"div",40),s.Zb(104,"div",41),s.lc("click",(function(e){return t.contentOverlay(e)})),s.Yb(),s.Zb(105,"div",42),s.Zb(106,"div",43),s.Zb(107,"i",44),s.lc("click",(function(e){return t.sidebar(e)})),s.Yb(),s.Yb(),s.Zb(108,"div",45),s.Zb(109,"input",46),s.lc("keyup",(function(e){return t.search(e)})),s.Yb(),s.Ub(110,"i",47),s.Yb(),s.Zb(111,"div",48),s.Zb(112,"div",5),s.Tc(113,w,11,0,"div",49),s.Tc(114,x,7,1,"form",50),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()}2&e&&(s.Eb(1),s.uc("perfectScrollbar",t.config),s.Eb(110),s.uc("perfectScrollbar",t.config),s.Eb(2),s.uc("ngIf",t.loader),s.Eb(1),s.uc("ngIf",!t.loader))},directives:[r.b,f.k,i.u,b.I,b.t,b.l,b.d,b.s,b.j,b.D,i.r,b.E,b.x,b.H,b.u,i.t],styles:[".completed[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]{text-decoration:line-through}.todo[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{position:relative;padding:1.5rem}.todo[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .basic-search[_ngcontent-%COMP%]{width:100%;border:1px solid #e4e7ed;padding:1.25rem;border-radius:4px}.todo[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;right:3rem;margin-top:-.5rem}.todo[_ngcontent-%COMP%]   .no-items[_ngcontent-%COMP%]{display:none}.todo[_ngcontent-%COMP%]   .todo-form[_ngcontent-%COMP%]{position:relative;overflow:hidden}.todo[_ngcontent-%COMP%]   .todo-form[_ngcontent-%COMP%]   .form-control-position.control-position-right[_ngcontent-%COMP%]{right:18px;top:2px;cursor:pointer}.todo[_ngcontent-%COMP%]   .todo-title[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:.5rem;font-weight:500;line-height:1}.todo[_ngcontent-%COMP%]   .todo-desc[_ngcontent-%COMP%]{color:#98a4b8;font-size:.9rem;letter-spacing:.35px}.todo[_ngcontent-%COMP%]   .dragme[_ngcontent-%COMP%]{position:relative;left:-.5rem;top:.15rem;cursor:move;color:#98a4b8;margin-right:1.5rem}.todo[_ngcontent-%COMP%]   .todo-list[_ngcontent-%COMP%]{max-height:1200px;width:100%;position:relative}.todo[_ngcontent-%COMP%]   .todo-list.ps-container[_ngcontent-%COMP%] > .ps-scrollbar-y-rail[_ngcontent-%COMP%] > .ps-scrollbar-y[_ngcontent-%COMP%]{width:5px}@media only screen and (max-width:991px){.todo[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{cursor:pointer!important;left:2rem!important;top:2.5rem!important}}@media only screen and (max-width:991px){.todo[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%]   .sidebar-left[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:block;position:fixed;top:71px;width:300px;z-index:999;transform:translateX(0);height:calc(100% - 71px);transition:all .3s ease;overflow-y:scroll}}.custom-control-input[_ngcontent-%COMP%]{position:relative!important}.custom-control[_ngcontent-%COMP%]{padding-left:0!important}"]}),e}(),k=o("MMa0"),M={apiKey:"AIzaSyCSG-EGU2RLITgpjf_ogf1w47edC_DXlWc",authDomain:"evolvision-rnd.firebaseapp.com",databaseURL:"https://evolvision-rnd.firebaseio.com",projectId:"evolvision-rnd",storageBucket:"evolvision-rnd.appspot.com",messagingSenderId:"890895206035",appId:"1:890895206035:web:a6d0e1574d59ffe40bef66",measurementId:"G-WYKKLCYFHE"};new RegExp("http://142.93.89.250"),new RegExp("/oauth/token"),o.d(t,"TodosModule",(function(){return _}));var _=function(){function e(){}return e.\u0275mod=s.Rb({type:e}),e.\u0275inj=s.Qb({factory:function(t){return new(t||e)},providers:[l],imports:[[i.c,b.n,b.C,r.c,b.n,m.b.forRoot(),k.AngularFireModule.initializeApp(M),d.AngularFirestoreModule.enablePersistence(),f.l.forChild([{path:"",component:P}])]]}),e}()},oxVz:function(e){e.exports=JSON.parse('[{"title":"Brownie marzipan gingerbread cake muffin","description":"Oat cake biscuit liquorice biscuit cookie chocolate marshmallow drag\xe9e.","badge":"Project","type":"warning","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Ice cream toffee pudding caramels donut ice cream","description":"Chocolate bar chupa chups biscuit. Icing pudding cake caramels halvah.","badge":"","type":"","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Danish liquorice candy lemon drops gingerbread","description":"Jelly beans sesame snaps wafer sweet roll. Biscuit tart pastry lemon drops brownie.","badge":"Product","type":"secondary","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Chocolate macaroon oat cake pudding marzipan","description":"Sweet tart cake jujubes. Jelly beans carrot cake sugar plum candy dessert.","badge":"","type":"","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Toffee biscuit muffin toffee tootsie roll macaroon","description":"Tootsie roll caramels tart chupa chups tiramisu lollipop. Tiramisu souffl\xe9 bonbon.","badge":"UI","type":"danger","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Powder chocolate fruitcake apple pie marshmallow","description":"Chocolate cookie tart apple pie cake cupcake gingerbread fruitcake cookie.","badge":"","type":"","completed":false,"isDeleted":false,"createdDate":"","uid":""}]')}}]);