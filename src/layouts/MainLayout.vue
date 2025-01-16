<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="savings" />
            MoneyBalls
          </div>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
    class="bg-primary"
    v-model="leftDrawerOpen" 
    :width="250"
    show-if-above 
    bordered>
      <q-list>
        <q-item-label 
        header
        class="text-white">
         Navigation
        </q-item-label>

        <NavLinks v-for="link in Links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLinks from 'src/components/Nav/NavLinks.vue'

const Links = [
  {
    title: 'Home',
    icon: 'savings',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
