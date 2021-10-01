Vue.component('type-campingcar', {
    data: function () {
        return {
        }
      },
    props: ['img', 'title', 'add-volet'],
    template: `
    <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white shadow-2xl p-6 rounded-lg flex flex-col cursor-pointer h-full"
        v-on:click="$emit('add-volet')">
            <img class="object-scale-down rounded w-full object-cover object-center"
                :src=img alt="Image Size 720x400">
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4 text-center">  {{ title }}
            </h2>
        </div>
    </div>`,
    
})