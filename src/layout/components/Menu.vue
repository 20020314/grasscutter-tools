<template>
  <n-menu
    mode="horizontal"
    :value="activeKey"
    :options="menus"
    :collapsed-width="15"
    @update:value="handleUpdateMenu"
  />
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import type { MenuOption } from 'naive-ui/es/menu/src/interface'
  import modules from '@/router/modules'

  const { tm } = useI18n()

  const menus = computed(() => transformRouteToMenu(modules))

  /** 路由转换为菜单 */
  function transformRouteToMenu(routes: Route.RecordRaw[]): Route.Menu[] {
    const menus: Route.Menu[] = []
    routes.forEach(route => {
      const { name } = route
      const routeMessage: Message['route'] = tm('data.route')
      const label = routeMessage[name]
      /** 当子路由仅有一个时，以该子路由作为菜单 */
      if (route.meta?.isRoot && route.children && route.children.length == 1) {
        const child = route.children[0]
        const menu: Route.Menu = {
          key: child.name,
          label,
          icon: route.meta?.icon || child.meta?.icon
        }
        menus.push(menu)
      } else {
        const menu: Route.Menu = {
          key: route.name,
          label,
          icon: route.meta?.icon,
          children: route.children && transformRouteToMenu(route.children)
        }
        menus.push(menu)
      }
    })
    return menus
  }

  const router = useRouter()
  const route = useRoute()

  const activeKey = computed(() => route.name as string)

  function handleUpdateMenu(_key: string, item: MenuOption) {
    const menuItem = item as Route.Menu
    router.push({ name: menuItem.key })
  }
</script>
