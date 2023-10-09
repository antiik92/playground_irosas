import BlogList from "components/blog/BlogList"
//import CategoryBlogList from "components/blog/CategoryBlogList"
import FullWidthLayout from "hocs/layaouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_categories } from "redux/actions/categories"


function BlogCategory({get_categories, categories}){

    const params = useParams()
    const category_id = params.category_id

    useEffect(()=>{
        get_categories(category_id)
    },[])

    return(
        <div>
            Categories
        </div>
        )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list_category,
    count: state.blog.count
})

export default connect(mapStateToProps,{
    get_categories,
})(BlogCategory)