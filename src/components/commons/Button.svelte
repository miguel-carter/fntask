<script>
    export let text
</script>

<div class="button">
    {text}
</div>

<style>
    .button {
        color: var(--color-subdue);
        padding: 5px 5px;
        text-align: center;
        border: 1px solid var(--color-subdue);
        background-color: transparent;
        font-size: 12px;
        width: 100%;
    }
    .button:hover {
        color: white
    }
</style>