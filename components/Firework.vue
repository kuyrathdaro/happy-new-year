<template>
    <div class="firework-container">
      <div class="canvas-container">
        <canvas id="trails-canvas"></canvas>
        <canvas id="main-canvas"></canvas>
      </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="css" scoped>
.firework-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>