<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import DomainSaleLandingPage from './components/DomainSaleLandingPage.vue'

const isDarkMode = ref(false)

function updateDarkMode(value: boolean) {
  if (value) {
    document.documentElement.classList.add('dark')
    document.body.classList.add('bg-gray-900', 'text-white')
    document.body.classList.remove('bg-white', 'text-gray-900')
  } else {
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('bg-gray-900', 'text-white')
    document.body.classList.add('bg-white', 'text-gray-900')
  }
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value))
  updateDarkMode(isDarkMode.value)
}

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    isDarkMode.value = JSON.parse(savedMode)
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateDarkMode(isDarkMode.value)
})
</script>

<template>
  <DomainSaleLandingPage :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
</template>

<style>
body {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
