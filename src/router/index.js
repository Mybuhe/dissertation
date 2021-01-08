import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Main from '@/pages/Main'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      redirect: '/userManagement/student',
    },
    
    {
      path: '/userManagement',
      name: 'userManagement',
      component: Main,
      meta:{
        title:"用户管理"
      },
      children:[
        {
          path: 'student',
          name: 'student',
          component:() => import("@/pages/UserManagement/Student/index"),
          meta:{
            title:"学生随机分配工具"
          },
        }
      ]
    },
    {
      path: '/teacherStudentPairing',
      component: Main,
      meta:{
        title: "师生配对"
      },
      children:[
        {
          path: 'teacherStudentRandomMatchingTool',
          component:() => import("@/pages/TeacherStudentPairing/TeacherStudentRandomMatchingTool/index"),
          meta:{
            title: "学生管理"
          },
        }
      ]
    },
    {
      path: '/realTimeMonitoring',
      component: Main,
      meta:{
        title: "实时监控"
      },
      children:[
        {
          path: 'comprehensiveMonitoring',
          component:() => import("@/pages/RealTimeMonitoring/ComprehensiveMonitoring/index"),
          meta:{
            title: "综合监控"
          }
        }
      ]
    },
    {
      path: '/upload',
      component: Main,
      meta:{
        title:"上传"
      },
      children:[
        {
          path: 'uploadTemplate',
          component:() => import("@/pages/Upload/UploadTemplate/index"),
          meta:{
            title:"上传模板"
          },
        }
      ]
    },
    {
      path: '/new-test',
      component: Main,
      meta:{
        title:"新建测试"
      },
      children:[
        {
          path: 'new-study',
          component:() => import("@/pages/NewTest/NewStudy/index"),
          meta:{
            title:"study"
          },
        }
      ]
    }
  ]
})
