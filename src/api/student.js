import axios from 'axios'
const GetAllStudentData = (params) => {
    return axios.get("/api/student/findAll",{params:params})
}

export { GetAllStudentData }