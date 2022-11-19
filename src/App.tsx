import {} from "./store";
import { JSX } from "solid-js/jsx-runtime";
import "./App.scss";
import { createClient } from "@supabase/supabase-js";
import { createResource, createSignal, onMount } from "solid-js";

const supabase = createClient(
  "https://fmlovqieocwjaghmavax.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbG92cWllb2N3amFnaG1hdmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1MTE3NzYsImV4cCI6MTk4MzA4Nzc3Nn0.gdJ0CmtGcauVXXD1TY5GtHPePPoC2IEP2_vYQLjYnIg"
);

const App = () => {
  const content = [1, 2, 3, 4, 5, 5, 3, 2, 1, 3];
  const [data] = createResource( 1, async ()=>
    await (await fetch("https://tidus-icon-api.herokuapp.com/api/utils/xsushiapr")).json()
  );


  return <div><pre>{JSON.stringify(data())}</pre></div>;
};

const style: JSX.CSSProperties = {
  // 👈 style object
  background: "blue",
};

const styles: StyleObj = {
  // 👈 object with styles
  button: {
    background: "rgb(12, 180, 129)",
  },
  headline: {
    color: "rgb(12, 180, 129)",
  },
};

interface StyleObj {
  // 👈 interface for above object
  [Key: string]: JSX.CSSProperties;
}

export default App;
