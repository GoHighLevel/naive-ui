<markdown>
# RTL Debug

Testing radio components in RTL mode with all possible variations from existing demos.
</markdown>

<script lang="ts" setup>
import { unstableRadioRtl, unstableSpaceRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableRadioRtl, unstableSpaceRtl]

// Basic demo state
const checkedValueRef = ref<string | null>(null)
const disabled = ref(true)
const checkedValue = checkedValueRef

function handleChange(e: Event) {
  checkedValueRef.value = (e.target as HTMLInputElement).value
}

// Group demo state
const groupValue = ref(null)
const songs = [
  {
    value: 'Rock\'n\'Roll Star',
    label: 'Rock\'n\'Roll Star'
  },
  {
    value: 'Shakermaker',
    label: 'Shakermaker'
  },
  {
    value: 'Live Forever',
    label: 'Live Forever'
  },
  {
    value: 'Up in the Sky',
    label: 'Up in the Sky'
  },
  {
    value: '...',
    label: '...'
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})

// Button group demo state
const buttonValue = ref(null)
const disabled2 = ref(false)
const disabled1 = ref(false)

// Size demo state
const sizeValue = ref(null)
const sizeDisabled2 = ref(false)
const sizeDisabled1 = ref(false)
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />RTL</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical size="large">
        <n-divider title-placement="left">
          Basic Demo
        </n-divider>
        <n-space>
          <n-radio
            :checked="checkedValue === 'Definitely Maybe'"
            value="Definitely Maybe"
            name="basic-demo"
            @change="handleChange"
          >
            Definitely Maybe
          </n-radio>
          <n-radio
            :checked="checkedValue === 'Be Here Now'"
            value="Be Here Now"
            name="basic-demo"
            @change="handleChange"
          >
            Be Here Now
          </n-radio>
          <n-radio
            :checked="checkedValue === 'Be Here Now'"
            value="Be Here Now"
            :disabled="disabled"
            name="basic-demo"
            label="Be Here Now"
            @change="handleChange"
          />
          <n-switch v-model:value="disabled" />
        </n-space>

        <n-divider title-placement="left">
          Group Demo
        </n-divider>
        <n-radio-group v-model:value="groupValue" name="radiogroup">
          <n-space>
            <n-radio
              v-for="song in songs"
              :key="song.value"
              :value="song.value"
              :label="song.label"
            />
          </n-space>
        </n-radio-group>

        <n-divider title-placement="left">
          Button Group Demo
        </n-divider>
        <n-space vertical>
          <n-radio-group v-model:value="buttonValue" name="radiobuttongroup1">
            <n-radio-button
              v-for="song in songs"
              :key="song.value"
              :value="song.value"
              :disabled="
                (song.label === 'Live Forever' && disabled1)
                  || (song.label === 'Shakermaker' && disabled2)
              "
              :label="song.label"
            />
          </n-radio-group>
          <n-space>
            <n-checkbox v-model:checked="disabled2" style="margin-right: 12px">
              Disable Shakemaker
            </n-checkbox>
            <n-checkbox v-model:checked="disabled1">
              Disable Live Forever
            </n-checkbox>
          </n-space>
        </n-space>

        <n-divider title-placement="left">
          Size Demo
        </n-divider>
        <n-space vertical>
          <n-radio-group
            v-model:value="sizeValue"
            name="radiobuttongroup2"
            size="medium"
          >
            <n-radio-button
              v-for="song in songs"
              :key="song.value"
              :value="song.value"
              :disabled="
                (song.label === 'Live Forever' && sizeDisabled1)
                  || (song.label === 'Shakermaker' && sizeDisabled2)
              "
            >
              {{ song.label }}
            </n-radio-button>
          </n-radio-group>
          <n-radio-group
            v-model:value="sizeValue"
            name="radiobuttongroup3"
            size="large"
          >
            <n-radio-button
              v-for="song in songs"
              :key="song.value"
              :value="song.value"
              :disabled="
                (song.label === 'Live Forever' && sizeDisabled1)
                  || (song.label === 'Shakermaker' && sizeDisabled2)
              "
            >
              {{ song.label }}
            </n-radio-button>
          </n-radio-group>
          <n-space>
            <n-checkbox
              v-model:checked="sizeDisabled2"
              style="margin-right: 12px"
            >
              Disable Shakemaker
            </n-checkbox>
            <n-checkbox v-model:checked="sizeDisabled1">
              Disable Live Forever
            </n-checkbox>
          </n-space>
        </n-space>

        <n-divider title-placement="left">
          RTL Languages Demo
        </n-divider>
        <n-space vertical>
          <n-radio-group v-model:value="groupValue" name="mixed-group">
            <n-space>
              <n-radio value="morning">
                صباح الخير (Good Morning)
              </n-radio>
              <n-radio value="afternoon">
                مساء الخير (Good Afternoon)
              </n-radio>
              <n-radio value="evening">
                تصبح على خير (Good Evening)
              </n-radio>
            </n-space>
          </n-radio-group>

          <n-radio-group v-model:value="buttonValue" name="mixed-buttons">
            <n-radio-button value="arabic">
              العربية
            </n-radio-button>
            <n-radio-button value="hebrew">
              עברית
            </n-radio-button>
            <n-radio-button value="english">
              English
            </n-radio-button>
            <n-radio-button value="persian">
              فارسی
            </n-radio-button>
          </n-radio-group>
        </n-space>
      </n-space>
    </n-config-provider>
  </n-space>
</template>
