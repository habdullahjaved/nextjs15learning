import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-8 text-center text-[#635bff]">
        Dynamic CRUD Form Demo
      </h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div>
        <Link href={"/crud"}>Go to Crud</Link>
      </div>
    </main>
  );
}
