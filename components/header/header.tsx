'use client'

interface Iheader { }

export default function Header({ }: Iheader) {
    return <div className="sticky top-3 border px-3 w-fit min-w-40 mx-auto my-2 py-1 rounded-xl flex justify-center items-center bg-black/55 backdrop-blur-lg">header</div>
}
