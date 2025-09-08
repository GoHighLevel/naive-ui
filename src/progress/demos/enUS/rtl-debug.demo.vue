<markdown>
# RTL Debug
</markdown>

<script lang="ts" setup>
import { unstableProgressRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableProgressRtl]
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />RTL</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical>
        <!-- Line Progress -->
        <n-h4>Line Progress</n-h4>
        <n-progress type="line" :percentage="50" />
        <n-progress type="line" :percentage="75" status="warning" />
        <n-progress type="line" :percentage="100" status="success" />
        <n-progress type="line" :percentage="30" status="error" />
        <!-- Line Progress with inside indicator -->
        <n-progress
          type="line"
          :percentage="60"
          indicator-placement="inside"
          :height="24"
        />
        <!-- Processing Progress -->
        <n-h4>Processing Progress</n-h4>
        <n-progress type="line" :percentage="60" processing />
        <n-progress
          type="line"
          :percentage="75"
          indicator-placement="inside"
          :height="20"
          processing
        />
        <!-- Circle Progress -->
        <n-h4>Circle Progress</n-h4>
        <n-space>
          <n-progress type="circle" :percentage="25" />
          <n-progress type="circle" :percentage="50" status="warning" />
          <n-progress type="circle" :percentage="75" status="success" />
          <n-progress type="circle" :percentage="100" status="error" />
        </n-space>
        <!-- Dashboard Progress -->
        <n-h4>Dashboard Progress</n-h4>
        <n-space>
          <n-progress type="dashboard" :percentage="25" />
          <n-progress type="dashboard" :percentage="50" status="warning" />
          <n-progress type="dashboard" :percentage="75" status="success" />
        </n-space>
        <!-- Multiple Circle Progress -->
        <n-h4>Multiple Circle Progress</n-h4>
        <n-progress
          type="multiple-circle"
          :percentage="[25, 50, 75]"
          :stroke-width="6"
        />
        <!-- Gradient Progress -->
        <n-h4>Gradient Progress</n-h4>
        <n-progress
          type="line"
          :percentage="60"
          :color="{ stops: ['#ff6b6b', '#4ecdc4'] }"
        />
        <n-progress
          type="circle"
          :percentage="70"
          :color="{ stops: ['#667eea', '#764ba2'] }"
        />
        <!-- Custom indicators -->
        <n-h4>Custom Content</n-h4>
        <n-progress type="line" :percentage="85">
          <n-text style="color: rgb(24, 127, 231)">
            Custom Text
          </n-text>
        </n-progress>
        <n-progress type="circle" :percentage="65">
          <n-icon size="40" color="green">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </n-icon>
        </n-progress>
      </n-space>
    </n-config-provider>
  </n-space>
</template>
