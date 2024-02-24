<template>
  <div class="flex items-center h-[200px] overflow-auto justify-center my-50">

    <div  ref="referenceRef" class="referenceRef" >
        referenceRef
    </div>

    <div ref="floatingRef" class="floatingRef">
    floating
    </div>
    <div>


    </div>
<!-- 
    <div class="inline-block">
        <button  ref="referenceRef" class="bg-rose-600  hover:bg-rose-500 text-white text-md p-3 rounded-md leading-none">Click me</button>
        <div ref="floatingRef" class="absolute  top-0 left-0 z-50 bg-gray-700 text-sm text-white px-3 py-1.5 rounded-md cursor-default">Tooltip TooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltipTooltip</div>
    </div> -->


  </div>
</template>

<script>
import { computePosition, flip, offset, shift } from '@floating-ui/vue';

export default {
    setup(){
        const referenceRef = ref()
        const floatingRef = ref()
       

        onMounted(async()=>{
            const position = await computePosition(referenceRef.value,floatingRef.value,{
                placement:'left',
                middleware:[offset(8),flip(),shift({padding:5})]
            })

            floatingRef.value.style.left = `${position.x}px`
            floatingRef.value.style.top = `${position.y}px`
            console.log(position)
        })

        return{
            referenceRef,
            floatingRef
        }
    }

}
</script>

<style>
.referenceRef {
  width: 100px;
  height: 500px;
  border: 2px dashed black;
  margin: 50px;
}

.floatingRef {
  position: absolute;
  background: gray;
  padding: 0.5rem;
  color: white;
  height: 200px;
}

</style>