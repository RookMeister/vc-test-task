<template>
  <div class="kmtt-table">
    <div>
      {{ title }} <SearchComponent/>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="head in headTable" :key="head">{{ head }}</th>
        </tr>
      </thead>
      <tr v-for="(row, i) in data" :key="'row' + i">
        <th v-for="(col, i) in headTable" :key="'col' + i">{{ row[col] }}</th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SearchComponent from './Search.vue'

@Component({
  components: {
    SearchComponent
  }
})
export default class Layout extends Vue {
  @Prop() title: String | undefined;
  @Prop() data: any | undefined;

  get headTable() {
    const arr: any = [];
    this.data.forEach((el: any) => {
      arr.push(...Object.keys(el))
    });
    return Array.from(new Set(arr)) ;
  }
}
</script>

<style>
.kmtt-table th, td {
  border: 1px solid #333;
  padding: 8px;
}
.kmtt-table table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-left:2px solid #17191c;
  border-right:2px solid #17191c;
}
</style>