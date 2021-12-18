<script setup>
import data from '../data/data.json'

</script>

<template>
    
    <div class="grid max-w-min max-h-min bg-gray-800 rounded-t-xl rounded-b-xl">
        <div class="bg-blue-500 sm:w-44  pt-5 sm:pb-16 pl-4 rounded-xl pb-8">
            <div>

                <img class="h-14 mb-6 border-2 rounded-full" src="../assets/images/image-jeremy.png" alt="">            

            </div>
            <div>
                <p class="text-blue-300 text-xs">Report for</p>
                <p class="text-white font-light text-4xl tracking-wide">Jeremy <span class="sm:block inline-block">Robson</span></p>
            </div>
        </div>
        <div>
            <div class="grid place-items-left content-center bg-gray-800 text-white py-8 sm:pl-4 rounded-b-xl space-y-2 font-semibold tracking-wide w-72 sm:w-0 text-center sm:text-left">
                <p>Daily</p>
                <p>Weekly</p>
                <p>Monthly</p>
            </div>
        </div>
    
    </div>
</template>