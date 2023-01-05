import { useState } from "react";

import "./App.css";

// Initializing the Supabase Client
import { createClient } from "@supabase/supabase-js";

// Event Listners
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export default function App() {
  const supaClient = createClient(supabaseUrl, supabaseKey);

  const signIn = async () => {
    await supaClient.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="app">
      {/* <button onClick={() => console.log("hello")}>sign in</button> */}
      <h1 className="lead inter8x gradient-text">Supabase App</h1>

      <main className="container-md">
        <div className="auth-section">
          <section id="whenSignedOut">
            <button onClick={signIn} className="btn btn-primary">
              Sign-in with google
            </button>
          </section>

          <section id="whenSignedIn">
            {/* <!-- for showning user info --> */}
            <div id="userDetails"></div>
            <button id="signOutButton" className="btn btn-primary">
              Sign out
            </button>
          </section>
        </div>

        <div id="myThings" hidden={true}>
          <h2>My Things</h2>
          <div id="myThingsList"></div>
          <button id="addThing" className="btn btn-success">
            Add Thing
          </button>
        </div>

        <div id="allThings">
          <h2>All Things</h2>
          <div id="allThingsList"></div>
        </div>
      </main>
    </div>
  );
}
