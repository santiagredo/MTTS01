const MainLogo = new URL ("../assets/softwareDevelopersIcon.jpg", import.meta.url).href

export function Logo () {
    return (
        <figure className="mx-auto w-full max-w-xs flex justify-center items-center bg-black">
            <img src={MainLogo} className="w-full h-auto"/>
        </figure>
    );
}

