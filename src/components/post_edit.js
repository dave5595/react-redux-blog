import React, {Component} from 'react';
import {fetchPost,createPost} from "../actions";
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class postEdit extends Component{

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPost(id);

    }

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    {...field.input}
                    type="text"
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log("values", values)
    }

    render(){
        const { handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return{
        initialValues: {
            title: posts[ownProps.match.params.id].title,
            categories: posts[ownProps.match.params.id].categories,
            content: posts[ownProps.match.params.id].content
        }
    }
}

postEdit = reduxForm({
    form: 'EditForm',
    enableReinitialize : true
})(postEdit);

postEdit = connect(mapStateToProps, {fetchPost, createPost})(postEdit);
export default postEdit;
/*
export default reduxForm({
    form: 'EditForm',
    enableReinitialize : true
})
(
    connect(mapStateToProps,{fetchPost, createPost})(postEdit)
)*/
