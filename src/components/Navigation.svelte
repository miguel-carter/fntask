<script>
export let views;
export let update;

function clickHandler(index) {
    update((s) => {
        for (const key in s) s[key].active = false;    
        s[index].active = true;
        return s
    })
}

</script>


<div class="wrapper">
    {#each views as view, i}
    <div on:click="{clickHandler.bind(this, i)}" class="{`item ${view.active ? 'active' : null}`}">
        <i class="{`fa-solid ${view.icon}`}" style="width: 20%"></i>
        <div>
           <p>{view.name}</p> 
        </div>
    </div>
    {/each}
</div>

<style>
    .wrapper {
        flex: 1;
        padding: var(--md-padding);
        min-width: 150px;
    }

    .item {
        color: var(--color-subdue);
        padding: var(--md-padding);
        border-radius: var(--sm-padding);
        text-transform: capitalize;
        display: flex;
        flex-direction: row;
        align-items: center;
    }


    .active {
        color: var(--color);
    }

    .item:hover {
        color: var(--color);
        opacity: 0.9;
        background-color: var(--bg-subdue);
        transition: 0.2s;
    }
</style>