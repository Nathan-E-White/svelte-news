<script lang="ts">
    export let word;
</script>

<svelte:options accessors={true} tag="word"/>
<svelte:element this={tag} on:click={handler}>Foo</svelte:element>

<span class:word>
    {#if $$props.hash}
        <slot name="hash"></slot>
    {/if}
    <span>
        {#each letters as char}
            <slot name="char" {char}></slot>
        {/each}
    </span>
</span>
