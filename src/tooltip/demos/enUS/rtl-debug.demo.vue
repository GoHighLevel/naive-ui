<markdown>
# RTL Debug

Comprehensive RTL test including all tooltip features.
</markdown>

<script lang="ts" setup>
import { unstableTooltipRtl, useMessage } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableTooltipRtl]
const message = useMessage()
const showManualTooltip = ref(false)

function handleUpdateShow(show: boolean) {
  message.success(`Tooltip visibility: ${show}`)
}
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />RTL Mode</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical :size="24">
        <!-- Basic Examples -->
        <n-divider title-placement="left">
          Basic Tooltips
        </n-divider>
        <n-space :size="16" :wrap="true">
          <n-tooltip trigger="hover">
            <template #trigger>
              <n-button>Basic</n-button>
            </template>
            If it looks like a duck, walks like a duck, and quacks like a
            duck...it must be a duck.
          </n-tooltip>

          <n-tooltip trigger="hover" :show-arrow="false">
            <template #trigger>
              <n-button>No Arrow</n-button>
            </template>
            This tooltip has no arrow, same as popover.
          </n-tooltip>

          <n-tooltip trigger="click">
            <template #trigger>
              <n-button>With Header/Footer</n-button>
            </template>
            <template #header>
              <span>Header Text</span>
            </template>
            <template #footer>
              <span>Footer Text</span>
            </template>
            <span>This tooltip demonstrates RTL text alignment and direction with
              header and footer.</span>
          </n-tooltip>
        </n-space>

        <!-- Trigger Examples -->
        <n-divider title-placement="left">
          Trigger Types
        </n-divider>
        <n-space :size="16" :wrap="true">
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button>Hover</n-button>
            </template>
            <span>I wish they all could be California girls</span>
          </n-tooltip>

          <n-tooltip placement="bottom" trigger="click">
            <template #trigger>
              <n-button>Click</n-button>
            </template>
            <span>I wish they all could be California girls</span>
          </n-tooltip>

          <n-tooltip :show="showManualTooltip" placement="bottom">
            <template #trigger>
              <n-button @click="showManualTooltip = !showManualTooltip">
                Manual
              </n-button>
            </template>
            <span>I wish they all could be California girls</span>
          </n-tooltip>
        </n-space>

        <!-- Event Examples -->
        <n-divider title-placement="left">
          With Events
        </n-divider>
        <n-space :size="16" :wrap="true">
          <n-tooltip
            placement="bottom"
            trigger="hover"
            @update:show="handleUpdateShow"
          >
            <template #trigger>
              <n-button>Hover Event</n-button>
            </template>
            <span>Shows message when visibility changes</span>
          </n-tooltip>

          <n-tooltip
            placement="bottom"
            trigger="click"
            @update:show="handleUpdateShow"
          >
            <template #trigger>
              <n-button>Click Event</n-button>
            </template>
            <span>Shows message when visibility changes</span>
          </n-tooltip>
        </n-space>

        <!-- Body Style Examples -->
        <n-divider title-placement="left">
          Custom Styling
        </n-divider>
        <n-space :size="16" :wrap="true">
          <n-tooltip :style="{ maxWidth: '400px' }" trigger="click">
            <template #trigger>
              <n-button>Long Text</n-button>
            </template>
            I wish they all could be California girls. I wish they all could be
            California girls. I wish they all could be California girls.
          </n-tooltip>

          <n-tooltip
            :style="{
              maxWidth: '200px',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            }"
            trigger="hover"
          >
            <template #trigger>
              <n-button>Styled</n-button>
            </template>
            Custom styled tooltip with gradient background.
          </n-tooltip>
        </n-space>

        <!-- Placement Examples -->
        <n-divider title-placement="left">
          All Placements
        </n-divider>
        <n-space :size="12" :wrap="true">
          <n-tooltip placement="top-start" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Top Start
              </n-button>
            </template>
            Top Start
          </n-tooltip>

          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Top
              </n-button>
            </template>
            Top Center
          </n-tooltip>

          <n-tooltip placement="top-end" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Top End
              </n-button>
            </template>
            Top End
          </n-tooltip>

          <n-tooltip placement="left-start" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Left Start
              </n-button>
            </template>
            Left Start
          </n-tooltip>

          <n-tooltip placement="left" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Left
              </n-button>
            </template>
            Left Center
          </n-tooltip>

          <n-tooltip placement="left-end" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Left End
              </n-button>
            </template>
            Left End
          </n-tooltip>

          <n-tooltip placement="right-start" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Right Start
              </n-button>
            </template>
            Right Start
          </n-tooltip>

          <n-tooltip placement="right" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Right
              </n-button>
            </template>
            Right Center
          </n-tooltip>

          <n-tooltip placement="right-end" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Right End
              </n-button>
            </template>
            Right End
          </n-tooltip>

          <n-tooltip placement="bottom-start" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Bottom Start
              </n-button>
            </template>
            Bottom Start
          </n-tooltip>

          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Bottom
              </n-button>
            </template>
            Bottom Center
          </n-tooltip>

          <n-tooltip placement="bottom-end" trigger="hover">
            <template #trigger>
              <n-button size="small">
                Bottom End
              </n-button>
            </template>
            Bottom End
          </n-tooltip>
        </n-space>
      </n-space>
    </n-config-provider>
  </n-space>
</template>
