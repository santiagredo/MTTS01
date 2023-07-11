
const HeaderLogo = new URL ("../assets/Header Logo.PNG", import.meta.url).href


export function Header () {


    return (
        <header className="w-full flex justify-center bg-black text-white">
            <img src={HeaderLogo} />
        </header>
    );
}