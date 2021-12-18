<template>
  <div class="grid place-items-center sm:h-screen bg-gray-900">
    <div class="block sm:flex sm:space-x-5">

      <ControlCard class="h-full mx-auto my-5 sm:my-0"/>
      <ActivityCard/>

    </div>
  </div>
</template>

<script setup>
import ControlCard from "./components/ControlCard.vue";
import ActivityCard from "./components/ActivityCard.vue";

</script>
