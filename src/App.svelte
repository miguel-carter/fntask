<script>
import { authState } from './stores/auth.js';
import { viewState } from './stores/view.js'
import Navigation from "./components/Navigation.svelte";
import EntryPortal from './components/EntryPortal.svelte';
import Profile from "./views/Profile.svelte";
import Project from './views/Project.svelte';
import Board from "./views/Board.svelte";
import Setting from "./views/Setting.svelte";

let auth;
let views;

authState.subscribe((a) => auth = a);
viewState.subscribe((v) => views = v);

</script>

<main class="wrapper">
  {#if auth}
    <div class="side">
      <Navigation views={views} update={viewState.update}/>
    </div>
    <div class="view">
      {#each views as {active, name}}
        {#if active}
          <Profile type="profile" name={name} active={active}/>
          <Project type="projects" name={name} active={active}/>
          <Board type="board" name={name} active={active}/>
          <Setting type="settings" name={name} active={active}/>
        {/if}
      {/each}
    </div> 
  {:else}
  <div class="view center">
    <EntryPortal/>
  </div>
  {/if}
     
</main>

<style>
  .wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: var(--bg);
  }

  .side {
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--subdue);
  }

  .view {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .center {
    justify-content: center;
    align-items: center;
  }

</style>
