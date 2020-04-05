import React, { Component } from 'react';
import './BlogPost.css';
import { Drawer } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import TempBlog from '../../../../assets/temp-markdown.md';

export class BlogPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogOpen: false,
        }
    }

    extractMarkdownAsString(file){
        if(file){
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.EMPTY
        }
        else
            return "Unable to load blog";
    }

    render() {
        const toggleDrawer = () => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
    
            this.setState({blogOpen: !this.state.blogOpen});
        };


        return (
            <div className="blog-post" onClick={toggleDrawer()}>
                <div className="blog-post-title-box">
                    <h1 className="blog-post-title">{this.props.children}</h1>
                </div>
                <p className="blog-post-description">{this.props.content}This is a placeholder hook</p>
                <p className="blog-post-date">Posted: January 01, 9999</p>

                <Drawer anchor="bottom" open={this.state.blogOpen} onClose={toggleDrawer()} PaperProps={{square: false}}>
                    <div className="blog-markdown">
                        This is where a blog post is rendered.
                    </div>
                </Drawer>

            </div>
        )
    }
}

export default BlogPost;
