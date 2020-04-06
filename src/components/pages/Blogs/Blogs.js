import React, { Component } from 'react';
import BlogPost from './BlogPost/BlogPost';
import './Blogs.css';

import BlogTest from '../../../assets/blog-files/temp-markdown.md';

export class Blogs extends Component {
    render() {
        return (
            <div className="blogs-page">
                <div className="blogs-content">
                    <h1 className="blogs-header">Blogs Page</h1>

                    <div className="blog-post-all">
                        <BlogPost title="Test Blog" description="This is an example blog post" postDate="January 15, 5555" mdFile={BlogTest}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default Blogs;
