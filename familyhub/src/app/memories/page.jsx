import Header from "../components/header";
import Navigation from "../components/navigation";
import Image from "next/image";

import "./style.css"

function Post() {
    return(
        <div style={{
            position: 'relative',
            margin: 'auto',
        }}>
            <img
                src="https://64.media.tumblr.com/bff48b81714434830009b585a56bcfb6/5a69653ddc705238-72/s640x960/5c68eda0ec89ab529735e1f0d3eb6d167ef3ad1b.png"
                alt="post"
                style={{
                    width: 150,
                    height: 'auto',
                    borderRadius: 10
                }}
            />
            <img
                src="https://pbs.twimg.com/media/C4ORj7hUMAAK8sA.jpg"
                alt="reigen"
                style={{
                    width: 50,
                    height: 50,
                    position: 'absolute',
                    top: 2,
                    left: 2,
                    borderRadius: 100,
                    border: '5px solid pink'
                }}
            />
        <p style={{
            backgroundColor: 'white',
            color: 'black',
            position: 'absolute',
            top: 10,
            left: 60,
            padding: '0px 5px',
            borderRadius: 20
        }}>
            caption
        </p>
        </div>
    )
}

export default function Page() {
    return (
        <main style={{
            color: 'black',
            height: '100%'
        }}>
            <Header title = "Memories"/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: '10px'
            }}>
                <div style={{
                    borderRadius: 100,
                    border: '1px solid black',
                    padding: '10px',
                    width: 40,
                    height: 40,
                }}>
                    <Image src='/upload.svg' alt='upload' width={20} height={20} priority/>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid black',
                    width: '220px',
                    borderRadius: 20
                }}>
                    <div style={{
                        margin: '0px 7px'
                    }}>
                        <Image src='/search.svg' alt='search' width={27} height={27} priority/>
                    </div>
                    Search
                </div>
                <div style={{
                    borderRadius: 100,
                    border: '1px solid black',
                    padding: '6px',
                    width: 40,
                    height: 40,
                }}>
                    <Image src='/filter.svg' alt='filter' width={29} height={29} priority/>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                maxHeight: '70%',
                overflow: 'scroll',
                margin: '4px',
                rowGap: '4px',
                scrollbarWidth: "none", // Hide the scrollbar for firefox
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
                },
                '&-ms-overflow-style:': {
                    display: 'none', // Hide the scrollbar for IE
                },
            }}>
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