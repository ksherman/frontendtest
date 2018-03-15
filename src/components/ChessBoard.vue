<template>
  <div class="chessboard-wrapper">
    <div class="chessboard-file-gutter">
      <div class="gutter-file-labels">
        <div
          v-for="file in filesArray"
          :key="`label-file-${file}`"
          :class="{ active: currentSelection.includes(file) }"
          class="gutter-label"
          v-html="file" />
      </div>
    </div>
    <div class="chessboard-board">
      <div class="gutter-rank-labels">
        <div
          v-for="rank in ranksArray"
          :key="`label-rank-${rank}`"
          :class="{ active: currentSelection.includes(rank) }"
          class="gutter-label"
          v-html="rank" />
      </div>
      <div class="board-grid">
        <div
          v-for="rank in ranksArray"
          :key="`board-rank-${rank}`"
          class="board-rank">
          <div
            v-for="file in filesArray"
            :key="`board-${file}${rank}`"
            :class="{ active: currentSelection === `${file}${rank}` }"
            class="board-square"
            @click="logClick({file, rank})"
            v-html="currentSelection === `${file}${rank}` ? `${file}${rank}` : null" />
        </div>
      </div>
      <div class="gutter-rank-labels">
        <div
          v-for="rank in ranksArray"
          :key="`label-rank-${rank}`"
          :class="{ active: currentSelection.includes(rank) }"
          class="gutter-label"
          v-html="rank" />
      </div>
    </div>
    <div class="chessboard-file-gutter">
      <div class="gutter-file-labels">
        <div
          v-for="file in filesArray"
          :key="`label-file-${file}`"
          :class="{ active: currentSelection.includes(file) }"
          class="gutter-label"
          v-html="file" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ChessBoard',
  data() {
    return {
      files: 'abcdefgh',
      ranks: '12345678',
      currentSelection: '',
    };
  },
  computed: {
    filesArray() {
      return this.files.split('');
    },
    ranksArray() {
      const splitArray = this.ranks.split('');
      return splitArray.reverse();
    },
  },
  methods: {
    ...mapActions(['addMoveToHistory']),
    logClick({ file, rank }) {
      this.currentSelection = `${file}${rank}`;
      const dateTimeStamp = Date.now();
      this.addMoveToHistory({ file, rank, dateTimeStamp });
    },
  },
};
</script>
