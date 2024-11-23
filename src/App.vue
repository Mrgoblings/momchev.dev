<script setup lang="ts">
import { ref, Ref, onMounted, nextTick, onUnmounted } from "vue";
import Page from "./components/Page.vue";

const pages: Ref<(InstanceType<typeof Page> | null)[]> = ref([]);
const currentPage = ref(2);
let isScrolling = false; // To debounce scrolling

const scrollToPage = (pageIndex: number) => {
  const pageElement = pages.value[pageIndex];
  if (pageElement && pageElement.$el instanceof HTMLElement) {
    pageElement.$el.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
};

const nextPage = () => {
  if (isScrolling) return;
  isScrolling = true;
  currentPage.value = (currentPage.value + 1) % pages.value.length;
  scrollToPage(currentPage.value);
  resetScrolling();
};

const prevPage = () => {
  if (isScrolling) return;
  isScrolling = true;
  currentPage.value =
    (currentPage.value - 1 + pages.value.length) % pages.value.length;
  scrollToPage(currentPage.value);
  resetScrolling();
};

const resetScrolling = () => {
  setTimeout(() => (isScrolling = false), 600); // Adjust timeout to match animation speed
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
  console.log("WHEEEEL");

  if (event.deltaY > 0 || event.deltaX > 0) {
    nextPage();
  } else if (event.deltaY < 0 || event.deltaX < 0) {
    prevPage();
  }
};

const handleTouch = (() => {
  let startX = 0;
  let startY = 0;

  return {
    start(event: TouchEvent) {
      console.log("TOUCH START");
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    },
    move(event: TouchEvent) {
      if (isScrolling) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      // Only trigger scroll if the gesture is significant
      if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Horizontal swipe
          if (deltaX < 0) nextPage(); // Swipe left
          else prevPage(); // Swipe right
        } else {
          // Vertical swipe
          if (deltaY < 0) nextPage(); // Swipe up
          else prevPage(); // Swipe down
        }
      }
    },
  };
})();

onMounted(async () => {
  await nextTick();
  scrollToPage(currentPage.value);

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("wheel", handleWheel, { passive: true });
  window.addEventListener("touchstart", handleTouch.start, { passive: true });
  window.addEventListener("touchend", handleTouch.move, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("wheel", handleWheel);
  window.removeEventListener("touchstart", handleTouch.start);
  window.removeEventListener("touchend", handleTouch.move);
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
