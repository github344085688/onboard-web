<template>
  <div class="tags-input">
    <div class="text-field-content">
        <div class="tags-content">
            <div class="tag-item" v-for="item in transitionTagDatas">{{item}}
              <i class="cross" style="color: #56A7FD" @click.stop.preven.self="onRemoveItem(item)"></i>
            </div>
          <input type="text"
                 v-on:focus="handleFocus"
                 v-on:blur="handleBlur"
                 v-bind:name="name"
                 v-model="value"
                 :placeholder="transitionPlaceholder">
        </div>
        <under-line :focus="isFocused"></under-line>
    </div>
  </div>
</template>
<style lang="scss" src="./tags-input.scss"/>

