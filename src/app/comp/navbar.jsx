import Link from "next/link";
export default function Navbar(){
    return (
            
            <div>
                
                
                <Link href="/">home page </Link>
                <Link href="about"> Aboutpage</Link>
                <Link href="about/aboutus">AboutUs </Link>
                <Link href="about/aboutsome">About someoneelse</Link>
                 <Link href="listofpost"> listpost </Link>
                 <Link href="newpa">  newpage </Link>
                 <Link href="slidertry">   slider </Link>
            </div>
           
        
    );
}
//use rfc for boiler plate