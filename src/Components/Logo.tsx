
const MainLogo = new URL ("../assets/Log.png", import.meta.url).href

export function Logo () {

    return (
        <figure className="flex justify-center items-center mx-auto bg-black w-80">
            <img src={MainLogo} className="W-full h-full"/>
        </figure>
    );
}

