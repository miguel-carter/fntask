<div class="wrapper">
    <slot name="action"><!-- optional fallback --></slot>
   
    <slot><!-- optional fallback --></slot>
</div>
    

<style>
    .wrapper {
        flex: 1;
        display: flex;
        overflow-y: scroll;
        flex-direction: column;
        background-color: var(--subdue);
        margin: var(--md-padding);
    }
    .wrapper {
        scrollbar-width: auto;
        scrollbar-color: #454545 #ffffff;
    }

    .wrapper::-webkit-scrollbar {
        width: 10px;
    }

    .wrapper::-webkit-scrollbar-track {
        background:rgba(128, 128, 128, 0.465);
    }

    .wrapper::-webkit-scrollbar-thumb {
        background-color: var(--bg-subdue);
        border-radius: 10px;
        border: 1px solid var(--bg);
    }
</style>