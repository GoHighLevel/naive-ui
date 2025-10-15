<markdown>
# RTL Debug
</markdown>

<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'

import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
import { unstableUploadsRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableUploadsRtl]

const fileList = ref<UploadFileInfo[]>([
  {
    id: 'a',
    name: 'error-upload-file.png',
    status: 'error'
  },
  {
    id: 'b',
    name: 'finished-text-document.doc',
    status: 'finished',
    type: 'text/plain'
  },
  {
    id: 'c',
    name: 'image-with-url.png',
    status: 'finished',
    url: '__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'd',
    name: 'uploading-document-99percent.doc',
    status: 'uploading',
    percentage: 60
  }
])
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />RTL</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical>
        <n-upload
          action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :default-file-list="fileList"
          list-type="image-card"
        >
          Click to Upload
        </n-upload>

        <n-upload
          action="http://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :default-file-list="fileList"
          list-type="image"
        >
          <n-button>Upload File</n-button>
        </n-upload>

        <n-upload
          action="http://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :default-file-list="fileList"
          list-type="text"
        >
          <n-button>Upload File</n-button>
        </n-upload>

        <n-upload
          multiple
          directory-dnd
          action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          :max="5"
        >
          <n-upload-dragger>
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <ArchiveIcon />
              </n-icon>
            </div>
            <n-text style="font-size: 16px">
              Click or drag a file to this area to upload
            </n-text>
            <n-p depth="3" style="margin: 8px 0 0 0">
              Strictly prohibit from uploading sensitive information. For
              example, your bank card PIN or your credit card expiry date.
            </n-p>
          </n-upload-dragger>
        </n-upload>
      </n-space>
    </n-config-provider>
  </n-space>
</template>
