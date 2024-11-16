<script setup lang="ts">
import { ref, Ref, onMounted, nextTick, onUnmounted } from "vue";
import Page from "./components/Page.vue";

const pages: Ref<(InstanceType<typeof Page> | null)[]> = ref([]);
const scrollToPage = (pageIndex: number) => {
  const pageElement = pages.value[pageIndex];
  if (pageElement && pageElement.$el instanceof HTMLElement) {
    pageElement.$el.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
};

const currentPage = ref(2);

const handleKeydown = (event: KeyboardEvent) => {
  if (
    event.code === "Space" ||
    event.code === "ArrowRight" ||
    event.code === "ArrowUp"
  ) {
    currentPage.value = (currentPage.value + 1) % pages.value.length;
    scrollToPage(currentPage.value);
  } else if (event.code === "ArrowLeft" || event.code === "ArrowDown") {
    currentPage.value =
      (currentPage.value - 1 + pages.value.length) % pages.value.length;
    scrollToPage(currentPage.value);
  }
};

onMounted(async () => {
  await nextTick();
  scrollToPage(currentPage.value);
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Page v-for="i in 15" :key="i" :id="'page-' + i" ref="pages">
    <div class="border-l-4 w-full h-full flex justify-center items-center">
      <h1 class="font-bold text-6xl">Page {{ i }}</h1>
    </div>
  </Page>
</template>

<style scoped></style>
