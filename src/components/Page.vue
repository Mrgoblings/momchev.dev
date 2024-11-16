<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  id: string;
}>();
</script>

<template>
  <div :id="id" class="min-w-full min-h-screen">
    <slot></slot>
  </div>
</template>

<style scoped></style>
