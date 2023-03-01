<template>
  <vue-cal style="height: 800px"
           ref="vuecal"
           selected-date="2022-11-21"
           :time-from="9 * 60"
           :time-to="23 * 60"
           :disable-views="['years', 'year', 'month']"
           :events="events"
           :editable-events="{ title: true, drag: true, resize: true, delete: true, create: true }"
           @cell-dblclick="$refs.vuecal.createEvent(
    $event,
    120,
    { title: 'New Event', class: 'blue-event' }
  )"
  />
</template>

<script setup>
import 'vue-cal/dist/vuecal.css'
import VueCal from 'vue-cal'

const events = [
  {
    start: '2022-11-21 14:00',
    end: '2022-11-21 18:00',
    title: 'Need to go shopping',
    content: '<i class="fa-solid fa-cart-shopping"></i>',
    class: 'leisure'
  },
  {
    start: '2022-11-22 19:00',
    end: '2022-11-22 22:00',
    title: 'Golf with John',
    content: '<i class="fa-solid fa-golf-ball-tee"></i>',
    class: 'sport'
  },
  {
    start: '2022-11-23 10:00',
    end: '2022-11-23 13:00',
    title: 'Dad\'s birthday!',
    content: '<i class="fa-solid fa-cake-candles"></i>',
    class: 'event'
  },
  {
    start: '2022-11-24 21:00',
    end: '2022-11-24 24:00',
    title: 'Do Homework',
    content: '<i class="fa-solid fa-house-laptop"></i>',
    class: 'duty'
  },
  {
    start: '2022-11-25 15:00',
    end: '2022-11-25 18:00',
    title: 'Meeting at work',
    content: '<i class="fa-solid fa-handshake"></i>',
    class: 'meet'
  },
  {
    start: '2022-11-26 9:00',
    end: '2022-11-26 14:00',
    title: 'Hiking',
    content: '<i class="fa-solid fa-person-hiking"></i>',
    class: 'sport'
  }, {
    start: '2022-11-27 17:00',
    end: '2022-11-27 23:00',
    title: 'Party at Frank house',
    content: '<i class="fa-solid fa-gift"></i>',
    class: 'event'
  },
]


</script>

<style lang="scss">
@import "vue-cal/dist/vuecal.css";

.vuecal__menu, .vuecal__cell-events-count {
  background-color: #42b983;
}

.vuecal__title-bar {
  background-color: #e4f5ef;
}

.vuecal__cell--today, .vuecal__cell--current {
  background-color: rgba(240, 240, 255, 0.4);
}

.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
  background-color: rgba(235, 255, 245, 0.4);
}

.vuecal__cell--selected:before {
  border-color: rgba(66, 185, 131, 0.5);
}

/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
  background-color: rgba(195, 255, 225, 0.5);
}

.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
  background-color: rgba(136, 236, 191, 0.25)
}

.vuecal__view-btn {
  color: white !important;
}

.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}

.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}

.vuecal__event.duty {
  @apply bg-indigo-700 text-white;
}

.vuecal__event.event {
  @apply bg-sky-700 text-white;
}

.vuecal__event.meet {
  @apply bg-red-700 text-white;
}
</style>