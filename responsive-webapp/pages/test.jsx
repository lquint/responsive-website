import Navbar from "../components/navbar";


export default function Test() {
    return (
        <>
        <Navbar/>
        <nav className=" md:bg-blue-500 sm:bg-green-500 lg:bg-purple-600">
            <ul className="flex gap-12">
                <li>
                    Home
                </li>
                <li>
                    Shop
                </li>
                <li>
                    About
                </li>
            </ul>
        
        </nav>
        
        </>
        )
}