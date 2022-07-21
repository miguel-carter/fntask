<script>
    export let active;
    export let name;
    export let type;

</script>

{#if active && name == type}
<div>settings</div>
{/if}