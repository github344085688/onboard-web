<template>
    <div class="sidebar-menu">
      <div class="page-sidebar navbar-collapse collapse side-bar side-bar-transition " :class="{isBlur:isBlur,'side-bar-show':showOrHideSideBar,'side-bar-hide':!showOrHideSideBar}">
        <div class="menu-tip">
          <div class="unis-image">
            <img src="@/assets/images/sidebar/unis.svg" :class="{'img-show':showOrHideSideBar,'img-hide':!showOrHideSideBar}"
              alt="logo" />
          </div>
          <div class="nav-line" @click="clickLog">
            <img src="@/assets/images/sidebar/nav-line.svg" alt="flex-logo" width="20" height="12" />
          </div>

        </div>
        <div class="module-title">{{showOrHideSideBar?project:''}}</div>
        <div  v-if="showOrHideSideBar">
          <sidebar-menu :menu-data="menuData" :item-title ='itemTitle' class="page-sidebar-menu"></sidebar-menu>
        </div>

      </div>
      <app-header @sideBarMenuData="switchSideBarMenuData" :isBlur="isBlur" :class="{'sidebar-change':!showOrHideSideBar}"></app-header>
      <!-- BEGIN CONTENT -->
      <div class="page-content-wrapper" :class="{'swapper-change':!showOrHideSideBar}">
        <div class="page-content">
          <!-- BEGIN ACTUAL CONTENT -->
              <router-view @toBlur="toBlur">
              </router-view>

          <!-- END ACTUAL CONTENT -->
        </div>
      </div>
      <!-- END CONTENT -->
    </div>
</template>
<style lang="scss" src="./default-main-layout.scss" scoped></style>
