<template>
  <el-page-header content="detail" @back="goBack" />
  <el-row>
    <HeaderComp></HeaderComp>
  </el-row>

  <router-view></router-view>
  <el-row>
    <FooterComp></FooterComp>
  </el-row>
</template>
