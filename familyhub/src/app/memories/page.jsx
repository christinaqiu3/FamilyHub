import Header from "../components/header";
import Navigation from "../components/navigation";

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
                    width: '60%',
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
            photo caption
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
                justifyContent: 'space-around'
            }}>
                <div>Upload</div>
                <div>Search</div>
                <div>Filter</div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                maxHeight: '77%',
                overflow: 'scroll'
            }}>
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