(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{MQXL:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),b=function(){return function(){}}(),t=u("pMnS"),o=u("9o+3"),a=u("nKAJ"),i=u("wZee"),r=function(){function l(){}return l.prototype.ngAfterViewInit=function(){i.highlightAll()},l}(),p=e.nb({encapsulation:2,styles:[],data:{}});function d(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,16,"mk-box",[["header","Configuring Layout"]],null,null,null,o.b,o.a)),e.ob(1,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,1,{boxHeaderDirective:0}),e.Db(335544320,2,{boxFooterDirective:0}),e.Db(335544320,3,{boxContentDirective:0}),e.Db(335544320,4,{boxToolsDirective:0}),(l()(),e.pb(6,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["If can use the layout components or just use the presentation components of angular-admin-lte."])),(l()(),e.pb(8,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" If you chose to use the layout you will need to:"])),(l()(),e.pb(10,0,null,3,6,"ol",[],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Create a layout configuration file."])),(l()(),e.pb(13,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Import the layout module and provide the layout configuration in your main app module."])),(l()(),e.pb(15,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Update the main app view."])),(l()(),e.pb(17,0,null,null,8,"mk-box",[["header","Configuration File"]],null,null,null,o.b,o.a)),e.ob(18,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,5,{boxHeaderDirective:0}),e.Db(335544320,6,{boxFooterDirective:0}),e.Db(335544320,7,{boxContentDirective:0}),e.Db(335544320,8,{boxToolsDirective:0}),(l()(),e.pb(23,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e.pb(24,0,null,null,1,"code",[["class","language-typescript"],["ngNonBindable",""]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["export var adminLteConf = {\n  skin: 'blue',\n  ...\n  sidebarLeftMenu: [\n    {label: 'Start', route: '/', iconClasses: 'fa fa-th'},\n    ...\n  ]\n};\n"])),(l()(),e.pb(26,0,null,null,8,"mk-box",[["header","Import Conf And Module"]],null,null,null,o.b,o.a)),e.ob(27,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,9,{boxHeaderDirective:0}),e.Db(335544320,10,{boxFooterDirective:0}),e.Db(335544320,11,{boxContentDirective:0}),e.Db(335544320,12,{boxToolsDirective:0}),(l()(),e.pb(32,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e.pb(33,0,null,null,1,"code",[["class","language-typescript"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.\nimport { LayoutModule } from 'angular-admin-lte';   //Import the layout module.\n\n@NgModule({\n  imports: [\n    ...\n    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.\n  ],\n  ...\n})\nexport class AppModule {}\n"])),(l()(),e.pb(35,0,null,null,8,"mk-box",[["header","App view HTML"]],null,null,null,o.b,o.a)),e.ob(36,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,13,{boxHeaderDirective:0}),e.Db(335544320,14,{boxFooterDirective:0}),e.Db(335544320,15,{boxContentDirective:0}),e.Db(335544320,16,{boxToolsDirective:0}),(l()(),e.pb(41,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e.pb(42,0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["<mk-layout-wrapper>\n  <mk-layout-sidebar-right>\n    Sidebar right HTML\n  </mk-layout-sidebar-right>\n  <mk-layout-header>\n    <mk-layout-header-logo>Logo HTML</mk-layout-header-logo>\n    <mk-layout-header-logo-mini>Logo Mini HTML</mk-layout-header-logo-mini>\n    Header HTML\n  </mk-layout-header>\n  <mk-layout-sidebar-left>\n    Sidebar left HTML (just above menu)\n  </mk-layout-sidebar-left>\n  <mk-layout-content>\n    <router-outlet></router-outlet>\n  </mk-layout-content>\n  <mk-layout-footer>\n    <mk-layout-footer-left>\n      Footer left HTML\n    </mk-layout-footer-left>\n    <mk-layout-footer-right>\n      Footer right HTML\n    </mk-layout-footer-right>\n  </mk-layout-footer>\n</mk-layout-wrapper>\n"])),(l()(),e.pb(44,0,null,null,88,"mk-box",[["contentStyleClasses","table-responsive"],["header","Configuration properties"]],null,null,null,o.b,o.a)),e.ob(45,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,17,{boxHeaderDirective:0}),e.Db(335544320,18,{boxFooterDirective:0}),e.Db(335544320,19,{boxContentDirective:0}),e.Db(335544320,20,{boxToolsDirective:0}),(l()(),e.pb(50,0,null,3,82,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),e.pb(51,0,null,null,81,"tbody",[],null,null,null,null,null)),(l()(),e.pb(52,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(53,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.pb(55,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Type"])),(l()(),e.pb(57,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Default"])),(l()(),e.pb(59,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.pb(61,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["skin"])),(l()(),e.pb(64,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string ('blue' | 'black' | 'purple' | 'green' | 'red' | 'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' | 'red-light' | 'yellow-light')"])),(l()(),e.pb(66,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["'blue'"])),(l()(),e.pb(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Set the theme skin."])),(l()(),e.pb(70,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(71,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarLeftCollapsed"])),(l()(),e.pb(73,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(75,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["false"])),(l()(),e.pb(77,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Defines if the sidebar left is collapsed."])),(l()(),e.pb(79,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(80,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarLeftExpandOnOver"])),(l()(),e.pb(82,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(84,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["false"])),(l()(),e.pb(86,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Define if sidebar left expand on mouse over."])),(l()(),e.pb(88,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(89,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarLeftMini"])),(l()(),e.pb(91,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(93,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["false"])),(l()(),e.pb(95,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Define if sidebar left minified is visible."])),(l()(),e.pb(97,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(98,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarRightSkin"])),(l()(),e.pb(100,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string ('dark' | 'light')"])),(l()(),e.pb(102,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["'dark'"])),(l()(),e.pb(104,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Set the sidebar right skin."])),(l()(),e.pb(106,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(107,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarRightCollapsed"])),(l()(),e.pb(109,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(111,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["true"])),(l()(),e.pb(113,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Defines if the sidebar right is collapsed."])),(l()(),e.pb(115,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(116,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarRightOverContent"])),(l()(),e.pb(118,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(120,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["true"])),(l()(),e.pb(122,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Defines if sidebar right slide over content."])),(l()(),e.pb(124,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.pb(125,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["layout"])),(l()(),e.pb(127,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string ('normal' | 'boxed' | 'fixed')"])),(l()(),e.pb(129,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["'normal'"])),(l()(),e.pb(131,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Define the layout style."])),(l()(),e.pb(133,0,null,null,84,"mk-box",[["header","Layout setters"]],null,null,null,o.b,o.a)),e.ob(134,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,21,{boxHeaderDirective:0}),e.Db(335544320,22,{boxFooterDirective:0}),e.Db(335544320,23,{boxContentDirective:0}),e.Db(335544320,24,{boxToolsDirective:0}),(l()(),e.pb(139,0,null,3,78,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),e.pb(140,0,null,null,77,"tbody",[],null,null,null,null,null)),(l()(),e.pb(141,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(142,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.pb(144,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Parameters"])),(l()(),e.pb(146,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.pb(148,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(149,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarLeftCollapsed()"])),(l()(),e.pb(151,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(153,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically set if sidebar left is collapsed."])),(l()(),e.pb(155,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(156,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarLeftExpandOnOver()"])),(l()(),e.pb(158,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(160,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically set if sidebar left expand on over."])),(l()(),e.pb(162,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(163,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarLeftExpandOnOver()"])),(l()(),e.pb(165,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(167,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically set if sidebar left expand on over."])),(l()(),e.pb(169,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(170,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["setSidebarRightSkin()"])),(l()(),e.pb(172,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["'dark' | 'light'"])),(l()(),e.pb(174,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically defines sidebar right skin."])),(l()(),e.pb(176,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(177,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarLeftMini()"])),(l()(),e.pb(179,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(181,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically set if sidebar left collapsed is visible."])),(l()(),e.pb(183,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(184,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarRightCollapsed()"])),(l()(),e.pb(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(188,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically set if sidebar right is collapsed."])),(l()(),e.pb(190,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(191,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarRightOverContent()"])),(l()(),e.pb(193,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["boolean"])),(l()(),e.pb(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Programmatically set if sidebar right slide over content."])),(l()(),e.pb(197,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["setSidebarLeftMenu()"])),(l()(),e.pb(200,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Array"])),(l()(),e.pb(202,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Update sidebar right menu."])),(l()(),e.pb(204,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(205,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["setLayout()"])),(l()(),e.pb(207,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.pb(209,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Update layout style."])),(l()(),e.pb(211,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(212,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["setSkin()"])),(l()(),e.pb(214,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["string"])),(l()(),e.pb(216,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Update theme skin."])),(l()(),e.pb(218,0,null,null,70,"mk-box",[["header","Layout subscriptions"]],null,null,null,o.b,o.a)),e.ob(219,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,25,{boxHeaderDirective:0}),e.Db(335544320,26,{boxFooterDirective:0}),e.Db(335544320,27,{boxContentDirective:0}),e.Db(335544320,28,{boxToolsDirective:0}),(l()(),e.pb(224,0,null,3,64,"table",[["class","table table-bordered table-hover"]],null,null,null,null,null)),(l()(),e.pb(225,0,null,null,63,"tbody",[],null,null,null,null,null)),(l()(),e.pb(226,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(227,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name"])),(l()(),e.pb(229,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Parameters"])),(l()(),e.pb(231,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Description"])),(l()(),e.pb(233,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(234,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarLeftCollapsed"])),(l()(),e.pb(236,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<boolean>"])),(l()(),e.pb(238,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to sidebar left collapse status."])),(l()(),e.pb(240,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(241,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarLeftExpandOnOver"])),(l()(),e.pb(243,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<boolean>"])),(l()(),e.pb(245,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to sidebar left expand on over status."])),(l()(),e.pb(247,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(248,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarLeftMini"])),(l()(),e.pb(250,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<boolean>"])),(l()(),e.pb(252,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to sidebar left mini status."])),(l()(),e.pb(254,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(255,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["sidebarRightSkin"])),(l()(),e.pb(257,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<string>"])),(l()(),e.pb(259,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to sidebar right skin."])),(l()(),e.pb(261,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(262,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarRightCollapsed"])),(l()(),e.pb(264,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<boolean>"])),(l()(),e.pb(266,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to sidebar right collapsed status."])),(l()(),e.pb(268,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(269,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["isSidebarRightOverContent"])),(l()(),e.pb(271,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<Array>"])),(l()(),e.pb(273,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to sidebar right over content status."])),(l()(),e.pb(275,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(276,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["layout"])),(l()(),e.pb(278,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<string>"])),(l()(),e.pb(280,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to layout style changes."])),(l()(),e.pb(282,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.pb(283,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["skin"])),(l()(),e.pb(285,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Observable<string>"])),(l()(),e.pb(287,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Subscribe to theme skin changes."]))],function(l,n){l(n,1,0,"Configuring Layout",!1,!1),l(n,18,0,"Configuration File",!1,!1),l(n,27,0,"Import Conf And Module",!1,!1),l(n,36,0,"App view HTML",!1,!1),l(n,45,0,"Configuration properties",!0,!1),l(n,134,0,"Layout setters",!1,!1),l(n,219,0,"Layout subscriptions",!1,!1)},null)}function s(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-configuration",[],null,null,null,d,p)),e.ob(1,4243456,null,0,r,[],null,null)],null,null)}var F=e.lb("app-configuration",r,s,{},{},[]),c=u("Ip0R"),h=u("ZYCi"),f=function(){return function(){}}(),m=u("lp/B"),g=u("k3IM"),v=u("RyNk");u.d(n,"ConfigurationModuleNgFactory",function(){return D});var D=e.mb(b,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[t.a,F]],[3,e.j],e.x]),e.xb(4608,c.l,c.k,[e.u,[2,c.s]]),e.xb(1073742336,c.b,c.b,[]),e.xb(1073742336,h.s,h.s,[[2,h.y],[2,h.q]]),e.xb(1073742336,f,f,[]),e.xb(1073742336,m.a,m.a,[]),e.xb(1073742336,g.a,g.a,[]),e.xb(1073742336,v.a,v.a,[]),e.xb(1073742336,b,b,[]),e.xb(1024,h.o,function(){return[[{path:"",component:r}]]},[])])})}}]);