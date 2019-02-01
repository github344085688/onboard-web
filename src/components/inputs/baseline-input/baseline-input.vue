<template>
  <div class="input-baseline">
    <div class="text-field-content">
      <input type="text"
      v-on:focus="handleFocus" v-on:blur="handleBlur" v-on:input="handleInput"
        v-bind:name="name" v-model="transitionValue" :placeholder="placeholder" >
      <under-line :focus="isFocused" :underLineColor="transitionIsValidate ? 'red' : ''"></under-line>
    </div>
  </div>
</template>
<style lang="scss" src="./baseline-input.scss" />
