import Image from "next/image"
import RocPic from "@/images/roc.png"

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center p-2">This page does not exist</h1>
      <Image
        src={RocPic}
        alt="Picture of Roc <3"
        className="w-[80vw] sm:w-[70vw] lg:w-[40vw]"
        priority
      />
    </div>
  )
}
