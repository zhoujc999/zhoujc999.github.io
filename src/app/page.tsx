import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-8 py-24">
      <div>
        <h1 className="py-2 text-xl">Hi, I'm</h1>
        <h1 className="py-2 text-3xl font-medium">Yihan Shi</h1>
        <p className="py-2">
          I'm a software engineer by day, photographer by night. Prior to
          joining Mastercard, I graduated from Duke with a B.Sc in Statistics. I
          also minored in computer science and neuroscience. My other hobbies
          include playing the piano, cooking, and reading. Please feel free to contact me for any questions or
          comments!
        </p>
      </div>
    </main>
  );
}
