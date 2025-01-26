<template>
  <div class="app-text-with-tooltip">
    <slot name="text" />
    <span class="tooltiptext">
      <slot name="tooltip" />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.app-text-with-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  cursor: default;

  &:hover {
    visibility: visible;
    .tooltiptext {
      visibility: visible;
    }  
  }
}

.tooltiptext {
  visibility: hidden;
  white-space: nowrap;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  left: calc(100% - 25px);
  bottom: calc(100% + 5px);

  &::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 15px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
}
</style>
