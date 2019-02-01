<template>
    <div class="array-select-content">
      <div class="select-content">
        <input type="button"
               v-on:focus.stop.preven="handleFocus"
               v-on:blur.stop.preven="handleBlur"
               readonly="readonly">
        <div style="color:#ddd">
          <div class="down-arrow " :class="{'up':isHandleBin}"></div>
        </div>
        <div class="transition-item" v-for="item in transitionSelects">{{item | filtersName(filterKey)}}
          <i class="cross"  style="color: #56A7FD" @click.stop.preven.self="onRemoveItem(item)"></i>
        </div>
      </div>
      <under-line :focus="isFocused"></under-line>
      <ul v-show="isSelect && selectdatas.length>1" >
        <li v-for="item in transitionSelectdatas" @click.stop.preven="onItemSelect(item)">
          <input type="button" @click.stop.preven="onItemSelect(item)" v-on:focus.stop.preven="[isFocused=true,isSelect=true]" v-on:blur.stop.preven="[isFocused=false,isSelect=false]" v-bind:value="item | filtersName(filterKey)"></li>
      </ul>
    </div>
</template>
<style lang="scss" src="./array-select.scss"/>

