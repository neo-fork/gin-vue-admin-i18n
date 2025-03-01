<template>
  <div>
    <warning-bar
      :title="t('view.superAdmin.authority.components.datas.datasNote')"
      href="https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"
    />
    <div class="sticky top-0.5 z-10 my-4">
      <el-button class="float-left" type="primary" @click="all">{{
        t('general.selectAll')
      }}</el-button>
      <el-button class="float-left" type="primary" @click="self">{{
        t('view.superAdmin.authority.components.datas.thisRole')
      }}</el-button>
      <el-button class="float-left" type="primary" @click="selfAndChildren">{{
        t('view.superAdmin.authority.components.datas.thisRoleAndSubRoles')
      }}</el-button>
      <el-button class="float-right" type="primary" @click="authDataEnter">{{
        t('general.confirm')
      }}</el-button>
    </div>
    <div class="clear-both pt-4">
      <el-checkbox-group v-model="dataAuthorityId" @change="selectAuthority">
        <el-checkbox
          v-for="(item, key) in authoritys"
          :key="key"
          :label="item"
          >{{ item.authorityName }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup>
  import { setDataAuthority } from '@/api/authority'
  import WarningBar from '@/components/warningBar/warningBar.vue'
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { useI18n } from 'vue-i18n' // added by mohamed hassan to support multilanguage

  const { t } = useI18n() // added by mohamed hassan to support multilanguage

  defineOptions({
    name: 'Datas'
  })

  const props = defineProps({
    row: {
      default: function () {
        return {}
      },
      type: Object
    },
    authority: {
      default: function () {
        return []
      },
      type: Array
    }
  })

  const authoritys = ref([])
  const needConfirm = ref(false)
  //   平铺角色
  const roundAuthority = (authoritysData) => {
    authoritysData &&
      authoritysData.forEach((item) => {
        const obj = {}
        obj.authorityId = item.authorityId
        obj.authorityName = item.authorityName
        authoritys.value.push(obj)
        if (item.children && item.children.length) {
          roundAuthority(item.children)
        }
      })
  }

  const dataAuthorityId = ref([])
  const init = () => {
    roundAuthority(props.authority)
    props.row.dataAuthorityId &&
      props.row.dataAuthorityId.forEach((item) => {
        const obj =
          authoritys.value &&
          authoritys.value.filter(
            (au) => au.authorityId === item.authorityId
          ) &&
          authoritys.value.filter(
            (au) => au.authorityId === item.authorityId
          )[0]
        dataAuthorityId.value.push(obj)
      })
  }

  init()

  // 暴露给外层使用的切换拦截统一方法
  const enterAndNext = () => {
    authDataEnter()
  }

  const emit = defineEmits(['changeRow'])
  const all = () => {
    dataAuthorityId.value = [...authoritys.value]
    emit('changeRow', 'dataAuthorityId', dataAuthorityId.value)
    needConfirm.value = true
  }
  const self = () => {
    dataAuthorityId.value = authoritys.value.filter(
      (item) => item.authorityId === props.row.authorityId
    )
    emit('changeRow', 'dataAuthorityId', dataAuthorityId.value)
    needConfirm.value = true
  }
  const selfAndChildren = () => {
    const arrBox = []
    getChildrenId(props.row, arrBox)
    dataAuthorityId.value = authoritys.value.filter(
      (item) => arrBox.indexOf(item.authorityId) > -1
    )
    emit('changeRow', 'dataAuthorityId', dataAuthorityId.value)
    needConfirm.value = true
  }
  const getChildrenId = (row, arrBox) => {
    arrBox.push(row.authorityId)
    row.children &&
      row.children.forEach((item) => {
        getChildrenId(item, arrBox)
      })
  }
  // 提交
  const authDataEnter = async () => {
    const res = await setDataAuthority(props.row)
    if (res.code === 0) {
      ElMessage({
        type: 'success',
        message: t(
          'view.superAdmin.authority.components.datas.resourceSetupSuccess'
        )
      })
    }
  }

  //   选择
  const selectAuthority = () => {
    dataAuthorityId.value = dataAuthorityId.value.filter((item) => item)
    emit('changeRow', 'dataAuthorityId', dataAuthorityId.value)
    needConfirm.value = true
  }

  defineExpose({
    enterAndNext,
    needConfirm
  })
</script>
