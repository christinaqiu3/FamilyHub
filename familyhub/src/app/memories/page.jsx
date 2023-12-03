import Header from "../components/header";
import Navigation from "../components/navigation";
import Image from "next/image";

import "./memories.css"

function Post() {
    return(
        <div className="post-content">
            <img
                src="https://64.media.tumblr.com/bff48b81714434830009b585a56bcfb6/5a69653ddc705238-72/s640x960/5c68eda0ec89ab529735e1f0d3eb6d167ef3ad1b.png"
                alt="post"
                className="post-image"
            />
            <img
                src="https://pbs.twimg.com/media/C4ORj7hUMAAK8sA.jpg"
                alt="reigen"
                className="poster-pfp"
            />
        <p className="caption">
            caption
        </p>
        </div>
    )
}

export default function Page() {
    return (
        <main>
            <Header title = "Memories"/>
            <div id="options-bar">
                <div id="upload-btn">
                    <Image src='/upload.svg' alt='upload' width={20} height={20} priority/>
                </div>
                <div id="search-bar">
                    <div style={{
                        margin: '0px 7px'
                    }}>
                        <Image src='/search.svg' alt='search' width={27} height={27} priority/>
                    </div>
                    Search
                </div>
            </div>
            <div id="posts">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <Navigation page = 'memories'/>
        </main>
    )
}