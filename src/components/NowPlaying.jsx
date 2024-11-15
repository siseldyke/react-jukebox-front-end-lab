


const NowPlaying = ({selected}) => {
    return(
    <div>
        <h2>{selected.title}</h2>
        <h2>{selected.artist}</h2>
    </div>
    )
}

export default NowPlaying