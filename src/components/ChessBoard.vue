<template>
  <div
    ref="chessboard"
    class="chessboard-wrapper">

    <div
      :style="chessboardStyle"
      class="chessboard-board">
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
      <div class="chessboard-board-grid">
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
      chessboardStyle: {
        width: '',
        height: '',
      },
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
  mounted() {
    this.setChessboardSize();
    window.addEventListener('resize', this.setChessboardSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setChessboardSize);
  },
  methods: {
    ...mapActions(['addMoveToHistory']),
    logClick({ file, rank }) {
      if (this.currentSelection !== `${file}${rank}`) {
        this.currentSelection = `${file}${rank}`;
        const dateTimeStamp = Date.now();
        this.addMoveToHistory({ file, rank, dateTimeStamp });
      }
    },
    setChessboardSize() {
      const { clientWidth, clientHeight } = this.$refs.chessboard;
      if (clientHeight < clientWidth) {
        this.chessboardStyle.width = `${clientHeight}px`;
        this.chessboardStyle.height = `${clientHeight}px`;
      } else {
        this.chessboardStyle.width = `${clientWidth}px`;
        this.chessboardStyle.height = `${clientWidth}px`;
      }
    },
  },
};
</script>
