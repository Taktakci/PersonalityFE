import { useEffect, useState } from "react";

const CategoryList = (props) => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8080/question/category";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setCategoryList(json.categoryList);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);


return (
    <div>
            <p>
            <label>Category : </label>
            <select onChange={e => props.categoryChangeMethod(e.target.value)} >
                <option value={"select"} >--select--</option>
            {categoryList.map((category) => (
                <option value={category}>{category}</option>

            ))}
            </select>
            </p>
    </div>
    )

};

export default CategoryList