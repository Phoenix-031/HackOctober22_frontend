import axios from 'axios'

const fileUpload = async (Contributor,Institute,Year,Semester,Department,FilePath) => {

    // console.log(FilePath)
    // return (FilePath)
    const response = await axios.post('https://jade-unusual-kangaroo.cyclic.app/api/files/postFiles',{
        Contributor,
        Institute,
        Year,
        Semester,
        Department,
        FilePath
    }) 

    return response
}

export {fileUpload}