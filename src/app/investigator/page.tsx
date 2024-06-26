import React from "react";
import "./investigator.scss";
import Link from "next/link";
import { FcStart } from "react-icons/fc";
import { BsStar, BsStarFill } from "react-icons/bs";

type Props = {};
export default function Investigator({}: Props) {
  return (
    <main id="page_investigator">
      <article className="section-title-card">
        <div className="title">
          <h2>ACTIVE MANAGER</h2> <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vene
        </p>
      </article>
      <div className="investigator-list">
        <div className="investigator-card">
          <div className="logo-part">
            <div className="badge">
              <img src="/graphics/badge.png" alt="" className="badge-img" />
              <img src="/decors/small_rune.png" alt="" className="rune" />
            </div>
          </div>
          <div className="detail">
            <h2>MARISSA</h2>
            <hr />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              delectus recusandae repellat quos sint quam dolorem eveniet
              inventore maxime at optio suscipit voluptatibus odio und.
            </p>
            <div className="action">
              <Link href="/profile/marissa" className="btn btn-view">
                View
              </Link>
            </div>
          </div>
        </div>
        <div className="investigator-card disabled"></div>
        <div className="investigator-card disabled"></div>
      </div>
    </main>
  );
}
