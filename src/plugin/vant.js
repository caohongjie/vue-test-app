import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import "vant/lib/index.css";

// 底部导航栏
Vue.use(Tabbar).use(TabbarItem);

// loading加载
import { Loading } from "vant";
Vue.use(Loading);

// 图片蓝加载
import { Image } from "vant";
Vue.use(Image);

// tishi
import { Toast } from "vant";
Vue.use(Toast);

//确认
import { Dialog } from "vant";
Vue.use(Dialog);

// 导航
import { NavBar } from "vant";
Vue.use(NavBar);

//地址
import { ContactCard, ContactList, ContactEdit } from "vant";
Vue.use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);

import { AddressList } from "vant";
Vue.use(AddressList);

//地址编辑
import { AddressEdit } from "vant";
Vue.use(AddressEdit);

//图标
import { Icon } from "vant";
Vue.use(Icon);

//单元格
import { Cell, CellGroup } from "vant";
Vue.use(Cell).use(CellGroup);

//提交
import { SubmitBar } from "vant";
Vue.use(SubmitBar);

import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);

import { Popup } from "vant";
Vue.use(Popup);

import { DatetimePicker } from "vant";
Vue.use(DatetimePicker);

import { Card } from "vant";
Vue.use(Card);
