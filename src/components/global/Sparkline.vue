<template>
  <div class="flex flex-col gap-0.5" v-if="type!=='tooltip'">
    <svg ref="sparkLine" :style="{stroke:color,fill:'white'}"  width="100" height="30" stroke-width="3"></svg>
    <svg ref="sparkFill" :style="{stroke:color,fill:area}" class="sparkline" width="100" height="30" stroke-width="3"></svg>
  </div>
  <div v-else class="relative">
    <svg ref="sparkTooltip" class="spark-tooltip" width="100" height="20" stroke-width="2" stroke="blue" fill="rgba(0, 0, 255, .2)"></svg>
    <span ref="tooltip" class="tooltip" hidden="true"></span>
  </div>
</template>

<script setup lang="ts">
import sparkline from "@fnando/sparkline";
const props=defineProps<{
  id:string
  color:string
  area:string
  info:string
  type:string
}>()
const sparkLine=ref<SVGSVGElement|null>(null)
const sparkFill=ref<SVGSVGElement|null>(null)
const sparkTooltip=ref<SVGSVGElement|null>(null)
const tooltip=ref<any>(null)



function findClosest(target:any, tagName:string) {
  if (target.tagName === tagName) {
    return target;
  }

  while ((target = target.parentNode)) {
    if (target.tagName === tagName) {
      break;
    }
  }

  return target;
}

let options = {
  onmousemove(event:any, datapoint:any) {
    var svg = findClosest(event.target, "svg");
    var tooltip = svg.nextElementSibling;
    var date = (new Date(datapoint.date)).toUTCString().replace(/^.*?, (.*?) \d{2}:\d{2}:\d{2}.*?$/, "$1");


    tooltip.hidden = false;
    tooltip.textContent = `${date}: $${datapoint.value.toFixed(2)} USD`;
    tooltip.style.top = `${event.offsetY}px`;
    tooltip.style.left = `${event.offsetX + 20}px`;
  },

  onmouseout(e:any) {
    var svg = findClosest(e.target, "svg");
    var tooltip = svg.nextElementSibling;

    tooltip.hidden = true;
  }
};

onMounted(()=>{
  if(props.type==='tooltip'){
    sparkline(sparkTooltip.value, props.info, options);
  }else {
    sparkline(sparkFill.value, props.info,{interactive:true});
    sparkline(sparkLine.value,props.info,{interactive:true});
  }

})


</script>
<style scoped lang="scss">
*[hidden] {
  display: none;
}

.tooltip {
  position: absolute;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  padding: 2px 5px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 9999;
}


</style>