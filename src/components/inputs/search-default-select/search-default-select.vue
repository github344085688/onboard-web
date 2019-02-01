<template>
    <div class="search-default-select">
      <div class="select-content">
        <input type="text"
               v-on:focus="handleFocus"
               v-on:blur="handleBlur"
               v-model="transitionValue"
               placeholder="input to select" v-rx-event:input="searchByInput" >
        <div class="blue" v-if="transitionValue" style="margin-top: 16px;  margin-right: 3px; cursor: pointer">
          <div class="cross"  @click.stop.preven="crossSelect"></div>
        </div>
        <div style="color:#ddd ; padding-top: 15px;">
          <div class="down-arrow " :class="{'up':isHandleBin}"></div>
        </div>
      </div>
      <under-line :focus="isFocused"></under-line>
      <ul v-if="isSearch">
        <li style="padding-left: 40%; color: #56A7FD"  ><div class="loaders"></div></li>
      </ul>
      <ul v-show="isSelect && transitionSelectddatas.length>1" >
        <li v-for="item in transitionSelectddatas">
          <input type="button" @click.stop.preven="onItemSelect(item)" v-on:focus="[isFocused=true,isSelect=true]" v-on:blur="[isFocused=false,isSelect=false]" v-bind:value="item | filtersName(filterKey)">
        </li>
      </ul>
    </div>
</template>
<style lang="scss" src="./search-default-select.scss"/>

