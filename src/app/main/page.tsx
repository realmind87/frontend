"use client"

import { useEffect } from "react";
import Aside from "../_components/common/Aside";
import Header from "../_components/common/Header";
import Search from "../_components/form/Search";
import {useApp} from "@/app/hooks/useApp"
import {Session} from "@auth/core/types";
import Posts from "../_components/form/Posts";

type UserProps = {
  session: Session | null
}

export default function Main ({ session } : UserProps){

  const app = useApp()

  useEffect(() => {
    app.setSession?.(session)
  }, [session])
  
  return (
    <div id="wrap">
      <Header />
      <main className="container">
        <section className="content">
          <div className="post__wrap">
            <div className="post__header">
              <h2 className="tit">최근 게시글</h2>
              <Search />
            </div>
            <Posts />
          </div>
        </section>
        <Aside />
      </main>
    </div>
  )   
}