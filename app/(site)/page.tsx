// import Image from 'next/image'`

import MainSection from "./components/Main/MainSection/MainSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden font-pop bg-body tracking-[.10em] bg-[url('/background.webp')]">
      <section className="relative z-20 flex items-center justify-center min-h-screen pt-28 pb-14 font-pop">
          <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 relative w-full ">
            <MainSection />
          </div>
        </section>
    </main>
  )
}
