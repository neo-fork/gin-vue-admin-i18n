<template>
  <div>
    <warning-bar :title="t('view.example.customer.customerNote')" />
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button type="primary" icon="plus" @click="openDrawer">{{
          t('general.add')
        }}</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        tooltip-effect="dark"
        row-key="ID"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          align="left"
          :label="t('view.example.customer.accessDate')"
          width="180"
        >
          <template #default="scope">
            <span>{{ formatDate(scope.row.CreatedAt) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          align="left"
          :label="t('view.example.customer.name')"
          prop="customerName"
          width="120"
        />
        <el-table-column
          align="left"
          :label="t('view.example.customer.phone')"
          prop="customerPhoneData"
          width="120"
        />
        <el-table-column
          align="left"
          :label="t('view.example.customer.accessorId')"
          prop="sysUserId"
          width="120"
        />
        <el-table-column
          align="left"
          :label="t('general.operations')"
          min-width="160"
        >
          <template #default="scope">
            <el-button
              type="primary"
              link
              icon="edit"
              @click="updateCustomer(scope.row)"
              >{{ t('general.change') }}</el-button
            >
            <el-button
              type="primary"
              link
              icon="delete"
              @click="deleteCustomer(scope.row)"
              >{{ t('general.delete') }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="gva-pagination">
        <el-pagination
          :current-page="page"
          :page-size="pageSize"
          :page-sizes="[10, 30, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </div>
    </div>
    <el-drawer
      v-model="drawerFormVisible"
      :before-close="closeDrawer"
      :show-close="false"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <span class="text-lg">{{ t('view.example.customer.client') }}</span>
          <div>
            <el-button @click="closeDrawer">{{
              t('general.cancel')
            }}</el-button>
            <el-button type="primary" @click="enterDrawer">{{
              t('general.confirm')
            }}</el-button>
          </div>
        </div>
      </template>
      <el-form :inline="true" :model="form" label-width="80px">
        <el-form-item :label="t('view.example.customer.customerName')">
          <el-input v-model="form.customerName" autocomplete="off" />
        </el-form-item>
        <el-form-item :label="t('view.example.customer.customerPhone')">
          <el-input v-model="form.customerPhoneData" autocomplete="off" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
  import {
    createExaCustomer,
    updateExaCustomer,
    deleteExaCustomer,
    getExaCustomer,
    getExaCustomerList
  } from '@/api/customer'
  import WarningBar from '@/components/warningBar/warningBar.vue'
  import { ref } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { formatDate } from '@/utils/format'
  import { useI18n } from 'vue-i18n' // added by mohamed hassan to support multilanguage

  const { t } = useI18n() // added by mohamed hassan to support multilanguage

  defineOptions({
    name: 'Customer'
  })

  const form = ref({
    customerName: '',
    customerPhoneData: ''
  })

  const page = ref(1)
  const total = ref(0)
  const pageSize = ref(10)
  const tableData = ref([])

  // 分页
  const handleSizeChange = (val) => {
    pageSize.value = val
    getTableData()
  }

  const handleCurrentChange = (val) => {
    page.value = val
    getTableData()
  }

  // 查询
  const getTableData = async () => {
    const table = await getExaCustomerList({
      page: page.value,
      pageSize: pageSize.value
    })
    if (table.code === 0) {
      tableData.value = table.data.list
      total.value = table.data.total
      page.value = table.data.page
      pageSize.value = table.data.pageSize
    }
  }

  getTableData()

  const drawerFormVisible = ref(false)
  const type = ref('')
  const updateCustomer = async (row) => {
    const res = await getExaCustomer({ ID: row.ID })
    type.value = 'update'
    if (res.code === 0) {
      form.value = res.data.customer
      drawerFormVisible.value = true
    }
  }
  const closeDrawer = () => {
    drawerFormVisible.value = false
    form.value = {
      customerName: '',
      customerPhoneData: ''
    }
  }
  const deleteCustomer = async (row) => {
    ElMessageBox.confirm(t('general.deleteConfirm'), t('general.hint'), {
      confirmButtonText: t('general.confirm'),
      cancelButtonText: t('general.cancel'),
      type: 'warning'
    }).then(async () => {
      const res = await deleteExaCustomer({ ID: row.ID })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: t('general.deleteSuccess')
        })
        if (tableData.value.length === 1 && page.value > 1) {
          page.value--
        }
        getTableData()
      }
    })
  }
  const enterDrawer = async () => {
    let res
    switch (type.value) {
      case 'create':
        res = await createExaCustomer(form.value)
        break
      case 'update':
        res = await updateExaCustomer(form.value)
        break
      default:
        res = await createExaCustomer(form.value)
        break
    }

    if (res.code === 0) {
      closeDrawer()
      getTableData()
    }
  }
  const openDrawer = () => {
    type.value = 'create'
    drawerFormVisible.value = true
  }
</script>

<style></style>
