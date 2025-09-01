<markdown>
# Rtl Debug
</markdown>

<script lang="ts" setup>
import { CheckmarkCircleOutline, CloseOutline } from '@vicons/ionicons5'
import { unstableSwitchRtl } from 'naive-ui'
import { ref } from 'vue'

const value = ref(false)
const rtlEnabled = ref(false)
const rtlStyles = [unstableSwitchRtl]
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical>
        <n-switch v-model:value="value">
          Normal Switch
        </n-switch>
        <n-switch v-model:value="value" size="small">
          Small Switch
        </n-switch>
        <n-switch v-model:value="value" size="large">
          Large Switch
        </n-switch>
        <n-switch v-model:value="value" :round="false">
          Non-round Switch
        </n-switch>
        <n-switch v-model:value="value" loading>
          Loading Switch
        </n-switch>
        <n-switch v-model:value="value" disabled>
          Disabled Switch
        </n-switch>
        <n-switch v-model:value="value">
          <template #checked>
            ON
          </template>
          <template #unchecked>
            OFF
          </template>
        </n-switch>
        <n-switch v-model:value="value">
          <template #checked-icon>
            <n-icon :component="CheckmarkCircleOutline" />
          </template>
          <template #unchecked-icon>
            <n-icon :component="CloseOutline" />
          </template>
        </n-switch>
      </n-space>
    </n-config-provider>
  </n-space>
</template>
