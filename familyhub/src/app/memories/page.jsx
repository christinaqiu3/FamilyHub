'use client'
import Header from "../components/header";
import Navigation from "../components/navigation";
import Image from "next/image";

import "./memories.css"

function Post({icon, color}) {
    return(
        <div className="post-content">
            <img
                src="https://64.media.tumblr.com/bff48b81714434830009b585a56bcfb6/5a69653ddc705238-72/s640x960/5c68eda0ec89ab529735e1f0d3eb6d167ef3ad1b.png"
                alt="post"
                className="post-image"
            />
            <img
                src={icon}
                alt=""
                className="poster-pfp"
                style={color}
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
                <Post icon="https://i.imgur.com/Bwqg0fu.png" color={{border: '3px solid #a8783e'}}/>
                <Post icon="https://i.imgur.com/pwQSdII.png" color={{border: '3px solid #ad4eeb'}}/>
                <Post icon="https://i.imgur.com/HTYMTkd.png" color={{border: '3px solid #e05f5d'}}/>
                <Post icon="https://i.imgur.com/bfMRBp2.png" color={{border: '3px solid #c5e05d'}}/>
                <Post icon="https://acnhcdn.com/latest/NpcBromide/NpcNmlOcp01.png" color={{border: '3px solid #ff9ccb'}}/>
                <Post icon="https://i.imgur.com/Bwqg0fu.png" color={{border: '3px solid #a8783e'}}/>
                <Post icon="https://i.imgur.com/pwQSdII.png" color={{border: '3px solid #ad4eeb'}}/>
                <Post icon="https://i.imgur.com/HTYMTkd.png" color={{border: '3px solid #e05f5d'}}/>
                <Post icon="https://i.imgur.com/bfMRBp2.png" color={{border: '3px solid #c5e05d'}}/>
            </div>
            <Navigation page = 'memories'/>
        </main>
    )
}