<script>
    export let active;
    export let name;
    export let type;
    import Card from "../components/commons/Card.svelte";

</script>

{#if active && name == type}
<div class="wrapper">
    <div class="top">
        <div class="left">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div class="right">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    <div class="bottom">
        test
    </div>
</div>
{/if}

<style>
    .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: var(--md-padding);
    }

    .top, .bottom {
        flex: 1;
        display: flex;
        flex-direction: row;
        max-height: 50%;
    }

    .top > * {
        flex: 1;
        margin: var(--sm-padding);
        overflow-y: scroll;
    }

    .top > .right {
        flex: 2
    }

</style>