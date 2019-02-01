<template>
  <div class="step-complete" v-bind:style="{'min-height':isFirst ? '70px':'110px'}">
    <div class="step-box">
      <div class="top-line" v-if="!isFirst">
        <div class="line-grey"></div>
        <div class="line-blue up" :class="{'transitionHeight':isDoing}" v-bind:style="{'height':completeSchedule != 0 ? '100%':'0'}"></div>
      </div>
      <div class="circle-empty-box" :class="{'circle-empty-smBox':completeSchedule != 1}">
        <div class="circle-empty " :class="{'animated zoomIn faster':isDoing}" v-if="completeSchedule == 1">
        </div>
        <div class="circle" :class="{'underway':isDoing}" v-if="completeSchedule == 1">{{step}}</div>
        <div class="circle-grey" :class="{'zoomOut':completeSchedule == 1}">{{step}}</div>
        <div class="circle-blue" v-if="completeSchedule == 2"><i class="tick" style="margin-left: -5px;"></i></div>
      </div>
      <div class="top-line">
        <div class="line-grey"></div>
        <div class="line-blue down" :class="{'transitionHeight':isDoing}" v-bind:style="{'height':completeSchedule != 0 ? '100%':'0'}"></div>
      </div>
    </div>
    <div class="step-title-box"
         v-bind:style="{'color':completeSchedule ==0 ? '#E5E5E5':'#56A7FD','padding': isFirst  ? '0px 15px':'10px 15px'}">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" src="./step.scss"/>
