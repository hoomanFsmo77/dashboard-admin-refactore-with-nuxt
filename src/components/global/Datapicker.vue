<template>
  <template v-if="single">
    <v-date-picker v-bind="$attrs" class="w-full" v-model="date">
      <template #default="{ inputValue, inputEvents }">
        <input  class="input w-full text-[0.9rem] !p-0.375" :value="inputValue" v-on="inputEvents" />
      </template>
    </v-date-picker>
  </template>
  <template v-if="multiple">
    <div class="bg-white p-0.5 w-full border rounded">
      <v-date-picker v-model="selected.date">
        <template #default="{ inputValue, togglePopover, hidePopover }">
          <div class="flex flex-wrap">
            <button
                v-for="(date, i) in dates"
                :key="date.date.getTime()"
                class="flex items-center bg-indigo-100 hover:bg-indigo-200 text-sm text-indigo-600 font-semibold h-2 px-1 m-0.5 rounded-6 border-2 border-transparent focus:border-indigo-600 focus:outline-none"
                @click.stop="dateSelected($event, date, togglePopover)"
                ref="button"
            >
              {{ date.date.toLocaleDateString() }}
              <svg
                  class="w-1.2 h-1.2 text-gray-600 hover:text-indigo-600 ml-1 -mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  @click.stop="removeDate(date, hidePopover)"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </template>
      </v-date-picker>
      <button
          class="text-sm text-indigo-600 font-semibold hover:text-indigo-500 px-1 h-2 focus:outline-none"
          @click.stop="addDate"
      >
        + Add Date
      </button>
    </div>

  </template>

  <template v-if="isRange">
    <form class="bg-white shadow-md rounded px-2 pt-1.5 pb-2" @submit.prevent>
      <div class="mb-1">
      <span class="block text-gray-600 text-0.875 text-left font-bold mb-0.5"
      >Select Range</span
      >
        <v-date-picker
            v-model="range"
            mode="dateTime"
            :masks="masks"
            is-range
        >
          <template v-slot="{ inputValue, inputEvents, isDragging }">
            <div class="flex flex-col sm:flex-row justify-start items-center">
              <div class="relative flex-grow">
                <svg
                    class="text-gray-600 w-1 h-full mx-0.5 absolute pointer-events-none"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <input
                    class="flex-grow pl-2 pr-0.5 py-0.25 bg-gray-100 border rounded-4 w-full"
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                />
              </div>
              <span class="flex-shrink-0 m-2">
              <svg
                  class="w-1 h-1 stroke-current text-gray-600"
                  viewBox="0 0 24 24"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
              <div class="relative flex-grow">
                <svg
                    class="text-gray-600 w-1 h-full mx-0.5 absolute pointer-events-none"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <input
                    class="flex-grow pl-2 pr-0.5 py-0.25 bg-gray-100 border rounded w-full"
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                />
              </div>
            </div>
          </template>
        </v-date-picker>
      </div>
    </form>
  </template>
</template>

<script >
import { Calendar, DatePicker } from 'v-calendar';
export default {
  data(){
    return{
      date:new Date(),
      dates: [
        {
          date: new Date(),
        },
      ],
      selected: {},
      range: {
        start: new Date(2020, 0, 6),
        end: new Date(2020, 0, 23),
      },
      masks: {
        input: 'YYYY-MM-DD h:mm A',
      },
    }
  },
  props:['single','multiple','isRange'],
  components:{Calendar, DatePicker},
  methods:{
    addDate() {
      this.dates.push({
        date: new Date(),
      });
      this.$nextTick(() => {
        const btn = this.$refs.button[this.$refs.button.length - 1];
        btn.click();
      });
    },
    removeDate(date, hide) {
      this.dates = this.dates.filter((d) => d !== date);
      hide();
    },
    dateSelected(e, date, toggle) {
      this.selected = date;
      toggle({ ref: e.target });
    }
  }
}

</script>

<style scoped>

</style>