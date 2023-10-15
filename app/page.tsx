"use client";
import Counter from "./components/Counter";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Counter />
      </div>
    </div>
  );
}
