<script>
    export let active;
    export let name;
    export let type;
    import List from "../components/commons/List.svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import TaskCard from "../components/TaskCard.svelte";
    import ProjectActionBar from "../components/ProjectActionBar.svelte";

</script>

{#if active && name == type}
<div class="wrapper">
    <div class="top">
        <List>
            {#each [] as item}
            <ProjectCard></ProjectCard>
            {/each}
        </List>
        <List>
            {#each [] as item}
            <TaskCard></TaskCard>>
            {/each}
        </List>    
    </div>
    <div class="middle">
        <ProjectActionBar/>
    </div>
    <div class="bottom">
        <!-- graph here -->
    </div>
</div>
{/if}

<style>
    .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }



    .top, .bottom {
        flex: 1;
        display: flex;
        flex-direction: row;
        max-height: 50%;
    }

   

</style>