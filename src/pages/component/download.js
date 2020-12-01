const download = (data) => {
    if (!data) {
        return
    }
    let url = window.URL.createObjectURL(new Blob([data]))
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = url
    link.setAttribute('download', '学生数据表.xlsx')
    document.body.appendChild(link)
    link.click()
}
export default download