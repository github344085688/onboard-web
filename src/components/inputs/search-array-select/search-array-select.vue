<template>
  <div class="search-array-select">
    <div class="select-content">
        <div class="transition-item" v-for="item in transitionSelects">{{item | filtersName(filterKey)}}
          <i class="cross"  style="color: #56A7FD" @click.stop.preven.self="onRemoveItem(item)"></i>
        </div>
      <input type="text"
             v-on:focus.stop.preven="handleFocus"
             v-on:blur.stop.preven="handleBlur"
             placeholder="input to select"
             v-model="inputValue"
             v-rx-event:input="searchByInput"
      >
      <div style="color:#ddd">
        <div class="down-arrow " :class="{'up':isHandleBin}"></div>
      </div>

    </div>
    <under-line :focus="isFocused"></under-line>
    <ul v-if="isSearch">
      <li style="padding-left: 40% ;color: #56A7FD"  ><div class="loaders"></div></li>
    </ul>
    <ul v-show="isSelect && selectdatas.length>1">
      <li v-for="item in transitionSelectdatas" @click.stop.preven="onItemSelect(item)">
        <input type="button" @click.stop.preven="onItemSelect(item)"
               v-on:focus.stop.preven="[isFocused=true,isSelect=true]"
               v-on:blur.stop.preven="[isFocused=false,isSelect=false]" v-bind:value="item | filtersName(filterKey)">
      </li>
    </ul>
  </div>
</template>
<style lang="scss" src="./search-array-select.scss"/>

