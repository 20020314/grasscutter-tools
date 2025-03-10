<template>
  <n-grid cols="s:5 m:6 l:7 xl:8 2xl:9" responsive="screen" class="px-4 of-auto">
    <n-gi
      v-for="(item, index) in showList"
      :key="index"
      class="h-auto m-0.5 flex-col border-slate-400 border-1"
      :style="style"
    >
      <n-input
        v-show="settingStore.mod.showName"
        v-model:value="item.name"
        size="small"
        class="text-center bg-black/10"
        style="border-radius: 0"
        @change="write_file(item)"
      />
      <n-input
        v-show="settingStore.mod.showAuthor"
        v-model:value="item.submitter.name"
        size="small"
        class="text-center bg-black/10"
        style="border-radius: 0"
        @change="write_file(item)"
      />
      <div class="grow relative bg-black/10 hover:(cursor-pointer opacity-50 transition-opacity-300)">
        <div
          class="absolute h-full w-full flex-col flex-center z1 opacity-0 hover:(opacity-100 transition-opacity-300)"
        >
          <n-checkbox :checked="item.enabled" class="w-25% h-auto aspect-ratio-1" @click="handleCheck(item)" />
          <n-button text class="w-30% h-30%">
            <icon-material-symbols-folder-open-outline
              preserveAspectRatio="xMaxYMax meet"
              width="100%"
              height="100%"
              @click="open_dir(item.path)"
            />
          </n-button>
        </div>
        <n-image
          lazy
          preview-disabled
          object-fit="contain"
          :src="item.src"
          :intersection-observer-options="{
            root: '#app'
          }"
          class="rd-1 absolute z0 h-full w-full justify-center p-1 border-slate-400"
          @error="loadLocalImg(item)"
        />
      </div>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
  import { useSettingStore } from '@/stores'
  import { read_local_img, open_dir, rename, write_file } from '@/utils'

  const props = defineProps<{
    modList: Mod[]
    keyword: string
  }>()

  const settingStore = useSettingStore()

  const showList = computed(() =>
    props.modList.filter(item => item.name.includes(props.keyword) || item.submitter.name.includes(props.keyword))
  )

  const style = computed(() => `aspect-ratio: ${settingStore.mod.width}/${settingStore.mod.height}`)

  async function handleCheck(mod: Mod) {
    const { enabled, path } = mod
    const index = path.lastIndexOf('/') + 1
    let newPath
    if (enabled) {
      newPath = path.slice(0, index) + 'DISABLED_' + path.slice(index)
    } else {
      newPath = path.replace('DISABLED_', '')
    }
    await rename(path, newPath)
    mod.path = newPath
    mod.enabled = !enabled
  }

  async function loadLocalImg(mod: Mod) {
    if (/(http|https):\/\/([\w.]+\/?)\S*/.test(mod.src)) return
    mod.src = await read_local_img(mod.path)
  }

  const emits = defineEmits<{
    (e: 'update:num', value: string): void
  }>()

  onActivated(() => emits('update:num', props.modList.filter(item => item.enabled).length + '/' + props.modList.length))

  watchEffect(() => emits('update:num', props.modList.filter(item => item.enabled).length + '/' + props.modList.length))
</script>

<style scoped lang="scss">
  :deep(.n-checkbox .n-checkbox-box) {
    height: 100%;
    width: 100%;
  }
  :deep(.n-checkbox .n-checkbox-box-wrapper) {
    height: 100%;
    width: 100%;
  }
</style>
