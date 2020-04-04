import React, { Component } from 'react';
import BlogPost from './BlogPost/BlogPost';

import './Blogs.css';

export class Blogs extends Component {
    render() {
        return (
            <div className="blogs-page">
                <div className="blogs-content">
                    <h1 className="blogs-header">Blogs Page</h1>

                    <div className="blog-post-all">
                        <BlogPost>This is a title</BlogPost>
                        <BlogPost>Short Title</BlogPost>
                        <BlogPost>Short Title</BlogPost>
                        <BlogPost content="This is an extension. ">This is a very very long title</BlogPost>
                        <BlogPost content="This is an extension. ">Title 5</BlogPost>
                        <BlogPost>Title 6</BlogPost>
                        <BlogPost>Title 7</BlogPost>
                        <BlogPost>Title 8</BlogPost>
                        <BlogPost>Title 9</BlogPost>
                    </div>

                </div>
            </div>
        )
    }
}

export default Blogs;
