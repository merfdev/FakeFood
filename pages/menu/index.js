import MenuPage from "@/components/templates/MenuPage";
import React from "react";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10, //second
  };
}
