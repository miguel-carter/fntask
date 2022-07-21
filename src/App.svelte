<script>
import { writable } from 'svelte/store';
import Navigation from "./components/Navigation.svelte";
import Profile from "./views/Profile.svelte";
import Project from './views/Project.svelte';
import Board from "./views/Board.svelte";
import Setting from "./views/Setting.svelte"

let views;

const viewState = writable([
  {name: 'profile', icon: 'fa-user', active: true},
  {name: 'projects', icon: 'fa-diagram-project', active: false},
  {name: 'board', icon: 'fa-rectangle-list', active: false},
  {name: 'settings', icon: 'fa-gear', active: false},
]);

viewState.subscribe((v) => views = v)

</script>

<main class="wrapper">
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

</style>
