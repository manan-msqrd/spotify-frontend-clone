import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export interface PlayerContextType {
    audioRef: React.RefObject<HTMLAudioElement | null>;
    seekBar: React.RefObject<HTMLHRElement | null>;
    seekBg: React.RefObject<HTMLDivElement | null>;
    playStatus: boolean;
    play: () => void;
    pause: () => void;
    playWithId: (id: number) => void;
    previous: () => void;
    next: () => void;
    seekSong: (e: any) => void
    time: {
        currentTime: {
            second: number;
            minute: number;
        };
        totalTime: {
            second: number;
            minute: number;
        };
    };
    track: {
        id: number;
        name: string;
        image: string;
        file: string;
        desc: string;
        duration: string;
    } | null;
}


export const PlayerContext = createContext<PlayerContextType>({
    audioRef: { current: null },
    seekBar: { current: null },
    seekBg: { current: null },
    playStatus: false,
    play: () => {},
    pause: () => {},
    previous: () => {},
    next: () => {},
    seekSong: () => {},
    time: {
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    },
    track: null,
    playWithId: () => {}
})

export const PlayerContextProvider = ({ children }: { children: React.ReactNode }) => {

    const audioRef = useRef<HTMLAudioElement>(null)
    const seekBg = useRef<HTMLDivElement>(null)
    const seekBar = useRef<HTMLHRElement>(null)

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current?.play()
        setPlayStatus(true)
    }

    const pause = () => {
        audioRef.current?.pause()
        setPlayStatus(false)

    }

    const playWithId = async (id: number) => {
        await setTrack(songsData[id]);
        await audioRef.current?.play();
        setPlayStatus(true);
    }

    const previous = async () => {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1]);
            await audioRef.current?.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if(track.id < songsData.length-1){
            await setTrack(songsData[track.id + 1]);
            await audioRef.current?.play();
            setPlayStatus(true);
        }
    }

    const seekSong = (e:any) => {
        if (audioRef.current && audioRef.current.duration) {
            if (seekBg.current?.offsetWidth) {
                audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
            }
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = () => {
                    //@ts-ignore
                    seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                    setTime({
                        currentTime:{
                            second:Math.floor(audioRef.current?.currentTime ? audioRef.current.currentTime % 60 : 0),
                            minute:Math.floor(audioRef.current?.currentTime ? audioRef.current.currentTime / 60 : 0),
                        },
                        totalTime:{
                            second:Math.floor(audioRef.current?.currentTime ? audioRef.current.duration % 60 : 0),
                            minute:Math.floor(audioRef.current?.currentTime ? audioRef.current.duration / 60 : 0),
                        }
                    })
                }
            }
        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        previous, next, 
        seekSong
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;