<template>
  <div class="movelog-wrapper">
    <div
      v-if="getMoveLog.length"
      class="movelog-list">
      <div
        v-for="log in getMoveLog"
        :key="`log-${log.dateTimeStamp}`"
        class="log-item">
        <div class="log-date">{{ log.dateTimeStamp | displayDate }}</div>
        <div class="log-move">{{ log.file }}{{ log.rank }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MoveLog',
  computed: {
    ...mapGetters(['getMoveLog']),
  },
};
</script>
