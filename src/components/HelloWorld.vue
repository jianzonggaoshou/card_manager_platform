<template>
  <div class="hello">
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="HALID" label="HALID"></el-table-column>
        <el-table-column prop="FirstName" label="FirstName"></el-table-column>
        <el-table-column prop="LastName" label="LastName"></el-table-column>
        <el-table-column prop="FullName" label="FullName"></el-table-column>
        <el-table-column prop="LicenceStartYear" label="LicenceStartYear"></el-table-column>
        <el-table-column prop="LicenceExpireYear" label="LicenceExpireYear"></el-table-column>
        <el-table-column prop="license_year_range" label="license_year_range"></el-table-column>
        <el-table-column prop="PointType" label="PointType"> </el-table-column>
        <el-table-column prop="PointLevel" label="PointLevel"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div>
        <el-dialog title="收货地址" width="50%" :visible.sync="dialogTableVisible">
          <el-form :model="rowData" label-width="80px" ref="rowData">
            <el-form-item label="HALID" prop="HALID">
              <el-input v-model="rowData.HALID" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="FirstName" prop="FirstName">
              <el-input v-model="rowData.FirstName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="LastName" prop="LastName">
              <el-input v-model="rowData.LastName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="FullName" prop="FullName">
              <el-input v-model="rowData.FullName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="LicenceStartYear" prop="LicenceStartYear">
              <el-input v-model="rowData.LicenceStartYear" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="LicenceExpireYear" prop="LicenceExpireYear">
              <el-input v-model="rowData.LicenceExpireYear" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="license_year_range" prop="license_year_range">
              <el-input v-model="rowData.license_year_range" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="PointType" prop="PointType">
              <el-input v-model="rowData.PointType" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="PointLevel" prop="PointLevel">
              <el-input v-model="rowData.PointLevel" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </template>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      tableData: [],
      rowData: [],
      dialogTableVisible: false,
    };
  },
  methods: {
    getDatas() {
      axios
        .get("http://127.0.0.1:8000/rest/v1/cards/")
        .then((response) => {
          // handle success
          console.log(response);
          this.tableData = response.data.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogTableVisible = true;
      this.rowData = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  mounted() {
    this.getDatas();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
