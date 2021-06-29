<template>
  <div class="kmtt-table">
    <div class="title">
      {{ title }} <SearchComponent v-model="searchText"/>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="head in headTable" :key="head">
            <feather v-if="getIcon(head)" class="icons" size="16" :type="getIcon(head)"/>
            <span>{{ head }}</span>
          </th>
        </tr>
      </thead>
      <tr v-for="(row, i) in filteredData" :key="'row' + i">
        <td v-for="(col, i) in headTable" :key="'col' + i">{{ row[col] }}</td>
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

  searchText = '';
  iconsField: any = {
    'id': 'list',
    'имя': 'user',
    'email': 'at-sign',
    'статус': 'alert-circle',
    'действия': 'disc',
    // 'действия1': 'disc',
  }

  get headTable() {
    const arr: any = [];
    this.data.forEach((el: any) => {
      arr.push(...Object.keys(el))
    });
    return Array.from(new Set(arr)) ;
  }

  
  get filteredData() {
    return  this.data.filter((el: any) => {
      return Object.values(el).some((v: any) => v && v.toString().toLowerCase().includes(this.searchText.toLowerCase()))
    })
  }
  

  getIcon(nameFiels: string) {
    return this.iconsField[nameFiels.toLowerCase()] || '';
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