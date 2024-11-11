

import Link from "next/link";
import Image from "next/image"
import digi from "./images/digi.png"

export default function Home() {
  return(

<div className="flex items-center justify-center p-6">
    {/* Left Side: Image */}
    <div className="flex-shrink-0 w-1/2">
    <Image src={digi} alt="logo" width={"700"} height={"300"}/>
    </div>

    {/* Right Side: Introduction Text */}
    <div className="w-1/2 p-2">
        <h2 className=" font-semibold mb-3 text-gray-600 text-3xl">Welcome to Our Website!</h2>
        <p className="text-gray-700">
            This is an introduction to our website. Here, you can find various services we offer, information about our company, and much more. 
            We are dedicated to providing quality service and ensuring customer satisfaction.
        </p>
        <p className="mt-4 text-sky-950">
            Feel free to explore our website and contact us if you have any questions!
        </p>
        <br />
        <Link href="contact"><button className="border-2 rounded font-semibold text-sky-900 p-2">Contact</button></Link>
    </div>
</div>

  );
} 



//     <div>
      
//       <h1 className="text-5xl bg-red-800 text-zinc-100 border-b-8

// border-y-amber-900 border-t-8 text-A1Color ml-8" >Home</h1><br />
// <h1 className="text-2xl font-serif font-semibold underline text-justify flex justify-center">AI Agents:</h1><br />
// <p className="font-serif text-justify p-2">
//   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat a excepturi repellendus doloribus quia dicta eum provident beatae sint cupiditate velit temporibus voluptatibus, odit voluptas molestiae quidem fugit voluptate ullam. Sint quis autem cumque ut aut, eum nesciunt quisquam esse quidem ad laboriosam quia deleniti excepturi rem libero dicta sequi!
// </p>
//    </div>