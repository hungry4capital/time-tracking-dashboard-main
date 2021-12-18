<script setup>
import data from '../data/data.json'
import WorkIcon from './ActivityIcons/WorkIcon.vue';
import ExerciseIcon from './ActivityIcons/ExerciseIcon.vue';
import PlayIcon from './ActivityIcons/PlayIcon.vue';
import StudyIcon from './ActivityIcons/StudyIcon.vue';
import SocialIcon from './ActivityIcons/SocialIcon.vue';
import SelfIcon from './ActivityIcons/SelfIcon.vue';


</script>

<template>
<div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">

    <div v-for="(activity, index) in data" :key="index" :class="`relative rounded-xl pt-8 sm:w-48`">

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
        <div class="relative bg-gray-800 text-white py-6 px-5 rounded-xl space-y-5 z-10 hover:bg-gray-700">
            <div class="flex justify-between">
                <p class="text-sm font-bold tracking-wide">{{activity.title}}</p>
                <div class="my-auto">

                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>

                </div>
            </div>
            <div class="space-y-3">
                <p class="text-5xl tracking-wide">{{ activity.timeframes.weekly.current }}<span class="text-4xl">hrs</span></p>
                <p class="text-gray-400 text-xs">Last Week - {{ activity.timeframes.weekly.previous }}hrs</p>
            </div>
        </div>
    </div>
</div>
</template>