<template>
  <div>
    <header class="main-header">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">
          <b>{{ title_short }}</b>
        </span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg" v-html="title"></span>
      </router-link>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <li class="dropdown messages-menu">
              <!-- Menu toggle button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o"></i>
                <span class="label label-success">4</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have 4 messages</li>
                <li>
                  <!-- inner menu: contains the messages -->
                  <ul class="menu">
                    <li>
                      <!-- start message -->
                      <a href="#">
                        <div class="pull-left">
                          <!-- User Image -->
                          <img src="static/img/avatar5.png" class="img-circle" alt="User Image">
                        </div>
                        <!-- Message title and timestamp -->
                        <h4>
                          Support Team
                          <small>
                            <i class="fa fa-clock-o"></i> 5 mins
                          </small>
                        </h4>
                        <!-- The message -->
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <!-- end message -->
                  </ul>
                  <!-- /.menu -->
                </li>
                <li class="footer">
                  <a href="#">{{ text.view_all }}</a>
                </li>
              </ul>
            </li>
            <!-- /.messages-menu -->

            <!-- Notifications Menu -->
            <li class="dropdown notifications-menu">
              <!-- Menu toggle button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">10</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have 10 notifications</li>
                <li>
                  <!-- Inner Menu: contains the notifications -->
                  <ul class="menu">
                    <li>
                      <!-- start notification -->
                      <a href="#">
                        <i class="fa fa-users text-aqua"></i> 5 new members joined today
                      </a>
                    </li>
                    <!-- end notification -->
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">{{ text.view_all }}</a>
                </li>
              </ul>
            </li>
            <!-- Tasks Menu -->
            <li class="dropdown tasks-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img class="country-flag" :src="'static/img/flags/'+current_language+'.png'">
              </a>
              <ul class="dropdown-menu">
                <li class="menu" v-for="item in language_list">
                  <a href="#" class="language-select-item">
                    <img :src="'static/img/flags/'+item.icon+'.png'">
                    <span>{{ item.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img src="static/img/avatar5.png" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">{{ user.name }}</span>
              </a>
              <ul class="dropdown-menu">
                <!-- The user image in the menu -->
                <li class="user-header">
                  <img src="static/img/avatar5.png" class="img-circle" alt="User Image">

                  <p>
                    {{ user.name }} - {{ user.title }}
                    <small>{{ user.registration_time }}</small>
                  </p>
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-right">
                    <router-link to="/login" class="btn btn-default btn-flat">{{ text.log_out }}</router-link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="static/img/avatar5.png" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>{{ user.name }}</p>
            <small>{{ user.registration_time }}</small>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
          <!-- Optionally, you can add icons to the links -->
          <li
            v-for="item,index in menus"
            :class="(item.sub_menus.length > 0 ? 'treeview' : '') + ' ' + (item.active ? 'active' : '') "
          >
            <router-link :to="item.link">
              <i class="fa" :class="item.icon"></i>
              <span>{{ item.name }}</span>
              <span v-if="item.sub_menus.length > 0" class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </router-link>
            <ul v-if="item.sub_menus.length > 0" class="treeview-menu">
              <li v-for="sub_item in item.sub_menus" :class="sub_item.active ? 'active' : ''">
                <router-link :to="sub_item.link">
                  <i class="fa" :class="sub_item.icon"></i>
                  {{ sub_item.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          {{ current_page.name }}
          <small>{{ current_page.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <i class="fa fa-dashboard"></i> Level
            </a>
          </li>
          <li class="active">Here</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content container-fluid">
        <!-------------------------- | Your Page Content Here | -------------------------->
        <router-view/>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">Aloha</div>
      <!-- Default to the left -->
      <strong>
        Copyright &copy; 2016
        <a href="http://tinypel.com">Tinypel.com</a>.
      </strong> All rights reserved.
    </footer>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      title: "<b>OTS</b> 用户中心",
      title_short: "OTS",
      current_language: "cn",
      language_list: [
        { name: "简体中文", icon: "cn" },
        { name: "繁体中文", icon: "hk" },
        { name: "English", icon: "en" }
      ],
      text: {
        log_out: "退出",
        view_all: "查看所有"
      },
      user: {
        name: "Bob",
        title: "管理员",
        registration_time: "2019-06-01"
      },
      menus: [
        {
          name: "Link1",
          active: false,
          icon: "fa-link",
          link: "/home/welcome",
          sub_menus: []
        },
        {
          name: "Link2",
          active: false,
          icon: "fa-link",
          link: "/home/another",
          sub_menus: []
        },
        {
          name: "MultiLink",
          active: false,
          icon: "fa-link",
          link: "",
          sub_menus: [
            {
              name: "Sub Link 1",
              active: false,
              icon: "fa-circle",
              link: "/home/welcome",
              sub_menus: []
            },
            {
              name: "Sub Link 1",
              active: false,
              icon: "fa-circle",
              link: "/home/another",
              sub_menus: []
            }
          ]
        }
      ],
      current_page: {
        name: "欢迎",
        description: "你已登陆"
      }
    };
  },
  methods:{
    updateMenu(path){
      this.menus.forEach(menu => {
        menu.active = menu.link == path;
        menu.sub_menus.forEach(sub_menu => {
          sub_menu.active = sub_menu.link == path;
          if(sub_menu.active) menu.active = sub_menu.active;
        });
      });
    },
  },
  watch: {
    $route(to, from) {
      let path = to.path;
      this.updateMenu(path);
    }
  },
  mounted() {
    //更新 adminlte 布局和插件
    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new Event('load'));
    
    //更新菜单
    this.updateMenu(this.$route.path);

    this.$store.state.API.test();
  }
};
</script>

<style scoped>
.country-flag {
  height: 18px;
}
.language-select-item {
  display: flex;
  align-items: center;
}
.language-select-item img {
  height: 24px;
  margin-right: 8px;
}
</style>
