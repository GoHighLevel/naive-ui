<markdown>
# RTL Debug

Comprehensive RTL testing for all breadcrumb features and configurations.
</markdown>

<script lang="ts" setup>
import { MdCash } from '@vicons/ionicons4'
import { unstableBreadcrumbRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableBreadcrumbRtl]

const dropdownOptions1 = [
  { label: 'Dashboard', key: 'dashboard' },
  { label: 'Analytics', key: 'analytics' },
  { label: 'Reports', key: 'reports' }
]

const dropdownOptions2 = [
  { label: 'User Profile', key: 'profile' },
  { label: 'Account Settings', key: 'settings' },
  { label: 'Billing', key: 'billing' }
]

function handleClick(e: MouseEvent) {
  console.log('Breadcrumb item clicked:', e)
}
</script>

<template>
  <n-space vertical size="large">
    <n-space>
      <n-switch v-model:value="rtlEnabled" />
      <span>RTL Mode</span>
    </n-space>

    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-space vertical size="large">
        <!-- Basic Breadcrumb -->
        <n-card title="1. Basic Breadcrumb">
          <n-breadcrumb>
            <n-breadcrumb-item>
              <n-icon :component="MdCash" /> Home
            </n-breadcrumb-item>
            <n-breadcrumb-item>
              <n-icon :component="MdCash" /> Categories
            </n-breadcrumb-item>
            <n-breadcrumb-item>
              <n-icon :component="MdCash" /> Products
            </n-breadcrumb-item>
            <n-breadcrumb-item> Current Page </n-breadcrumb-item>
          </n-breadcrumb>
        </n-card>

        <!-- Custom Global Separator -->
        <n-card title="2. Custom Global Separators">
          <n-alert
            type="info"
            title="Custom RTL Separator"
            style="margin-bottom: 16px"
          >
            Directional separators like >, →, » should be manually reversed for
            proper RTL support. Non-directional separators like •, |, ~ work
            fine in both directions.
          </n-alert>
          <n-space vertical>
            <div>
              <n-breadcrumb :separator="rtlEnabled ? '>' : '<'">
                <n-breadcrumb-item>
                  <n-icon :component="MdCash" /> Home
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                  <n-icon :component="MdCash" /> Products
                </n-breadcrumb-item>
                <n-breadcrumb-item> Electronics </n-breadcrumb-item>
              </n-breadcrumb>
            </div>

            <div>
              <n-breadcrumb :separator="rtlEnabled ? '←' : '→'">
                <n-breadcrumb-item> Start </n-breadcrumb-item>
                <n-breadcrumb-item> Middle </n-breadcrumb-item>
                <n-breadcrumb-item> End </n-breadcrumb-item>
              </n-breadcrumb>
            </div>

            <div>
              <n-breadcrumb :separator="rtlEnabled ? '»' : '«'">
                <n-breadcrumb-item> First </n-breadcrumb-item>
                <n-breadcrumb-item> Second </n-breadcrumb-item>
                <n-breadcrumb-item> Third </n-breadcrumb-item>
              </n-breadcrumb>
            </div>
            <div>
              <n-breadcrumb separator="•">
                <n-breadcrumb-item> Dashboard </n-breadcrumb-item>
                <n-breadcrumb-item> Analytics </n-breadcrumb-item>
                <n-breadcrumb-item> Reports </n-breadcrumb-item>
              </n-breadcrumb>
            </div>
          </n-space>
        </n-card>

        <!-- Per-Item Custom Separators -->
        <n-card title="3. Per-Item Custom Separators with RTL Awareness">
          <n-breadcrumb>
            <n-breadcrumb-item :separator="rtlEnabled ? '>>' : '<<'">
              <n-icon :component="MdCash" /> Home
            </n-breadcrumb-item>
            <n-breadcrumb-item separator="~">
              <n-icon :component="MdCash" /> Categories
            </n-breadcrumb-item>
            <n-breadcrumb-item separator="|">
              Products
            </n-breadcrumb-item>
            <n-breadcrumb-item> Current Item </n-breadcrumb-item>
          </n-breadcrumb>
        </n-card>

        <!-- Custom Separator Slots -->
        <n-card title="4. Custom Separator Slots">
          <n-space vertical>
            <div>
              <n-text depth="3">
                Icon Separators
              </n-text>
              <n-breadcrumb>
                <n-breadcrumb-item>
                  Home
                  <template #separator>
                    <n-icon :component="MdCash" />
                  </template>
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                  Products
                  <template #separator>
                    <n-text type="primary">
                      →
                    </n-text>
                  </template>
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                  Electronics
                  <template #separator>
                    <n-text type="success">
                      ★
                    </n-text>
                  </template>
                </n-breadcrumb-item>
                <n-breadcrumb-item> Final </n-breadcrumb-item>
              </n-breadcrumb>
            </div>

            <div>
              <n-text depth="3">
                Mixed Content Separators
              </n-text>
              <n-breadcrumb>
                <n-breadcrumb-item>
                  Step 1
                  <template #separator>
                    <n-tag size="tiny" type="info">
                      NEXT
                    </n-tag>
                  </template>
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                  Step 2
                  <template #separator>
                    <n-text type="warning">
                      »
                    </n-text>
                  </template>
                </n-breadcrumb-item>
                <n-breadcrumb-item> Step 3 </n-breadcrumb-item>
              </n-breadcrumb>
            </div>
          </n-space>
        </n-card>

        <!-- Links and Clickable Items -->
        <n-card title="5. Links and Clickable Items">
          <n-space vertical>
            <div>
              <n-text depth="3">
                With href Links
              </n-text>
              <n-breadcrumb>
                <n-breadcrumb-item href="/">
                  <n-icon :component="MdCash" /> Home
                </n-breadcrumb-item>
                <n-breadcrumb-item href="/products">
                  <n-icon :component="MdCash" /> Products
                </n-breadcrumb-item>
                <n-breadcrumb-item href="/products/electronics">
                  Electronics
                </n-breadcrumb-item>
                <n-breadcrumb-item> Current Product </n-breadcrumb-item>
              </n-breadcrumb>
            </div>

            <div>
              <n-text depth="3">
                With Click Handlers
              </n-text>
              <n-breadcrumb>
                <n-breadcrumb-item :on-click="handleClick">
                  <n-icon :component="MdCash" /> Clickable Home
                </n-breadcrumb-item>
                <n-breadcrumb-item :on-click="handleClick">
                  Clickable Category
                </n-breadcrumb-item>
                <n-breadcrumb-item :clickable="false">
                  Non-clickable Item
                </n-breadcrumb-item>
                <n-breadcrumb-item> Active Item </n-breadcrumb-item>
              </n-breadcrumb>
            </div>
          </n-space>
        </n-card>

        <!-- Dropdown Integration -->
        <n-card title="6. Dropdown Integration">
          <n-breadcrumb :separator="rtlEnabled ? '>' : '<'">
            <n-breadcrumb-item>
              <n-dropdown :options="dropdownOptions1">
                <div style="cursor: pointer">
                  <n-icon :component="MdCash" /> Admin Panel
                  <n-text type="primary">
                    ↓
                  </n-text>
                </div>
              </n-dropdown>
            </n-breadcrumb-item>
            <n-breadcrumb-item>
              <n-dropdown :options="dropdownOptions2">
                <div style="cursor: pointer">
                  User Management
                  <n-text type="primary">
                    ↓
                  </n-text>
                </div>
              </n-dropdown>
            </n-breadcrumb-item>
            <n-breadcrumb-item> User Details </n-breadcrumb-item>
          </n-breadcrumb>
        </n-card>

        <!-- Long Path Example -->
        <n-card title="7. Long Path Example">
          <n-breadcrumb :separator="rtlEnabled ? '/' : '>'">
            <n-breadcrumb-item href="/">
              Root
            </n-breadcrumb-item>
            <n-breadcrumb-item href="/var">
              var
            </n-breadcrumb-item>
            <n-breadcrumb-item href="/var/www">
              www
            </n-breadcrumb-item>
            <n-breadcrumb-item href="/var/www/html">
              html
            </n-breadcrumb-item>
            <n-breadcrumb-item href="/var/www/html/assets">
              assets
            </n-breadcrumb-item>
            <n-breadcrumb-item href="/var/www/html/assets/images">
              images
            </n-breadcrumb-item>
            <n-breadcrumb-item> current-file.jpg </n-breadcrumb-item>
          </n-breadcrumb>
        </n-card>
      </n-space>
    </n-config-provider>
  </n-space>
</template>

<style scoped>
.n-card {
  margin-bottom: 16px;
}
</style>
