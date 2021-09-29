Vue.component('product-card', {
    data: function () {
      return {
      }
    },
    props:['title','imgsrc','text','clickmaincontent','buttoncontent'],
    template: ` <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="bg-white shadow-2xl p-6 rounded-lg flex flex-col ">
                        <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                            :src="imgsrc" alt="Image Size 720x400">
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4 text-center">
                            {{ title }}
                        </h2>
                        <p class="leading-relaxed text-base text-center">
                        {{ text }}
                        </p>
                        <button
                            class="py-3 px-6 text-white rounded-lg bg-red-500 shadow-lg block md:inline-block m-5"
                            v-on:click="actionButton(clickmaincontent)">{{ buttoncontent }}
                        </button>
                    </div>
                </div>`, 
                methods:{
                    actionButton: function(value){
                        this.$parent._data.mainContent = value;
                    }
                }
  })