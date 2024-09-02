<template>
  <div class="min-h-screen text-gray-900 dark:text-white">
    <div class="container mx-auto px-4 py-8">
      <nav class="p-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Bu alan adı satılıktır!</h1>
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <sun-icon v-if="isDarkMode" class="w-6 h-6 text-gray-900" />
          <moon-icon v-else class="w-6 h-6 text-gray-900" />
        </button>
      </nav>

      <main>
        <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
          <h2
            class="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            vendso.com
          </h2>
          <h3 class="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Bu alan adı hakkında:
          </h3>

          <div class="mb-4">
            <p class="text-lg font-medium text-gray-700 dark:text-gray-300">Fiyat:</p>
            <p class="text-xl font-bold text-blue-500 dark:text-blue-400">₺10.000,00</p>
          </div>

          <div class="mb-4">
            <p class="text-gray-700 dark:text-gray-300">
              vendso.com SaaS çözümleri ve yazılım satış platformları için ideal.
            </p>
          </div>

          <div class="mb-4">
            <div class="flex flex-wrap space-x-2">
              <span
                class="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm font-medium"
              >
                #saas
              </span>
              <span
                class="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm font-medium"
              >
                #vendor
              </span>
              <span
                class="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm font-medium"
              >
                #solution
              </span>
              <span
                class="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm font-medium"
              >
                #girisim
              </span>
            </div>
          </div>

          <button
            @click="contactSeller({ name: 'vendso.com' })"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            İletişime Geç
          </button>
        </div>

        <h2
          class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
        >
          Diğer Satılık Alan Adları
        </h2>

        <div class="space-y-8">
          <div
            v-for="domain in domains"
            :key="domain.name"
            class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3
              class="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            >
              {{ domain.name }}
            </h3>
            <p class="mb-4 text-gray-700 dark:text-gray-300">{{ domain.description }}</p>

            <!-- Butonlar -->
            <div class="flex justify-between items-center">
              <button
                @click="contactSeller(domain)"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                İletişime Geç
              </button>

              <a
                :href="'https://' + domain.name"
                target="_blank"
                class="inline-flex items-center justify-center py-2 px-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="w-full">Siteyi Ziyaret Et</span>
                <svg
                  class="w-4 h-4 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SunIcon, MoonIcon } from 'lucide-vue-next'
import confetti from 'canvas-confetti'

const props = defineProps<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}>()

const domains = ref([
  {
    name: 'kitap.io',
    description: 'Kitap satış platformları ve okuma uygulamaları için ideal bir alan adı.'
  },
  {
    name: 'magaza.io',
    description:
      'magaza.io, e-ticaret platformları, online alışveriş siteleri ve mağaza yönetimi sistemleri için ideal bir alan adıdır.'
  },
  {
    name: 'ilkbilgi.com',
    description: 'Eğitim ve bilgi paylaşım platformları için mükemmel bir seçim.'
  },
  {
    name: 'doluyer.com',
    description: 'Emlak ve gayrimenkul platformları için harika bir seçenek.'
  }
])

const launchConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 160,
    origin: { y: 0.6 }
  })
}

const contactSeller = (domain: { name: string }) => {
  launchConfetti()

  // Basit bir form oluşturarak e-posta gönderme işlemi
  const email = import.meta.env.VITE_CONTACT_EMAIL
  const subject = `${domain.name} için iletişime geçin`
  const body = `${domain.name} için teklif vermek istiyorum.`

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
}
</script>
