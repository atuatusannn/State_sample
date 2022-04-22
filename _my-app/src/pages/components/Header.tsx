import Link from "next/link";
import { FC } from "react";

export const Header:FC = () => {
    return (
      <header>
        <nav>
          <h1>
            <a href="">React 状態管理</a>
          </h1>
          <Link href="/">
            <a href="">Todo一覧</a>
          </Link>
          <Link href="/add">
            <a href="">Todo追加</a>
          </Link>
        </nav>

        <h2>Todo:2件</h2>
      </header>
    );
}
