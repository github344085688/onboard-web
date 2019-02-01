<template >
  <div class="progress-lists">
    <div class="label-box">
      <div class="accomplish">
        <i class="tick blue" v-if="isfinish"></i>
      </div>
      <label>{{label}}</label>
      <div class="listNumber">{{listNumber}}</div>
      <div class="line-drawing"></div>
    </div>
    <div class="list-detail">
      <slot></slot>
    </div>
  </div>

</template>
<style lang="scss" src="./progress-lists.scss"/>
