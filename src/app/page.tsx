import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-wrap justify-between px-8 py-24 lg:flex-row">
      <div className="basis-1/2 px-4">
        <h1 className="py-2 text-xl">Hi, I'm</h1>
        <h1 className="py-2 text-3xl font-medium">Yihan Shi</h1>
        <p className="py-2">
          Based in Washington DC, I'm a software engineer by day, photographer
          by night. Prior to joining Mastercard, I graduated from Duke with a
          B.Sc in Statistics and minors in computer science and neuroscience. My
          other hobbies include playing the piano, cooking, and reading. Please
          feel free to contact me for any questions or comments!
        </p>
      </div>
      <div className="basis-1/2 px-4">
        <p>blabla</p>
      </div>
    </main>
  );
}
