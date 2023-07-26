import {useRouteError} from "react-router-dom"

const Error=()=>{
    const err=useRouteError();
    console.log(err  );
       
    return(
        <div className="flex p-28 ">
        <div> <img className="h-40 pr-8" src="https://img.icons8.com/pastel-glyph/1x/error-globe.png"/></div>
        <div className=" text-6xl font-bold">
            <h1 className="text-blue-500">Oops !!</h1>
            <h2 className="text-green-600">Something went Wrong</h2>
            <h2 className="text-red-900">{err.status + " : "+  err.statusText}</h2>
        </div>

        </div>
    )
}

export default Error;