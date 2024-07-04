import { useState } from "react";
import axios from "axios"
import Star from "./Star"

const Body = () => {

    const [ name , setName ] = useState("")
    const [ movieprint, setPrint] = useState("")
    const [ rating , setRating] = useState("")
    const [ genre , setGenre] = useState("")
    const [ date , setDate] = useState("")
    const [ place, setPlace] = useState("")
    const [ info, setInfo] = useState("")
    const [ time, setTime] = useState("")
    const [ actor, setActor] = useState("")
    const [ direc , setDirec] = useState("")
    const [ writer , setWriter] = useState("")
    const [ bg , setBg] = useState("")
    
    const url = `http://www.omdbapi.com/?apikey=3b93ebc3&t=${name}`

    const search = async () => {
        
        const response = await axios.get(url);
        setPrint(response.data.Title)
        setRating(response.data.imdbRating)
        setGenre(response.data.Genre)
        setPlace(response.data.Country)
        setDate(response.data.Released)
        setInfo(response.data.Plot)
        setTime(response.data.Runtime)
        setActor(response.data.Actors)
        setDirec(response.data.Director)
        setWriter(response.data.Writer)
        setBg(response.data.Poster)
    };
    return(
        <div>
            <div className=" bg-red-700 h-[80px] p-1 pt-4 flex justify-between sm:pr-8 w-full sm:pt-6 sm:pl-6 sm:h-[100px] ">
                <h1 className=" text-[23px] sm:text-[35px] font-medium sm:font-bold text-white ">InstaMovieSearch</h1>
                <div className=" flex">
                    <textarea className=" bg-slate-200 mt-2 h-[30px] w-[170px] text-[13px] sm:h-[35px] p-1 rounded-sm sm:w-[300px] sm:text-[18px] " value={name} onChange={(e) => setName(e.target.value)} placeholder=" Search here"></textarea>
                    <button className=" sm:h-[35px] h-[30px] w-[70px] sm:w-[100px] border mt-2 font-bold pb-2 rounded-xl ml-2 sm:ml-5 text-[17px] sm:text-[23px] border-black text-white bg-zinc-800" onClick={search}>Search </button>
                </div>
            </div>
            <br></br>
            
            <div className=" flex space-x-[-170px] sm:space-x-[200px]">
                <div>
                <div className=" h-[500px] sm:h-[600px] w-full ">
                    <div className=" h-[160px] w-[310px] text-[45px] sm:h-[240px] ml-[20px] sm:w-[650px] text-white font-serif sm:text-[70px] font-bold sm:ml-[140px]">{movieprint}</div>
                    <div className=" space-x-2 sm:space-x-4 flex sm:h-[40px] h-[30px] pr-[5px] pl-[5px] w-[310px] ml-[16px] sm:pr-[10px] sm:pl-[10px] sm:w-[600px] sm:ml-[120px]">
                        <div className=" flex bg-slate-300 border pl-1 border-black rounded-2xl sm:h-[40px] h-[30px] w-[90px] sm:w-[120px] ">
                            <Star/>
                            <h1 className=" sm:text-[23px] text-[17px] font-bold ">{rating}/10</h1></div>
                            
                            <div className=" sm:text-[23px] text-[17px] font-bold bg-slate-300 border pl-2 border-black rounded-2xl sm:h-[40px] h-[30px] sm:w-[160px] w-[120px] ">{date}</div>
                            <div className=" sm:text-[23px] overflow-visible text-[17px] font-bold bg-slate-300 text-center truncate border pl-1 sm:pl-2 border-black rounded-2xl h-[30px] sm:h-[40px] w-[54px] sm:w-[100px]  ">{place}</div>

                        </div>
                        <br></br>
                        <div className=" sm:text-[18px] text-[15px] text-white font-medium sm:h-[70px] h-[160px] sm:ml-[130px] ml-[16px] w-[310px] sm:w-[590px]">{info} </div>
                        <br></br>
                        <br></br>
                        <div className=" sm:h-[300px] w-[500px] h-[220px] ml-[16px] sm:ml-[140px] sm:w-[500px]">
                            <ul className=" list-disc text-white text-[18px] sm:text-[20px] font-medium ">
                                <li>Time : {time}</li>
                                <li>Genre : {genre}</li>
                                <li>Actors : {actor} </li>
                                <li>Director : {direc}</li>
                                <li>Writer : {writer}</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className=" h-[370px] w-[260px] sm:pt-40 bg-slate-400 bg-no-repeat bg-cover sm:h-[580px] sm:w-[450px]" style={{backgroundImage: `url(${bg})`}}>
                    </div>
                </div>
        </div>
        )
}
export default Body;