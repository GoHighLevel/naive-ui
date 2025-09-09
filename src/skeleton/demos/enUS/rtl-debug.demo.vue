<markdown>
# RTL Debug

Testing skeleton component in RTL mode with all possible variations.
</markdown>

<script lang="ts" setup>
import { unstableSkeletonRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableSkeletonRtl]
const loading = ref(true)
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />RTL</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical>
        <n-h3>Basic Text Skeleton</n-h3>
        <n-skeleton text :repeat="2" />
        <n-skeleton text style="width: 60%" />

        <n-h3>Box Shapes</n-h3>
        <n-space vertical>
          <n-skeleton height="40px" width="33%" />
          <n-skeleton height="40px" width="66%" :sharp="false" />
          <n-skeleton height="40px" round />
          <n-skeleton height="40px" circle />
        </n-space>

        <n-h3>Different Sizes</n-h3>
        <n-space>
          <n-skeleton v-if="loading" :width="146" :sharp="false" size="small" />
          <n-skeleton
            v-if="loading"
            :width="146"
            :sharp="false"
            size="medium"
          />
          <n-skeleton v-if="loading" :width="146" :sharp="false" size="large" />
        </n-space>

        <n-h3>Circle Variants</n-h3>
        <n-space>
          <n-skeleton circle size="small" />
          <n-skeleton circle size="medium" />
          <n-skeleton circle size="large" />
        </n-space>

        <n-h3>Round Button Variants</n-h3>
        <n-space>
          <n-skeleton round size="small" :width="100" />
          <n-skeleton round size="medium" :width="120" />
          <n-skeleton round size="large" :width="140" />
        </n-space>

        <n-h3>Complex Layout Example</n-h3>
        <n-space>
          <n-skeleton circle size="large" />
          <n-space vertical style="flex: 1">
            <n-skeleton text style="width: 40%" />
            <n-skeleton text :repeat="2" />
            <n-skeleton text style="width: 80%" />
          </n-space>
        </n-space>

        <n-h3>Animation Control</n-h3>
        <n-space vertical>
          <n-skeleton text :animated="true" />
          <n-skeleton text :animated="false" />
        </n-space>

        <n-h3>Multiple Repeated Skeletons</n-h3>
        <n-skeleton :repeat="5" height="20px" style="margin-bottom: 8px" />
      </n-space>
    </n-config-provider>
  </n-space>
</template>
