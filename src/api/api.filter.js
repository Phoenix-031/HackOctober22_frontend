import axios from 'axios'

const filterItems = async (Institute,Year,Semester,Department) => {

    // console.log(FilePath)
    // return (FilePath)

    const response = await axios.post('http://localhost:6723/api/filter/',{
        Institute,
        Year,
        Semester,
        Department
    }) 

    return response
}

export {filterItems}