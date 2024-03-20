<!-- ProgressIndicator.vue -->
<template>
  <div>
    <div class="progress mb-4">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
        :aria-valuenow="currentStep"
        aria-valuemin="1"
        :aria-valuemax="totalSteps"
      ></div>
    </div>
    <div class="step-indicator mb-4">
      <span
        v-for="(_, index) in totalSteps"
        :key="index"
        :class="['step-circle', currentStep > index ? 'active' : '']"
        >{{ index + 1 }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
      default: 3,
    },
  },
};
</script>

<style scoped>
.progress {
  height: 20px;
}

.step-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
}

.step-circle {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
  font-weight: bold;
  margin: 0 10px;
}

.step-circle.active {
  background-color: #007bff;
}
</style>
