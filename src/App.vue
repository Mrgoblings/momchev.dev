<script setup lang="ts">
import { ref, Ref, onMounted, nextTick, onUnmounted } from "vue";
import Page from "./components/Page.vue";

const DEBOUNSE_TIME = 1000; // 1 second

const pages: Ref<(InstanceType<typeof Page> | null)[]> = ref([]);
const currentPage = ref(2);
let isScrolling = false; // To prevent multiple triggers during animation

const scrollToPage = (pageIndex: number) => {
  const pageElement = pages.value[pageIndex];
  if (pageElement && pageElement.$el instanceof HTMLElement) {
    pageElement.$el.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
};

const nextPage = (hasDebounce: boolean = false) => {
  if (isScrolling) return;
  isScrolling = true;
  currentPage.value = (currentPage.value + 1) % pages.value.length;
  scrollToPage(currentPage.value);

  if (hasDebounce) resetScrollingDebounce();
  else resetScrolling();
};

const prevPage = (hasDebounce: boolean = false) => {
  if (isScrolling) return;
  isScrolling = true;
  currentPage.value =
    (currentPage.value - 1 + pages.value.length) % pages.value.length;
  scrollToPage(currentPage.value);

  if (hasDebounce) resetScrollingDebounce();
  else resetScrolling();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (["Space", "ArrowRight", "ArrowUp"].includes(event.code)) {
    nextPage();
  } else if (["ArrowLeft", "ArrowDown"].includes(event.code)) {
    prevPage();
  }
};

const handleWheel = (event: WheelEvent) => {
  if (isScrolling) return;

  if (event.deltaY > 0 || event.deltaX > 0) {
    nextPage(true);
  } else if (event.deltaY < 0 || event.deltaX < 0) {
    prevPage(true);
  }
};

const resetScrolling = () => {
  isScrolling = false;
};

const resetScrollingDebounce = () => {
  setTimeout(resetScrolling, DEBOUNSE_TIME);
};

onMounted(async () => {
  await nextTick();
  scrollToPage(currentPage.value);

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("wheel", handleWheel, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("wheel", handleWheel);
});
</script>

<template>
  <div id="pages-container" class="h-screen relative">
    <!-- Pages -->
    <Page v-for="i in 15" :key="i" :id="'page-' + i" ref="pages">
      <div class="border-l-4 w-full h-full flex justify-center items-center">
        <h1 class="font-bold text-6xl">Page {{ i }}</h1>
      </div>
    </Page>
  </div>
  <!-- Left Button -->
  <button
    @click="prevPage()"
    class="xl:hidden fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg"
  >
    ←
  </button>

  <!-- Right Button -->
  <button
    @click="nextPage()"
    class="xl:hidden fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg"
  >
    →
  </button>
</template>

<style scoped>
/* Add additional styling for buttons */
button {
  font-size: 24px;
  cursor: pointer;
}
</style>
