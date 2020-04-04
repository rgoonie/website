import React, { Component } from 'react';
import './BlogPost.css'

export class BlogPost extends Component {
    render() {
        return (
            <div className="blog-post">
                <div className="blog-post-title-box">
                    <h1 className="blog-post-title">{this.props.children}</h1>
                </div>
                <p className="blog-post-description">{this.props.content}This is a placeholder hook</p>
                <p className="blog-post-date">Posted: January 01, 9999</p>
            </div>
        )
    }
}

export default BlogPost;
