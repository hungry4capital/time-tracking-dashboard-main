<script setup>
import { useStore } from 'vuex'
import WorkIcon from './ActivityIcons/WorkIcon.vue';
import ExerciseIcon from './ActivityIcons/ExerciseIcon.vue';
import PlayIcon from './ActivityIcons/PlayIcon.vue';
import StudyIcon from './ActivityIcons/StudyIcon.vue';
import SocialIcon from './ActivityIcons/SocialIcon.vue';
import SelfIcon from './ActivityIcons/SelfIcon.vue';

const store = useStore()
const newData = store.state.data

</script>

<template>
<div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">

    <div v-for="(activity, index) in newData" :key="index" :class="`relative rounded-xl pt-8 sm:w-48`">

        <div v-if="activity.title == 'Work'">
            <div  class="absolute  w-full h-16 top-0 bg-orange-400  rounded-xl">
                <div  class=" absolute top-0 right-5 ">
                <WorkIcon />
                </div>
            </div>
        </div>

        <div v-if="activity.title == 'Exercise'">
            <div  class="absolute  w-full h-16 top-0 bg-green-400 rounded-xl">
                <div class=" absolute top-0 right-5 ">            
                <ExerciseIcon/>
                </div>
            </div>
        </div>

        <div v-if="activity.title == 'Play'">
            <div class="absolute  w-full h-16 top-0 bg-teal-400 rounded-xl">
                <div  class=" absolute top-0 right-5 rounded-xl">    
                <PlayIcon/>
                </div>
            </div>
        </div>

        <div v-if="activity.title == 'Study'">
            <div class="absolute  w-full h-16 top-0 bg-red-400 rounded-xl">
                <div class=" absolute top-0 right-5 rounded-xl">   
                <StudyIcon />
                </div>
            </div>            
        </div>

        <div v-if="activity.title == 'Social'">
            <div class="absolute  w-full h-16 top-0 bg-indigo-500 rounded-xl">
                <div class=" absolute top-0 right-5 rounded-xl"> 
                <SocialIcon/>
                </div>
            </div>            
        </div>

        <div v-if="activity.title == 'Self Care'">
            <div class="absolute  w-full h-16 top-0 bg-yellow-400 rounded-xl">
                <div class=" absolute top-0 right-5 ">
                <SelfIcon />
                </div>
            </div>
        </div>
        <button class="relative bg-gray-800 text-white py-6 px-5 rounded-xl space-y-5 z-10 hover:bg-gray-700 w-full">
            <div class="flex justify-between items-center">
                <p class="text-sm font-bold tracking-wide">{{activity.title}}</p>
                <div class=" flex">
                    
                    <button class="p-1 text-gray-400 hover:text-gray-50">

                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" fill-rule="evenodd" /></svg>

                    </button>

                </div>
            </div>
            <div v-if="store.state.activeState.daily" class="space-y-3 text-left">
                <p class="text-5xl tracking-wide">{{ activity.timeframes.daily.current }}<span class="text-4xl">hrs</span></p>
                <p class="text-gray-400 text-xs">Yesterday - {{ activity.timeframes.daily.previous }}hrs</p>
            </div>
            <div v-if="store.state.activeState.weekly" class="space-y-3 text-left">
                <p class="text-5xl tracking-wide">{{ activity.timeframes.weekly.current }}<span class="text-4xl">hrs</span></p>
                <p class="text-gray-400 text-xs">Last Week - {{ activity.timeframes.weekly.previous }}hrs</p>
            </div>
            <div v-if="store.state.activeState.monthly" class="space-y-3 text-left">
                <p class="text-5xl tracking-wide">{{ activity.timeframes.monthly.current }}<span class="text-4xl">hrs</span></p>
                <p class="text-gray-400 text-xs">Last Month - {{ activity.timeframes.monthly.previous }}hrs</p>
            </div>
        </button>
    </div>
</div>
</template>