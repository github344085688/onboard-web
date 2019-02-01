<template>
  <button  class="exports-button " type="button"  @click.stop.preven="onSearch" :disabled="isExport" >
    <div class="flex-1 center">
      <span>{{value}}</span>
      <div class="loaders" v-if="isExport"></div>
    </div>
    <div class="line-between"></div>
    <div class="center" style="width:25%; height: 24px;">
      <i class="nabla-6"></i>
    </div>
    <div class="exports-drop-down" v-if="isSearch">
      <div class="exports-option " v-for="option in exports" @click.stop.preven.self="onSelectExport(option)">{{option}}</div>
    </div>
  </button >
</template>
<style lang="scss" src="./exports-button.scss"/>
