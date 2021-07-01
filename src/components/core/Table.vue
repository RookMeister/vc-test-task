<template>
  <div class="kmtt-table" v-if="data">
    <div class="title">
      {{ title }} <SearchComponent v-model="searchText"/>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="head in headTable" :key="head">
            <span>{{ head }}</span>
          </th>
        </tr>
      </thead>
      <tr v-for="(row, i) in filteredData" :key="'row' + i">
        <td v-for="(col, i) in headTable" :key="'col' + i">
          <component v-if="(typeof row[col] === 'object') && row[col].component" :is="row[col].component.name" v-bind="row[col].component.props"/>
          <span v-else v-html="row[col]"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SearchComponent from './Search.vue';
import { ITable } from '@/interfaces/table.interface';
const ButtonComponent = () => import('../core/Button.vue');

@Component({
  components: {
    SearchComponent,
    ButtonComponent
  }
})
export default class Layout extends Vue {
  @Prop() title: String | undefined;
  @Prop() data: ITable[] | undefined;

  searchText = '';

  get headTable() {
    const arr: string[] = [];
    this.data && this.data.forEach((el: ITable) => {
      arr.push(...Object.keys(el))
    });
    return Array.from(new Set(arr)) ;
  }

  get filteredData() {
    return this.data && this.data.filter((el: ITable) => {
      return Object.values(el).some((v: number | string) => v && v.toString().toLowerCase().includes(this.searchText.toLowerCase()))
    })
  }
}
</script>

<style>
.kmtt-table th, td {
  border: 1px solid #333;
  padding: 8px;
}
.kmtt-table th {
  font-weight: normal;
  color: #585c62;
}
.kmtt-table > table {
  border-spacing: 0;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-left:2px solid #17191c;
  border-right:2px solid #17191c;
}
.kmtt-table > .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.kmtt-table .icons {
  vertical-align: bottom;
}
</style>