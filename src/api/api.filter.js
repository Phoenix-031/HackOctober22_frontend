import axios from 'axios'

const filterItems = async (Institute,Year,Semester,Department) => {

    // console.log(FilePath)
    // return (FilePath)

    const response = await axios.post('https://glamorous-ring-jay.cyclic.app/api/filter/',{
        Institute,
        Year,
        Semester,
        Department
    }) 

    return response
}

export {filterItems}