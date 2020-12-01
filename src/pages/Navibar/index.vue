<template>
    <div class="navibar">
        <div class="hamburger-container" @click="toggleClick">
            <svg
                class="hamburger is-active"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
            >
            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
            </svg>
        </div>

          <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>

    </div>
</template>

<script>
import {pathToRegexp} from 'path-to-regexp'
export default {
    data() {
        return {
            levelList: null
        }
    },
    created(){
        this.getBreadcrumb()
    },
    watch:{
        $route(route) {
        console.log(route)
        // if you go to the redirect page, do not update the breadcrumbs
        if (route.path.startsWith('/redirect/')) {
            return
        }
        this.getBreadcrumb()
    }
    },
    methods:{
        handleLink(item) {
        },
        pathCompile(path) {
            const { params } = this.$route
            var toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
        toggleClick(e){

        },
        getBreadcrumb() {
            // only show routes with meta.title
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first = matched[0]
            // if (!this.isDashboard(first)) {
                // matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
            // }

            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        }
    }
}
</script>

<style scoped>
.app-breadcrumb{
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
.navibar{
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.hamburger-container {
    padding: 0 15px;
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
}
.hamburger-container:hover {
    background: rgba(0, 0, 0, .025);
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>