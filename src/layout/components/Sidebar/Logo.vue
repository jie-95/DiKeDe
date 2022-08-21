<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <img src="@/assets/common/logo1.png" class="sidebar-logo">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'Vue Admin Template'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #5373e0;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo {
    width: 88px;
    margin-top: 6px;
  }
}
</style>
