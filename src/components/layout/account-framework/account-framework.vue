<template>
  <section>
    <article>
      <slot></slot>
    </article>
    <aside style="padding-top: 100px;">
      <div class="roll">
        <div v-for="(itemStep , index) in stepDitail"   :key="index" @click.stop.preven="onClickStep( index+1)">
          <step  :step="index + 1"  :isFirst="itemStep.isFirst" :isDoing="itemStep.isDoing" :completeSchedule="itemStep.completeSchedule">
            <div v-html="itemStep.title"></div>
          </step>
        </div>
      </div>
    </aside>
  </section>
</template>
<style lang="scss" src="./account-framework.scss"/>

