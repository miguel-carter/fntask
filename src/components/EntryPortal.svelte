<script>
    import {authState} from "../stores/auth.js";
    import Card from "./commons/Card.svelte";
    import Button from "./commons/Button.svelte";
</script>

<div class="wrapper">
        <Card>
            <p>username</p>
            <input type="text">
            <p>password</p>
            <input type="text">
            <div class="controls">
                <Button text="New"/>
                <Button text="Login"/>
            </div> 
        </Card>
        <Card>
            <p>username</p>
            <input type="text">
            <p>password</p>
            <input type="text">
        </Card>
       
    
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        background-color: var(--bg-subdue);
    }

    .controls {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 10px;
        justify-content: space-around;
    }


</style>