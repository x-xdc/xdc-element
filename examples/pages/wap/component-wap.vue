<style>
  .page-component {
    padding-bottom: 95px;
  }
  .page-component {
    .content {
      margin-left: -1px;

      > {
        h3 {
          margin: 45px 0 15px;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          margin-bottom: 45px;

          strong {
            font-weight: normal;
          }
          th {
            text-align: left;
            border-top: 1px solid #eaeefb;
            background-color: #EFF2F7;
          }
          td, th {
            border-bottom: 1px solid #eaeefb;
            padding: 10px 0;
          }
          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="page-container page-component">
    <el-row>
      <el-col :span="4">
        <side-nav :data="navsData" base="/wapcomponent"></side-nav>
      </el-col>
      <el-col :span="12">
        <router-view class="content"></router-view>
        <footer-nav-wap></footer-nav-wap>
      </el-col>
      <el-col :span="8">
        <phone></phone>
      </el-col>

    </el-row>
  </div>
</template>
<script>
  import { wapnavs } from '../../route.config';
  import Phone from '../../components/wap/phone-wap';
  export default {
    data() {
      return {
        navsData: wapnavs
      };
    },
    components: {
      Phone
    }
  };
</script>
