import type { NextPage } from "next";
import { ComponentProps } from "react";
import { Header } from "./components/Header";

const Add: NextPage = () => {
  const handleSubmit:ComponentProps<"form">["onSubmit"]=(event)=>{
      event.preventDefault();
      const text= event.currentTarget.text.value;
      console.log(text);
      event.currentTarget.reset();
      
  }

  return (
    <div>
      <Header />
      <h2>Todo追加</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" required name="text"/>
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
